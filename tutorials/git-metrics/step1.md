`git clone git@github.com:tj/git-extras.git`{{execute}}

`mv git-extras/ repo/`{{execute}}

`mkdir repo`{{execute}}

`mkdir reports`{{execute}}

Generate a Cloc report:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-cloc`{{execute}}

`cat reports/cloc.json`{{execute}}

Generate a Git summary report:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-summary`{{execute}}

`cat reports/summary.json`{{execute}}

Generate a Changelog report:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-changelog`{{execute}}

`cat reports/changelog.txt`{{execute}}

Generate a Git log report:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-log`{{execute}}

`cat reports/log.json`{{execute}}

Generate a Git stats report:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-stats`{{execute}}

`cat reports/stats.json`{{execute}}

Generate a Git effort report:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-effort`{{execute}}

`cat reports/effort.json`{{execute}}

Generate a Git count report:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-count`{{execute}}

`cat reports/count.json`{{execute}}

Get metrics to monitor the operations on Git:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-count-commits-per-day`{{execute}}

`cat reports/count-commits-per-day.json`{{execute}}

Updated lines:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics BRANCH=master DURATION=365 get-count-updated-lines-per-day`{{execute}}

`cat reports/updated_lines_per_day.json`{{execute}}

Branch date:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-list-branch-per-date`{{execute}}

`cat reports/branches_per_date.json`{{execute}}

Branch not merged:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-list-branch-not-merged`{{execute}}

`cat reports/branches_not_merged.txt`{{execute}}

Get the Git repo size:

`docker run --rm -v $PWD/repo:/src -v $PWD/reports:/reports devopstestlab/git-metrics get-repo-size`{{execute}}

`cat reports/repo_size.json`{{execute}}
