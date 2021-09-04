# todolist-collab-backend

## heroku - run the following to make sure an instance of the app always runs:

heroku ps:scale web=1 -a APPNAME

## some usefull middle ware to use

- helmet : Helmet will secure your app to prevent XSS attacks, MIME-sniffing, clickjacking and enforce HTTPS over HTTP connections.
- cors : CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- compression : The middleware will attempt to compress response bodies for all request that traverse through the middleware, based on the given options.
- morgan - a middleware for generating request’s logs in the server.
- express.json()
- express.urlencoded({extended:true})
- ratelimiter : you can prevent Brute Force Attacks by setting a limit to the number of tries a user can try to login.

## Cheatsheet for security backend

- https://cheatsheetseries.owasp.org/

















