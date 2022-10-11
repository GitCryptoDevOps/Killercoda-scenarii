To add data, write a value in the `events` database:

`curl -i --data-binary 'deployment,deployer=mduffy,app=test_app,version="1.1",environment="test" value="sucess"' -XPOST 'http://localhost:8086/write?db=events'`{{execute}}

`curl -i --data-binary 'cpu,host=serverA,region=us_west value=0.64' -XPOST 'http://localhost:8086/write?db=events'`{{execute}}

Some explanations:
- the InfluxDB server port is 8086,
- the action is `write`,
- the measurement name is `cpu`,
- the set of fields and values is `host`, `region`,
- the value is `0.64`.
