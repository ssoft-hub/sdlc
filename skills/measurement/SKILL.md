---
name: measurement
description: Measures, analyses and reports the values a project decides on - test coverage, open defects, build time, a benchmark - naming an unmeasured one an estimate. Use when a figure is measured, estimated, reported or used for a decision rather than a check passed or failed; when a measure, a dashboard or data collection in the pipeline or tracker is set up or changed.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Measurement

This skill refines `software-life-cycle` for the measurement process: the project collects,
analyses and reports objective data and information on its products, services and processes, to
support effective management and to demonstrate their quality. The agent shall follow the
organization's policy and procedures for measurement, where the organization has set them.

| Term | For a value measured and reported in the work |
|---|---|
| measure | a variable measurement assigns a value to: the share of the requirements the tests cover, the number of open defects, the build time |
| information need | the information needed to manage a goal, a risk or a problem, such as whether a release is ready; for a request, the question it asks |
| information product | indicators with their interpretation that answer an information need: a report, a display of indicators, a summary in a reply to the user |
| measurement user | whoever decides on, reviews or improves on the information products: the user, the maintainers, the processes that decide on the results |
| measurement result | a value obtained by measurement under a measure; a value obtained otherwise - an expectation, a value from an earlier run - is an estimate |
| measurement strategy | what the project has recorded - the measures it collects, how and when, such as in its enabling systems |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| adopting or changing the set of measures the project collects, and the thresholds by which the project acts - a threshold of a measure that stops a change from entering a baseline; a measure developed for one request joins the set only by this act | the measure does not answer the information need for which it is requested | Measure; No measure without a need |
| passing measurement results outside the project beyond what the agreement and the strategy provide for | the data are not checked; the receiver is not authorized for information with a restriction; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Collection; Reporting |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the record of a measure with its
information need. Where a rule of the project names who changes the measures the project collects -
a maintainer -, the agent shall take an explicit request as that decision only where the user is
that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| measurement is planned or set up - needs, measures, resources, collection by the enabling systems - | `references/planning.md` | Need; Measure |
| the information products or the measurement activities are evaluated, or an improvement to measurement is found | `references/evaluation.md` | Feedback |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## Measuring and reporting a value

Outcomes served: needs defined, measures defined, data collected, data analysed, information
provided.

The common situation is one value measured and reported in the work -
"what is the test coverage of this change?".

| Step | What the agent does |
|---|---|
| Need | shall identify the information need a measurement serves |
| Measure | shall select a measure that satisfies the need, or develop one, and record it with the information need it serves wherever the results are recorded |
| No measure without a need | shall not introduce a measure that serves no information need |
| Collection | shall collect, store and check the data with the context needed to check, understand and evaluate them - when, where from and how each value was obtained |
| Estimate | shall call a value it has not measured or not checked an estimate and not report it as measured |
| Grounds of an estimate | shall say what an estimate rests on |
| Analysis | shall analyse and interpret the data and develop the information product that answers the need |
| Reporting | shall record the results where the project names a place for them, and communicate them to the measurement users, a reply to the user included |
| Place of the record | should propose a place for the results where the project names none, as `software-life-cycle` sets for records |
| Availability | shall make accurate and current information products available to the decision-making and communication processes that need them |
| Timing and form | should communicate the results in time and in a form fit for the decision - corrective actions, risk management, improvements |
| Feedback | shall gather feedback on the suitability of the information products for their intended use; for a reply, the user's answer to it is that feedback |

The recommendations for the project that follow from the results are left to project assessment and
control.
