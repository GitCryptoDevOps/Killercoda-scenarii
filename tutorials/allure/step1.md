`cat docker-compose.yml`{{execute}}

`docker-compose up -d allure allure-ui`{{execute}}

Create a project on Display page allowing user to select port: https://[[HOST_SUBDOMAIN]]-[[KATACODA_HOST]].environments.katacoda.com/ by clicking on the + icon.

Get the projects list:

`curl http://localhost:5050/projects`{{execute}}

You can find the project id.

Create tests with Python and pytest:

`mkdir report`{{execute}}

`mkdir tests`{{execute}}

`vi tests/test_1.py`{{execute}}

```
import pytest

def test_success():
    """this test succeeds"""
    assert True

def test_failure():
    """this test fails"""
    assert False

def test_skip():
    """this test is skipped"""
    pytest.skip('for a reason!')

def test_broken():
    raise Exception('oops')
```{{copy}}

`:wq`

`docker run --rm -v $PWD/tests:/pytest -v $PWD/results:/results devopstestlab/pytest-allure pytest --alluredir=/results`{{execute}}

`ls -l results/`{{execute}}

Click on GENERATE REPORT.

Envoyer les résultats:

`cat send_results.sh`{{execute}}

`./send_results.sh`{{execute}}

Source:
- https://github.com/fescobar/allure-docker-service
- https://github.com/fescobar/allure-docker-service-ui
- https://github.com/fescobar/allure-docker-service-examples
