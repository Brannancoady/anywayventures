---
title: "Technology due diligence checklist for private equity deals"
standfirst: "Every tech DD checklist covers the same ground. The useful ones say which answers should change the price, the structure or the first 100 days."
description: "A technology due diligence checklist for UK private equity: eight areas, the evidence to request, and the red flags that should move price or structure."
kicker: "DILIGENCE"
published: 2026-09-25
updated: 2026-09-25
read: "10 MIN"
readLong: "Ten minutes"
audience: "Deal teams, operating partners, CFOs"
service: "AI due diligence"
serviceHref: "/ai-due-diligence"
pull: "Technical debt should be costed, not described."
order: 2
tags: ["technology due diligence checklist", "tech due diligence private equity", "IT due diligence checklist", "software due diligence", "technical due diligence questions"]
related: ["ai-due-diligence-private-equity", "ai-washing-due-diligence"]
faq:
  - q: "What should a technology due diligence checklist include?"
    a: "A useful checklist covers architecture and scalability, code quality and engineering practice, team and key-person risk, security and data protection, third-party dependencies and IP, product and roadmap realism, cost to run and technical debt, and AI exposure. For each area it should name the evidence to request and the specific answers that would change the price, the deal structure or the 100-day plan."
  - q: "How long does tech due diligence take on a private equity deal?"
    a: "For a lower mid-market deal, one to three weeks is typical. A founder-led software business with a small engineering team can be covered properly in one to two weeks. Larger platforms with several products, acquired codebases or regulated data need longer. The priority is surfacing anything that could move price in the first week, while there is still time to negotiate."
  - q: "What is the difference between IT due diligence and technical due diligence?"
    a: "IT due diligence usually looks at the internal systems a business runs on: infrastructure, licences, support contracts and security. Technical due diligence looks at the product the business sells: its code, architecture, engineering team and roadmap. For a software company you need both, with most of the weight on the product. For a services business, internal systems and data usually matter more."
  - q: "Should a seller commission vendor tech due diligence before a sale?"
    a: "Usually, yes. A pre-sale technology review run a few months before a process gives the seller time to fix cheap problems such as missing IP assignments, open penetration test findings or admin access held by one person. Left alone, a buyer will find the same issues and price them using their own estimate, which is rarely generous."
---
A technology due diligence checklist is only useful if it tells you which answers should change the price. Most of the lists circulating in data rooms are inventories. They ask about hosting, frameworks, headcount and policies, and they come back as a red, amber and green grid that nobody on the investment committee knows what to do with.

My test for every question below is blunt. If the answer comes back bad, does it move the price, the structure (escrow, indemnity, earn-out, retention) or the 100-day plan? If it doesn't, cut it and spend the time somewhere that matters.

That filter matters more this year than it did two years ago. Early 2026 saw a sharp sell-off in listed software stocks on the fear that AI agents undercut seat-based SaaS pricing, and [J.P. Morgan Asset Management](https://am.jpmorgan.com/us/en/asset-management/institutional/insights/market-insights/market-updates/on-the-minds-of-investors/what-does-the-software-sell-off-mean-for-private-markets/) pointed out the knock-on for private equity and private credit, where software is one of the largest sector exposures. Tech diligence used to be a hygiene check. For a lot of targets it's now part of the valuation argument.

## What separates a checklist from a judgement

I have been on both ends of this. I ran Netsells, a York product consultancy, as CEO for around a decade, and I was Chief Product Officer at YourParkingSpace. I've answered the diligence questionnaire late at night as well as written it. The pattern is consistent. Targets are good at producing documents. They are much worse at producing evidence.

A policy says what should happen. A deployment log or a cloud bill shows what did. The list below asks for the second kind. Where only the first kind exists, that is itself a finding.

## Architecture, engineering and the people who hold it together

### 1. Architecture and scalability

Ask for a current architecture diagram drawn by the team (not the one from the investor deck), the hosting set-up and cloud accounts, and the last 12 months of availability and incident data. Then ask the lead engineer what breaks first if volume doubles. The answer to that question tells you more than the diagram.

Good looks like a team that can name its bottleneck without a pause, has a rough plan for it, and has headroom that matches the growth in the investment case.

The red flag is a business plan that assumes three times the volume on a platform that already struggles at peak, or a single-tenant set-up where each new customer means a new deployment. That's a capex line the model doesn't have yet.

### 2. Code quality and engineering practice

Ask for read access to the repository, deployment frequency over the last six months, lead time from commit to production, the change failure rate, and how testing works in practice.

Treat test coverage as a signal, not a score. High coverage of trivial code tells you less than modest coverage concentrated on billing and permissions. What matters is whether the team deploys often and without drama. A team that ships monthly, by hand, on a Friday night, will slow every value-creation initiative you plan.

The red flag is manual releases owned by one person, no staging environment, and a long list of "we don't touch that bit". Price the slowdown into the plan, not only the risk register.

### 3. Team and key-person risk

Ask for the org chart with tenure, the contractor and agency list with spend, attrition over two years, and who holds admin rights to production, the domain, the cloud account and the app store listings. Then check commit history against it.

Good looks like knowledge spread across at least two people for every critical system, documentation that someone other than the author has actually used, and a technical lead who's staying.

The red flag is one engineer (often a founder or a long-serving contractor) behind most of the commits to the core product, with no retention arrangement. That belongs in structure: a retention package, a handover period written into the SPA, or a slice of the earn-out tied to documented knowledge transfer.

## Security, licences and who actually owns the code

### 4. Security and data protection

Ask for the last two penetration test reports with evidence of remediation, the incident and breach log (including anything reported to the ICO), the record of processing activities under UK GDPR, data processing agreements with key suppliers, and any SOC 2 or ISO 27001 reports.

Treat SOC 2 and ISO 27001 as signals of discipline rather than proof of security. A certificate tells you a process existed during the audit window. The pen test findings, and what happened to them, tell you what the team does when nobody is checking. Good looks like findings closed on a documented timeline, multi-factor authentication everywhere, and a named person who owns data protection and can explain where personal data lives.

The red flag is an unreported incident, personal data sitting in places the privacy notice doesn't mention, or critical pen test findings from last year still open. The first needs a specific indemnity. The others need a cost in the 100-day plan.

### 5. Third-party dependencies, licences and IP

Ask for a software bill of materials or a dependency scan, the list of paid third-party services the product relies on with their contract terms, and the IP assignment clauses for every employee and contractor who has written code. Include the agency that built version one.

Good looks like permissive open source licences in the shipped product, copyleft components (GPL, AGPL) either absent or properly isolated, signed assignments that cover everyone, and no single supplier whose price rise or shutdown would stop the business trading.

The red flag is AGPL code inside a hosted product, an early contractor with no assignment, or a core feature built on an API with a 30-day termination clause. Missing assignments should be a condition of completion, not something chased afterwards.

## Product, running costs and the AI story

### 6. Product and roadmap realism

Ask for product usage data at feature level, cohort retention (logo and revenue), the last 12 months of roadmap commitments set against what shipped, and the backlog. Headline ARR and active user numbers are where the story lives. Cohorts are where the truth lives.

Good looks like retention that holds up cohort by cohort, a small set of features doing most of the work, and a roadmap where most of last year's commitments arrived roughly on time.

The red flag is a revenue plan that depends on features that don't exist yet, built by a team that delivered a third of last year's roadmap. Discount any new-product revenue by that record.

### 7. Cost to run and technical debt, in pounds

Ask for 12 months of cloud bills, all software subscriptions, engineering time split between new features and maintenance, and the team's own list of what they'd fix first.

Technical debt should be costed, not described. Take an illustrative case: a platform on an unsupported framework version that the team estimate needs four engineers for nine months to upgrade. At a loaded cost of £85k per engineer a year, that's 4 × £85k × 0.75 = £255k. Plus nine months in which those four build nothing a customer pays for. If the equity story includes a new product line in year one, that's a real delay with a real cost, and it belongs in the price or in the debt-like items as known capex.

Good looks like cloud cost growing slower than revenue and maintenance taking well under half of engineering time. The red flag is hosting cost rising faster than revenue with nobody able to explain why, or a debt list the team is reluctant to write down.

### 8. AI exposure and AI claims

This area now has two halves. The first is exposure. If the business sells seats to people whose work AI agents are starting to do, the revenue model is in question however good the code is.

The second is claims. Ask for a list of every AI feature, the model or vendor behind each one, usage numbers, cost per call, and what customers actually do with it. Then watch it run on real data. I go further into how to test this in [AI washing in due diligence](/insights/ai-washing-due-diligence).

For targets selling into or operating in the EU, check where they sit under the [EU AI Act](https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/). Prohibited practices have applied since February 2025, general-purpose AI model obligations since August 2025, and the Article 50 transparency duties since August 2026. The Digital Omnibus on AI, in force from late July 2026, pushed high-risk obligations for standalone (Annex III) systems to 2 December 2027 and for AI in regulated products (Annex I) to 2 August 2028. Deferred isn't cancelled. A target whose product would fall into a high-risk category needs a compliance cost in the plan now.

Good looks like AI features with measured usage, known unit costs, and someone who can explain what happens when the model gets it wrong. The red flag is "AI-powered" in the CIM with a single third-party API call behind it, no usage data, and margin assumptions that ignore inference cost.

## The tech due diligence checklist on one page

| Area | Evidence to request | Red flag that moves price or structure |
|---|---|---|
| Architecture and scalability | Current diagram, hosting set-up, 12 months of incidents | Plan assumes volume the platform can't carry |
| Code quality and engineering practice | Repository access, deployment frequency, change failure rate | Manual releases owned by one person |
| Team and key-person risk | Org chart with tenure, contractor list, commit history, admin access | Core product depends on one unretained engineer |
| Security and data protection | Pen tests and remediation, incident log, UK GDPR records, SOC 2 or ISO 27001 | Unreported incident or open critical findings |
| Dependencies, licences and IP | Dependency scan, supplier contracts, IP assignments | AGPL in a hosted product, missing contractor assignment |
| Product and roadmap | Feature usage, cohort retention, roadmap against delivery | Revenue plan depends on unbuilt features |
| Cost to run and technical debt | 12 months of cloud bills, maintenance split, debt list | Hosting cost outgrowing revenue, uncosted re-platform |
| AI exposure and claims | AI feature list, vendors, usage, unit cost, EU AI Act position | AI claims with no usage data or inference cost in margins |

## Scoping technology due diligence to the size of the deal

A £15m EV deal does not need a Big Four technology due diligence. It needs someone experienced who reads the code, talks to the engineers and tells the deal team, in plain language, which three things matter for the price.

The work should scale with the question, not the fee budget. Picture three deals. At £15m EV, a founder-led software business with eight engineers, one to two weeks of focused work covers all eight areas, with the weight on key-person risk and IP, because those are what usually go wrong at that size. At £60m, a platform serving several hundred customers, you add a proper security review and a scalability test against the business plan. Above that, with acquired codebases and regulated data, a larger team earns its cost.

The mistake runs both ways, with one cause: scope set by habit. A 120-page report on a £15m deal buries the two findings that matter. A two-day desk review on a carve-out with a shared codebase misses the thing that will cost you a year.

For tech-enabled services businesses, as opposed to software companies, shift the weight. Systems, data quality and automation potential matter more than the code, which is where [AI due diligence for private equity](/insights/ai-due-diligence-private-equity) picks up.

## Running it inside exclusivity

Exclusivity periods are short, and tech DD tends to start late because it gets scoped after financial and legal. That's backwards. The findings most likely to change price (a missing IP assignment, a key engineer with no retention, a re-platform nobody has costed) take the longest to fix and to negotiate, so they need to surface in the first week.

A sequence that works:

1. Send the evidence request on day one, prioritised, with anything that could move price at the top.
2. Hold engineering interviews in week one, before the documents are all in. People tell you what the documents won't.
3. Give the deal team a short red flag note by the end of week one, in plain language, with a rough cost against each item.
4. Deliver the final report with every finding mapped to price, SPA protection or the 100-day plan, so the lawyers and the model can use it directly.

"Moderate concern about code maintainability" isn't a finding a deal team can act on. "£255k and nine months of upgrade work before the new product line can start" is.

Sellers should consider doing this first. A vendor-side tech DD, run a few months before a process, gives the owner time to fix the cheap things (missing assignments, stale pen test findings, one person holding every admin password) before a buyer finds them and prices them at their own estimate. Buyers' estimates are rarely generous.

The checklist is the easy part. The value is in knowing which two answers out of fifty should change the number, and saying so while there's still time to act. If you have a deal heading into exclusivity, our [AI due diligence](/ai-due-diligence) work covers technology, product and AI together, with a fixed quote in 48 hours.
