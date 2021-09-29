![Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--qk-x51pF--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://rohanfaiyaz.com/img/nestjs-graphql.png)

# Nest.js/GraphQL and TypeOrm tutorial

Nest.js Tutorial with GraphQL and TypeOrm. 

## Table of Contents

- [Setting up the project](#setting-up-the-project)
- [Setting up the project with Docker](#setting-up-the-project-with-docker)
- [Cleaning up the Container and Image](#cleaning-up-the-container-and-image)
- [Setup](#setup)
- [Inspiration](#inspiration)
- [Contact](#contact)


## Setting up the project

  Start by cloning the project with the command:
  ```
  $ git clone https://github.com/rmiyazaki6499/nest-graphql.git
  ```
  
  ## Setting up the project with Docker

  For those that are not interested in setting up the project manually or would simply not have to worry about downloading node.js and its dependencies, I have created a Dockerfile and docker-compose.yml file to help create a container with everything you would need to run the **project**.

  ### Install Docker

  To make this as easy as possible, we will be using *Docker Compose* to creat our container.

  - If you do not have Docker yet, start by downloading it here if you are on a Mac or Windows:
  https://www.docker.com/products/docker-desktop

  - Or if you are on a Linux Distribution follow the directions here:
  https://docs.docker.com/compose/install/

  - To confirm you have Docker Compose, open up your terminal and run the command below:

  ```
  $ docker-compose --version
  docker-compose version 1.26.2, build eefe0d31
  ```
  
  - Go into the project directory to build and run the container with:

  ```
  $ cd nest-graphql/
  $ docker-compose up -d --build
  ```

  **This may take a few moments**
  
  Navigate to http://localhost:3000/graphql to view the site on the local server.
  

An example Query which creates an Owner, Pet and retrieves all pets:

Create an Owner

```
mutation {
  createOwner(createOwnerInput:{
    name: "Cheech"
  }) {
    id,
    name
  }
}

```

Create a pet

```
mutation {
  createPet(createPetInput:{
    name: "Pepe",
    ownerId: 1
  }) {
    id
    name
    owner {
      name
    }
  }
}
```

Query a pet

```
{
  pets {
name
    owner {
      name
    }
  }
}
```
  
  ### Cleaning up the Container and Image

  - To stop the container from running, use `<Ctrl-C>` twice.
  - To close down the container use the command:

  ```
  $ docker-compose down
  ```
  - Then to clean up the container and image which we are no longer using use the command:

  ```
  $ docker system prune -fa
  ```

  - Confirm that the container and image is no longer there with:

  ```
  $ docker system df -v
  ```

## Setting up the project manually

After cloning the project:
```
cd /nest-graphql
npm install --silent
npm run start
```
Once the server is running, go to:
localhost:3000/graphql


Create an Owner

```
mutation {
  createOwner(createOwnerInput:{
    name: "Cheech"
  }) {
    id,
    name
  }
}

```

Create a pet

```
mutation {
  createPet(createPetInput:{
    name: "Pepe",
    ownerId: 1
  }) {
    id
    name
    owner {
      name
    }
  }
}
```

Query a pet

```
{
  pets {
name
    owner {
      name
    }
  }
}
```


## Inspiration

Marius Espejo's [Best way to create GraphQL API ?? | NestJS GraphQL Tutorial](https://www.youtube.com/watch?v=geYvdbpo3cA)

## Contact

[Ryuichi Miyazaki](https://github.com/rmiyazaki6499)
