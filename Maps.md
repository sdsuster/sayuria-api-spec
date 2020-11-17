# **Get Current Driver Position**
## Endpoint
api/maps/update/{id_order}
## HTTP Method
`GET`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {   
      "from":{
        "lat": 2,
        "lng": 1
      },
      "to":{
        "lat": 1,
        "lng": 2,
      },
      "current":{
        "bounds":{
          "lat": 1,
          "lng": 2,
        },
        "overview_polyline":"encode string"
      },
      "estimation":{
        "value": 20,
        "unit":"menit"
      }
    }
}
```



# **Get Current Driver Position**
## Endpoint
api/maps/detail/{id_order}
## HTTP Method
`GET`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {   
      "from":{
        "lat": 2,
        "lng": 1,
        "address":"jalan blabla"
      },
      "to":{
        "lat": 1,
        "lng": 2,
        "address":"jalan blabla"
      },
      "driver":{
        "image":"url",
        "name":"Jo Vianto"
      }
    }
}
```



# **Post Current Driver Position**
## Endpoint
api/maps/current/{id_order}
## HTTP Method
`POST`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {   
      "from":{
        "lat": 2,
        "lng": 1
      },
      "to":{
        "lat": 1,
        "lng": 2,
      },
      "current":{
        "bounds":{
          "lat": 1,
          "lng": 2,
        },
        "overview_polyline":"encode string"
      },
      "estimation":{
        "value": 20,
        "unit":"menit"
      }
    }
}
```

# Error Response
```json
{
	"code": 400,
	"status": "BAD_REQUEST",
	"errors": {
		"lat": ["NotEmpty"],
		"lng": ["InvalidFormat"],
	}
}
```

