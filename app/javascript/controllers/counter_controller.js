import { Controller } from "stimulus";

// OOP in javascript
// class Anonymous < Controller
export default class extends Controller {
  
  // @restaurantCountTarget = restaurantCount
  static targets = [ 'restaurantCount' ]

  connect() {
    console.log(this.restaurantCountTarget)
    // start refreshing
    setInterval(this.refresh, 1000);

  }

  refresh = () => {
    // fetch the app to retrieve the restaurants number
    const url = '/restaurants';
    const options = {
      headers: {
        accept: 'application/json'
      }
    }

    fetch(url, options)
      .then(res => res.json())
      .then((data) => {
        // update the restaurant count to be that number
        console.log(data);
        console.log(data.restaurants);
        console.log(data.restaurants.length);
        this.restaurantCountTarget.innerText = data.restaurants.length
      })
  }

}
