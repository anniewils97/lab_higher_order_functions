const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
}

ScranAdvisor.prototype.findRestaurantByName = function(name) {
    return this.restaurants.find(restaurant => restaurant.name === name);
};

ScranAdvisor.prototype.findAllRestaurants = function(name){
    return this.restaurants.map(restaurant => restaurant.name);
}

ScranAdvisor.prototype.findRestaurantsByCity = function(cityName){
    return this.restaurants.filter(restaurant => restaurant.location.town === cityName);
}

module.exports = ScranAdvisor;