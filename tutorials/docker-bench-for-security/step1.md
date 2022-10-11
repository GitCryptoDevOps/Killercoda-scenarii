The Docker Bench for Security checks best-practices based on the CIS Docker Benchmark v1.3.1 (https://www.cisecurity.org/benchmark/docker/) about Docker containers.

To get help:
`docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro docker/docker-bench-security -h`{{execute}}

To run tests:

`docker run --rm --net host --pid host --userns host --cap-add audit_control \
    -e DOCKER_CONTENT_TRUST=$DOCKER_CONTENT_TRUST \
    -v /etc:/etc:ro \
    -v /lib/systemd/system:/lib/systemd/system:ro \
    -v /usr/bin/containerd:/usr/bin/containerd:ro \
    -v /usr/bin/runc:/usr/bin/runc:ro \
    -v /usr/lib/systemd:/usr/lib/systemd:ro \
    -v /var/lib:/var/lib:ro \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    --label docker_bench_security \
    docker/docker-bench-security`{{execute}}

On Ubuntu, `docker.service` and `docker.secret` files are located in `/lib/systemd/system/`.

Source: https://github.com/docker/docker-bench-security
