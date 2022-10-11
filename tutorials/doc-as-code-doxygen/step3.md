`cp Doxyfile src/`{{execute}}

Now, let's run Doxygen on the source code in the `src/` directory.

`docker run --rm -it --name doxygen -v $PWD/src:/src -v $PWD/output/:/output devopstestlab/doxygen Doxyfile`{{execute}}

`open output/html/index.html`{{execute}}

`open output/rtf/refman.rtf`{{execute}}
