app.factory('Player', ['$route', function($route) {

  var models = {};

  var settings = {
    
  }

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
    }
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
    return this;
  };

  return {
    models: models,
    settings: settings,
    createPlayer: createPlayer
  }

}]);