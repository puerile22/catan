describe("Model: Player", function(){
  beforeEach(module('Catan'));

  beforeEach(inject(function(_Player_){
    Player = Player;
  }));

  beforeEach(function(){
    p = new Player.createPlayer('George');
  });

  it("should create a player instance", function(){
    expect(p.name).toEqual('George');
    expect(p.model.resources.ore).toEqual(0);
    expect(p.model.developmentCards.length).toEqual(0);
  });

  it("can add and remove cards from their hand", function(){
    expect(p.model.resources.sheep).toEqual(0);
    p.addResource('sheep', 2);
    expect(p.model.resources.sheep).toEqual(2);

    p.useResource('sheep', 1);
    expect(p.model.resources.sheep).toEqual(1);
  });

  it("raises a flag when a user has more than 7 cars", function(){
    p.addResource('ore', 8);
    expect(p.settings.moreThan7).toBeTruthy();
  });
});


player Model

var models = {};

var addResource = function(resource_type) {
  Resource.withdraw(1);
  Player.models.resources.resource_type +=1
}

cards = {
  tree: 1,

}

property = {
  owned: [Tile.d3, Tile.c4]
}


d3 = {
  die: 8,
  resource: ore
}


settings = {
  isTurn: false
}

return {
  player: player,
  addResource: addResource,
  buyCard: buyCard
}