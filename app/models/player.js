app.factory('Player', ['$route', function($route) {

  var models = {};

  var settings = {
    
  };

  function createPlayer(name) {
    this.name = name;
    this.resources = {
      ore: 0,
      wood: 0,
      brick: 0,
      sheep: 0,
      wheat: 0
    };
    this.developmentCards = [],
    this.settings = {
      moreThanSeven: false
    };
  };

  createPlayer.prototype.addResource = function(resource, amount) {
    this.resources[resource] += amount;

    if (this.resources[resource] > 7) {
      this.settings.moreThanSeven = true;
    }
    
    return this;
  };

  createPlayer.prototype.useResource = function(resource, amount) {
    this.resources[resource] -= amount;
    if (this.resources[resource] <= 7) {
      this.settings.moreThanSeven = false;
    }

    return this;
  };

  createPlayer.prototype.removeResource = function() {
    var count = 0;
    for(var key in this.resources) {
      count += this.resources[key];
    }
    count = Math.floor(count/2);
    while (count !==0) {
      var resource = prompt("Please input resource you want to remove");
      // var amount = prompt("Please input the amount you want to remove");
      // amount = parseInt(amount);
      count = this.removeHelper(resource, amount, count);
    }
  };


  createPlayer.prototype.removeHelper = function(resource, amount, count){
    if (this.resources[resource] >= amount && amount <= count){
      count -= amount;
      this.resources[resource] -= amount;
      return count;
    } else {
      return {alert: "You do not have enough resources to do that"};
    }
  };
   
 
  return {
    models: models,
    settings: settings,
    createPlayer: createPlayer
  };

}]);