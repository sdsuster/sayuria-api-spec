# **Get Users Wishlist**
## Endpoint
api/wishlist
## HTTP Method
`GET`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    [
        {   
            "id":"id1",
            "product":{
                "id":"id1",
                "name": "Kubis",
                "price": {
                    "original": 34000,
                    "discount": {
                        "value": 10,
                        "unit":"percentage"
                    },
                    "final": 30600
                },
                "stock": 30,
                "unit": "Kg",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                "category":{
                    "id":"id1",
                    "name": "Sayur"
                }
            },
            "created": "1999-08-24T0:0:0.511Z",
        },
        {   
            "id":"id1",
            "product":{
                "id":"id1",
                "name": "Kubis",
                "price": {
                    "original": 34000,
                    "discount": {
                        "value": 10,
                        "unit":"percentage"
                    },
                    "final": 30600
                },
                "unit": "Kg",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                "category":{
                    "id":"id1",
                    "name": "Sayur"
                }
            },
            "created": "1999-08-24T0:0:0.511Z",
        },
    ]
}
```

# **Add Users Cart**
## Endpoint
api/wishlist
## HTTP Method
`POST`
## Request Body
```json
{
    "productId": "id1"
}
```
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    [
        {   
            "id":"id1",
            "product":{
                "id":"id1",
                "name": "Kubis",
                "price": {
                    "original": 34000,
                    "discount": {
                        "value": 10,
                        "unit":"percentage"
                    },
                    "final": 30600
                },
                "stock": 30,
                "unit": "Kg",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                "category":{
                    "id":"id1",
                    "name": "Sayur"
                }
            },
            "created": "1999-08-24T0:0:0.511Z",
        },
        {   
            "id":"id1",
            "product":{
                "id":"id1",
                "name": "Kubis",
                "price": {
                    "original": 34000,
                    "discount": {
                        "value": 10,
                        "unit":"percentage"
                    },
                    "final": 30600
                },
                "unit": "Kg",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                "category":{
                    "id":"id1",
                    "name": "Sayur"
                }
            },
            "created": "1999-08-24T0:0:0.511Z",
        },
        {   
            "id":"id1",
            "product":{
                "id":"id1",
                "name": "Kubis",
                "price": {
                    "original": 34000,
                    "discount": {
                        "value": 10,
                        "unit":"percentage"
                    },
                    "final": 30600
                },
                "unit": "Kg",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                "category":{
                    "id":"id1",
                    "name": "Sayur"
                }
            },
            "created": "1999-08-24T0:0:0.511Z",
        },
    ]
}
```


`POST`
## Request Body
```json
{
    "productId": "id0"
}
```

# Error Response
```json
{
	"code": 404,
	"status": "NOT_FOUND",
	"errors": {
        "message":["Produk tidak ditemukan!"],
	}
}
```


# **Add Users Cart**
## Endpoint
api/carts/{id}
## HTTP Method
`DELETE`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    [
        {   
            "id":"id1",
            "product":{
                "id":"id1",
                "name": "Kubis",
                "price": {
                    "original": 34000,
                    "discount": {
                        "value": 10,
                        "unit":"percentage"
                    },
                    "final": 30600
                },
                "stock": 30,
                "unit": "Kg",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                "category":{
                    "id":"id1",
                    "name": "Sayur"
                }
            },
            "created": "1999-08-24T0:0:0.511Z",
        },
    ]
}
```