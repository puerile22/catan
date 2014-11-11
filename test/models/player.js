describe("Model: Player", function(){
  beforeEach(module('Catan'));

  beforeEach(inject(function(_Player_){
    Player = _Player_;
  }));

  beforeEach(function(){
    p = new Player.createPlayer('George');
  });

  it("should create a player instance", function(){
    expect(p.name).toEqual('George');
    expect(p.resources.ore).toEqual(0);
    expect(p.developmentCards.length).toEqual(0);
  });

  it("can add and remove cards from their hand", function(){
    expect(p.resources.sheep).toEqual(0);
    p.addResource('sheep', 2);
    expect(p.resources.sheep).toEqual(2);

    p.useResource('sheep', 1);
    expect(p.resources.sheep).toEqual(1);
  });

  it("raises a flag when a user has more than 7 cars", function(){
    p.addResource('ore', 8);
    expect(p.settings.moreThanSeven).toBeTruthy();
  });
});