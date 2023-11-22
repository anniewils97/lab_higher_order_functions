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
    return this.restaurants.map(name, 0, restaurants);
}

module.exports = ScranAdvisor;