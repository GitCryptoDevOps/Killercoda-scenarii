To query the value:

`curl -G 'http://localhost:8086/query?pretty=true' \
  --data-urlencode "db=events" \
  --data-urlencode "q=SELECT * FROM cpu WHERE host='serverA'"`{{execute}}
