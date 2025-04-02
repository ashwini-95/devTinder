initailize git
add .gitignore
create a remote repo on github
push all code to remote origin
play with routes and route extensions ex: /, /first/2, /xyz
order of routes matters a lot

install postman
make a test api call
write logic to handle get, post, put, patch, delete api calls in postman

explore routing and use of /ab?c, /ab+c, /ab\*c, patterns - /a(bc)+d, regex
Reading the query params in the route - /user/:id - req.params
Reading the dynamic routes - /user?userID=101&email="abc.com" - req.query

Multiple Route handlers - play with them
next()
next() function and errors along with res.send()
app.use("/route". rH, [rH1, rH2], rH3, rH4)
What is a middleware? why do we need it?
how expressjs handle requests behind the scene?
write a dummy auth middleware for admin?
write a dummy auth middleware for all user routes except login route?

write error handling using try catch / app.use("/", (err, req, res, next) => {})
coonect db
create user schema and model
api to add some data to databasr user collection

API - /feed api
API - /user api by email

explore schema options like required
Data sanitization - add api level validations for each field

explore validator library
NEVER Trust req.body
