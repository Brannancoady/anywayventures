---
title: "Why AI pilots fail, and what the survivors do differently"
standfirst: "The failure statistics are real. The usual reading of them is lazy. Most pilots are lost in the first fortnight, on decisions that have nothing to do with the model."
description: "Why AI pilots fail to reach production, what the MIT 95% figure really measured, and the dull decisions that get an AI pilot into daily use."
kicker: "DELIVERY"
published: 2026-09-25
updated: 2026-09-25
read: "9 MIN"
readLong: "Nine minutes"
audience: "CEOs, COOs, operating partners"
service: "Embedded AI delivery"
serviceHref: "/embedded-ai-delivery"
pull: "The pilot was set up to fail before anyone wrote a prompt."
order: 7
draft: true
tags: ["why AI pilots fail", "AI pilot to production", "AI proof of concept failure", "MIT 95% AI pilots", "generative AI project failure rate"]
related: ["measuring-ai-roi", "how-to-implement-ai-mid-market-business"]
faq:
  - q: "Why do most AI pilots fail?"
    a: "Most AI pilots fail for organisational reasons rather than technical ones. The use case is chosen for novelty instead of measurable hours, nobody records a baseline, the pilot is built on clean sample data outside the real systems, and no one in the business owns the outcome. Integration, permissions and legal review get left to the end, and success is defined as a good demo rather than work that actually moved."
  - q: "Is it true that 95% of AI pilots fail?"
    a: "The figure comes from MIT NANDA's 2025 report, which found 95% of the generative AI pilots it studied showed no measurable P&L impact. It drew on 52 interviews, 153 surveyed leaders and 300 public deployments. Critics note many pilots had no baseline, so impact could not be measured. The fair reading is that most pilots cannot prove value, which is a design failure you can fix."
  - q: "How do you move an AI pilot to production?"
    a: "Skip the pilot and ship something small into production instead. Pick one back-office process with measurable hours, record the baseline for two weeks, build inside the real systems with the people who do the work, and name an owner in the business. Agree kill and keep criteria before you start, and bring security and data protection review in during week one, not week ten."
  - q: "Should we buy an AI tool or build our own?"
    a: "MIT's research found bought tools from specialised vendors and partnerships succeeded about 67% of the time, against roughly a third of that for internal builds. Buy where the workflow is common across businesses, such as invoice processing. Build where the process is specific to you. Either way, someone still has to wire it into your systems and your team's working day."
---
Most of what gets written about why AI pilots fail treats it as a technology problem. It usually isn't. In most businesses I walk into, the pilot was set up to fail before anyone wrote a prompt: the wrong use case, no baseline, built on a tidy spreadsheet in a sandbox, and owned by nobody who would have to live with it afterwards.

The headline numbers are grim and I'm not going to pretend otherwise. But the popular reading of them, that AI doesn't work in real businesses, is lazy. The pilots that die and the ones that reach production usually differ on a handful of dull decisions made in the first two weeks. Those decisions are cheap to get right, and a COO can check every one of them from a single page.

## What the failure statistics actually say

Start with the numbers that are hardest to argue with. [S&P Global Market Intelligence](https://www.ciodive.com/news/AI-project-fail-data-SPGlobal/742590/) surveyed more than 1,000 organisations in North America and Europe and found 42% had abandoned most of their AI initiatives in 2025, up from 17% the year before. The average organisation scrapped 46% of its AI proofs of concept before they reached production.

That is not a forecast. That is what happened.

[Gartner predicted in July 2024](https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025) that at least 30% of generative AI projects would be abandoned after proof of concept by the end of 2025, and named the reasons: poor data quality, inadequate risk controls, escalating costs and unclear business value. A year later [Gartner went further on agents](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027), predicting over 40% of agentic AI projects will be cancelled by the end of 2027 for much the same reasons. It also warned about "agent washing", the rebranding of chatbots, assistants and RPA as agents, and estimated that only about 130 of the thousands of vendors claiming agentic AI are the real thing.

Read those reasons again. Data quality, risk controls, cost, unclear value. None of them is "the model wasn't clever enough". Every one of them is a decision someone made, or failed to make, before the build started.

## The MIT 95% figure, read properly

The number everyone quotes is 95%. It comes from MIT NANDA's August 2025 report, "The GenAI Divide", which [Fortune covered widely](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/): 95% of the generative AI pilots studied showed no measurable P&L impact.

Be precise about what that measured. The research drew on 52 executive interviews, surveys of 153 leaders and a review of 300 public deployments. That's a useful body of evidence. It isn't a census of every AI project in the economy, and "no measurable P&L impact" is a different claim from "failed".

The critics make a fair point. A lot of those pilots had no baseline measured before launch. If nobody recorded how long the work took before the tool arrived, nobody can show the tool changed anything. The pilot might have saved real hours. It can't prove it, so it counts as a zero.

There's a second problem with P&L as the test. Suppose a pilot takes 150 hours a month out of a finance team. That shows up in the P&L only if the business stops backfilling a vacancy, cuts overtime or moves those people onto work that earns money. Otherwise the hours are absorbed and the accounts look exactly the same. The pilot worked and the P&L never noticed.

So the 95% is softer than the headlines suggest. What is still true, and it's the most useful thing in the report, is the diagnosis. MIT put the core cause down to a "learning gap": systems that don't retain feedback or adapt to the workflow they sit in. The tool gives the same slightly wrong answer on Friday that it gave on Monday, the team corrects it by hand every time, and by week six they've quietly gone back to the old way.

That matches what I see. Most failed pilots didn't fail loudly. They were abandoned by the people they were meant to help.

## Why AI pilots fail: the patterns an operator sees

Having run a product business and now building AI systems inside other people's every week, I see the same eight patterns over and over. They're rarely exotic.

The use case was picked for novelty, not hours. A customer-facing chatbot is visible and easy to demo at a board meeting. The three people who spend two days a month rekeying data between the CRM and the finance system are invisible. Guess which one gets the pilot.

Nobody measured the baseline. This is the MIT critique in practice. If you don't know the process takes 180 hours a month today, you'll never know whether it takes 60 after.

It was built outside the real systems. The pilot runs on an export of 500 clean records in a sandbox. The production process runs on 40,000 messy ones, three legacy fields nobody understands and a supplier who sends invoices as photographs. Everything that made the pilot look good is exactly what's missing in real life.

Nobody in the business owned it. IT ran it, or an outside firm ran it, or an enthusiastic analyst ran it in their spare time. The operations lead whose team would use it was "consulted". When it needed a decision, there was nobody with the authority and the motive to make one.

The learning gap went unaddressed. The tool couldn't take corrections, couldn't see the context of the account or the customer, and didn't fit the order the team actually worked in. People tolerated it for a fortnight.

Integration and permissions were left until the end. Connecting to the ERP, getting a service account, agreeing who can see what: all treated as "phase two". Phase two is where pilots go to die.

Security and legal arrived in week ten. A data protection impact assessment under UK GDPR, a question about where customer data is processed, a clause in a customer contract about automated decisions. All reasonable. All survivable in week one. In week ten, with the budget spent, they're fatal.

And success was defined as a demo. The steering group watched it work on a good example, nodded, and asked "so what's next?" Nobody had written down what next was.

## What the survivors do differently

The businesses that get AI from pilot to production don't have better models. They make different choices at the start.

They pick back-office friction with measurable hours. Invoice coding, order entry, quote preparation, month-end reconciliations, triaging an inbox. Unglamorous work, done by a known number of people, at a volume you can count.

They measure the baseline first. Two weeks of timing the real process, with the real people, before a line of anything is built. It's the cheapest part of the project and the one most often skipped. I've written more about the mechanics in [measuring AI ROI](/insights/measuring-ai-roi).

They build inside the real stack, with the people who do the work sitting next to the build. Real data, real permissions, real edge cases from day one. The person who processes the invoices tells you in ten minutes which suppliers will break it.

They ship something small into production in weeks. Not a pilot. A narrow version that handles the easy 60% of cases live, with a human reviewing the rest, beats a sandbox that handles 95% of nothing.

They name an owner in the business, usually the operations or finance lead whose numbers it affects. That person decides what good looks like and signs it off.

They decide kill and keep criteria up front, in writing, before anyone has fallen in love with it.

### A worked example

Take an illustrative £40m services business with 120 staff. Its accounts payable team of five processes around 1,800 supplier invoices a month. A two-week baseline shows coding and matching each invoice takes about six minutes. That's 180 hours a month.

The build sits inside the existing finance system. It reads each invoice, proposes the coding and matches it to the purchase order. Clean matches get a one-minute human check; exceptions are flagged with the reason.

Say that after six weeks, 70% of invoices (1,260) need only the one-minute check, which is 21 hours. The other 540 still need handling, but with the data pre-filled they take three minutes each, which is 27 hours. Total: 48 hours a month, down from 180.

That's 132 hours returned to the business every month. At an illustrative loaded cost of £30 an hour, it's worth about £3,960 a month, or roughly £47,500 a year. If the build costs £20k to £30k, the midpoint pays back in a little over six months, and the finance lead gets most of a person's time back for work that needs judgement.

The kill criteria, written down in week one, might read: if fewer than 50% of invoices are handled with a light-touch check by week six, or coding accuracy on a sample of 200 falls below the team's own error rate, we stop or rescope. Nobody argues about it later, because nobody has to.

## Buy, build or partner

MIT's most commercially interesting finding was about who does the building. Buying from specialised vendors and working with partners succeeded about 67% of the time. Internal builds succeeded about a third as often.

I should declare an interest, since building inside businesses is part of what we do. Even so, I think the finding is broadly right, and the reason is the learning gap again. A specialist vendor with a narrow product has usually already solved the adaptation problem for one workflow, across hundreds of customers. A mid-market IT team of three, who also run the helpdesk and the laptop refresh, is starting from nothing.

But the finding needs some care. Buying a tool is not the same as adopting it. Plenty of bought tools sit unused, and Gartner's estimate that only about 130 agentic vendors are genuine should make anyone cautious about a slick sales demo. The survivors in MIT's data weren't just buyers. They bought something specialised and then did the work of fitting it into the workflow.

My rule of thumb is simple. Buy where the process is common across businesses: invoice capture, call transcription, contract review. Build where the process is specific to how you make money: your quoting logic, your scheduling rules, your particular mess of systems. And in both cases, budget for someone to wire it into the real stack and sit with the team until it sticks. That last part is where most of the value is, and it's the part nobody's product does for you.

## A pilot to production checklist for the COO

If you're a COO or an operating partner looking at an AI project already under way, these are the questions I'd ask. If the honest answer to more than two of them is no, the project is a pilot that won't graduate.

1. Was this use case chosen because of the hours it takes today, and do we know that number?
2. Was the baseline measured on the real process, with the real team, before building started?
3. Is it running on production data inside our actual systems, not an export?
4. Is there a named owner in the business (not IT, not the vendor) whose numbers it affects?
5. Are the people who do the work involved in the build every week?
6. Can the system take corrections and get better, or does the team fix the same errors by hand?
7. Are integration, access and permissions solved now, not scheduled for "phase two"?
8. Have security and data protection signed off, including a DPIA if personal data is involved?
9. Is some version of it live in production within 2 to 8 weeks of starting?
10. Are the kill and keep criteria written down, with a date to apply them?

The last one matters more than it looks. A project with no kill criteria never dies. It just keeps costing money quietly until someone new asks what it's for.

## The dull bit is the whole bit

None of this is sophisticated. That's the point. The generative AI project failure rate is high because the dull decisions get skipped in the rush to show something clever, and the clever part was never where it went wrong. For the wider sequencing across a business, see [how to implement AI in a mid-market business](/insights/how-to-implement-ai-mid-market-business).

The test I'd hold any AI project to is the one I use on my own work: how many hours it returns to the business each month, and whether it's still running, unattended, six months after the people who built it have left.

If you'd like a second pair of eyes on a project that's stuck between pilot and production, that's the work of [embedded AI delivery](/embedded-ai-delivery), and the first call is free.
