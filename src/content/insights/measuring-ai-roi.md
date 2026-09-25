---
title: "How to measure AI ROI: hours returned, not licences bought"
standfirst: "Most AI ROI numbers are either never measured or quietly made up. Here is a method a CFO can sign, from baseline to payback to the six-month test."
description: "How to measure AI ROI properly: baseline first, hours returned as the unit, every cost counted, and a worked accounts payable example with payback maths."
kicker: "DELIVERY"
published: 2026-09-25
updated: 2026-09-25
read: "10 MIN"
readLong: "Ten minutes"
audience: "CFOs, CEOs, finance directors, operating partners"
service: "Embedded AI delivery"
serviceHref: "/embedded-ai-delivery"
pull: "Hours saved is a productivity number. It becomes a P&L number only when something else changes."
order: 8
tags: ["AI ROI", "measuring AI ROI", "AI automation ROI", "how to calculate ROI of AI", "AI business case template"]
related: ["why-ai-pilots-fail", "ai-value-creation-plan"]
faq:
  - q: "How do you calculate the ROI of AI?"
    a: "Measure the process before you build anything: volume, minutes per unit, rework rate, cycle time and the fully loaded cost of the people doing it. Measure it again after go-live. Value the hours returned, subtract every cost (build, licences, API usage, internal time, maintenance) and divide by those costs. Then check what actually changed in the P&L, because hours saved are not cash on their own."
  - q: "What is a good payback period for an AI automation project?"
    a: "For a back-office automation in a mid-market business, I'd expect payback inside twelve months on realistic capture assumptions, and I'd want the case to survive halving the benefit. If the numbers only work when every hour is captured and every forecast is hit, the project is fragile. Run the sensitivity before you approve the spend, not after."
  - q: "Why do so many AI projects show no measurable ROI?"
    a: "Often because nobody measured the process before the tool arrived, so there is nothing to compare against. The rest usually comes from counting hours saved as if they were cash, ignoring run costs and internal time, or building something that quietly stops being used. A baseline, a single unit of value and a monthly report fix most of it."
  - q: "What should an AI business case template include?"
    a: "A baseline for the process (volume, time per unit, error rate, cycle time, cost per hour), the target after automation, a full cost list including internal time and ongoing running costs, payback in months, year-one ROI, a sensitivity case at half the expected benefit, and a clear statement of how the returned hours will turn into cash or avoided cost."
---
Most AI ROI figures I see in board packs are one of two things: never measured, or invented after the fact to justify spend already made. Neither survives a CFO asking "compared to what?". Measuring AI ROI properly isn't hard, but it has to start before anything is built, and it has to use a unit of value that finance recognises: hours returned to the business per month, then what those hours turned into.

The rest of this is the method I use when I build AI systems inside mid-market and PE-backed businesses. It is deliberately boring. Boring is what gets signed off.

## Why most AI ROI numbers can't be trusted

Start with how shallow adoption still is. The [ONS survey of AI in UK businesses](https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026) found self-reported AI use among businesses with ten or more employees rose from around 12% in late 2023 to around 35% by June 2026. But the average adopter uses only about 1.6 AI technologies, up from about 1.4. Most of that is people using a chat assistant. Useful, sometimes. Measurable, almost never.

Then look at the headline everyone quotes. MIT NANDA's "GenAI Divide" report, [covered by Fortune](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/), found 95% of the generative AI pilots it studied showed no measurable P&L impact. The critique of that figure is the useful part: a lot of those pilots had no baseline measured before launch. If you never recorded how long the work took, you cannot prove it now takes less. The impact may be real. It just isn't evidenced.

And projects that can't show value get cut. [S&P Global Market Intelligence](https://www.ciodive.com/news/AI-project-fail-data-SPGlobal/742590/) found 42% of companies abandoned most of their AI initiatives in 2025, up from 17% the year before, with the average organisation scrapping 46% of proofs of concept before production. Some of those deserved to die. Some were probably working and simply couldn't prove it when the budget review came round.

So the problem is less "AI doesn't pay back" and more "nobody set up the scoreboard". That's fixable.

## Measure the baseline before anyone builds anything

The baseline is the single most skipped step and the only one you can't do retrospectively. Once the new process is live, the old one is gone, and memory is a terrible data source. Everyone remembers the old way as slower than it was.

For each process you plan to automate, capture five things over at least four weeks of normal trading:

1. Volume. Units per month: invoices, quotes, orders, tickets, onboarding packs.
2. Time per unit. Actual handling time, not elapsed time. Sit with the people doing it and time a sample. System timestamps help but rarely tell the whole story.
3. Error and rework rate. What proportion come back, get corrected, get chased or get escalated, and how long each of those takes.
4. Cycle time. Elapsed time from arrival to done. This is often where the commercial value hides.
5. Who does it and what they cost. Named roles, fully loaded cost (salary, employer's NI, pension, benefits, a share of overhead if you're being rigorous) divided by productive hours, not contracted hours.

Four weeks is the minimum. If the process is seasonal, note it and adjust. If month end distorts the picture, capture a month end.

This takes a few days of someone's time and costs almost nothing. It is also the moment you find out whether the process is worth automating at all. I've seen plenty of confident business cases shrink by half once someone actually timed the work.

## Hours returned is the unit, and it isn't cash yet

Pick one unit of value and stick to it. Mine is hours returned to the business per month. It's concrete, it's comparable across processes, and it can be checked.

Then be honest about what an hour is worth. An hour returned has a notional value (hours multiplied by fully loaded cost per hour) and a cash value, which is whatever you actually do with it. They are different numbers, and confusing them is how AI business cases lose credibility with finance.

Hours saved is a productivity number. It becomes a P&L number only when something else changes.

There are really only three ways that happens:

- Redeployed. The hours move to work that earns or saves money: credit control that brings cash in faster, account management, supplier renegotiation. Show the evidence in that other number.
- Not backfilled. Someone leaves or retires and the role isn't replaced. That's a real saving, but it arrives on the attrition timetable, not yours.
- Headcount avoided as the business grows. Volume rises 20% and the team doesn't. For a PE-backed business on a growth plan, this is usually the biggest and most honest version of the story.

If none of those three is going to happen, say so. Hours returned that disappear into slightly longer lunch breaks and marginally tidier spreadsheets have a value, but not one you should put in an investment case.

## Count every cost, including your own people's time

The other way ROI gets flattered is by counting only the invoice from whoever built the thing. A proper cost line covers:

- Build. The external or internal cost of designing, building and testing.
- Licences and usage. Software subscriptions plus model and API usage, which scales with volume and should be modelled at forecast volume, not pilot volume.
- Integration. Connecting to the ERP, the finance system, the CRM, the shared inbox. Often the largest single piece of work.
- Change management. Training, process documentation, updated controls, the hours your team spends learning a new way of working.
- Internal time. Finance, IT and the process owner will spend days on this. Cost it at the same loaded rate you use for the benefit. Same rate on both sides of the ledger.
- Monitoring and maintenance. Someone has to watch exception queues, handle supplier format changes, update prompts and rules, and fix things when an upstream system changes. Budget hours a month for it, forever.

Run costs matter more than build costs over any sensible horizon. A system that's cheap to build and needs a day a week of babysitting is not cheap.

## A worked example of AI automation ROI

Picture a £50m revenue distributor. Its accounts payable team of three processes about 3,000 supplier invoices a month. The numbers below are illustrative, but they're the shape I'd expect in most businesses I walk into.

The baseline, measured over four weeks: keying and coding take about six minutes per invoice, so 300 hours a month. Around 12% of invoices need rework (mismatched purchase orders, wrong cost codes, missing goods received notes), at roughly 20 minutes each, which adds 120 hours. Total: 420 hours a month, which is about what three clerks at 140 productive hours each can do. Each clerk costs around £40,000 fully loaded across roughly 1,680 productive hours a year, so call it £24 an hour.

After automation, invoices are read, matched to purchase orders and coded automatically, with a person reviewing and approving. Average handling drops to 1.5 minutes per invoice (75 hours) and, because matching is now consistent, the exception rate halves to 6% (60 hours). Total: 135 hours.

The costs: a fixed-price build and integration of £30,000, plus about £4,000 of internal time across finance and IT for requirements, testing and training. Running costs of around £1,500 a month cover document processing and API usage, the software subscription and a few hours a month of monitoring and maintenance.

| | Before | After (full capture) | After (half capture) |
|---|---|---|---|
| AP hours per month | 420 | 135 | 277.5 |
| Hours returned per month | | 285 | 142.5 |
| Value of hours returned at £24 | | £6,840 | £3,420 |
| Monthly run cost | | £1,500 | £1,500 |
| Net monthly benefit | | £5,340 | £1,920 |
| One-off cost (build plus internal time) | | £34,000 | £34,000 |
| Payback | | 6.4 months | 17.7 months |
| Year-one ROI | | 58% | (21%) |

The arithmetic for the full case: year-one value is 12 × £6,840 = £82,080. Year-one cost is £34,000 plus 12 × £1,500 = £52,000. Net £30,080, divided by £52,000, is a 58% return. Payback is £34,000 ÷ £5,340, about 6.4 months.

Now the sensitivity line, which is the one I'd put in front of an investment committee. If only half the expected hours materialise (adoption is patchy, supplier invoice formats are messier than hoped, the team keeps double checking), value halves to £41,040 against the same £52,000 of cost. Year one loses 21%, shown in brackets above, and payback stretches to nearly 18 months. Still positive over two years. Much less exciting.

And the P&L reality check. 285 hours is roughly two clerks' worth of time, but the business has three people, not two and a bit. The honest cash version might be: one clerk moves to credit control and brings debtor days down, and when the next person leaves, the role isn't replaced. That second move alone is £40,000 a year of real cost avoided, from whenever it happens. The notional £82,080 is the ceiling. The cash is what you choose to do.

Also note what the table leaves out. Invoice cycle time falls from days to hours, which means fewer supplier chases, fewer missed early payment discounts and a cleaner month end. Those are real. Count them separately and only if you can evidence them.

## What to report monthly, and the six-month test

Split your indicators into two kinds.

Leading indicators tell you in the first weeks whether the benefit is coming. Straight-through rate (the share of units handled with no human edit), exception rate, human override rate, handling time on the units people still touch, and whether the team is actually using it or quietly routing around it. If these are wrong in month one, the hours will be wrong in month three.

Lagging indicators tell you whether the money arrived. Hours returned against baseline, cost per unit processed, overtime and agency spend, headcount against volume, and the second-order number you said the redeployed hours would move (debtor days, quote turnaround, whatever it was).

The monthly report should fit on one page. Baseline, this month, target, and a line on what the returned hours were used for. If a process has been automated and nobody can say where the hours went, that is the finding.

Then apply the test I care about most: is it still running, unattended, six months later? Not demoed. Not "being rolled out". Running, on live volume, with exceptions handled by the team and no outside help propping it up. A lot of AI value evaporates between month two and month six as the builders leave and small breakages go unfixed. If you want the longer version of why that happens, it's in [why AI pilots fail](/insights/why-ai-pilots-fail).

## Revenue-side ROI without fooling yourself

Cost-side ROI is the easy one to evidence. Revenue-side ROI is where most business cases get creative.

The usual claims: quotes go out faster, so more are won. Leads get followed up the same day, so conversion rises. Account managers spend less time on admin, so they sell more. All plausible. All very easy to overstate, because revenue moves for a dozen reasons at once: pricing, the market, a new salesperson, a competitor going under.

To evidence it properly:

- Measure the mechanism first. If the claim is faster quotes, show quote turnaround time falling before you claim anything about wins.
- Use a comparison group where you can. Roll out to one branch, region or product line first and compare it with the ones still on the old process over the same weeks.
- Compare like with like periods, adjusted for seasonality and price changes.
- Count gross margin, not revenue. A £100,000 uplift in sales at 25% margin is £25,000 of value.
- Take the uplift over and above the comparison group, then haircut it. Claim a conservative share and let the upside surprise you.

If you can't run any kind of comparison, report the mechanism (turnaround, response time, win rate) and let the board draw its own conclusions. That's more persuasive than a revenue number nobody believes.

For PE-backed businesses, this is the same discipline an operating partner should apply across the portfolio, and it belongs in the [AI value creation plan](/insights/ai-value-creation-plan) from day one, not bolted on at the next board meeting.

## The short version for a sceptical CFO

Baseline before build. Hours returned as the unit. Every cost, including your own people and the running cost forever. One table with payback and a half-capture case. A clear statement of how hours become cash. A one-page monthly report. And the six-month test, because a system that isn't still running has an ROI of whatever you spent on it, in brackets.

None of that needs a transformation programme. It needs someone to time the work before touching it, and the patience to keep measuring after the excitement fades. That's how we run every [embedded AI delivery](/embedded-ai-delivery) engagement, and if you want to test a business case against it, the [first call is free](/contact).
