# **Get Users Cart**
## Endpoint
api/carts
## HTTP Method
`GET`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {
        "orders":[
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
                    },
                    "merchant":{
                        "id":"id1",
                        "name":"Buani"
                    },
                },
                "totalItem": 3
            },
        ],
        "totalPrice": 999999,
        "totalItems": 1,
    }
    
}
```

# **Add Users Cart**
## Endpoint
api/carts
## HTTP Method
`POST`
## Request Body
```json
{
    "idProduct":"id1",
    "totalItem":2
}
```
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {
        "orders":[
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
                    },
                    "merchant":{
                        "id":"id1",
                        "name":"Buani"
                    },
                },
                "totalItem": 3
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
                    "stock": 30,
                    "unit": "Kg",
                    "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                    "category":{
                        "id":"id1",
                        "name": "Sayur"
                    },
                    "merchant":{
                        "id":"id2",
                        "name":"Buani"
                    },
                },
                "totalItem": 2
            }
        ],
        "totalPrice": 999999,
        "totalItems": 1,
    }
}
```
## Request Body
```json
{
    "idProduct":"",
    "totalItem":-2
}
```
# Error Response
```json
{
	"code": 400,
	"status": "BAD_REQUEST",
	"errors": {
        "productId":["ID produk tidak boleh kosong!"],
        "totalItem":["total item harus lebih dari 0!"],
	}
}
```

## Request Body
```json
{
    "idProduct":"id0",
    "totalItem":20
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


# **Edit Users Cart**
## Endpoint
api/carts/{order_id}
## HTTP Method
`PUT`
## Request Body
```json
{
    "totalItem":2
}
```
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {
        "orders":[
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
                    },
                    "merchant":{
                        "id":"id1",
                        "name":"Buani"
                    },
                },
                "totalItem": 3
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
                    "stock": 30,
                    "unit": "Kg",
                    "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                    "category":{
                        "id":"id1",
                        "name": "Sayur"
                    },
                    "merchant":{
                        "id":"id1",
                        "name":"Buani"
                    },
                },
                "totalItem": 2
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
                    "stock": 30,
                    "unit": "Kg",
                    "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                    "category":{
                        "id":"id1",
                        "name": "Sayur"
                    },
                    "merchant":{
                        "id":"id2",
                        "name":"Buani"
                    },
                },
                "totalItem": 2
            }
        ],
        "totalPrice": 999999,
        "totalItems": 1,
    }
}
```


## Request Body
```json
{
    "orderId":"",
    "totalItem":-1
}
```

# Error Response
```json
{
	"code": 400,
	"status": "BAD_REQUEST",
	"errors": {
        "orderId":["ID produk tidak boleh kosong!"],
        "totalItem":["total item harus lebih dari 0!"],
	}
}
```


# **Add Users Cart**
## Endpoint
api/carts/{order_id}
## HTTP Method
`DELETE`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {
        "orders":[
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
                    },
                    "merchant":{
                        "id":"id1",
                        "name":"Buani"
                    },
                },
                "totalItem": 3
            },
        ],
        "totalPrice": 999999,
        "totalItems": 1,
    }
}
```