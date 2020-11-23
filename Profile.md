# **Get User Detail**
## Endpoint
api/user/profile
## HTTP Method
`GET`
## Success Response
```json
{
    "code":200,
    "status": "OK",
    "data": {
        "id":"id1",
        "name": "Jo Vianto",
        "phone":"09012819281",
        "photoUrl": "https://instagram.fbdj4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73239630_468031774064861_2987087825234558976_n.jpg?_nc_ht=instagram.fbdj4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Um9x8ylVsF0AX-UOfYq&oh=2e06080feb002fd8dbef8f250368e527&oe=5FCE4588",
        "email":"sjovianto@gmail.com",
        "birthDay": "1999-07-24T0:0:0.511Z",
        "gender": false,
    }
}
```


# **Update User Detail**
## Endpoint
api/user/profile
## HTTP Method
`PUT`
## Request Body
```json
{
    "name": "Jo Vianto1",
    "phone":"09012819281211",
    "birthDay": "1999-08-24T0:0:0.511Z",
    "gender": false,
}
```
## Success Response
```json
{
    "code":200,
    "status": "OK",
    "data": {
        "id":"id1",
        "name": "Jo Vianto1",
        "phone":"09012819281211",
        "photoUrl": "https://instagram.fbdj4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73239630_468031774064861_2987087825234558976_n.jpg?_nc_ht=instagram.fbdj4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Um9x8ylVsF0AX-UOfYq&oh=2e06080feb002fd8dbef8f250368e527&oe=5FCE4588",
        "email":"sjovianto@gmai1l.com",
        "birthDay": "1999-08-24T0:0:0.511Z",
        "gender": false,
    }
}
```


# Error Response
```json
{
	"code": 404,
	"status": "BAD_REQUEST",
	"errors": {
        "name":["Nama tidak boleh kosong!"],
        "birthDay":["Tanggal Lahir tidak boleh kosong!"],
        "phone": ["Nomor telepon minimal 10 digit dan maksimal 15 digit"]
	}
}
```


## Request Body - Multipart File

# **Get User Detail**
## Endpoint
api/user/profile/upload-photo
## HTTP Method
`POST`
## Success Response
```json
{
    "code":200,
    "status": "OK",
}
```
