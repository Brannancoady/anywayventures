---
title: "How to implement AI in a mid-sized UK business: a 90-day plan"
standfirst: "UK AI adoption has tripled and barely gone deeper. Here is the 90-day plan I would run in a £10m to £200m business with no data science team."
description: "How to implement AI in business at £10m to £200m revenue with no data science team: a practical 90-day plan, a realistic budget and the mistakes to avoid."
kicker: "DELIVERY"
published: 2026-09-25
updated: 2026-09-25
read: "9 MIN"
readLong: "Nine minutes"
audience: "CEOs, owner-managers, COOs of UK mid-market businesses"
service: "Embedded AI delivery"
serviceHref: "/embedded-ai-delivery"
pull: "Adoption has tripled and barely gone an inch deeper."
order: 10
tags: ["how to implement AI in business", "AI implementation plan", "AI for mid-sized businesses UK", "AI adoption UK SMEs", "AI strategy for SMEs"]
related: ["ai-agents-for-business-operations", "measuring-ai-roi"]
faq:
  - q: "How do I start implementing AI in a small or mid-sized business?"
    a: "Start with the work, not the tools. Spend two or three weeks walking the business function by function with the people who do the work, list the repetitive processes by volume, time and pain, and pick two. Build those inside the systems you already use, with the team involved, and measure the hours returned each month. Only then decide what to do next."
  - q: "How much does it cost to implement AI in a mid-sized business?"
    a: "It varies with scope and systems, but a first fixed-scope build covering one or two processes typically costs tens of thousands of pounds, not hundreds of thousands. Add running costs for models and platforms, often hundreds to low thousands of pounds a month at this size, and the internal time of a process owner. Treat any figure as illustrative until the processes are chosen."
  - q: "Should a mid-sized business build its own AI or buy it?"
    a: "Mostly buy the commodity parts, such as models, platforms and the AI features already in your ERP or CRM, and build only the thin layer that fits them to your workflow. MIT research found bought and partnered deployments succeeded far more often than internal builds. For a first project, working with a partner who hands over to your team is usually the lowest-risk route."
  - q: "Do we need to hire a data scientist or head of AI first?"
    a: "Usually not. Most mid-market AI work is workflow automation on top of existing models, not data science. Name an internal owner who understands operations, rent specialist build and architecture skills for the first projects, and hire permanent technical roles once two or three systems are running and you know what the ongoing work actually looks like."
---
UK businesses have roughly tripled their use of AI in under three years, and in most of them the work hasn't changed. If you run a £10m to £200m business with no data science team and you're wondering how to implement AI in business terms that show up in the numbers, the answer is a 90-day plan: find where the hours go, build two things inside the systems you already run, and measure what comes back.

The [ONS](https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/articles/artificialintelligenceinukbusinesses/2023to2026) set out the picture in July 2026. Self-reported AI use among UK businesses with ten or more employees rose from around 12% in late 2023 to around 35% in June 2026, and to 49% among businesses with 250 or more staff. Then look at depth. The average adopting business uses about 1.6 AI technologies, up from about 1.4. Large language models are the most common, used by 18% of businesses. Adoption has tripled and barely gone an inch deeper.

## Why AI adoption in UK SMEs stays shallow

In most businesses I walk into, "we use AI" means a chat assistant, a few enthusiasts and a lot of drafted emails. Quoting, onboarding, month-end and reporting run exactly as they did in 2022.

That isn't laziness. A chat window sits beside the work. It doesn't open the job file, read the supplier invoice, update the CRM or tell anyone when something looks wrong. Someone has to decide which process changes, build the connection into the systems that process lives in, and stay until the new way is the habit. Mid-market businesses rarely have a person whose job that is, so it doesn't happen.

The fix is a short, structured programme with a named owner and a fixed end date. Thirteen weeks is long enough to get two systems into production and short enough that nobody loses interest.

## The 90-day AI implementation plan

Here is the whole thing on one page. The detail follows.

| Weeks | Goal | Output | Who |
|---|---|---|---|
| 1 to 3 | Find the hours | Process list scored by volume, time and pain; two processes chosen with a baseline | CEO or COO, function leads, the people doing the work, delivery lead |
| 4 to 9 | Build in the real stack | Two working systems inside existing tools; data protection sign-off; one-page acceptable-use policy | Delivery team, process owners, IT or MSP, whoever holds data protection |
| 10 to 13 | Embed and measure | Team trained on the new workflow; named owner for each system; first monthly hours-returned report | Process owners, line managers, finance |

### Weeks 1 to 3: find the hours

Walk the business function by function, at the desks of the people doing the work. A leadership workshop won't tell you where the hours go. Ask them to show you, on screen, what they did yesterday. Where they copy from one system into another. Where they read a PDF to type ten fields somewhere else. Where they chase.

For every repetitive process, write down three things: volume (how many times a week), time (minutes per instance, measured, not guessed) and pain (errors, delays, customer complaints, the task everyone avoids). Then apply a simple filter. Is the data reachable through an API, an export or a shared inbox? Are the rules clear enough that a new starter could learn them in a week? Can a human check the output quickly? If the answer to any of those is no, park it.

Pick two. One should be big and boring. The other can be smaller and more visible, so people see something change early.

Picture a £40m services business with 120 staff. The walk turns up two candidates. Six estimators each spend about ten hours a week pulling specifications out of customer documents and assembling quotes: 60 hours a week, or roughly 260 hours a month. In finance, three people spend about two days each at month-end matching supplier invoices to purchase orders: 48 hours a month.

If the quoting build removes 60% of that effort and the invoice build removes 70%, that is about 156 plus 34, so roughly 190 hours returned a month. At an illustrative loaded cost of £35 an hour, that's around £6,650 a month, or about £80,000 a year, from two processes. Your numbers will differ. The point is to write them down before you build, because that baseline is what you'll be judged against later.

### Weeks 4 to 9: build in the real stack

Build inside the systems people already open every morning: the CRM, the ERP, the shared inbox, Teams, the job management system. A new app that sits to one side will be ignored within a month.

Fix the scope in writing at the start of week 4 and don't let it grow. Put the people who do the work in the room, or on the call, every week. Demo something working every Friday, even when it's rough. Weekly demos catch the "that's not how we actually do it" moments while they're cheap to fix. Some of what you build may end up as an agent that handles a whole task end to end; I've written separately about [where AI agents earn their place in operations](/insights/ai-agents-for-business-operations) and where they don't.

Do security and data protection in week 4, not week 9. Three things matter:

1. UK GDPR. If personal data goes through the system, be clear on the lawful basis, what the model provider does with the data, where it's processed and how long it's kept. Screen for a data protection impact assessment early; the ICO expects one where processing is likely to be high risk.
2. What can go into which tools. Enterprise tenants with contractual data terms are a different thing from a personal account on a free plan. Write down which tools are approved for which classes of data.
3. A one-page acceptable-use policy. Approved tools, data that never goes into any of them, who to ask, and the rule that a named human owns every output that leaves the building. One page. If it's longer, nobody reads it.

Your IT provider or MSP needs to be involved here. They'll handle permissions, connectors and access, and they'll be the ones supporting it later.

### Weeks 10 to 13: embed and measure

Train people on the new workflow, not on "AI". Nobody needs a half-day on prompt engineering. They need twenty minutes on how quotes now get built, what the system does, what they check, and what to do when it's wrong.

Name an owner for each system. A person, not a department. They watch the exceptions, gather feedback and decide on changes. Systems without an owner decay quietly, because the processes around them keep moving and nobody updates the system to match.

Then report hours returned every month, against the baseline from week 3, in the same pack as the rest of the operating numbers. I've covered the method in more detail in [how to measure AI ROI](/insights/measuring-ai-roi). The short version: measured time before, measured time after, and a note on what the returned hours were used for.

## Build, buy or bring in a partner

The most quoted research here is MIT NANDA's 2025 study, [reported by Fortune](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/), which found that 95% of the generative AI pilots it looked at showed no measurable P&L impact. The same study found that buying from specialised vendors and partnering succeeded about 67% of the time, while internal builds succeeded about a third as often. Its diagnosis was a "learning gap": systems that don't retain feedback or adapt to the workflow.

Treat the headline with care. It was built on 52 interviews, surveys of 153 leaders and a review of 300 public deployments, and critics point out that "no measurable impact" partly reflects pilots that never measured a baseline before launch. You can't show a return on something you didn't measure at the start.

The direction still holds for a mid-sized business, with some nuance. Buy the commodity parts: the models, the automation platform, the AI features already in your ERP or CRM. Build only the thin layer that fits them to your workflow, which is where the value is and where no vendor will do it for you. For the first project, bring in a partner who builds with your team and hands over, rather than one who builds for you and keeps the keys. The route I'd avoid is the lone internal build, where one keen person in IT disappears for three months and comes back with something only they understand.

## What to do with the Copilot and ChatGPT licences you already pay for

Don't cancel them in a fit of pique, and don't buy more. Pull the usage reports. In most businesses a minority use them heavily and the rest have barely logged in. Keep the licences with the heavy users, reclaim the idle ones, and where it fits, make the assistant the front end of the workflows you build in weeks 4 to 9. I've made the longer argument in [you bought the licences and nothing changed](/insights/you-bought-the-licences-and-nothing-changed); the short version is that licences are an input, not a plan.

## What to hire and what to rent

Talent is the constraint almost everyone hits. In [FTI Consulting's 2026 Private Equity AI Radar](https://www.fticonsulting.com/insights/reports/2026-private-equity-ai-radar), talent was the top constraint to scaling AI, cited by 35% of PE decision-makers. A £40m business competing with banks and software companies for AI engineers will mostly lose.

So hire the part you need every day and rent the part you need occasionally. Hire, or appoint from within, an operations-minded owner who understands how the business runs and can spend a day or two a week on this. Once two or three systems are live and you know what maintaining them involves, consider an automation engineer.

Rent the architecture, the first builds, security review and model selection. These are specialist and lumpy. Paying for them as fixed-scope work is cheaper than carrying a head of AI who spends their first six months writing a strategy.

## What it costs, roughly

Any figure here is illustrative until the processes are chosen. As a guide, a first fixed-scope build covering one or two processes typically lands in the tens of thousands of pounds, not the hundreds of thousands. Running costs for models, platforms and connectors are often in the hundreds to low thousands of pounds a month at this scale, depending on volume.

The cost people forget is internal time. Budget for the process owner at a day a week through the 90 days, and a couple of hours a week from the people whose work is changing. Against the illustrative £80,000 a year in the worked example, a first build in the tens of thousands pays back inside the year. If your own arithmetic doesn't, pick different processes.

## The mistakes I see most often

- Starting with a strategy deck and a steering committee before anyone has watched the work being done.
- Choosing the most interesting process instead of the highest-volume one.
- Running eight pilots at once, so none gets finished.
- Building a separate tool beside the stack that nobody opens.
- Skipping the baseline, then arguing about whether it worked.
- Running "AI training" instead of training on the new workflow.
- Letting a vendor choose the use case because it happens to match their product.
- Leaving without naming an owner.

None of these is technical. They're all about sequencing and attention.

Ninety days is enough to find out whether AI will do real work in your business, and to have two systems carrying some of it. The test I use is dull on purpose: what is still running, unattended, six months after the outside help has gone. If you'd like help running the first 90 days, that's what [embedded AI delivery](/embedded-ai-delivery) is for, and the [first call is free](/contact).
