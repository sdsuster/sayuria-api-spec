base ={
    "code":200,
    "status": "OK",
    "data": {},
    "paging": null,
    "erros":null
}
merchant = {
    "id":"idtoko1",
    "name":"Toko Buani",
    "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
    "nProducts": 65
}
product = {
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
        "quantity": 30,
        "unit": "Kg"
    },
    "images": ["https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"],
    "merchant":merchant
}

category = {
    "id":"id1",
    "name":"Sayuran",
    "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568"
}

user = {
    "id": "id1",
    "name": "Jo Vianto",
    "image": "https://instagram.fbdj4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/73239630_468031774064861_2987087825234558976_n.jpg?_nc_ht=instagram.fbdj4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Um9x8ylVsF0AX-UOfYq&oh=2e06080feb002fd8dbef8f250368e527&oe=5FCE4588",
    "email": "sjovianto@gmail.com",
    "telephone": "081336523550",
    "gender": false,
    "birthDay": "1999-07-24T0:0:0.511Z"
}

review = {
    id: 1,
    user: users[0],
    rating: 5,
    comment: 'Detail Komentar',
    createdDate: '2014-01-01T23:28:56.782Z',
    createdBy: 'jovianto',
}
cart={
    "id":"id1",
    "product":{
        "id":"id1",
        "name": "Kubis",
        "harga": 34000,
        "discount": 10,
        "stock": 30,
        "unit": "Kg",
        "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
        "store":merchant
    },
    "totalItem": 3
}
wishlist=
{
    "id":"id1",
    "product":{
        "id":"id1",
        "name": "Kubis",
        "harga": 34000,
        "discount": 10,
        "stock": 30,
        "unit": "Kg",
        "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
        "store":{
            "id":"idtoko1",
            "name":"Toko Buani",
            "image": "https://cf.shopee.co.id/file/36a1b98600e602908a7b01cde5703568",
            "nProducts": 65
        }
    }
}