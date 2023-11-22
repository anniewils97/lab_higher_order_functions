const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
}

ScranAdvisor.prototype.findRestaurantByName = function(name) {
    return this.restaurants.filter(restaurant => restaurant.name.includes(name));
};
module.exports = ScranAdvisor;