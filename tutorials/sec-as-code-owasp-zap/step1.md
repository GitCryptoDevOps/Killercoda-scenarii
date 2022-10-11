# OWASP ZAP

Launch OWASP ZAP:

`docker run -d -it -p 8090:8090 --name owasp-zap owasp/zap2docker-weekly sh -c "zap.sh -daemon -host 0.0.0.0 -port 8090 -config api.addrs.addr.name=.* -config api.addrs.addr.regex=true"`{{execute}}

- `api.disablekey=true`: we are not using any API key,
- `api.addrs.addr.name=.*` and `api.addrs.addr.regex=true`: allow all IP addresses to connect to the ZAP API.

Check the server started:

`curl 0.0.0.0:8090`{{execute}}

Visit `http://0.0.0.0:8090`.

# ZAP Baseline

ZAP Baseline scan runs ZAP spider against the specified target for one minute and then does a passive scan. It's ideal to run in a CI/CD environment. By default, reports all alerts as warnings. For more information: https://github.com/zaproxy/zaproxy/wiki/ZAP-Baseline-Scan

Let's use the DVWS (Damn Vulnerable Web Services) application (https://github.com/snoopysecurity/dvws) to run the ZAP Baseline scan. DVWS is an insecure web application with multiple vulnerable web service components.

Let's run DVWS:

`docker run -d -it -p 80:80 --name dvws cyrivs89/web-dvws`{{execute}}

Check DVWS is started:

`curl 0.0.0.0/dvws/`{{execute}}

Visit `http://0.0.0.0`.

Run ZAP Baseline scan against the DVWS application:

`docker run --rm -it --name owasp-zap-scan-dvws --network host -v $PWD/data:/zap/wrk:rw owasp/zap2docker-weekly sh -c "zap-baseline.py -t http://0.0.0.0:80 -r zap-baseline-scan-report.html"`{{execute}}

Check the report has been created:

`cat data/zap-baseline-scan-report.html`{{execute}}

## Run the ZAP full scan

Run the full scan against the DVWS application:

`docker run --rm -it --name owasp-zap-scan-dvws --network host -v $PWD/data:/zap/wrk:rw owasp/zap2docker-weekly sh -c "zap-full-scan.py -t http://0.0.0.0:80 -r zap-full-scan-report.html"







Run API tests against the DVWS application:

docker run --rm -it --name owasp-zap-scan-dvws --network host -v $PWD/data:/zap/wrk:rw owasp/zap2docker-weekly sh -c "zap-api-scan.py -t http://0.0.0.0:80 -f openapi -r zap-api-scan-report.html"
