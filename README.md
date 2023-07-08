# MERN: Google Books Search Engine

## Application Links

* GitHub Repository for Application: https://github.com/mackenzie-wentworth/mern-book-search

* Heroku Deployed Application: https://mw-mern-book-search-0b8be4f1ae0f.herokuapp.com/


## Description

For this week's Challenge, I was given a fully functioning starter code built with a RESTful API, and tasked to refactor it into a **GraphQL API** featuring *Apollo Server*. 

Provided by the starter code, this is a **MERN stack** application which serves as a Google Books API search engine that allows users to search and save books.

*To successfuly refactor the initial starter code, I made sure to do the following:*

1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

2. Modify the existing authentication middleware so that it works in the context of a GraphQL API.

3. Create an Apollo Provider so that requests can communicate with an Apollo Server.

4. Deploy application to Heroku with a MongoDB database using MongoDB Atlas.


## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Questions](#questions)
- [License](#license)
- [Badges](#badges)


## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```


## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```


## Usage

To utilize the app, users can navigate to the [Google Books Search](https://mw-mern-book-search-0b8be4f1ae0f.herokuapp.com/), where the can search, login/signup, and save or remove searched books from their account. 


## Technologies Used

* [VS Code](https://code.visualstudio.com/)
* [Node.js](https://nodejs.org/en)
* [Node Package Manager](https://www.npmjs.com/)
* [Express](https://expressjs.com/)
* [React](https://react.dev/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [GraphQL](https://graphql.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [MongoDB Atlas](https://www.mongodb.com/docs/atlas/)
* [Heroku](https://www.heroku.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Concurrently](https://www.npmjs.com/package/concurrently)
* [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [JWT Decode](https://jwt.io/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Babel](https://babeljs.io/docs/)
* [Bootstrap Framework](https://getbootstrap.com/)

---


## Questions?

If you have any questions, please see my contact information below to reach me for inquiries:
* **GitHub**: mackenzie-wentworth, at https://github.com/mackenzie-wentworth
* **Email**: mwentworth28@gmail.com


## License

This project is covered under the [MIT License](./LICENSE). For more details, please click the license icon below under 'Badges'.


## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)