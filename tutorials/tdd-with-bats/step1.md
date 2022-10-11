Update the packages:

`apt-get update -y`{{execute}}

Install BATS:

`apt-get install -y bats`{{execute}}

Check BATs is correctly installed:

`bats -version`{{execute}}

Let's create a Nginx Docker image. First, create a Dockerfile to create custom Nginx 1.20 image:

`cat Dockerfile`{{execute}}

Create a basic configuration file:

`cat www.conf`{{execute}}

Create a basic HTML page displaying "Helloworld!":

`cat index.html`{{execute}}

Let's build the Docker image:

`docker build -t nginx .`{{execute}}

Let's run a Docker container and display the nginx version:

`docker run --rm nginx nginx -v`{{execute}}

Let's check that the 1.20 version is installed in the Docker container:

`docker run --rm -it nginx nginx -v | grep 1.20`{{execute}}

The `grep` command returns a code status `0` if the string is found, `1` otherwise:

`echo $?`{{execute}}

So the result is `0`.

Let's check that the 1.21 version is installed in the Docker container:

`docker run --rm -it nginx nginx -v | grep 1.21`{{execute}}

Let's see the code result:

`echo $?`{{execute}}

So the result is `1`: the string `1.21` is not found.

Let's create a directory for the tests:

`mkdir tests`{{execute}}

Let's create a test:

`vi tests/nginx.bats`{{execute}}

Let's test the nginx version is `1.20`. For that, we have to display the nginx version with the command:

`docker run -d --name nginx -p 80:80 nginx -v`{{execute}}

So, add the following content in the `nginx.bats` file:

```
setup() {
  docker run -d --name nginx -p 80:80 nginx
}

teardown() {
  docker stop nginx
  docker rm nginx
}

@test "nginx version is correct" {
  run docker exec -it nginx nginx -v
  [ "$status" -eq 0 ]
  [[ "$output" == *"1.21"* ]]
}
```{{copy}}

`[ "$status" -eq 0 ]` test the return code of the `run` command.

`[[ "$output" == *"1.21"* ]]` test the output of the `run` command. `*` are wildcards. So we test the string `1.21` in included in the output.

The `setup()` function is called at the beginning. Here it runs the Docker container. The `teardown()` function is called at the end. Here is stops and destroys the Docker container.

Let's run the tests:

`bats tests`{{execute}}

The test is failed. It's normal, the Nginx version is `1.2.0` while we test the `1.2.1` version.

Let's modify the test and specify the `1.2.0` version:

`vi tests/nginx.bats`{{execute}}

Change the line `grep 1.21` by `grep 1.20`.

Let's run again the test:

`bats tests`{{execute}}

The test is successful. Great!

Now, let's add another test to check the HTML page displayed by the nginx server:

`vi tests/nginx.bats`{{execute}}

We want to check the message `Helloworld!` is displayed. Let's add:

```
@test "nginx HTML page is correct" {
  run curl localhost:80
  [ "$status" -eq 0 ]
  [[ "$output" == *"Helloworld"* ]]
}
```{{copy}}

Let's run the test:

`bats tests`{{execute}}

The results are:

`ls -l tests`

The test results are displayed by BATS in the TAP format (Test Anything Protocol - http://testanything.org/):

`cat tests/tests-results.tap`{{execute}}

They are also converted in Junit format (XML):

`cat tests/tests-results.xml`{{execute}}

Let's display the results in TAP format:

`cat tests/tests-results.tap`{{execute}}

We can too use a BATS Docker image instead to install BATS locally:

`docker run --rm -v $(pwd)/tests:/tests -v /var/run/docker.sock:/var/run/docker.sock devopstestlab/bats docker-nginx`

Affichons les résultats au format XML :

cat tests/tests-results.xml
La sortie est :

<?xml version="1.0"?>
<testsuites tests="2" name="docker-nginx" failures="1" errors="0">
  <testsuite tests="1" failures="1" errors="0" name="nginx version is correct">
    <testcase name="#1 nginx version is correct">
      <failure message="not ok 1 nginx version is correct"/>
    </testcase>
  </testsuite>
  <testsuite tests="0" failures="0" errors="0" name="(in test file //tests/nginx.bats, line 8)"/>
  <testsuite tests="0" failures="0" errors="0" name="`[[ &quot;$output&quot; == *&quot;1.17.8&quot;* ]]' failed"/>
  <testsuite tests="0" failures="0" errors="0" name="status: 0"/>
  <testsuite tests="1" failures="0" errors="0" name="output: nginx version: nginx/1.17.9">
    <testcase name="#2 nginx HTML page is correct"/>
  </testsuite>
</testsuites>

For more information, visit `https://github.com/sstephenson/bats`.
