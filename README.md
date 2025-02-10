# Accommodation Search

## Technical Coding Test

This project has a simple setup with an api, hooked up to MongoDB and a frontend piece initiated with [vite](https://vitejs.dev/).

## Pre-requisites

### Setup MongoDB Atlas Database

Options include

#### MongoDB Atlas

- Create a free account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a new cluster
- Get the connection string
- Add the connection string to the .env file

#### MongoDB Atlas Local

[detailed setup instruction](https://www.mongodb.com/docs/atlas/cli/current/atlas-cli-deploy-local/)

- install dependencies
  ```bash
  brew install mongodb-atlas-cli
  ```
- Install Docker
- Setup local deployment
  ```bash
  atlas deployments setup
  ```
- specify start up
- Add connection sting to .env file
- init the DB, from the api package
  ```bash
  npm run init:db
  ```

## Install and run

From the project root:

```
npm install
```

### Run

Once install has finished, you can use the following to run both the API and UI:

```
npm run start
```

### API

To run the API separately, navigate to the `./packages/api` folder

```
$ cd packages/api
```

And run the `api` server with

```
$ npm run dev
```

The API should start at http://localhost:3001

### Client

To run the `client` server separately, navigate to the `./packages/client` folder

```
$ cd ./packages/client
```

And run the `client` with

```
$ npm run start
```

The UI should start at http://localhost:3000

## Task at hand

When the project is up and running, you should see a search-bar on the screen. This one is currently hooked up to the `/hotels` endpoint.
When you type in a partial string that is part of the name of the hotel, it should appear on the screen.
Ie. type in `resort` and you should see some Hotels where the word `resort` is present.

You will also see 2 headings called **"Countries"** and **"Cities"**.

The assignment is to build a performant way to search for Hotels, Cities or Countries.
Partial searches will be fine. Hotels will need to filterable by location as well.
Ie. The search `uni` should render

- Hotels that are located in the United States, United Kingdom or have the word `uni` in the hotel name.
- Countries that have `uni` in their name Ie. United States, United Kingdom
- No Cities as there is no match

Clicking the close button within the search field should clear out the field and results.

When clicking on one of the `Hotels`, `Cities` or `Countries` links, the application should redirect to the relevant page and render the selected `Hotel`, `City` or `Country` as a heading.

### Limitations

Given the time constraints, we do not expect a fully production-ready solution. We're primarily interested in the approach and the overall quality of the solution.
Feel free to modify the current codebase as needed, including adding or removing dependencies.
For larger or more time-intensive changes, you're welcome to outline your ideas in the write-up section below and discuss them further during the call.

<img src="./assets/search-example.png" width="400px" />

### Write-up

#### Overview

##### API

Update the API to use routes, services and implement the DB during start.

Created the Search endpoint that uses [Atlas Search ](https://www.mongodb.com/docs/atlas/atlas-search/)to fuzzy search the required fields in the database. The search is case insensitive and will return results on the `hotels`, `cities`, and `countries` collections.

Create Cities, countries, and hotels endpoints to fetch the specific data by ID.

##### Client

Add react-router to handle the navigation between the search page and the data pages.

Broke components into smaller pieces to make them more manageable, reusable, and aid with react reconciliation.

Implemented [useSWR](https://swr.vercel.app/) to handle the data fetching and caching. This is just a preferred fetching tool for me, as i find a lot of the built in features to be very useful.

##### Project

Added a script to seed the data and add the required index's for Atlas search.

#### Next steps

##### API

Create a mongo service / factory to handle the connection to the database.

- limits duplication
- enable large scale changes like versioning

Add Request and Response validation to the routes.

- Implement a tool like zod to verify data coming in and out of the API.

Update the API structure to include controllers.

- This will allow for better separation of concerns and make the code more readable.
- Will be the home of the request and response validation.

Add unit tests to the API.

Refine Atlas search, more data better scores.

##### Client

Create a UI package to prevent duplication and move component testing to a specific package.

Implement Image regression testing on components.

Fix the height issues on the result fields. currently double scroll is required to get to the bottom results.

Implement search saving. allows users to nav back and keep their search results. options:

- Search params
- Context/caching

##### Project

Implement automated local start up for MongoDB Atlas. enables a quicker start up for other developers.

Add E2E tests to the project. for client side testing i find e2e tests to have more real world value than unit tests on UI components.

### Database structure

#### Hotels Collection

```json
[
  {
    "chain_name": "Samed Resorts Group",
    "hotel_name": "Sai Kaew Beach Resort",
    "addressline1": "8/1 Moo 4 Tumbon Phe Muang",
    "addressline2": "",
    "zipcode": "21160",
    "city": "Koh Samet",
    "state": "Rayong",
    "country": "Thailand",
    "countryisocode": "TH",
    "star_rating": 4
  },
  {
    /* ... */
  }
]
```

#### Cities Collection

```json
[
  { "name": "Auckland" },
  {
    /* ... */
  }
]
```

#### Countries Collection

```json
[
  {
    "country": "Belgium",
    "countryisocode": "BE"
  },
  {
    /* ... */
  }
]
```
