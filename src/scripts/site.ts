// Site-wide behaviour: nav menus/drawer, cookie consent + analytics, event tracking, enquiry forms.
declare global {
  interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void; _linkedin_partner_id?: string; lintrk?: unknown }
}

/* ---------------- Analytics (only after consent) ---------------- */
const CONSENT_KEY = 'av-consent';
const readConsent = () => { try { return localStorage.getItem(CONSENT_KEY); } catch { return null; } };
const writeConsent = (v: string) => { try { localStorage.setItem(CONSENT_KEY, v); } catch { /* private mode */ } };

export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', name, { page: location.pathname, ...params });
}

function loadGa4(id: string) {
  if (!id || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id);
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(s);
}

function loadLinkedIn(id: string) {
  if (!id || window._linkedin_partner_id) return;
  window._linkedin_partner_id = id;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
  document.head.appendChild(s);
}

const banner = document.getElementById('consent');
if (banner) {
  document.documentElement.classList.add('has-consent');
  const apply = (v: string | null) => {
    if (v === 'granted') { loadGa4(banner.dataset.ga4 || ''); loadLinkedIn(banner.dataset.linkedin || ''); }
  };
  const choice = readConsent();
  if (!choice) banner.hidden = false;
  apply(choice);
  banner.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('[data-consent]');
    if (!b) return;
    const v = b.dataset.consent!;
    writeConsent(v);
    banner.hidden = true;
    if (v === 'granted') apply(v);
    else if (window.gtag) location.reload(); // withdraw: reload without trackers
  });
  document.querySelectorAll('[data-consent-open]').forEach((el) => el.addEventListener('click', () => { banner.hidden = false; }));
}

/* ---------------- Click events ---------------- */
function locationOf(el: Element): string {
  const loc = el.closest<HTMLElement>('[data-loc]')?.dataset.loc || 'section';
  if (loc === 'section') {
    const main = document.getElementById('main');
    const first = main?.firstElementChild?.firstElementChild ?? main?.firstElementChild;
    if (first && first.contains(el)) return 'hero';
  }
  return loc;
}
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
  if (!a) return;
  const url = new URL(a.href, location.href);
  const text = (a.textContent || '').trim();
  const cal = document.body.dataset.calendar;
  if (cal && a.href.startsWith(cal)) track('calendar_click');
  if (url.pathname === '/contact' && url.origin === location.origin || /book 30 minutes|enquire/i.test(text)) track('cta_click', { location: locationOf(a) });
  if (/linkedin\.com/.test(url.hostname)) track('outbound_linkedin');
  if (/sample/i.test(text) && /plan/i.test(text)) track('sample_plan_request');
});

/* ---------------- Nav: mega menus (≥900px) and drawer (<900px) ---------------- */
const header = document.getElementById('site-header');
if (header) {
  const triggers = Array.from(header.querySelectorAll<HTMLAnchorElement>('[data-menu]'));
  const panels = Array.from(header.querySelectorAll<HTMLElement>('.megamenu'));
  const drawer = document.getElementById('drawer');
  const toggle = document.getElementById('drawer-toggle');
  const coarse = matchMedia('(hover: none)');
  let open: string | null = null;

  const setMenu = (key: string | null) => {
    if (key === open) return;
    open = key;
    panels.forEach((p) => { p.hidden = p.id !== `menu-${key}`; });
    triggers.forEach((t) => t.setAttribute('aria-expanded', String(t.dataset.menu === key)));
    if (key) track('menu_open', { menu: key });
  };
  const setDrawer = (on: boolean) => {
    if (!drawer || !toggle) return;
    drawer.hidden = !on;
    toggle.setAttribute('aria-expanded', String(on));
    toggle.textContent = on ? 'CLOSE' : 'MENU';
    if (on) track('menu_open', { menu: 'drawer' });
  };

  triggers.forEach((t) => {
    t.addEventListener('mouseenter', () => { if (!coarse.matches) setMenu(t.dataset.menu!); });
    t.addEventListener('focus', () => setMenu(t.dataset.menu!));
    // Touch screens at desktop width: first tap opens the panel, second follows the link.
    t.addEventListener('click', (e) => { if (coarse.matches && open !== t.dataset.menu) { e.preventDefault(); setMenu(t.dataset.menu!); } });
  });
  header.querySelectorAll('a:not([data-menu])').forEach((a) => a.addEventListener('mouseenter', () => { if (!a.closest('.megamenu')) setMenu(null); }));
  header.addEventListener('mouseleave', () => setMenu(null));
  toggle?.addEventListener('click', () => setDrawer(drawer?.hidden ?? false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { setMenu(null); setDrawer(false); } });
  document.addEventListener('click', (e) => { if (!header.contains(e.target as Node)) { setMenu(null); setDrawer(false); } });
  header.addEventListener('focusout', (e) => { if (!header.contains(e.relatedTarget as Node)) setMenu(null); });
  // Re-layout on fold/unfold or rotation: never keep a menu open across the 900px breakpoint.
  let wide = innerWidth >= 900;
  addEventListener('resize', () => { const w = innerWidth >= 900; if (w !== wide) { wide = w; setMenu(null); setDrawer(false); } });
}

/* ---------------- Enquiry forms (Netlify Forms) ---------------- */
document.querySelectorAll<HTMLFormElement>('form[data-enquiry]').forEach((form) => {
  const subject = form.querySelector<HTMLInputElement>('input[name="subject"]');
  const prompt = form.querySelector<HTMLElement>('[data-prompt]');
  const org = form.querySelector<HTMLInputElement>('input[name="organisation"]');
  const kind = form.dataset.enquiry!; // 'contact' | lp name
  const selected = () => form.querySelector<HTMLInputElement>('input[type="radio"]:checked')?.value || '';
  const update = () => {
    const type = selected();
    if (prompt) prompt.textContent = form.querySelector<HTMLElement>(`[data-prompt-for="${CSS.escape(type)}"]`)?.dataset.label || prompt.textContent;
    if (subject) subject.value = `${form.dataset.subjectPrefix}: ${type}${org?.value ? ' — ' + org.value : ''}`;
  };
  form.addEventListener('change', (e) => {
    const t = e.target as HTMLInputElement;
    if (t.type === 'radio') {
      track(kind === 'contact' ? 'enquiry_type_select' : 'lp_stage_select', { type: t.value });
    }
    update();
  });
  org?.addEventListener('input', update);
  update();
  // Submit in the background so a failure is shown on the page instead of landing on an error page.
  // Netlify accepts form posts to "/" (https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax).
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const status = document.createElement('p');
  status.setAttribute('role', 'alert');
  status.style.cssText = 'margin:0;font-size:14px;line-height:1.5;color:#8a3c3c';
  status.hidden = true;
  button?.after(status);
  let sending = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (sending) return;
    update();
    sending = true;
    status.hidden = true;
    const label = button?.textContent;
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      if (kind === 'contact') track('enquiry_submit', { type: selected() });
      else track('lp_form_submit', { lp: kind, stage: selected() });
      location.assign(form.getAttribute('action') || '/contact/thanks');
    } catch {
      const email = document.body.dataset.email || '';
      status.innerHTML = `Sorry, that didn't send. Please email <a href="mailto:${email}">${email}</a> instead, or try again.`;
      status.hidden = false;
      if (button) { button.disabled = false; button.textContent = label ?? 'Send'; }
      sending = false;
    }
  });
});

/* ---------------- Article read depth ---------------- */
const article = document.querySelector<HTMLElement>('[data-article]');
if (article) {
  let sent = false;
  addEventListener('scroll', () => {
    if (sent) return;
    const r = article.getBoundingClientRect();
    if ((innerHeight - r.top) / r.height >= 0.75) { sent = true; track('article_read', { slug: article.dataset.article }); }
  }, { passive: true });
}

export {};
