# AUTH - API - Ecommerce

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Custom, authenticated API instructions and starter pack for BEW 1.3 students!

## Installation

1. Fork this repository and clone your fork locally.
1. Open the repository folder in your editor of choice:

    ```bash
    $ cd auth-api-starterpack
    $ atom .
    ```

1. Run `npm install` to install project dependencies into the activated environment.
1. Execute `npm start` to run the development server.


## Routes

| Route | Description |
| --- | --- |
| POST /signup | Creates a new user and generates a JWT token. |
| POST /login | Authenticates user and generates a JWT token. |

| GET /user | Retrieves the currently signed-in user. |
| GET /user/all | Retrieves all users in the database. (Must be admin) |
| PATCH /user | Updates a specific user's data. |
| PATCH /user/change-role/:userId | Updates a specific user's role. (Must be admin) |
| DELETE /user/:userId | Deletes a specific user. (Must be admin) |

| GET /product | Retrieves all products in the database. |
| GET /product/:productId | Retrieves all details of a specific product. | 
| POST /product | Creates a new product. (Must be admin) | 
| PATCH /product/:productId | Updates details of a specific product. (Must be admin) |
| DELETE /product/:productId | Deletes a specific product. (Must be admin) |

