# MERN Boilerplate
A simple boilerplate application built using the MERN stack. On this application, a user can Register, Login and browse private pages that are accessible to only logged in users. It should be possible to build on this project to build more complex applications.

The key technologies used are as follows:
* React
* Redux
* MongoDB
* Express
* Node
* SCSS/SASS along with node-sass

I am still working on the documentation and comments to make the codebase more useful for everyone. In case of any queries/feedbacks feel free to drop an email to sambuddhaadhikari@gmail.com. 

# Usage & Getting Started with the Project
## Prerequisites
* Download & install any IDE. [VS Code](https://code.visualstudio.com/download) is my personal recommendation.
* Download and install [NodeJS & npm](https://nodejs.org/en/download/).

## Set up the DB
* Create account on / Log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
* Name your organization and project. Doesn't really matter what you choose, I used *Sambuddha's Org* and *MERN Boilerplate* respectively.
* Choose JavaScript as your preferred language.
* Create a free / shared cluster.
  * Choose cloud provider and region. I chose aws and Mumbai.
  * Optionally, change your cluster name to something you like. I used SpiceBox. This is also not very crucial, even though the name of a cluster cannot be changed later, you can always create new projects and clusters.
  * Make sure that cluster tier is M0 Sandbox.
  * Hit create.
* While the cluster is getting ready -
  * Locate the *Database Access* tab and add a new database user. Note down the user name and password that you choose. These will be required later. I used the username root and let the platform suggest a strong password.
  * Make sure that under Database User Privileges, *Read and write to any database* is selected.
  * Hit Add User.
  * Locate the *Network Access* tab and hit Add IP Address. Then click Allow Access From anywhere. This can be changed later if required.
* Go back to the *Clusters* tab. Then,
  * Hit connect. (In case the button is disabled, wait for some time for the cluster to finish configuration).
  * Choose Connect your application. Make sure that driver selected is Node.js on the window that pops up.
  * Copy the URI and store it securely. It should be something like the following - `mongodb+srv://root:<password>@spicebox.cogir.mongodb.net/<dbname>?retryWrites=true&w=majority`
  * Replace `<password>` with the password for the database user. Replace `<dbname>` with the name of the database that connections will use by default. For the example I choose changethispasswordtosomethingstronger as the password and `cumin` as the dbname.
  * Now the URI is ready to be used. Keep it stored securely for use later on.




## Set up the project
* Clone / download the codebase in any directory of your choice. [This](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) can be helpful.
* Open the project folder using your preferred IDE.
* Locate a file called `.env.sample` in the root directory and rename it to just `.env`, subsequently open the file for editing. A note on the contents of this file follows.
  * AUTH_TOKEN_SECRET : This is a secret and private key that will be used by the server to sign and verify authorization tokens. Use any strong random string. [This](https://randomkeygen.com/) is a handy little website that I use to generate random strings.
  * AUTH_EXPIRES_IN_SECONDS: The amount of seconds after which a logged in user's session will expire from their browser and they will need to login again.
  * DB_URI: The connection string that will be used to connect to the database.
  * Once you are done with the `.env` file, it should look simething like this - 
      ```
      AUTH_TOKEN_SECRET = "gPTpSAA8qiqcm0SeYzqEl9p2gHTHDROb"
      AUTH_EXPIRES_IN_SECONDS = 3600
      DB_URI = "mongodb+srv://root:changethispasswordtosomethingstronger@spicebox.cogir.mongodb.net/cumin?retryWrites=true&w=majority"
      ```
* Locate a file called  `.env.sample` in the client directory and rename it to just `.env`. Set the variable REACT_APP_DEFAULT_LOGIN_REDIRECT to the value "/dashboard". This file should have only `REACT_APP_DEFAULT_LOGIN_REDIRECT = "/dashboard"` at this point.
* Open a terminal and cd into the root directory of the project. If using VS code, simply press ``ctrl + ` `` to open the terminal window, make sure that you are in the root directory and not in some other directory. Then run the command `npm run get-started`. This will install all the node modules for both the frontend and backend.
* Run `npm run dev` from the root directory itself to start the project up.
* Optionally, run `npm run build` from the root directory itself to build a production ready version of the client in the `client/build` directory.

# Brief Technical Overview
## The Stack
MERN - MongoDB, Express, React, Node.

## Main Project Structure
```

root
|
|___server.js
|___src\
|   |___db\
|   |___middleware\
|   |___routes\
|   |   |___auth\ (authentication routes for authenticating requests to server)
|   |   |___api\ (api routes for CRUD operations)
|   |   
|   |___util\
|   |___app.js
|
|___client\
|   |___public\
|   |___src\
|   |   |___app\ (All react components, state and styles of the entire client side application)
|   |   |   |___components\ (partial react components without much functionality)
|   |   |   |___containers\ (partial react components with some functionality)
|   |   |   |___routes\ (entire pages)
|   |   |   |___state\ (The state of the whole app)
|   |   |   |___styles\ (Global styles and variables)
|   |   |   
|   |   |___App.js (Aggregation of the client side applicatin and routes)
|   |   |___index.js
|   |   
|   |___.env
|   |___package.json
|   |___package-lock.json
|   
|___.gitignore
|___package.json
|___package-lock.json
|___readme.md


```

## Authentication Module
Login - Client sends HTTP POST request with login_id, password to "/auth/local". In case of valid credentials, a cookie with an authorisation token (JWT) is set by express and the user is logged in. The user and authentication info is stored using redux and redux-persist for the client to make use of the same to render accordingly.

Logout - Client sends HTTP DELETE request to "auth/local". The cookie set during login is destroyed from the browser's local storage and the redux store is reset to defaults.

Registration - Client sends HTTP POST request with login_id, password, first_name, last_name to "/api/user". The api registers the user and logs them in directly in case of an OK request.

Packages used
Sever side-
* bcryptjs for hashing the password.
* jsonwebtoken for signing and verifying authorisation tokens.
* express and cookieparser to set and read secure http only cookies to verify the identity of incoming requests from the client side.

Client side-
* redux, react-redux and @reduxjs/toolkit for state management.
* redux-persist to persist the state in the browser's local storage so that the state does  not reset upon every reload.
* axios for HTTP requests.

## Styling
Using [SCSS](https://sass-lang.com/) for custom styling. No 3rd party library has been used. The 

