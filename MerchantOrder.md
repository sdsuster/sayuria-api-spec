
# **Get Merchant's Order Detail**
## Endpoint
api/merchant/orders
## HTTP Method
`POST`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {
        "id": "id1",
        "SKU": "2502V2VK203K03E20KE20B23C3",
        "username":"AWAITING CONFIRMATION",
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