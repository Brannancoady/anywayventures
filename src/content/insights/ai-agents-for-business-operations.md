---
title: "AI agents for business: where they work and where they don't"
standfirst: "Most of what gets sold as an agent is a workflow with a model call in the middle. That's usually the right answer. Here is how to tell when it isn't."
description: "AI agents for business operations, from an operator: how agents differ from RPA and automation, where they pay back, where they fail, and how to control them."
kicker: "DELIVERY"
published: 2026-09-25
updated: 2026-09-25
read: "9 MIN"
readLong: "Nine minutes"
audience: "COOs, CEOs, owner-managers, operations directors"
service: "Embedded AI delivery"
serviceHref: "/embedded-ai-delivery"
pull: "The best agent in most mid-market businesses is a dull one."
order: 9
draft: true
tags: ["AI agents for business", "AI agents use cases", "agentic AI in operations", "AI agents mid-market", "AI workflow automation", "AI agent vs RPA"]
related: ["why-ai-pilots-fail", "how-to-implement-ai-mid-market-business"]
faq:
  - q: "What is an AI agent in business?"
    a: "An AI agent is software that takes a sequence of actions across your systems towards a goal, using some judgement about what to do next. It might read an email, look up a customer, check stock and draft an order. A chatbot only answers questions, and a script only follows fixed rules. The judgement is what makes it an agent, and also what makes it harder to control."
  - q: "What is the difference between an AI agent and RPA?"
    a: "RPA follows fixed rules through screens or systems, so it breaks when the input changes shape. An AI agent can cope with messy inputs such as free text emails or varied PDFs and decide which step comes next. In practice the best builds combine them: deterministic steps for anything predictable, and a model only where reading or judgement is genuinely needed."
  - q: "Where do AI agents work best in a mid-market business?"
    a: "They work best in document heavy back office processes with real volume: supplier invoice processing, order entry from emails and PDFs, quote preparation, onboarding checks, first line service triage and reconciliations. These share clear inputs, a system to write into, a checkable outcome and a person who can approve or handle exceptions. Low volume or unmapped work rarely pays back."
  - q: "Why do agentic AI projects fail?"
    a: "Gartner expects over 40% of agentic AI projects to be cancelled by the end of 2027, citing escalating costs, unclear business value and inadequate risk controls. In mid-market businesses the usual causes are a scope that is too broad, no clean access to the systems the agent needs, no evaluation set to prove accuracy, and no exception queue for the cases it gets wrong."
---
AI agents for business operations are real, useful and wildly oversold, often in the same sales deck. In most mid-market businesses I walk into, the thing being pitched as an agent would be cheaper, safer and quicker to build as a plain workflow with one model call in the middle. Agents earn their keep in a narrow band of work: high volume, document heavy, messy inputs, a clear system to write into, and a person who can check the output.

That band is bigger than sceptics think and much smaller than vendors claim. This piece is an operator's map of it: what an agent actually is, where it pays back today, where it quietly burns money, and the controls that decide whether it's still running six months after launch. The best agent in most mid-market businesses is a dull one.

## What an agent is, and what it isn't

The word has been stretched to cover almost anything with a model inside it, so it helps to be precise.

A **chatbot** answers questions. It talks. It doesn't do anything in your systems unless a person copies its answer somewhere.

**RPA** (robotic process automation) follows fixed rules through screens and systems. It is fast and cheap when the input always looks the same, and it breaks the moment a supplier changes their invoice template.

A **plain automation or script** moves data between systems on a trigger. New row in the CRM, create a job in the scheduling tool. No judgement, no reading.

An **AI agent** is software that can take a sequence of actions across systems towards a goal, with some judgement about which action comes next. It reads an email, works out it's an order, finds the customer, checks the price list and stock, notices the delivery address is new, and decides whether to draft the order or flag it. The judgement is the point. It's also the risk.

[Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027) has a name for the stretching: "agent washing", the rebranding of assistants, RPA and chatbots as agents. It estimated that only about 130 of the thousands of vendors claiming agentic AI are the real thing, and predicted that over 40% of agentic AI projects will be cancelled by the end of 2027 because of escalating costs, unclear business value or inadequate risk controls. None of those three causes is about the model being too weak. They're all about scope, economics and control, which is good news, because those are things an operator can fix.

## Why a boring workflow usually wins

Here's the pattern I'd default to. Build the process as a fixed workflow: the steps, the order, the system calls, the checks. Then drop a model in at the one step that needs reading or judgement, usually turning an unstructured input (an email, a PDF, a phone note) into structured data. Everything else stays deterministic.

That design is easier to test, cheaper to run and far easier to explain to an auditor or a finance director. When it goes wrong you know which step failed. A fully autonomous agent that decides its own route through ten tools is harder on all four counts.

So when is a true agent, with the model choosing its own steps, the better answer? Roughly when three things are true at once. The route through the work genuinely varies case by case, so you can't write it down as one flow. The number of distinct routes is large enough that hard-coding them is a project in itself. And every action the agent can take is either reversible or sits behind an approval. First-line service triage across several systems can meet that bar. Supplier invoice entry almost never does.

A useful test when a vendor demos an agent: ask them to draw the flow. If they can, you probably want the workflow. If they genuinely can't, and the actions are safe, you might want the agent.

## Where AI agents work in mid-market operations today

The use cases that pay back share a shape: lots of documents, a known destination system, an outcome you can check, and a team currently spending hours keying, matching or chasing.

- **Supplier invoices.** Read invoices from email and PDF, match to purchase orders and goods received, code them, post the clean ones for approval, queue the mismatches.
- **Order entry from emails and PDFs.** Customers send orders in every format imaginable. The agent reads them, maps products and prices, and drafts the order in the ERP.
- **Quote preparation.** Pull the spec from an enquiry, look up pricing rules and past quotes, draft the quote for an estimator to check and send.
- **Onboarding checks.** Gather documents for a new customer, supplier or employee, check them against a list, chase what's missing, flag what looks wrong.
- **First-line service triage with handoff.** Classify incoming requests, pull the account context, answer the simple ones from approved content, and route the rest to the right person with a summary.
- **Reconciliations with exception queues.** Match bank lines, statements or intercompany entries, clear the obvious matches, and hand a short, explained list of exceptions to a person.

Notice that none of these is customer-facing decision making. They're back office, the output is checked, and the value comes from moving a person from doing the work to reviewing it.

## Where they don't work

Agents struggle, and usually get quietly switched off, in four situations.

**Open-ended customer-facing decisions without guardrails.** Letting a model decide refunds, credit terms or contract changes directly with customers is how you end up explaining yourself to the board. Keep a person on any decision that commits money or changes a customer relationship until you have months of evidence.

**Anything without clean system access.** If the agent has to scrape a green-screen system, or the data it needs lives in someone's personal spreadsheet, the build becomes an integration project with a model attached. Fix the access first or pick a different process.

**Low-volume work.** An agent that saves eight minutes on a task done twenty times a month returns under three hours. It will cost more than that to maintain.

**Processes nobody has mapped.** If three people do the job three different ways, an agent will learn to do it a fourth. Map the process, agree the one way, then automate it. I cover this failure in more depth in [why AI pilots fail](/insights/why-ai-pilots-fail).

## Picking candidates: volume against variability

The quickest filter I use is a two by two. Plot each candidate process on volume (how many times a month it runs) and variability (how much the inputs and routes differ from case to case).

| | Low variability | High variability |
|---|---|---|
| **High volume** | Plain automation or RPA. Don't pay for judgement you don't need. | The sweet spot. Workflow plus a model, or a narrow agent, with an exception queue. |
| **Low volume** | Leave it, or a simple script if it's annoying enough. | Leave it with people. Not enough repetition to learn from or pay back. |

Then score the high-volume, high-variability candidates on two more questions: value (hours returned per month, times a loaded hourly cost) and risk (what happens if the agent gets one wrong and nobody notices for a day). High value and low risk goes first. High value and high risk goes second, with heavier controls. Low value goes nowhere, however interesting the demo was.

## A worked example: order entry at a distributor

Take an illustrative £50m industrial distributor. Customers send around 250 orders a day by email, mostly as PDFs or free text, some as photos of handwritten sheets. A team of four keys them into the ERP. Each order takes about six minutes including lookups, so that's 1,500 minutes, or 25 hours, a day. Over 21 working days, roughly 525 hours a month.

Here's the agent, step by step.

1. **Intake.** A shared mailbox rule passes every order email and attachment to the agent. Nothing else in that mailbox is visible to it.
2. **Read.** The model extracts customer, delivery address, requested date, and each line: description, quantity, customer part number.
3. **Match.** Deterministic lookups, not the model, find the customer account, map customer part numbers to your SKUs using the cross-reference table, and pull contract prices and stock.
4. **Check.** Rules flag anything unusual: a new delivery address, a quantity more than three times the customer's normal, a price below contract, an unrecognised part, a credit hold.
5. **Draft.** Clean orders are drafted in the ERP in a held status. Nothing is released to the warehouse yet.
6. **Approve.** A person reviews the draft against the source document shown side by side and releases it with one click.
7. **Exceptions.** Flagged orders go to a queue with the reason attached, so the person starts from "part 44-B not recognised" rather than from scratch.

Assume 70% of orders come through clean and take 90 seconds to approve, and the other 30% still take the full six minutes. That's 175 × 1.5 = about 263 minutes plus 75 × 6 = 450 minutes, or roughly 12 hours a day. The saving is about 13 hours a day, or around 275 hours returned a month. Assume model and hosting costs of 10p per order: 250 × 21 × £0.10 is about £525 a month. The arithmetic isn't close.

What makes it survivable is the controls, not the model. The agent can draft but not release. It can read one mailbox, not all of them. Every action is logged with the source document, the extracted data and who approved it. And there's a weekly check of the exception queue to find the patterns worth fixing, which is how 70% clean becomes 85% over a few months.

## Design principles that keep an agent alive

Most of what separates a production agent from a cancelled one is unglamorous. The list I work through on every build:

- **Narrow scope.** One process, one mailbox, one destination. Widen it once it's earned the right.
- **Human approval at the right step.** Before anything irreversible: releasing an order, paying an invoice, emailing a customer. Not at every step, or you've built a slower manual process.
- **Exception queues.** The agent must be able to say "I'm not sure" and hand over with a reason. An agent that always produces an answer is the dangerous kind.
- **Audit logs.** Input, output, action, approver, timestamp. Your auditors will ask, and so will UK GDPR if personal data is involved.
- **Permissions like a new employee.** Give it the access you'd give a sensible new starter in week one. Read most things, write to a held status, approve nothing.
- **An evaluation set.** A few hundred real, historical cases with the correct answers, run before launch and after every change. Without one, "it seems to work" is the only evidence you have.
- **Cost per task.** Track it from day one. Model costs, retries and review time per order, per invoice, per ticket. This is where Gartner's escalating costs show up first.
- **A fallback when the model is wrong.** A clear route back to the manual process, and a person who knows it's theirs. If the model provider has an outage on month-end, the business still closes.

For the wider sequencing (which process first, who owns it, how to measure the baseline before you start) see [how to implement AI in a mid-market business](/insights/how-to-implement-ai-mid-market-business).

## What good looks like

A good first agent is small enough to describe in two sentences, measured against a baseline taken before it went live, and owned by someone in operations rather than by IT or an outside supplier. Six months on, it's still running, the exception rate has fallen, and the team talks about it the way they talk about the ERP: a bit dull, occasionally annoying, and not something they'd give back.

That's the bar. Not autonomy, not a clever demo. Hours returned to the business each month, still running unattended after the builders have left.

If you've got a process that looks like the order desk above, that's the work we do in a short, fixed-price [embedded AI delivery](/embedded-ai-delivery) engagement.
