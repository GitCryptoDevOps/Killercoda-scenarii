`docker pull asciidoctor/docker-asciidoctor`{{execute}}

`mkdir src/`{{execute}}

`mv *.adoc src/`{{execute}}

`docker run --rm -v $PWD/src:/documents/ asciidoctor/docker-asciidoctor asciidoctor -h`{{execute}}

`cat src/sample-with-diagram.adoc`{{execute}}

`docker run --rm -v $PWD/src:/documents/ -v $PWD/output:/output/ asciidoctor/docker-asciidoctor asciidoctor -r asciidoctor-diagram -D /output/ sample-with-diagram.adoc`{{execute}}

`cat src/sample-with-diagram.adoc`{{execute}}

`docker run --rm -v $PWD/src:/documents/ -v $PWD/output:/output/ asciidoctor/docker-asciidoctor asciidoctor-pdf -r asciidoctor-diagram -D /output/ sample-with-diagram.adoc`{{execute}}

`cat src/sample.adoc`{{execute}}

`docker run --rm -v $PWD/src:/documents/ -v $PWD/output:/output/ asciidoctor/docker-asciidoctor asciidoctor-pdf -D /output/ sample.adoc`{{execute}}

`docker run --rm -v $PWD/src:/documents/ -v $PWD/output:/output/ asciidoctor/docker-asciidoctor asciidoctor-revealjs -r asciidoctor-diagram -D /output/ sample.adoc`{{execute}}
