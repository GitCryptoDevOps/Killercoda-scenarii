The `featurebook.json` is a metadata file about the generated document. Let's see its content:

`cat featurebook.json`{{execute}}

Let's ignore the `*.txt` and `.DS_Store` files by adding them in the `.featurebookignore` file:
`cat .featurebookignore`{{execute}}

Let's use two feature files (`1.feature` and `2.feature`):

`cat 1.feature`{{execute}}

`cat 2.feature`{{execute}}

Let's generate the Feature Book:

`docker run --rm --name feature_book -e REPORT_FILE=output/feature_book.pdf -v $PWD:/src -v $PWD:/report devopstestlab/feature_book get_feature_book`{{execute}}
