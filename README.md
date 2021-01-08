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

3. Set up your MongoDB database

    a. Create a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account and sign-in

    b. Create a new project called blueprint-bootcamp

    c. Click "Build a Cluster" > "Shared Clusters" (the free option) > "Create a cluster"

    d. Keep all default options on the "Create a cluster" page and click "Create a cluster". Wait 1-3 minutes for your cluster to be provisioned

    e. When your cluster is ready, click "Connect". Select "Use your current IP" and create a database user. **Please remember this password**. Then click "choose a connection method"

    f. Click "Connect your application". Ensure the driver is set for Node.js version 3.6 or later (this should be the default). Then copy the connection string

    g. In `/backend/.env.sample`, replace `<your-database-url>` with the connection string. Replace `<password>` and `<dbname>` in the string. The password is what you set earlier, the dbname should be `bootcamp`

    h. Rename `/backend/.env.sample` to `/backend/.env`

    i. In `backend/persistence/initDb.js`, set `SEED_DB` to `true` on line 9

4. Run the application
```
$ docker-compose up --build
```
    You should set `SEED_DB` back to `false` now.

5. Go to http://localhost:3000 in your browser. You should see this:

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

Currently, our restaurant directory maintains a singular list of restaurants. Suppose we now want the ability to create restaurant groups (e.g. "Uni Plaza", "Cafes", "Open Late", etc.). Each group consists of a subset of the restaurants; a restaurant can be part of multiple groups.

A `RestaurantGroup` has these fields: id, name, description, restaurantIds

1. Create REST endpoints for `RestaurantGroup`, supporting CRUD operations
    * The API responses should include full restaurant information, not just the ids
    * Deleting a restaurant should result in its removal from all groups it was part of

2. Display `RestaurantGroup` data in the frontend (try to reuse existing components to save time, don't worry about design and appearance)
