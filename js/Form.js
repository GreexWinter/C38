class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    
    this.title.html("Need For Speed");
    this. title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-30, 160);
    this.button.position(displayWidth/2+25, 250);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      console.log(player.index + "Inside form");
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-5, 125);
    });

  }
}
