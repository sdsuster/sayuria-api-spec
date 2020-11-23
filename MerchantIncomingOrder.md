# **Get Merchant's Incoming Orders**
## Endpoint
api/merchant/incoming-orders
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
            "id": "id1",
            "SKU": "2502V2VK203K03E20KE20B23C3",
            "username":"AWAITING CONFIRMATION",
            "product":{
                "id": "id2",
                "title": "Kubis",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                "unit": "Kg",
            },
            "otherProducts":3,
            "total":53000,
            "totalItems": 2,
        },
        {
            "id": "id1",
            "SKU": "10CBE029301EF029302931DF12",
            "username":"AWAITING CONFIRMATION",
            "product":{
                "id": "id2",
                "title": "Kubis",
                "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
                "unit": "Kg",
            },
            "total":53000,
            "totalItems": 2,
        },
    ]
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
        "stock": ["Stock tidak boleh kurang dari 0!"],
        "unit": ["Unit tidak boleh kosong!"],
        "category": ["Kategori tidak ditemukan"]
	}
}
```
