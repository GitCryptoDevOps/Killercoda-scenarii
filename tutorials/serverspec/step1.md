# Running in the easiest way from Docker

Here, we want to locally connect to the host Linux. So, let's initialize serverspec with these parameters:

`docker run -it --rm -v $PWD:/serverspec devopstestlab/serverspec sh`{{execute}}

Run `serverspec-init`:

`serverspec-init`{{copy}}

Enter 1 (`UN*X`) and 2 (`Exec (local)`).

Exit the Docker container:

`exit`

Let's remove the `sample_spec.rb` file, automatically created:

`rm spec/localhost/sample_spec.rb`{{execute}}

Create a `spec/localhost/docker_spec.rb` file with the following content:

```
require 'spec_helper'

describe docker_image('devopstestlab/nginx-helloworld') do
  it { should exist }
end

describe port(80) do
  it { should be_listening }
end
```{{copy}}

Pour afficher les tâches disponibles:

`docker run --rm -v $PWD:/serverspec devopstestlab/serverspec rake spec --tasks`{{execute}}

To launch the tests:

`docker run --rm --network host -v $PWD:/serverspec devopstestlab/serverspec rake spec`{{execute}}

Pour exécuter les tests sur un serveur particulier (`localhost` here):

`docker run --rm --network host -v $PWD:/serverspec devopstestlab/serverspec rake spec:localhost`{{execute}}

Tests fail.

Run a nginx server on the port 80:

docker run -d --name nginx -p 80:80 devopstestlab/nginx-helloworld

curl 0.0.0.0:80

`docker run --rm --network host \
  -v $PWD:/serverspec \
  devopstestlab/serverspec \
  rake spec:localhost`{{execute}}

/*`docker run --rm \
  -v $PWD:/serverspec \
  --net="host" \
  --pid="host" \
  --ipc="host" \
  --privileged \
  --volume="/etc/motd:/etc/motd:ro" \
  --volume="/var:/var:ro" \
  --volume="/var/run/docker.sock:/var/run/docker.sock:ro" \
  devopstestlab/serverspec \
  rake spec:localhost`{{execute}}*/

To access to process and network interface, add `--pid="host"` and `--net="host"`.

To generate a HTML report:

`docker run --rm --network host -v $PWD:/serverspec devopstestlab/serverspec rake spec SPEC_OPTS="--format html" > result.html`{{execute}}

cat result.html

# Running serverspec from a local installation


sudo apt-get update -y
sudo apt-get install -y ruby-serverspec
sudo gem install serverspec rake
serverspec-init
