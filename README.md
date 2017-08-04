<img src="http://www.knifetrend.com/wp-content/uploads/2016/12/KTLOGO.png" width="250" align="right">

# Knife Trend Group Project

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
You can find the most recent version of the Create React App Guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
<!--
## Table of Contents
- [Getting Started](#getting-started)
-->
## Getting Started

This repo has two parts, the React App and the Express Server.

### Upgrade Node
Make sure you have **Node v8.2.1** installed.
*The Express Server requires Node v8.2.1.*

#### On Mac using NPM
```sh
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n 8.2.1
```
#### On Mac or Windows using installer
Choose the correct installer from [here](https://nodejs.org/en/download/current/).

### Set Environment Variables
Add a file named `.env` to the root directory of the project and make sure the following variables are set. The app and server both rely on these settings to run correctly. 
```txt
#REACT SETTINGS
REACT_APP_SERVER_URL=

#NODE SETTINGS
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_DIALECT=postgres
SSL=true

AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_CALLBACK_URL=

SESSION_SECRET=
```

### What's the deal with the second `node_modules` folder in the `src` directory? 
This is basically a hack that allows us to refer to the components in there by `folder_name/component_name` instead of `./../../../../../../folder_name/deeper_folder_name/even_deeper/component_name`.
The idea is to only have 
