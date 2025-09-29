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
createPlatform(235,330,10,30,"orange")
createPlatform(195,320,50,10,"yellow")
createPlatform(196,230,10,90,"orange")
createPlatform(126,230,80,10,"teal")
createPlatform(450,180,285,10,"red")
createPlatform(900,150,380,20,"black")
createPlatform(1340,150,100,10,"gold")
createPlatform(1339,648,84,3,"blue")
createPlatform(1339,150,3,498,"black")
createPlatform(600,450,3,290,"yellow")
createPlatform(600,450,300,3,"pink")
createPlatform(900,150,3,408,"orange")
createPlatform(760,555,140,3,"pink")
createPlatform(600,600,40,3,"indigo")

createPlatform(700,648,640,3,"purple")
createPlatform(990,255,350,3,"brown")
createPlatform(1028,343,250,3,"green")
createPlatform(905,370,68,3,"black")
createPlatform(970,370,3,64,"purple")
createPlatform(970,432,150,3,"black")
createPlatform(1180,346,3,220,"violet")
createPlatform(970,520,210,3,"black")
createPlatform(970,560,210,3,"pink")
createPlatform(970,520,3,44,"purple")
createPlatform(1290,450,50,3,"yellow")
createPlatform(1290,570,50,3,"blue")
createPlatform(1184,510,50,3,"teal")
createPlatform(700,600,3,50,"blue")
    // TODO 3 - Create Collectables
createCollectable("diamond",600,20,0.5,0.7);
createCollectable("diamond",150,50,0.5,0.7);
createCollectable("diamond",850,520,0.5,0.7);
createCollectable("diamond",1250,600,0.5,0.7);
createCollectable("diamond",1050,670,0.5,0.7);
    // TODO 4 - Create Cannons
createCannon("right",695,665);
createCannon("bottom",380,900);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
