# Bootcamp: MERN Stack (REST API Backend)

This repo contains the starter-code for our bootcamp activity.

## Tech Stack

We will be using the MERN stack. These technologies are easy to learn, allow for fast development speeds, and are popularly used in Blueprint.

* Frontend: React + Redux
* Backend: Node.js + Express.js
* Database: MongoDB

## Setup

The dev environment is containerized with Docker to minimize setup efforts.

1. Install Docker Desktop (skip tutorials): [MacOS](https://docs.docker.com/docker-for-mac/install/) | [Windows (Home)](https://docs.docker.com/docker-for-windows/install-windows-home/) | [Windows (Pro, Enterprise, Education)](https://docs.docker.com/docker-for-windows/install/) | [Linux](https://docs.docker.com/engine/install/#server)
```bash
# verify your installation by running the following in a terminal
$ docker --version
$ docker-compose --version
```

2. Clone this repo and go into the project directory
```
$ git clone https://github.com/uwblueprint/bootcamp-mern-rest.git
$ cd bootcamp-mern-rest
```

3. Set up your MongoDB database (your local server will connect to this, to persist data)

    a. Create a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account and sign-in

    b. Create a new project called blueprint-bootcamp

    c. Click "Build a Cluster" > "Shared Clusters" (the free option) > "Create a cluster"

    d. Keep all default options on the "Create a cluster" page and click "Create a cluster". Wait 1-3 minutes for your cluster to be provisioned

    e. When your cluster is ready, click "Connect"
    
    f. Select "Add your current IP" and confirm 
    
    g. Create a database user and a password (avoid special characters). **Please remember this password**. Then click "choose a connection method"

    h. Click "Connect your application". Ensure the driver is set for Node.js version 3.6 or later (this should be the default). Then copy the connection string (should look something like `mongodb+srv://...`)

4. Edit your backend code to connect with the MongoDB database
    a. In `/backend/.env.sample`, replace `<your-database-url>` with the connection string. 
    
    b. In the connection string, replace `<password>` with the password you set earlier, and replace `<dbname>` with `bootcamp`

    c. Rename `/backend/.env.sample` to `/backend/.env`

    d. In `backend/persistence/initDb.js`, set `SEED_DB` to `true` on line 9. This will populate your database with some fake data we created upon start up

5. Run the application
```
$ docker-compose up --build
```
    You should set `SEED_DB` back to `false` now.

6. Go to http://localhost:3000 in your browser. You should see this:

![Complete setup](docs/complete_setup.PNG)

## Useful Commands for Development

To first setup the application run the following command:

```
$ docker-compose up --build
```

On subsequent runs you can omit the --build tag

```
$ docker-compose up
```

Keep in mind that both the frontend and backend have hot reload enabled so you will rarely need to restart the application.

## Your Tasks

Following the starter-code's pattern, complete these tasks:

Currently, our restaurant directory maintains a singular list of restaurants. 
Suppose we now want the ability to create restaurant groups (e.g. "Uni Plaza", "Cafes", "Open Late", etc.). 

A single group can contain multiple restaurants, and a single restaurant can be part of multiple groups.

A `RestaurantGroup` has these fields: `id`, `name`, `description`, `restaurantIds`

1. Using the existing code as a template, create REST endpoints for `RestaurantGroup`, supporting C.R.U. (Create, Retrieve, Update) operations. 
    a. To support _creating_ groups, make an endpoint called `/groups` which handles a `POST` request. It will accept a `name`, `description`, and `restaurantIds` as the request parameters to create a new Restaurant Group. It will return an `id` which corresponds to the newly created Restaurant Group if successful
    b. To support _retrieving_ a group, make an endpoint called `/groups` which handles a `GET` request. It will accept an `id` and return the Restaurant Group data corresponding to that `id`
    
2. Display `RestaurantGroup` data in the frontend (try to reuse existing components to save time, don't worry about design and appearance)

3. Modify the API `GET` response so that it includes full restaurant information, not just the ids

### Tip

For some help with debugging your work, you can download [Postman](https://www.postman.com/)! Postman is a tool which allows developers to test endpoints with different requests, and view its responses. This will allow you to write and test the backend code without making any changes to the frontend yet.

And please **ASK FOR HELP**, if you're stuck!

### Extensions

1. To support _updating_ a group, make an endpoint called `/groups` which handles a `PUT` request. It will accept an `id`, `name`, `description`, and `restaurantIds` and edit the properties of the Restaurant Group with the corresponding `id`. It will return the `id` of the Restaurant Group if successful

2. Add an endpoint to support Delete operations
    * Deleting a restaurant should result in its removal from all the groups it was part of