# **Get Users Wishlist**
## Endpoint
api/wishlist/me
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
api/carts
## HTTP Method
`POST`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    [   
        
        {
            "merchant":{
                "id":"id1",
                "name":"Buani"
            },
            "products":[
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
                        }
                    },
                    "totalItem": 2
                }
            ],
            "totalPrice": 999999,
            "totalItems": 2,
        }
    ]
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

# Error Response
```json
{
	"code": 404,
	"status": "BAD_REQUEST",
	"errors": {
        "message":["Produk tidak ditemukan!"],
	}
}
```


# **Edit Users Cart**
## Endpoint
api/carts/{id_cart}
## HTTP Method
`PUT`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    [   
        
        {
            "merchant":{
                "id":"id1",
                "name":"Buani"
            },
            "products":[
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
                        }
                    },
                    "totalItem": 4
                }
            ],
            "totalPrice": 999999,
            "totalItems": 2,
        }
    ]
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

# Error Response
```json
{
	"code": 404,
	"status": "BAD_REQUEST",
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
            "merchant":{
                "id":"id1",
                "name":"Buani"
            },
            "products":[
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
                    "totalItem": 3
                }
            ],
            "totalPrice": 999999,
            "totalItems": 1,
        }
    ]
}
```