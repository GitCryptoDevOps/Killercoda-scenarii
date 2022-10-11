`docker run --rm -v $(pwd)/repo:/data devopstestlab/code-maat /code-maat.sh 2021-01-01`{{execute}}

`ls -l ansible/report*.csv`{{execute}}

codemaat abs-churn /reports/report_abs-churn.csv $1
codemaat age /reports/report_age.csv $1
codemaat author-churn /reports/report_author-churn.csv $1
codemaat authors /reports/report_authors.csv $1
codemaat communication /reports/report_communication.csv $1
codemaat coupling /reports/report_coupling.csv $1
codemaat entity-churn /reports/report_entity-churn.csv $1
codemaat entity-effort /reports/report_entity-effort.csv $1
codemaat entity-ownership /reports/report_entity-ownership.csv $1
codemaat fragmentation /reports/report_fragmentation.csv $1
codemaat identity /reports/report_identity.csv $1
codemaat main-dev /reports/report_main-dev.csv $1
codemaat main-dev-by-revs /reports/report_main-dev-by-revs.csv $1
#codemaat messages /reports/report_messages.csv $1
codemaat refactoring-main-dev /reports/report_refactoring-main-dev.csv $1
codemaat revisions /reports/report_revisions.csv $1
codemaat soc /reports/report_soc.csv $1
codemaat summary /reports/report_summary.csv $1

For more information: https://github.com/adamtornhill/code-maat
