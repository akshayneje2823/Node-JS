export const middleware = (req, res, next) => {

    if (!req.query.age) {

        return res.send("<h1>You Do not have token to access this page</h1>");

    } else if (req.query.age < 18) {

        return res.send("<h1>You are under age</h1>")

    }

    next()

};