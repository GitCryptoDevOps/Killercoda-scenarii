To get help:

`docker run --rm devopstestlab/cucumber --help`{{execute}}

export platform=desktop
docker run --shm-size 256M --rm --name test -v $PWD/tests:/app cucumber bash -c "cucumber features --tags @'$tag' --format html --out=html_report/test_report.html RUN_COMMAND=\"--tags @$tag --tags @$platform DRIVER=driver_$platform\" DRIVER=driver_$platform"
docker run --shm-size 256M -it --rm --name test -v $PWD/tests:/app cucumber bash

docker rm -f ${run_name}

WORKDIR /app

`docker run --shm-size 256M --rm --name test -v $PWD:/tests cucumber bash -c "cucumber features --format html --out=results/report.html RUN_COMMAND=\"DRIVER=driver_$platform\" DRIVER=driver_$platform"`{{execute}}
