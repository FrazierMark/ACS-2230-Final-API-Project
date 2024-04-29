# AUTH - API - Ecommerce

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Custom, authenticated API instructions and starter pack for BEW 1.3 students!

## Installation

#### To run locally, clone the repository and open the project in your editor
* In the project directory, you can run:
#### 'npm install'
* Installs node modules
#### 'npm start'
* Runs the server in development mode on http://localhost:3000


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

