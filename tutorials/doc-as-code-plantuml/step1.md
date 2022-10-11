To get help:

`docker run --rm -v $PWD:/data devopstestlab/plantuml -h`{{execute}}

We will use the following PlantUML file:

`cat demo.uml`{{execute}}

It uses an include file for colors:

`cat colors.inc`{{execute}}

Now, let's convert the PlantUML files into an image:

`docker run --rm -v $PWD:/data devopstestlab/plantuml -o output *.uml`{{execute}}

Let's check the image has been created:

`ls -l output/`{{execute}}

Now, let's see the result. Click on the tab `demo.png`.

The image will be displayed in a new tab of the browser.

You can use the Google plugin `PlantUML Viewer` here: https://chrome.google.com/webstore/detail/plantuml-viewer/legbfeljfbjgfifnkmpoajgpgejojooj.

PlantUML models are available on `modele-da`: https://github.com/bflorat/modele-da.
