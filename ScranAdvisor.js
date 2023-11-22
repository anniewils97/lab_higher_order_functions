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

ScranAdvisor.prototype.findMostCommonCuisine = function() {
    //number of occurences for each cuisine
    const cuisineCounts = {};
    this.restaurants.forEach(restaurant => {
        restaurant.cuisines.forEach(cuisine => {
            cuisineCounts[cuisine] = (cuisineCounts[cuisine] || 0) + 1; 
        });
    });

     //finding the most common cuisine
     let mostCommonCuisine = null;
     let maxCount = 0;
 
     for (const cuisine in cuisineCounts) {
         if (cuisineCounts[cuisine] > maxCount) {
             mostCommonCuisine = cuisine;
             maxCount = cuisineCounts[cuisine];
         }
     }
 
     return mostCommonCuisine;
 };
module.exports = ScranAdvisor;