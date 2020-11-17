# **Get Current User**
## Endpoint
api/auth
## HTTP Method
`GET`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {   
      "token":"oi893e203ei203i20e23e2w",
      "notificationToken": "dummynotificationtoken",
      "user": {
          "id": "id1",
          "name": "Jo Vianto",
          "photoUrl": "https://instagram.fbdj4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73239630_468031774064861_2987087825234558976_n.jpg?_nc_ht=instagram.fbdj4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Um9x8ylVsF0AX-UOfYq&oh=2e06080feb002fd8dbef8f250368e527&oe=5FCE4588",
          "email": "sjovianto@gmail.com",
          "telephone": "081336523550",
          "gender": false,
          "birthDay": "1999-07-24T0:0:0.511Z"
      }
    }
}
```

# Error Response
```json
{
	"code": 402,
	"status": "UNAUTHORIZED",
	"errors": null
}
```




# **LOGOUT**
## Endpoint
api/auth
## HTTP Method
`DELETE`
## Success Response
```json
{
  "code": 200,
  "status": "OK"
}
```



# **Login**
## Endpoint
api/auth
## HTTP Method
`POST`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {   
      "token":"oi893e203ei203i20e23e2w",
      "notificationToken": "dummynotificationtoken",
      "user": {
          "id": "id1",
          "name": "Jo Vianto",
          "photoUrl": "https://instagram.fbdj4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73239630_468031774064861_2987087825234558976_n.jpg?_nc_ht=instagram.fbdj4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Um9x8ylVsF0AX-UOfYq&oh=2e06080feb002fd8dbef8f250368e527&oe=5FCE4588",
          "email": "sjovianto@gmail.com",
          "telephone": "081336523550",
          "gender": false,
          "birthDay": "1999-07-24T0:0:0.511Z"
      }
    }
}
```

# Error Response
```json
{
	"code": 402,
	"status": "UNAUTHORIZED",
	"errors": {
    "msg":["username atau password tidak sesuai"]
	}
}
```

# Error Response
```json
{
	"code": 400,
	"status": "BAD_REQUEST",
	"errors": {
    "username":["username tidak boleh kosong!"],
    "password":["password tidak boleh kosong!"],
	}
}
```