# **Get Orders List(History)**
## Endpoint
api/transactions/histories
## HTTP Method
`GET`
## Success Response
```json
{
    "code":200,
    "status": "OK",
    "data": [
        {
            "id": "id1",
            "SKU": "2502V2VK203K03E20KE20B23C3",
            "status":"AWAITING CONFIRMATION",
            "type":"Transfer Bank",
            "total":53000,
            "product":{
                "id": "id2",
                "title": "Kubis",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"
            },
            "otherProducts":3,
        },
        {
            "id": "id1",
            "SKU": "10CBE029301EF029302931DF12",
            "status":"ON DELIVERY",
            "type":"Transfer Bank",
            "total":40000,
            "product":{
                "id": "id2",
                "title": "Kubis",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"
            }
        },
    ]
}
```


# **Get Orders Detail**
## Endpoint
api/transactions/histories/{id}
## HTTP Method
`GET`
## Success Response
```json
{
    "code":200,
    "status": "OK",
    "data": {
        "order":{
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
        },
        "delivery":{
            "destination":{
                "address":"Jl blabla",
                "pinpoint":{
                    "lat":1,
                    "lng":2
                }
            },
            "price":10000
        },
        "totalPrice":99999,
        "status":"AWAITING CONFIRMATION",
        "track": true
    }
}
```


# **Pay Order**
## Endpoint
api/transactions/pay/{id}
## HTTP Method
`POST`
## Request Body
```json
{
    "pinpoint":{
        "lat": 1,
        "lng": 2,
    }
}
```
## Success Response
```json
{
    "code":200,
    "status": "OK",
    "data": {
        "order":{
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
        },
        "delivery":{
            "destination":{
                "address":"Jl blabla",
                "pinpoint":{
                    "lat":1,
                    "lng":2
                }
            },
            "price":10000
        },
        "totalPrice":99999,
        "status":"AWAITING CONFIRMATION",
        "track": true
    }
}
```