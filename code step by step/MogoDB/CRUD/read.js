const dbconnect = require('./mongo');



const readData = async () => {
    let data = await dbconnect();
    console.log(data)
    data = await data.find({ name: 'm30' }).toArray();
    console.log(data)

}
readData()
