# **Get Merchant's Products**
## Endpoint
api/merchant/products
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
            "stock": 30,
            "unit": "Kg",
            "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
            "category":{
                "id":"id1",
                "name": "Sayur"
            }
        },
    ]
}
```

# **Create Merchant's Products**
## Endpoint
api/merchant/products

## HTTP Method
`POST`
## Request Body
```json
{   
    "name": "Kubis",
    "price": 34000,
    "discount": 10,
    "stock": 30,
    "unit": "Kg",
    "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
    "category":{
        "id":"id1",
        "name": "Sayur"
    }
}
```
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
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
        "stock": 30,
        "unit": "Kg",
        "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
        "category":{
            "id":"id1",
            "name": "Sayur"
        }
    }
}
```
## Request Body
```json
{   
    "name": "",
    "price": -10,
    "discount": -10,
    "stock": -1,
    "unit": "Kg",
    "image": "bytes[]",
    "categoryId":"id1"
}
```
# Error Response
```json
{
	"code": 400,
	"status": "BAD_REQUEST",
	"errors": {
        "name":["Nama produk tidak boleh kosong!"],
        "price":["Harga harus lebih dari 0!"],
        "discount": ["Discount tidak boleh kurang dari 0!"],
        "stock": ["Stock tidak boleh kurang dari 0!"],
        "unit": ["Unit tidak boleh kosong!"],
        "category": ["Kategori tidak ditemukan"]
	}
}
```


# **Edit Merchant's Products**
## Endpoint
api/merchant/products/{id}

## HTTP Method
`PUT`
## Request Body
```json
{   
    "name": "Kubis",
    "price": 34000,
    "discount": 10,
    "stock": 30,
    "unit": "Kg",
    "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
    "category":{
        "id":"id1",
        "name": "Sayur"
    }
}
```
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
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
        "stock": 30,
        "unit": "Kg",
        "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
        "category":{
            "id":"id1",
            "name": "Sayur"
        }
    }
}
```
## Request Body
```json
{   
    "name": "",
    "price": -10,
    "discount": -10,
    "stock": -1,
    "unit": "Kg",
    "image": "bytes[]",
    "categoryId":"id1"
}
```
# Error Response
```json
{
	"code": 400,
	"status": "BAD_REQUEST",
	"errors": {
        "name":["Nama produk tidak boleh kosong!"],
        "price":["Harga harus lebih dari 0!"],
        "discount": ["Discount tidak boleh kurang dari 0!"],
        "stock": ["Stock tidak boleh kurang dari 0!"],
        "unit": ["Unit tidak boleh kosong!"],
        "category": ["Kategori tidak ditemukan"]
	}
}
```
# **Delete Merchant's Products**
## Endpoint
api/merchant/products/{id}
## HTTP Method
`DELETE`
## Success Response
```json
{
  "code": 200,
  "status": "OK",
  "data": 
    {   
        "id":"id1",
        "name": "Kubisss",
        "price": {
            "original": 34000,
            "discount": {
                "value": 10,
                "unit":"percentage"
            },
            "final": 30600
        },
        "stock": 30,
        "unit": "Ons",
        "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
        "category":{
            "id":"id1",
            "name": "Sayurrrr"
        }
    }
}
```

# Error Response
```json
{
	"code": 404,
	"status": "NOT_FOUND"
}
```