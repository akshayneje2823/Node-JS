const jwt = require('jsonwebtoken');

let user = {
    name: 'Sagr jha',
    email: 'sagarjha299@gmail.com',
    password: 'sagar123'
}

let payload = {
    id: user.email
}

let secretKey = 'WEARW323GO';


let token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 });
console.log(token)