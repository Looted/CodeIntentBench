# comments

Decisions written as comment blocks in the code they are linked to (`harness/src/arm-tools/render-comments.ts`),
with the same facts and wording as the docs arm: the statement, why, status, firmness, recorded, supersedes or
superseded by, and where. A block goes right above the declaration of each linked symbol, or above the file's
first declaration when the file names none of them. A decision with no code path goes beside the decision it
supersedes or that supersedes it; a decision with no anchor at all is not delivered, and
`comments-report.json` in the run directory lists them. The question this arm answers: is writing the
reason in a comment as good as a store?
