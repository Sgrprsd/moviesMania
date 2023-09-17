
# Project Title

This is the submission to the assigned assignment from velozity to create a simple React web application
that allows users to search for movies using the OMDB API and display the results.


## API Reference

#### Get Movie
```http
  GET http://www.omdbapi.com/?apikey=891203b7&s=${debouncedValue}&page=${page}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `debouncedValue`      | `string` | **Required**. name of movie |
| `page`      | `string` | **Required**. used over pagination |
| `891203b7` | `string` | **Required**. API key |



## Installation

Install my-project with npm

```bash
  clone the project
  npm install
  npm start -- to run the project
```
    