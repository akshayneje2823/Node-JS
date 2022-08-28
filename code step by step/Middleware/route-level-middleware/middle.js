module.exports = reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("<h3>Please Provide age</h3>")
    } else if (req.query.age < 18) {
        resp.send("<h4>You are not Eligible go to home</h4>")
    } else {
        next();
    }

}
