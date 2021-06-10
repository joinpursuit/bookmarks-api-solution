# Bookmarks

## Getting started

- `cd bookmarks-SOLUTION`
- `touch .env`
- `npm install`

**.env**

```
PORT=3003
```

#### Available routes

- GET `/` - landing page
- GET `/bookmarks` - index of all bookmarks
- GET `/bookmarks/:id` - show one (based on array position)
- GET `/bookmarks/`
- DELETE `/bookmarks/:id` - available through Postman
- POST `/bookmarks/` - available through Postman (see below for correct configuration)
- PUT `/bookmarks/` - available through Postman (see below for correct configuration (similar to POST))
- GET 404

#### Model

- name : string
- url : string
- isFavorite: boolean


#### React Front-End

[Available here](https://github.com/joinpursuit/bookmarks-react-solution)
