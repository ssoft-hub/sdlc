# An architecture decision

## Acts of this situation

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| selecting the preferred architecture or a key architecture decision, and changing the accepted architecture | the decision contradicts an accepted requirement, a constraint, the accepted architecture or its principles of design and evolution; leaves a key concern or a critical requirement unaddressed | Selection, Evolution |
| establishing the architecture baseline | - | Baseline, Communication |

The agent shall treat a request naming an architecture decision - "split the export into its own
service" - as the explicit request for its selection, within the limits of this table.

| Term | For an architecture decision |
|---|---|
| system element | a part of the system that can be implemented to meet specified requirements: in software, a software item, component or unit, a unit being separately compilable code; hardware; a manual operation |
| concern | a benefit or a problem in the system for one or more stakeholders |
| candidate | an alternative architecture or architecture decision: a style, a decomposition, a component, a technology, a placement of elements on the platform |
| view | a work product expressing the architecture for specific concerns: a diagram, a section of the architecture document |

The agent should leave to design definition the flexibility and the trade-offs the architecture
need not fix: the architecture answers for suitability, viability and the desired results and
outlives changes of design - in a product line, it spans several designs and keeps the line
coherent and compatible -, the design for compatibility and the feasibility of building and
integrating.

## Preparing for architecture definition

Outcomes served: concerns addressed, candidates evaluated.

| Step | What the agent does |
|---|---|
| Concerns | shall identify the stakeholder concerns the decision bears on |
| Their content | should take the stakeholders from stakeholder needs and requirements definition, add those this work finds, and include the concerns of each life cycle stage - operation, support, evolution of the system and its environment, production, disposal - and the intentional, unintentional and accidental threats, safety threats included |
| Criteria | shall define the evaluation criteria from the stakeholder concerns and the key requirements before the candidates are evaluated |
| Their kinds | may include among the criteria the quality characteristics - modularity, maintainability, extensibility, scalability, reliability, safety, usability - and the results of a make, buy or reuse analysis |

## Developing models and views of candidate architectures

Outcomes served: context defined, concerns addressed, concepts allocated.

| Step | What the agent does |
|---|---|
| Context | shall define and record the context and the boundaries the decision bears on: the interfaces and interactions of the system with external entities |
| Entities | shall define the architectural entities and their relationships that address the key stakeholder concerns and the critical requirements |
| Driving requirements | should take into the architecture only the requirements that drive it; the design addresses them all |
| Uncovered concern | should address a key concern no requirement covers yet |
| Requirement defect | shall name a requirement the work shows unaffordable, impossible or no system requirement as a defect of an accepted output, with the outputs it affects, and pass a change request to the system/software requirements definition process, which decides it |
| Allocation | shall allocate to the architectural entities, and record, the concepts, properties, characteristics, behaviours, functions and constraints significant to the decision; an implementation decision allocated here constrains the requirements of the next level |
| Objects allocated | should treat physical, logical and conceptual objects alike as objects of allocation |

## Relating the architecture to design

Outcomes served: context defined, views developed, concepts allocated, elements defined, aligned
with the requirements.

| Step | What the agent does |
|---|---|
| Elements | shall define the system elements that relate to the architectural entities and the nature of these relationships |
| Record | shall record the architecture, or its change, with the place of each system element in it |
| Interfaces | shall define and record the interfaces and interactions between the system elements and with external entities: the internal and external interfaces of each element |
| Their detail | may define the interfaces only to the detail the architecture intent needs, leaving their refinement to design definition |
| Requirements | shall partition, align and allocate all the system requirements to the architectural entities and the system elements |
| Element requirements | shall establish the functional and non-functional requirements of each element |
| Allocation record | shall record the allocation |
| Design characteristics | shall allocate the system elements and the architectural entities to design characteristics |

## Evaluating architecture candidates

Outcomes served: concerns addressed, candidates evaluated, baseline achieved, aligned with the
requirements.

| Step | What the agent does |
|---|---|
| Evaluation | shall evaluate each candidate against the constraints and the requirements: traceability to and consistency with the system requirements, appropriateness of the design standards and methods, feasibility of the software items meeting their allocated requirements, feasibility of operation and maintenance |
| Confirmation | shall confirm that the candidate satisfies all the system and stakeholder requirements |
| Against concerns | shall evaluate each candidate against the stakeholder concerns by the criteria |
| Results | shall record the results of both evaluations |
| Analysis | may state the analysis question and apply system analysis and risk management to the evaluation |
| Selection | shall select the preferred architecture and the key decisions, and record the rationale of the selection |
| Reuse proposal | shall pass, where the selection reuses an existing element, the reuse proposal to the knowledge management process, which evaluates its suitability |
| Decision support | may apply decision management to the selection |
| Agreement | shall obtain the agreement of the stakeholders the decision bears on from those stakeholders, as `references/managing.md` sets for the formal agreement |
| Baseline | shall establish an architecture baseline for the selected candidate, through configuration management, reflecting the architecture and its relation to the requirements |
| Its content | should make up the baseline of the models, views and other descriptions of the architecture: the architecture document, the decision records |
| Communication | shall communicate the baseline and each change to it to every party working to it, and record each communication |

## Managing the selected architecture

Outcomes served: views developed, baseline achieved, aligned with the requirements, traceability
developed.

| Step | What the agent does |
|---|---|
| Information items | shall maintain the key information items selected for baselines |
| Configuration | should have configuration management establish and maintain the baselines and the configuration items |
| Evolution | shall organize, evaluate and manage the evolution of the models and views, a change to the accepted architecture included |
| Traceability | shall maintain the traceability of the architecture elements to the stakeholder and system requirements, and of the requirements allocated to the elements and their interfaces to the customer's requirements baseline, keeping the system requirements consistent with the architecture and the software requirements with the software design |
