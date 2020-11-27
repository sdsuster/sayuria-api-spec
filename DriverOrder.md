
# **Get Merchant's Order Detail**
## Endpoint
api/driver/orders
## HTTP Method
`GET`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {
        "id": "id1",
        "SKU": "2502V2VK203K03E20KE20B23C3",
        "orderId":"id1",
        "status":"AWAITING CONFIRMATION",
        "merchant":{
            "id":"idtoko1",
            "name":"Toko Buani",
            "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"
        },
        "address":"Jl Cempaka putih",
        "price":10000,
    }
}
```



# **Change Merchant's Order Status**
## Endpoint
api/merchant/orders/{id}
## HTTP Method
`PUT`
## Request Body
```json
{
    "status": "MENGIRIM PESANAN"
}
```
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {
        "id": "id1",
        "SKU": "2502V2VK203K03E20KE20B23C3",
        "status":"MENGIRIM PESANAN",
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
        "otherProducts":3,
        "total":53000,
        "totalItems": 2,
    }
}
```

# **Decline Merchant's Order**
## Endpoint
api/merchant/orders/{id}
## HTTP Method
`DELETE`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {
        "id": "id1",
        "SKU": "2502V2VK203K03E20KE20B23C3",
        "status":"PESANAN DIBATALKAN",
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
        "otherProducts":3,
        "total":53000,
        "totalItems": 2,
    }
}
```

