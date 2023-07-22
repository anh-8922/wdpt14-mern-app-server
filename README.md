# YELP Server API

This repository provides the code for a Yelp-like Express server.

The server features several routes that mimic core functionalities like listing, fetching restaurants information.

## Routes

The following routes are available:

| Method | Path                          | Description                                 |
| ------ | ----------------------------- | ------------------------------------------- |
| GET    | /restaurants/list             | Lists all restaurants                       |
|        |                                                                             |
| POST   | /restaurants/addNewRestaurant | Adds a restaurant data                      |


## Sample Outputs

Here are some example outputs from these endpoints:

1. GET `/restaurants/list`

   ```
   {
   "success": true,
   "posts": [
      {
      "_id": {
        "$oid": "64bbb1a2917ac930078effc2"
      },
      "restaurantname": "Café Cecilia",
      "description": " Part neighbourhood bistro and part classy tribute to the chef Dublin roots, Café Cecilia showcases Rocha training at leading local London lights St John and The River Café in the simple but stunning cooking. ",
      "postcode": "EN2 0RD",
      "city": "Enfield",
      "openningtime": "10AM - 9PM",
      "longitude": "0.1276",
      "latitude": "51.663994 ",
      "cuisine": [
        {
          "name": "English",
          "price": "£5 - £15",
          "_id": {
            "$oid": "64bbb1a2917ac930078effc3"
          }
        }
      ],
      "__v": 0
    },
    //more restaurants
   ]
    
   }
   ```



## Sample Usage

You can use these endpoints in your code using the fetch API, Axios or any other method of making HTTP requests.

Here is an example using the fetch API in JavaScript:

`fetch('https://wdpt14-mern-app-server.vercel.app/restaurants/list')`
