$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(250,623,130,10,"violet");
createPlatform(470,500,130,10,"indigo")
createPlatform(240,400,160,10,"blue")
createPlatform(280,369,10,30,"green")
createPlatform(240,360,50,10,"pink")
createPlatform(235,330,10,20,"orange")
createPlatform(195,320,50,10,"yellow")
createPlatform(196,230,10,90,"orange")
createPlatform(126,230,80,10,"teal")
createPlatform(500,140,250,10,"red")
createPlatform(900,150,380,20,"black")
createPlatform(1340,150,100,10,"gold")
createPlatform(1339,648,84,4,"blue")
createPlatform(1339,150,4,498,"black")
createPlatform(600,500,4,240,"yellow")
createPlatform(600,500,300,4,"pink")
createPlatform(900,150,4,420,"orange")
createPlatform(760,565,140,4,"pink")
createPlatform(605,600,50,4,"indigo")

createPlatform(700,648,640,4,"purple")
createPlatform(990,280,350,4,"brown")
createPlatform(1028,370,250,4,"green")
createPlatform(905,370,68,4,"black")
createPlatform(970,370,4,80,"purple")
createPlatform(970,450,150,4,"black")
createPlatform(1180,374,4,215,"violet")
createPlatform(970,525,150,4,"black")
createPlatform(970,585,210,4,"pink")
createPlatform(970,525,4,60,"purple")
createPlatform(1290,450,50,4,"yellow")
createPlatform(1290,570,50,4,"blue")
createPlatform(1184,510,50,4,"teal")
createPlatform(700,600,4,50,"blue")
    // TODO 3 - Create Collectables
createCollectable("diamond",600,20,0.5,0.7);
createCollectable("diamond",150,50,0.5,0.7);
createCollectable("diamond",850,520,0.5,0.7);
createCollectable("diamond",1250,600,0.5,0.7);
    
    // TODO 4 - Create Cannons
createCannon("right",695,665);
createCannon("bottom",380,650);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
