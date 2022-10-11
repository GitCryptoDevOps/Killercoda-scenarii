https://learning.oreilly.com/library/view/exploring-c20-the/9781484259610/html/319657_3_En_28_Chapter.xhtml

To get help:

`docker run --rm -it --name doxygen -v $(pwd)/src:/src -v $(pwd)/report/:/report devopstestlab/doxygen -h`{{execute}}

`mkdir src/`{{execute}}

Let's create a configuration file:

`docker run --rm -it --name doxygen devopstestlab/doxygen -g - > src/Doxyfile`{{execute}}

Let's modify the configuration file:

`vi Doxyfile`{{execute}}

We want to generate a RTF file. So, we change:

`GENERATE_RTF           = NO`

to:

`GENERATE_RTF           = YES`

We want to store the generated files in the `/output` file in the Docker container. Change:

`OUTPUT_DIRECTORY       =`

to:

`OUTPUT_DIRECTORY       = /output`

To enable Doxygen to utilize Javadoc style briefs, change:

`JAVADOC_AUTOBRIEF      = NO`

to:

`JAVADOC_AUTOBRIEF      = YES`

To optimize the generated documentation for Java based source code, change:

`OPTIMIZE_OUTPUT_JAVA   = NO`

to:

`OPTIMIZE_OUTPUT_JAVA   = YES`

To not generate LaTex based documentation, change:

`GENERATE_LATEX         = YES`

to:

`GENERATE_LATEX         = NO`

To sort the elements in alphabetical order, change:

`SORT_BRIEF_DOCS        = NO`

to:

`SORT_BRIEF_DOCS        = YES`

If you want to include private class members and static file members in the generated documentation, change:

`HIDE_SCOPE_NAMES       = NO`

to:

`HIDE_SCOPE_NAMES       = YES`

To extract all elements found in the source code, change:

`EXTRACT_ALL            = NO`

to:

`EXTRACT_ALL            = YES`
