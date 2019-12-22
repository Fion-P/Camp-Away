
# [Camp Away](https://camp-away-hipcamp.herokuapp.com/#/)

Camp Away was built on a Ruby on Rails framework for the backend. PostgreSQL was used as the database to store the data along with Amazon AWS S3, which was used to store images for the camps. React and Redux was utilized to create a dynamic, single-page web app allowing users to smoothly navigate through the site. 
![splash](https://i.pinimg.com/originals/43/a5/a8/43a5a8a703e57ddbadb99bbcc9eafc79.gif)

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

* Users can sign up and create an account on Camp Away, and login to view their user profile.
* The login and signup forms are rendered on modals which were made using React.js components along with CSS
* Users who do not want to create an account are able to login as a demo user to navigate throughout the website and use it's features
* Once logged in the nav bar changes and the user is redirected to the profile page.

---

### Camps Index and Google Maps API

![index](https://i.pinimg.com/originals/02/ff/7f/02ff7f732ad506b37788c046343b8e03.gif)

* All the camps are rendered when clicking "Camps" on the nav-bar.
* The camps index page incorporates the Google Maps API to allow users to look around the map to see where each camp is with the markers.
* Each camp's infowindow pops up on hover and persists on click. 
* Users can go directly to a camp's show page by cicking the listing on the index page or cicking on the infowindow on the map.
* The Google Maps API libraries, places and geocoder, are used to allow for a search bar that autofills and changes what camps are displayed based on the input. 
* Upon search, the coordinates are passed into a query string to pinpoint the map location.
```javascript
  //generate map with markers
  createMap() {
    const queryString = this.props.location.search
    let lat;
    let lng;

    if (!queryString) {
      // default to SF
      lat = 37.8887;
      lng = -122.342;
    } else {
      // set to user search
      lat = parseFloat(queryString.split("=")[1].split("&")[0]);
      lng = parseFloat(queryString.split("=")[2]);
    }

    // set the map locale and zoom
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 7
    };

    // create map and markers
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    this.MarkerManager.updateMarkers(this.props.camps);
  }
```

---

### Camp Show and Reviews

![camo_show](https://i.pinimg.com/originals/87/62/3c/87623cdde6079a335f8741965a50b885.gif)

* Users can view each camps' information page.
* Camps show camp area details, essentials, amenities, and activities which dynamically render different icons based on availability.
* The nav bar and booking box stays on the page as the user scrolls through the page.
* At the bottom users are able to leave reviews that will show up real-time.
* Users are able to edit and delete their own reviews.
* The number of reviews are shown at the top of where the reviews are.

---

### Bookings

![bookings](https://i.pinimg.com/originals/32/ee/53/32ee53ac60fd668054891113ba1a7f56.gif)

* The booking form is on each of the camp's show page, allowing users to easily browse through individual sites whilst having access to book a camp.
* A day picker was implemented using a react-day-picker to allow for users to choose a day on a calendar.
* The check-out day defaults to the earliest check-out date depending on the camps' minimum night stay policy.
* Upon booking, the user is redirected to the profile page where the user can look at and cancel their bookings.
* When the cancel booking is clicked a modal, rendered with React components, shows up to confirm the cancellation.

---

### Dynamic Nav-bar
  ![nav](https://i.pinimg.com/originals/aa/e2/1f/aae21f064eb8ec21c227a88f0190b2e1.gif)
  * The nav bar changes depending on if a user a logged in or not.
  * React-router-dom is use to fetch the pathname of where the user is so that the nav-search bar shows on all pages but the home-page.
  * The nav-bar is located in a seperate component to keep the code clean and organized. 
   ```javascript
    let search 

    if (this.props.location.pathname !== "/") {
      search = <NavSearch profile={profile}/>
    }

    return (
      <nav className=".nav-bar">
        <span className="header">
          <h1>
            <Link to="/">Camp Away</Link>
          </h1>
          <span className="header-search">
            {search}
          </span>
        </span>
        <span className="nav-right">
          <GreetingContainer />
        </span>
      </nav>
    );
  ```
  
  [create an anchor](#camp-show-and-reviews)
