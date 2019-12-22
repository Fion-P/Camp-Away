![splash](https://i.pinimg.com/originals/7e/98/0f/7e980f06790417f28351cccb7aa2e950.gif)

# [Camp Away](https://camp-away-hipcamp.herokuapp.com/#/)

Camp Away was built on a Ruby on Rails framework for the backend. PostgreSQL was used as the database to store the data along with Amazon AWS S3, which was used to store images for the camps. React and Redux was utilized to create a dynamic, single-page web app allowing users to smoothly navigate through the site. 

## Technologies

* Ruby on Rails

* React.js

* Redux.js

* Node.js

* PostgreSQL

* Google Maps API

* Webpack

* Amazon AWS S3

## Features

### User Auth

![alt tag](https://i.pinimg.com/originals/a9/b7/9c/a9b79c9c87e3cd4e652b56b959a98820.gif)

* Users can create an account on Camp Away and login to view their user profile.

* The login and signup forms are rendered on modals which were made using React.js components along with CSS

* Users who do not want to create an account are able to login as a demo user to navigate throughout the website and use it's features

* Once logged in the nav bar changes and the user is redirected to the profile page.


### Camp Show and Reviews

![camo_show](https://i.pinimg.com/originals/87/62/3c/87623cdde6079a335f8741965a50b885.gif)

* Users can view each camps' information page

* The nav bar and booking box stays on the page as the user scrolls through the page

* At the bottom users are able to leave reviews that will show up real-time

* Users are able to edit and delete their own reviews.


### Bookings

* The booking form is on each of the camp's show page, allowing users to easily browse through individual sites whilst having access to book a camp

* A day picker was implemented using a react-day-picker to allow for users to choose a day on a calendar 

* A user can look at and cancel their bookings on their user profile page

![alt tag](screenshots/bookings.png)
