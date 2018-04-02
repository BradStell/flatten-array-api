# Flatten Array API

## Required Technologies
 * Nodejs version capable of running ES6 javascript

## Running The Application
### Download the project and install dependencies
#### 1. Using git
Open a terminal and type the following commands
```
git clone https://github.com/BradStell/flatten-array-api.git
cd flatten-array-api
npm install
```
#### 2. Downloading zip  (If you did not follow step 1)
If you chose not to clone the repo using git, then download the zip and extract contents. Then open a terminal and navigate to where you extracted the contents
```
cd <path>/<to>/<download>/flatten-array-api
npm install
```

## Running the app
From the root of the `flatten-array-api` directory run
```
 npm start
```

## Running the tests
From the root of the `flatten-array-api` directory run
```
npm test
```

## API Documentation
Brief Introduction to endpoints located at `/` endpoint in app

If running locally visit:
```
http://localhost:7777/
```

If running in a cloud environment, visit:
```
[server-address]:[port?]/
```

# Example data for flatten array api endpoint
As disclosed on the api documentation page (`http://localhost:7777/`), the api endpoint for flattening the array is located at the path `/api/array/flatten-array`. This endpoint expects the array to come in the body of a POST method as a JSON object in a data property. The JSON object containing the array should be raw JSON, not form encoded. 
### Example: POST data:
```
{
    "data": [1, 2, [3, 4, [5]]]         // array to flatten
}
```

The endpoint will return an object with two properties  
  * `data` - will contain the flattened array
  * `error` - will contain an error if exists
### Example response object:
```
{
    data: [1, 2, 3, 4, 5],              // flattened array
    error: null or string message       // error message if one
}
```

# Future work
  * Have endpoint also accept array as the only body (not forced to be inside of `data` property in JSON object)
  * Have endpoint optionally accept data encoded as form data, for multiple ways to hit endpoint
  * Make error handling more robust
  * Have endpoints that will flatten arrays with compound data structures (not limited to just integers)
