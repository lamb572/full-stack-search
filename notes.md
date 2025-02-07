## Task

- [x] performant search from
  - [x] Hotels
    - search fields are all fields in the hotel object
  - [x] Cities
  - [x] Countries
- [x] Closing the search field should clear the field and results
- [x] Clicking a result should navigate to a details page for the selected item

## Jobs

- [x] Implement text search indexing for mongodb
- [x] Implement search for hotels
- [x] Implement search for cities
- [x] Implement search for countries

## Notes

### API

- Move mongodb fetch to a service
- Add controllers on the routes that will handle the request and response validation
- API unit tests
- Atlas text search could be more refined, with more data on the countries and cities documents would allow for better scoring of results

### Client

- UI fixes
  - sort height issues on result fields
- Move to a UI package
  - prevent duplications
  - moves component testing to specific package
- on nav back data not saved
  - add field values to search params
  - add context

### Project

- Implement automated local start up for MongoDB Atlas
- E2E tests

to readme add new atlas set info
