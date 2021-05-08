const counter = () => {
  const counterButton = document.getElementById('counterButton')
  if (counterButton) {
    counterButton.addEventListener('click', () => {
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
          document.getElementById('restaurantCount').innerText = data.restaurants.length
        })
    })
  }
}

export { counter }