var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e0b2fd8f-4b08-4667-b2e5-7ef3cbe2ab53","15dd9007-4253-45b4-82f5-c6014444aabe","b3c521bb-9f5c-46c7-8172-39c5761cfdd2","f6c52ce0-3c0e-4e06-9feb-73d300d70d7f","9a795fd3-c3cc-4094-a0fe-9d47968709a4","cccd5ae3-e480-4848-8516-39ce008317c9","bc1aef30-53be-4c11-94b5-f641d64ae945","b5c6a433-a803-44c1-b38d-246494080bb5","95b1b1ab-f450-444a-bee4-1c138a8369d5"],"propsByKey":{"e0b2fd8f-4b08-4667-b2e5-7ef3cbe2ab53":{"name":"monster.jpg_1","sourceUrl":"assets/v3/animations/DPDotJPJFdxlinwifFloI5h8HIrIYcFPiwiM7UF-cDk/e0b2fd8f-4b08-4667-b2e5-7ef3cbe2ab53.png","frameSize":{"x":201,"y":251},"frameCount":1,"looping":true,"frameDelay":4,"version":"bqW.BpfK_duS3ltFX2MX8yTwQcWrTwBa","loadedFromSource":true,"saved":true,"sourceSize":{"x":201,"y":251},"rootRelativePath":"assets/v3/animations/DPDotJPJFdxlinwifFloI5h8HIrIYcFPiwiM7UF-cDk/e0b2fd8f-4b08-4667-b2e5-7ef3cbe2ab53.png"},"15dd9007-4253-45b4-82f5-c6014444aabe":{"name":"cloud.png_1","sourceUrl":"assets/v3/animations/DPDotJPJFdxlinwifFloI5h8HIrIYcFPiwiM7UF-cDk/15dd9007-4253-45b4-82f5-c6014444aabe.png","frameSize":{"x":92,"y":27},"frameCount":1,"looping":true,"frameDelay":4,"version":"vYql_aSEYQn9um4daLDEly.OcFA0S8xM","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":27},"rootRelativePath":"assets/v3/animations/DPDotJPJFdxlinwifFloI5h8HIrIYcFPiwiM7UF-cDk/15dd9007-4253-45b4-82f5-c6014444aabe.png"},"b3c521bb-9f5c-46c7-8172-39c5761cfdd2":{"name":"obstacle.png","sourceUrl":"assets/v3/animations/DPDotJPJFdxlinwifFloI5h8HIrIYcFPiwiM7UF-cDk/b3c521bb-9f5c-46c7-8172-39c5761cfdd2.png","frameSize":{"x":84,"y":202},"frameCount":1,"looping":true,"frameDelay":4,"version":"K04QZbNxVoMlrceJ0zuY5DxF46f.7UPW","loadedFromSource":true,"saved":true,"sourceSize":{"x":84,"y":202},"rootRelativePath":"assets/v3/animations/DPDotJPJFdxlinwifFloI5h8HIrIYcFPiwiM7UF-cDk/b3c521bb-9f5c-46c7-8172-39c5761cfdd2.png"},"f6c52ce0-3c0e-4e06-9feb-73d300d70d7f":{"name":"obstacle.png_1","sourceUrl":null,"frameSize":{"x":51,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"qhBm58BH3.HQ9KI3C.cveU6dBFvrfLrt","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":100},"rootRelativePath":"assets/f6c52ce0-3c0e-4e06-9feb-73d300d70d7f.png"},"9a795fd3-c3cc-4094-a0fe-9d47968709a4":{"name":"hero.png","sourceUrl":null,"frameSize":{"x":165,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"TQF2sOHEXBqiXo1Xuh_aPgYbzljhI8kC","loadedFromSource":true,"saved":true,"sourceSize":{"x":165,"y":146},"rootRelativePath":"assets/9a795fd3-c3cc-4094-a0fe-9d47968709a4.png"},"cccd5ae3-e480-4848-8516-39ce008317c9":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZeZhVKV_GrjfT6vDRGuxuSHoIA7O3osU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/cccd5ae3-e480-4848-8516-39ce008317c9.png"},"bc1aef30-53be-4c11-94b5-f641d64ae945":{"name":"victory.jpg_1","sourceUrl":null,"frameSize":{"x":299,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"S9zRjzhNOU7tFfViZzjD8u2p17tsacoe","loadedFromSource":true,"saved":true,"sourceSize":{"x":299,"y":168},"rootRelativePath":"assets/bc1aef30-53be-4c11-94b5-f641d64ae945.png"},"b5c6a433-a803-44c1-b38d-246494080bb5":{"name":"game-over-.png_1","sourceUrl":"assets/v3/animations/DPDotJPJFdxlinwifFloI5h8HIrIYcFPiwiM7UF-cDk/b5c6a433-a803-44c1-b38d-246494080bb5.png","frameSize":{"x":151,"y":135},"frameCount":1,"looping":true,"frameDelay":4,"version":"39eOTDKz9eULIIxcG1uW.bn8hxzplLmZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":151,"y":135},"rootRelativePath":"assets/v3/animations/DPDotJPJFdxlinwifFloI5h8HIrIYcFPiwiM7UF-cDk/b5c6a433-a803-44c1-b38d-246494080bb5.png"},"95b1b1ab-f450-444a-bee4-1c138a8369d5":{"name":"award_trophy4_1","sourceUrl":null,"frameSize":{"x":43,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9wfyDpEIacY..R7BW2GIrh5AUTpqnK1E","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":43,"y":100},"rootRelativePath":"assets/95b1b1ab-f450-444a-bee4-1c138a8369d5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var hero=createSprite(75,190,15,15);
hero.setAnimation("hero.png")
hero.scale=0.3
hero.velocityX=0
hero.velocityY=3

//var invisibleground=createSprite(75,225.5,5);
//invisibleground.setAnimation("animation_1");
//invisibleground.visible=false;


var obstacle=createSprite(107,69,5,300);
obstacle.setAnimation("obstacle.png_1")
obstacle.scale=1.6


var obstacle2=createSprite(107,310,5,300);
obstacle2.setAnimation("obstacle.png")
obstacle2.scale=0.9

var obstacle3=createSprite(250,100,5,100);
obstacle3.setAnimation("obstacle.png_1")
obstacle3.scale=1.7
 
 var obstacle4=createSprite(250,350,5,100);
obstacle4.setAnimation("obstacle.png")
obstacle4.scale=0.9;
 
 
 
 //creating Monsters
 var monster1=createSprite(198,61,5,5)
 monster1.setAnimation("monster.jpg_1")
 monster1.scale=0.2
  monster1.velocityY=3
  
  var monster2=createSprite(181,336,5,5)
 monster2.setAnimation("monster.jpg_1")
 monster2.scale=0.2
monster2.velocityY=3
  
   var monster3=createSprite(333,69,5,5)
 monster3.setAnimation("monster.jpg_1")
 monster3.scale=0.2
 monster3.velocityY=-3
 
 
  var monster4=createSprite(352,325,5,5)
 monster4.setAnimation("monster.jpg_1")
 monster4.scale=0.2
 monster4.velocityY=-3
 
 var victory=createSprite(360,191,5,5);
 victory.setAnimation("award_trophy4_1")
 victory.scale=0.5
 
 var GAMEOVER=createSprite(200,200,5,5);
  GAMEOVER.setAnimation("game-over-.png_1")
    GAMEOVER.scale=2
 GAMEOVER.visible=false;

function draw() {
  background("white")
  
//if(keyDown("space") && (hero.y + 10 == //invisibleground.y - 5)
                     // && (hero.x >= //invisibleground.x - 12.5) 
                    //  && (hero.x <= //invisibleground.x + 12.5)){
                           
    //hero.velocityY = -8;
    //playSound( "assets/category_jump/retro_game_classic_jump_18.mp3");
 // }
  
  //if(keyDown("space")&&(hero.y+10 ==))
     
     if(keyDown("space")){
       hero.velocityY=-10
     }
        hero.velocityY=hero.velocityY+1
        
             if(keyDown("RIGHT_ARROW")){
       hero.velocityX=10
     }

             if(keyDown("LEFT_ARROW")){
       hero.velocityX=-10
     }

        
        
  if(hero.isTouching(monster1)||hero.isTouching(monster2)||hero.isTouching(monster3)||hero.isTouching(monster4)){
   GAMEOVER.visible=true;
    obstacle.setVelocity(0,0)
     obstacle2.setVelocity(0,0)
      obstacle3.setVelocity(0,0)
       obstacle4.setVelocity(0,0)
       hero.setVelocity(0,0)
          monster1.setVelocity(0,0)
          monster2.setVelocity(0,0)
          monster3.setVelocity(0,0)
          monster4.setVelocity(0,0)
          
  }     
         if(hero.isTouching(monster1)||hero.isTouching(monster2)||hero.isTouching(monster3)||hero.isTouching(monster4)){
           obstacle.visible=false;
           obstacle2.visible=false;
           obstacle3.visible=false;
           obstacle4.visible=false;
           monster1.visible=false;
           monster2.visible=false;
           monster3.visible=false;
           monster4.visible=false;
           victory.visible=false;
           hero.visible=false;
         }
         
         if(hero.isTouching(victory)){
           victory.setAnimation("victory.jpg_1")
         }

  createEdgeSprites()
  hero.collide(edges)
  monster1.bounceOff(edges)
  monster2.bounceOff(edges)
  monster3.bounceOff(edges)
  monster4.bounceOff(edges)
  hero.collide(obstacle)
   hero.collide(obstacle2)
    hero.collide(obstacle3)
     hero.collide(obstacle4)
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
