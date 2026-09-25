---
title: "AI washing: how to test a target's AI claims in due diligence"
standfirst: "When the equity story leans on AI, the diligence question is simple. Take the AI away: what's left, and what does it cost to keep it running?"
description: "AI washing is now a live diligence risk. A practical protocol for testing a target's AI claims, scoring them, and pricing what you find into the deal."
kicker: "DILIGENCE"
published: 2026-09-25
updated: 2026-09-25
read: "9 MIN"
readLong: "Nine minutes"
audience: "Deal teams, investment committees, acquirers"
service: "AI due diligence"
serviceHref: "/ai-due-diligence"
pull: "A business priced as proprietary AI software and delivered as a services firm with a chatbot has been mispriced, and the buyer pays the difference."
order: 3
draft: true
tags: ["AI washing", "AI washing due diligence", "agent washing", "fake AI companies", "verifying AI claims", "AI claims in M&A"]
related: ["ai-due-diligence-private-equity", "technology-due-diligence-checklist"]
faq:
  - q: "What is AI washing?"
    a: "AI washing is overstating how much a product or business relies on artificial intelligence, or what that AI actually does. It ranges from loose marketing language to describing manual work, simple rules or third-party tools as proprietary AI. The US SEC brought its first AI washing enforcement actions in March 2024, treating false AI claims like any other misleading statement."
  - q: "What is agent washing?"
    a: "Agent washing is a term Gartner used in 2025 for vendors rebranding existing assistants, RPA tools and chatbots as AI agents. Gartner estimated that only about 130 of the thousands of vendors claiming agentic AI are real. In diligence it means treating the word 'agent' in a pitch as a claim to test, not a description to accept."
  - q: "How do you verify a company's AI claims in due diligence?"
    a: "Ask for a live demo on data the company did not prepare, then check the architecture, the model and vendor contracts, inference cost per customer and how gross margin changes with usage. Confirm the company has rights to the data it trains on, look for manual work behind the automation, interview engineers directly, and review how the company measures whether its AI works."
  - q: "Is a company that wraps a third-party AI model a bad investment?"
    a: "Not necessarily. Most useful AI products call a third-party model somewhere. What matters is whether the business owns something a competitor can't copy quickly, such as workflow, data, integrations or distribution, whether margins hold as usage grows, and how exposed it is if the model vendor changes prices, terms or retires the model it depends on."
---
AI washing is the gap between what a company says its AI does and what it actually does, and it turns up in plenty of the information memoranda crossing deal teams' desks. My test for it is blunt. Take the AI away: what's left of the business, and what does it cost to keep the AI running? If the answers are "most of it" and "not much, and we can show you", the AI is a feature. If they're "not much" and "we'd have to check", you're being sold a story.

None of this means the target is lying. Most AI washing is optimism plus loose language, written by a marketing team and signed off by a CEO who hasn't looked closely at the plumbing. The valuation consequence is the same either way. A business priced as proprietary AI software and delivered as a services firm with a chatbot has been mispriced, and the buyer pays the difference.

## Genuine, wrapped or painted on

It helps to have a spectrum in your head before the first management meeting, because "we use AI" covers everything from a research lab to a Zapier account.

At one end sits genuine proprietary capability. The company has trained or fine-tuned models on data it has the right to use, it can show you how it measures performance, and that performance is better than what a competitor would get by calling a public model with a decent prompt. The capability is wired into how customers work, so ripping it out would hurt.

In the middle is the wrapper. The product calls a third-party model from one of the big labs through an API, adds prompts, retrieval over the customer's documents, some workflow and a user interface, and sells the result. This is where most AI products live, including many good ones.

At the far end is marketing. A rules engine, some RPA scripts, or a team of people working a queue, described in the deck as "our AI". Somewhere in between you'll also find the hybrid: a real model handling the easy 70% of cases and a room of people quietly handling the rest.

A wrapper is not a red flag on its own. Building everything in house is usually the worse bet. MIT NANDA's [GenAI Divide study](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/) found that buying from specialised vendors and partnering succeeded about 67% of the time, while internal builds succeeded about a third as often. The questions for a wrapper are commercial ones. Could a competent competitor rebuild the product in a quarter? Who captures the value as usage grows, the target or its model vendor? And what happens to the business if that vendor raises prices, changes its terms or retires the model the product was tuned around?

Those three (defensibility, margin, dependency) decide whether a wrapper is a good business. The label doesn't.

## Regulators now have a name for it

On 18 March 2024 the US SEC brought its [first AI washing enforcement actions](https://www.sec.gov/newsroom/press-releases/2024-36). Two investment advisers, Delphia and Global Predictions, settled charges that they had made false and misleading statements about their use of AI, paying civil penalties of $225,000 and $175,000. Small numbers, and not software companies. The signal matters more than the fines: a regulator said plainly that claiming AI you don't have is a misstatement like any other.

Gartner followed in June 2025 with a warning about [agent washing](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027), the rebranding of assistants, RPA and chatbots as "agents". It estimated that only about 130 of the thousands of vendors claiming agentic AI are real, and predicted that over 40% of agentic AI projects will be cancelled by the end of 2027 on cost, unclear value or weak risk controls. If a target's growth plan says "agentic", treat the word as a claim to test.

For a UK buyer the practical exposure is less about a regulator and more about the SPA. Discover the gap after completion and your remedy is a warranty or misrepresentation claim: slow, expensive and uncertain. Discover it before signing and it's a price conversation.

## A protocol for verifying AI claims

This is the sequence I run on a target whose equity story leans on AI. It fits inside a normal technology workstream (the wider list is in my [technology due diligence checklist](/insights/technology-due-diligence-checklist)) and most of it can be done in the first week.

1. Get a live demo on data they didn't prepare. Bring a handful of real, messy inputs of your own, or ask a reference customer to supply them. Watch it run end to end. A polished demo on curated examples tells you the sales team is good.
2. Ask for the architecture diagram and the model inventory. Which models, from which vendors, doing which job, called from where. Then read the vendor contracts: pricing, rate limits, data use terms, notice periods for change.
3. Work out inference cost per customer or per transaction, and plot it against usage. Then look at where it sits in the accounts. Inference booked in opex under "platform" or "R&D" flatters gross margin.
4. Check what data the target has rights to train on. Customer contracts, privacy notices and UK GDPR lawful basis, and any scraped or licensed datasets. A model trained on data the company didn't have the right to use is a liability on the balance sheet, whatever the accuracy numbers say.
5. Look for people behind the automation. Ask how exceptions are handled and who handles them. Read the org chart for "operations analysts" or "data reviewers" and find out what they do all day. Offshore contractor invoices are often more informative than the product page.
6. Interview the engineers, not only the CTO. Ask the person who maintains the prompts what breaks most often. Ask who gets paged when accuracy drops. The CTO gives you the strategy; the engineers give you the truth about Tuesday.
7. Ask how they know it works. Is there an evaluation set, is it versioned, and is it run before every model or prompt change? Is live accuracy monitored, and what was the last regression they caught? "Customers would tell us" is an answer, and a poor one.
8. Test vendor concentration and deprecation risk. If one model provider sits under every feature, ask what happened last time that provider retired a model version, how long the migration took and whether quality dropped.

None of these steps needs specialist tooling. They need someone who has built these systems recently enough to know which answers are rehearsed.

## A worked example: when margin moves with usage

Picture an illustrative target: a document processing software business with 400 customers paying an average of £30k a year, so £12m of ARR. Management accounts show 78% gross margin. The equity story is "AI-native automation".

Step 3 of the protocol finds that each customer runs around 20,000 documents a month through a third-party model at roughly 2p per document. That's £400 a month, or £4,800 a year per customer. Across 400 customers it's £1.92m, all booked in opex under platform costs. Moved into cost of sales where it belongs, that's 16 points of margin: 78% becomes 62%.

Step 5 finds six people in an operations team reviewing low-confidence outputs before they reach customers. At £45k fully loaded, that's £270k a year, another 2.25 points. Gross margin is now about 60%.

Then the growth plan. Management expect usage per customer to double over the hold, on flat pricing, because customers will push more document types through. Inference doubles to £3.84m. With the review team unchanged, gross margin falls to about 44%.

Nothing here is fraud. The AI works. But a 78% margin software business and a 44% margin business carrying a heavy variable cost of goods do not deserve the same multiple, and the difference in enterprise value will usually dwarf the cost of the diligence that found it. The fix may be straightforward (usage-based pricing, a cheaper model for routine documents, better confidence thresholds), and that belongs in the value creation plan. It just shouldn't be paid for at the entry price.

## Scoring the claim

I score six dimensions from 0 to 3 and report each one separately.

| Dimension | 0 looks like | 3 looks like |
|---|---|---|
| Evidence of function | Demo only works on prepared data | Performs on your data, live, end to end |
| Proprietary element | Prompt and interface over a public model | Data, workflow or models a rival can't copy within a year |
| Unit economics | Inference cost unknown or hidden in opex | Cost per customer known, in cost of sales, margin stable with usage |
| Data rights | Training data of unclear origin | Documented rights for every dataset used |
| Dependency | One vendor, no fallback, no tested migration | Tested ability to switch model with measured quality impact |
| Operational maturity | No evaluation set, no monitoring | Versioned evals, live monitoring, a named owner |

I don't add them up. Averages hide the thing that matters. A 0 on evidence of function or data rights is a deal issue by itself, whatever the other scores say. A wrapper can score 0 on proprietary element and still be a fine investment if unit economics and dependency score well; you just price it as the good software business it is, not as an AI company.

## What the findings do to price and the SPA

Findings should flow somewhere specific. If they only reach the red, amber, green summary, they've been wasted.

Valuation first. Re-base gross margin with inference and human review in cost of sales, then model margin at the usage levels the business plan assumes. Where the multiple was justified by proprietary AI and the evidence shows a wrapper, the comparable set should change too. Add any known vendor price increases or forced migrations to the cost base.

Warranties next. I'd expect a specific set on AI: that descriptions of AI capability in the disclosed materials are accurate; a complete list of third-party models and vendors relied on; compliance with those vendors' terms; documented rights to all training data, including personal data under UK GDPR; and no material manual processing presented to customers as automated. If the target sells into the EU, add its classification under the EU AI Act.

Specific indemnities for anything you've actually found. Warranty and indemnity insurance won't normally cover known issues, so if diligence finds a model trained on customer data the contracts don't permit, that needs a specific indemnity, a retention or a price adjustment. Pick one. Leaving it in the report and hoping is not a mitigation.

There's a wider guide to how AI findings should shape the investment case in my piece on [AI due diligence for private equity](/insights/ai-due-diligence-private-equity).

## If you're the seller, test yourself first

Everything above works in reverse. If you're preparing a business for exit and AI features in the equity story, assume a buyer will run something like this protocol, and run it yourself six months earlier.

Build an evidence pack: the architecture diagram, a model and vendor inventory, inference cost per customer booked where a buyer will book it, your evaluation results over time, a data rights register and an honest description of where people still sit in the loop. Then rewrite the IM so every AI claim matches the pack. "We use a third-party model with our own retrieval and workflow, and here's why customers can't replicate it" is a strong sentence. "Proprietary AI" that unravels in week three of diligence costs you price, and it costs you trust in every other number you've presented.

Being precise is cheap. Being caught out isn't.

The best AI story in a data room is the one that survives someone checking it. If you've got a target whose case leans on AI and you want it tested properly before IC, that's the core of my [AI due diligence](/ai-due-diligence) work, and the [first call](/contact) is free.
