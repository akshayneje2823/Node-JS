const jwt = require('jsonwebtoken');

let user = {
    email: 'nagaa1232gmail.com',
    password: "asdf@1234",
}

let payload = {
    id: user.email
}

let secretkey = "MNMN123"

// Creating token

const token = jwt.sign(payload, secretkey, { expiresIn: 60 * 60 });
console.log(token)


// Varifynig Token

jwt.verify(token, secretkey,(err,newPayload)=>{
    if(err) throw err,
    console.log(newPayload) 
})