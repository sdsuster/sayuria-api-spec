# **Get Homepage Banners**
## Endpoint
api/homepage/banners
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
            "title": "title",
            "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"
        },
        {
            "id": "id2",
            "title": "title2",
            "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"
        },
        {
            "id": "id3",
            "title": "title3",
            "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"
        }
    ]
}
```


# **Get Homepage Recommendation**
## Endpoint
api/homepage/product-recomendations
## HTTP Method
`GET`
## Success Response
```json
{
    "code":200,
    "status": "OK",
    "data": [
        {
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
            "stock":{
                "unit": "Kg"
            },
            "images": ["https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"],
            "merchant":{
                "id":"idtoko1",
                "name":"Toko Buani"
            },
            "rating":{
                "value": 4.9, 
                "max": 5
            }
        },
        {
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
            "stock":{
                "unit": "Kg"
            },
            "images": ["https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"],
            "merchant":{
                "id":"idtoko1",
                "name":"Toko Buani"
            },
            "rating":{
                "value": 4.9, 
                "max": 5
            }
        },
        {
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
            "stock":{
                "unit": "Kg"
            },
            "images": ["https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"],
            "merchant":{
                "id":"idtoko1",
                "name":"Toko Buani"
            },
            "rating":{
                "value": 4.9, 
                "max": 5
            }
        },
        {
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
            "stock":{
                "unit": "Kg"
            },
            "images": ["https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"],
            "merchant":{
                "id":"idtoko1",
                "name":"Toko Buani"
            },
            "rating":{
                "value": 4.9, 
                "max": 5
            }
        }
    ]
}
```