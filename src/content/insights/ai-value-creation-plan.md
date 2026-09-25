---
title: "How to build an AI value creation plan for a portfolio company"
standfirst: "A working method, step by step: where the hours go, what to rank first, how to size it in pounds, and how to report it so the exit story is evidenced rather than asserted."
description: "How to build an AI value creation plan for a portfolio company: baseline the hours, rank by value and readiness, size it in pounds and report it to the IC."
kicker: "OPERATING PARTNER"
published: 2026-09-25
updated: 2026-09-25
read: "10 MIN"
readLong: "Ten minutes"
audience: "Operating partners, portfolio directors, portfolio CEOs"
service: "Fractional AI operating partner"
serviceHref: "/ai-operating-partner"
pull: "Hours returned are not EBITDA until someone stops paying for them."
order: 4
draft: true
tags: ["AI value creation plan", "AI value creation private equity", "AI in portfolio companies", "100-day plan AI", "AI EBITDA impact"]
related: ["ai-operating-partner-private-equity", "measuring-ai-roi"]
faq:
  - q: "What is an AI value creation plan?"
    a: "It is a costed, sequenced plan for how AI will change a portfolio company's EBITDA over the hold. It lists specific opportunities by function, sizes each one in hours and pounds with conservative, base and stretch cases, sets out one-off and running costs, names an owner inside management for each, and defines how progress will be measured and reported to the investment committee."
  - q: "How do you calculate the EBITDA impact of AI in a portfolio company?"
    a: "Start with the hours a task consumes today and the fully loaded cost of those hours. Apply a realistic capture rate, then a conversion rate for how much of the time saved turns into cost not incurred, such as avoided hires, lower agency spend or roles not backfilled. Subtract the annual running cost. What is left is the recurring EBITDA effect; set it against the one-off cost for payback."
  - q: "What should be in the first 100 days of an AI plan?"
    a: "Baseline the hours by function, build and rank the opportunity map, and put two or three quick wins into production in the functions with the cleanest data and a willing manager. Each should have an owner, a measured before state and a monthly hours figure. Structural changes to systems and roles come after, once the quick wins have proved the numbers."
  - q: "Should revenue gains from AI be in the value creation plan?"
    a: "Yes, but kept separate from the base case until they are evidenced. Revenue effects are harder to attribute than cost effects because pricing, market and sales effort all move at once. Track a leading indicator such as win rate or response time against a measured baseline, and only move the gain into the base case after it has held for two quarters."
---
An AI value creation plan is a spreadsheet with owners, not a strategy deck. It says which tasks change, how many hours come back, what that is worth in pounds after costs, who inside management is on the hook, and when the fund will see it. If a plan can't be written as a table with a payback column, it isn't a plan yet.

I've argued before that [diligence should end with a value creation plan](/insights/ai-due-diligence-value-creation-plan) rather than a risk register. This piece is the other half: how to build the thing once you own the business. It's the method I use, in the order I use it, with the arithmetic shown.

The backdrop is sobering. [Bain and StepStone's 2026 GP Outlook](https://www.bain.com/insights/private-equitys-reality-check-gp-outlook-2026/) found that nearly 40% of GPs don't expect material financial impact from AI in their portfolio companies this year, and that the benefits inside portfolio companies skew to cost savings. [FTI Consulting's 2026 Private Equity AI Radar](https://www.fticonsulting.com/insights/reports/2026-private-equity-ai-radar) puts the share of portfolio companies deploying AI in production with real operational impact at 36%. Most of the portfolio is still at the licences and enthusiasm stage. A plan is how you get out of it.

## Start with where the hours and margin actually go

Before anyone mentions a tool, walk the business function by function and write down where the time goes. Finance, operations, sales, customer service, product. In each one, the question is the same: which recurring tasks eat the most hours, and what does an hour cost here?

This sounds obvious. It is rarely done. In most businesses I walk into, the management team can tell you headcount by department to the person but can't tell you that credit control spends a third of its week chasing remittances, or that engineers lose a day a sprint to writing release notes and answering the same internal questions.

You don't need a time-and-motion study. Sit with each team lead for an hour. Ask them to list the ten things their people do every week, roughly how long each takes, and which ones they'd happily never do again. Check the answers against system data where it exists: ticket volumes, invoice counts, proposal numbers, job sheets. Then attach a fully loaded hourly cost (salary, employer's NI, pension, benefits, a share of overhead) so every hour has a price.

Two things come out of this. A ranked list of where effort sits, and a measured "before". The second matters more than people think. A large part of why AI projects show no P&L effect is that nobody wrote down the starting position, so there's nothing to compare against. I cover that in more detail in [how to measure AI ROI](/insights/measuring-ai-roi).

## Rank the opportunity map by value and readiness

The baseline becomes an opportunity map: every task where AI could plausibly take out hours or add revenue, sitting against the function it belongs to. A 300-person services business will usually produce 20 to 40 candidates.

Now rank them. Not by novelty, and not by what the CEO saw at a conference. I use two scores.

Value at stake is the hours in scope multiplied by the hourly cost, or the revenue at stake for commercial use cases. Readiness is a score of 1 to 3 on each of three things:

- Data: is the information the task needs already digital, reasonably clean and in one or two places?
- Systems: can we get at it through an API or an export without a six-month integration project?
- People: is there a manager who wants this, and a team that will use it on a wet Tuesday?

Multiply value by the readiness total and sort. The top of the list is rarely glamorous. It's usually invoice processing, ticket triage, proposal drafting, job reporting. The customer-facing AI agent the board is excited about tends to land in the middle, because the data is scattered and nobody owns the process end to end. That's fine. It goes in the plan for later, with the data work that has to happen first written in front of it.

A low readiness score doesn't kill an opportunity. It tells you what has to be fixed first, and that fix becomes a line in the plan with its own cost.

## Sizing an AI value creation plan in pounds

Here is an illustrative example. Picture a £60m revenue services business with 300 staff and EBITDA of around £6m. Fully loaded cost averages £55k per head, and at roughly 1,650 productive hours a year that's about £33 an hour.

The top four opportunities from the ranking look like this. Capture rate is the share of in-scope hours the change realistically removes once it's live and adopted, not what the vendor demo implied.

| Opportunity | Hours in scope per month | Capture rate (conservative, base, stretch) | Hours returned per month (conservative, base, stretch) | One-off cost | Run cost per year |
|---|---|---|---|---|---|
| Finance: invoice matching, reconciliations, month-end pack | 600 | 25%, 40%, 55% | 150, 240, 330 | £35k | £12k |
| Customer service: triage, drafted replies, call summaries | 2,000 | 15%, 25%, 35% | 300, 500, 700 | £60k | £30k |
| Operations: scheduling and job reports | 1,200 | 10%, 20%, 30% | 120, 240, 360 | £45k | £18k |
| Sales: proposals and bid responses | 400 | 20%, 35%, 50% | 80, 140, 200 | £20k | £8k |
| Total | 4,200 | | 650, 1,120, 1,590 | £160k | £68k |

At £33 an hour, the base case of 1,120 hours a month is worth about £444k a year in gross time. Conservative is about £257k. Stretch is about £630k.

That gross figure is where most plans stop, and it's where they go wrong. Hours returned are not EBITDA until someone stops paying for them. Time saved turns into money in three ways: hires you don't make as the business grows, agency and overtime spend that stops, and leavers you don't replace. Some of it turns into nothing at all, because people fill the time. I assume 60% converts in a normal year, and I'd rather be argued up from there than down.

So the base case works out like this:

- Gross value: 1,120 hours × 12 months × £33 = £443,520
- Converted to cost not incurred at 60%: £266,112
- Less run cost: £68,000
- Recurring EBITDA effect: about £198k a year
- Payback on the £160k one-off: about 10 months

The conservative case nets about £86k a year with payback in around 22 months. Stretch nets about £310k with payback in about six months.

On £6m of EBITDA, the base case is a bit over 3%. At an 8x exit multiple it's roughly £1.6m of enterprise value from four well-run projects. That's a real number. It's also a lot smaller than the slide that says "AI could take 30% out of the cost base", which is precisely why a committee will believe it. And year one will come in below the recurring figure, because nothing ships on day one and adoption takes a quarter to settle.

The value of doing it this way is that every input is a number someone can challenge. The finance director can argue with the capture rate. The COO can argue with conversion. Nobody can argue with a figure that was never written down, and nobody can hold anyone to it either.

## The revenue side, and why I discount it

FTI's survey found AI is used more often to grow revenue (41%) than to cut cost (24%). That matches what I see in management ambitions: faster quoting, better lead scoring, personalised outreach, pricing tools, new AI features in the product.

Some of that is real. Much of it is hard to prove. When win rates rise in a quarter where the business also hired two salespeople, cut prices and had a competitor stumble, which bit was the AI? Revenue has too many moving parts to attribute cleanly, and an AI story that rests on unattributable revenue is exactly the kind a buyer's diligence team will pull apart.

So I keep revenue opportunities in the plan but outside the base case. Each one gets a leading indicator with a measured baseline: quote turnaround time, proposal win rate, response time on inbound leads, conversion on a specific page. Where you can, run it on half the team or half the territory and compare. When the effect has held for two quarters, it moves into the base case. Until then it's upside, labelled as such.

This is less exciting than a revenue-led AI thesis. It's also the version that survives a sceptical buyer.

## A 100-day plan for AI, then the structural work

Sequencing follows the ranking. The first quarter is for quick wins: two or three items from the top of the list where readiness is high, the build is weeks rather than months, and a named manager wants it. In the example above that's probably the finance work and proposal drafting. They're contained, the data is already there, and the people doing the work can see the result by month two.

A workable first 100 days looks like this:

1. Weeks 1 to 3: baseline the hours in every function and agree the hourly cost with the CFO.
2. Weeks 3 to 5: build and rank the opportunity map, size the top eight to ten, and agree the plan with the CEO and the deal partner.
3. Weeks 5 to 12: put two or three quick wins into production, with the before state measured and the people who use them involved in the build.
4. Weeks 12 to 14: report the first hours-returned figures and commit the next quarter's structural work.

Structural change comes after. That means the customer service rebuild, the scheduling change that alters how operations is staffed, the data consolidation that the lower-readiness items depend on. These take longer, cost more and touch roles, so they need the credibility that quick wins provide. Starting with the big structural programme is how you end up nine months in with a steering committee and nothing in production.

If the business sells into the EU, check early whether any planned use falls within the EU AI Act's scope. For UK operations, anything touching customer or employee personal data needs a UK GDPR view before it goes live, not after.

## Owners inside management, and one metric

Every line in the plan has an owner, and the owner sits inside the portfolio company's management team. Not the fund. Not the operating partner. Not an external partner building the thing. The finance line belongs to the CFO, customer service to whoever runs customer service. If an owner can't be found, the opportunity drops down the list, because nothing ownerless survives the first busy month.

[FTI](https://www.fticonsulting.com/insights/reports/2026-private-equity-ai-radar) found talent is the top constraint on scaling AI across portfolios, cited by 35%. In practice that constraint is less about hiring machine learning engineers and more about having a manager who treats the new way of working as their job rather than an IT project happening near them.

The metric is deliberately plain: hours returned to the business per month, by line, against the baseline. Then a second test at six months: is it still running, unattended, and still being used? A tool that saved 200 hours in month two and quietly fell over in month five is worth nothing in the exit model. I'd rather report 150 hours that are still there at month six than 400 that were a launch-week spike.

## Reporting AI EBITDA impact to the IC and carrying it to exit

The plan goes to the investment committee quarterly, on one page. Lines by function, hours returned against plan, converted value, costs to date, what's next and what's stuck. The same format every quarter, so the trend is visible and the misses are too.

Some funds are already formalising this. [Bain's Global Private Equity Report 2025](https://www.bain.com/insights/field-notes-from-generative-ai-insurgency-global-private-equity-report-2025/) describes Vista Equity Partners asking portfolio companies to submit goals and quantified benefits for their GenAI initiatives, alongside a GenAI CEO council. The same report found nearly 20% of portfolio companies had operationalised generative AI use cases and were seeing concrete results. The discipline of "show me the number" is the difference between those companies and the rest.

It pays off at exit. A buyer will be told every business has an AI story. What they rarely see is two or three years of quarterly evidence: baselines, hours returned, costs, what was switched off because it didn't work. That turns AI from a line in the information memorandum into something a buyer's diligence team can verify, and that's what gets credit in the price. An asserted AI story gets discounted to zero. An evidenced one gets underwritten.

Much of this is what an operating partner role is for, and I've written separately about [what an AI operating partner in private equity actually does](/insights/ai-operating-partner-private-equity).

The plan will be wrong in places. Capture rates will come in lower on one line and higher on another, and one opportunity will turn out to be a data project wearing a disguise. That's fine, provided it's written down, owned and reported. If you want help building one across a portfolio, that's the work of a [fractional AI operating partner](/ai-operating-partner), and the [first call](/contact) is free.
