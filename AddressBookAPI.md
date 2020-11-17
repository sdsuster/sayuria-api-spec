# **Get Address List**
## Endpoint
/backend/member/addresses
## HTTP Method
`GET`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": [
    {
      "id": "IDID",
      "primary": true,
      "geoLocationProvided": true,
      "recipient": {
        "name": "string",
        "phone": "0123456789",
        "email": "string@string.com"
      },
      "address": {
        "street": "string",
        "state": "string",
        "city": "string",
        "district": "string",
        "subdistrict": "string",
        "postalCode": "string"
      },
      "geolocation": {
        "longitude": 0,
        "latitude": 0,
        "textAddress": "string"
      }
    },
    {
      "id": "Yuyuyuyu",
      "primary": false,
      "geoLocationProvided": true,
      "recipient": {
        "name": "Yuda",
        "phone": "087817238712",
        "email": "kudaways@gmail.com"
      },
      "address": {
        "street": "dalsdjasldjkas jdlasd jalsj dlasjd lasjdlasjlda jsldj askld jalsdj",
        "state": "DKI Jakarta",
        "city": "Kota Jakarta Pusat",
        "district": "Tanah Abang",
        "subdistrict": "Kebon Melati",
        "postalCode": "10230"
      },
      "geolocation": {
        "longitude": 106.81636279999998,
        "latitude": -6.1983875,
        "textAddress": "Jl. Dukuh Pinggir V No.2, Kb. Melati, Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230, Indonesia"
      }
    }
  ]
}
```


# **Add address data**
## Endpoint
/backend/member/addresses
## HTTP Method
`POST`
## Request Body
```json
{
  "id": "IDID",
  "primary": true,
  "recipient": {
    "name": "string",
    "phone": "0123456789",
    "email": "string@string.com"
  },
  "address": {
    "street": "ajalan",
    "state": {
      "name": "states",
      "longitude": 0,
      "latitude": 0
    },
    "city": {
      "name": "cities",
      "longitude": 0,
      "latitude": 0
    },
    "district": {
      "name": "districts",
      "longitude": 0,
      "latitude": 0
    },
    "subdistrict": {
      "name": "subdistricts",
      "longitude": 0,
      "latitude": 0
    },
    "postalCode": "12345"
  },
  "geolocation": {
    "longitude": 0,
    "latitude": 0,
    "textAddress": "string no 2 blok abc"
  }
}
```
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": true
}
```
# Error Response
```json
{
	"code": 400,
	"status": "BAD_REQUEST",
	"errors": {
		"name": ["NotEmpty"],
		"email": ["InvalidFormat"],
		"phone": ["TooShort", "Numeric"],
		"id": ["AlreadyExist"]
	}
}
```
## Notes
If "geoLocation" is null, then "geoLocationProvided" sent to xmember is false



# **Update address data**
## Endpoint
/backend/member/addresses/{id}
## HTTP Method
`PUT`
## Request Body
```json
{
  "primary": true,
  "recipient": {
    "name": "nelson",
    "phone": "0123456789",
    "email": "nelson@blibli.com"
  },
  "address": {
    "street": "jonathan suka boong",
    "state": {
      "name": "DKI JAKARTA",
      "longitude": 0,
      "latitude": 0
    },
    "city": {
      "name": "JAKARTA BARAT",
      "longitude": 0,
      "latitude": 0
    },
    "district": {
      "name": "CENGKARENG",
      "longitude": 0,
      "latitude": 0
    },
    "subdistrict": {
      "name": "CENGKARENG BARAT",
      "longitude": 0,
      "latitude": 0
    },
    "postalCode": "12345"
  },
  "geolocation": {
    "longitude": 0,
    "latitude": 0,
    "textAddress": "jl ga kelar2"
  }

}
```
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": true
}
```
# Error Response
```json
{
	"code": 400,
	"status": "BAD_REQUEST",
	"errors": {
		"name": ["NotEmpty"],
		"email": ["InvalidFormat"],
		"phone": ["TooShort", "Numeric"],
		"id": ["NotExist"]
	}
}
```


# **Delete address data**
## Endpoint
/backend/member/addresses/{id}
## HTTP Method
`DELETE`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": true
}
```

# **Set Primary Address**
## Endpoint
/backend/member/addresses/{id}/_mark-primary
## HTTP Method
`PUT`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": true
}
```