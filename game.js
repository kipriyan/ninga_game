
var myX = 0, myY = 0,lolX=-30,lolY=-30,my1X = Math.random()*750, my1Y = Math.random()*550; 
var vX=0,vY=Math.random()*550,jivoti=1;
var X=800,Y=600,v1X=Math.random()*750,v1Y=550,v2X=Math.random()*750,v2Y=0,v3X=750;
var v3Y=Math.random()*550,v4X=Math.random()*750,v4Y=Math.random()*550,q=0,t=0,jivoti1=1,q1=0,sX=0,sY=0,shurikeni=3;
 var kX=0,kY=0,posoka=Math.floor(Math.random()*5),my2X=Math.random()*750, my2Y=Math.random()*550,q2=0; 
var kebabche = new Image();
kebabche.src="shuriken-1.png";
var ninja = new Image();
ninja.src="den.png";
var ninja1 = new Image();
ninja1.src="ninga2.png";
 var lol = new Image();
lol.src="1155_img_gallery.jpg";
//var kebabche1 = new Image();
//kebabche1.src="test5.png";
var ninja1 = new Image();
ninja1.src="den.png";
var ninja2 = new Image();
ninja2.src="test2.png";
 var lol1 = new Image();
lol1.src="dojo.png";
 var turnament = new Image();
turnament.src="turnament.jpg";
 var lol2 = new Image();
lol2.src="Hatajiro_Dojo.jpg";
 var skorost = 11;
       var skorost1 = 15;   
 var skorost2 = 2.5;
function update() {
   if(t>=5000){
    
  lolX=myX-10;
       lolY=myY-10;
    if(myX>=800){
        myX=790;
    }
        if(myX<=0){
        myX=10;
    }
        if(myY>=600){
        myY=590;
    }
        if(myY<=0){
        myY=10;
    }
     if(v4X>=800){
        v4X=790;
    }
        if(v4X<=0){
        v4X=10;
    }
        if(v4Y>=600){
        v4Y=590;
    }
        if(v4Y<=0){
        v4Y=10;
    }
       if(my1X>=800){
        my1X=790;
    }
        if(my1X<=0){
        my1X=10;
    }
        if(my1Y>=600){
        my1Y=590;
    }
        if(my1Y<=0){
        my1Y=10;
    }

  ++t;
    ++q;
    ++q1;
  if(isKeyPressed[87]){
      myY-=3;
  }
    if(isKeyPressed[83]){
      myY+=3;
  } 
     if(isKeyPressed[68]){
      myX+=3;
  }
     if(isKeyPressed[65]){
      myX-=3;
  }
       
if(posoka==1){
   my1X+=skorost; 
}
    if(posoka==2){
   my1X-=skorost; 
}
        if(posoka==3){
  my1Y+=skorost; 
        }
        
            if(posoka==4){
  my1Y-=skorost; 
}
 

if(t%1000){
      posoka=Math.floor(Math.random()*5);
}
       
    if(posoka==1){
  v4Y+=skorost1; 
}
    if(posoka==2){
  v4Y-=skorost1; 
}
        if(posoka==3){
  v4X+=skorost1; 
}
            if(posoka==4){
  v4X-=skorost1; 
}
 

//if(t%10000){
  //    posoka=Math.floor(Math.random()*5);
//}
     if(areColliding(myX,myY,40,40,vX,vY,70,70)){
   jivoti=0;
    }
       if(areColliding(myX,myY,40,40,v2X,v2Y,70,70)){
          jivoti=0;
    }
       if(areColliding(myX,myY,40,40,v1X,v1Y,70,70)){
       jivoti=0;
    }
       if(areColliding(myX,myY,40,40,v3X,v3Y,70,70)){
           jivoti=0;
    }
           if(areColliding(myX,myY,40,40,v4X,v4Y,70,70)){
        jivoti=0;
    }
   

       vX+=skorost2;
     v1Y-=skorost2;
    v2Y+=skorost2;
     v3X-=skorost2;
     
   if(vX>=800){
       vX=0;
       vY=Math.random()*550;
   }
     if(v1Y<=0){
       v1X=Math.random()*750;
       v1Y=550;
   }
    if(v2Y>=600){
       v2X=Math.random()*750;
       v2Y=0;
   }   
       if(v3X<=0){
       v3X=750;
       v3Y=Math.random()*550;
   }
   if(areColliding(my1X,my1Y,50,50,sX,sY,10,10)){
    jivoti1=0;
   }
   }else{
 
   
       if(posoka==1){
   my2X+=11.5; 
}
    if(posoka==2){
   my2X-=11.5; 
}
        if(posoka==3){
  my2Y+=11.5; 
        }
        
            if(posoka==4){
  my2Y-=11.5; 
            }
             if(my2X>=800){
        my2X=790;
    }
        if(my2X<=0){
        my2X=10;
    }
        if(my2Y>=600){
        my2Y=590;
    }
        if(my2Y<=0){
        my2Y=10;
    }
       if(++t){
      posoka=Math.floor(Math.random()*5);
}
}



   }

function draw() {

    if(t>=5000){

   context.drawImage(lol2,kX,kY,800,600);
    context.drawImage(ninja,myX,myY,40,40);
    context.drawImage(ninja2,my1X,my1Y,50,50);
   context.drawImage(kebabche,vX,vY,70,70);  
  context.drawImage(kebabche,v1X,v1Y,70,70);  
    context.drawImage(kebabche,v2X,v2Y,70,70);  
  context.drawImage(kebabche,v3X,v3Y,70,70);  
    context.drawImage(kebabche,v4X,v4Y,70,70);
            context.fillRect(sX,sY,10,10);
          //   context.fillRect(lolX,lolY,90,90);
     if(skorost<=12 && skorost<13){
             context.font="80px Times New Roman";
        context.fillText("Level:1",100,400);   
     }
        if(skorost>=12 && skorost<13){
             context.font="80px Times New Roman";
        context.fillText("Level:1",100,400);   
     }
       if(skorost>=13 && skorost<15){
             context.font="80px Times New Roman";
        context.fillText("Level:2",100,400);   
     }  
           if(skorost>=15){
             context.font="80px Times New Roman";
        context.fillText("Level:3",100,400);   
     }  

       if(jivoti<=0 && q1>=200){
        myX="NaN";
              skorost==11;
                myY="NaN"; 
                context.font="80px Times New Roman";
        context.fillText(" red ninja Win",100,100);
                vX="NaN";
           vY="NaN";
                v1X="NaN";
           v1Y="NaN";
                v2X="NaN";
           v2Y="NaN";
                v3X="NaN";
           v3Y="NaN";
                v4X="NaN";
           v4Y="NaN";
           q="NaN";
           console.log("lol");
    }
      if(skorost>=16){
       
          q1="NaN";
        my1X="NaN";1
                my1Y="NaN";
           context.font="80px Times New Roman";
        context.fillText("blue ninja(you)Win",100,100);
                vX="NaN";
           vY="NaN";
                v1X="NaN";
           v1Y="NaN";
                v2X="NaN";
           v2Y="NaN";
                v3X="NaN";
           v3Y="NaN";
                v4X="NaN";
           v4Y="NaN";
        jivoti1=0;
    }
       if(jivoti1<=0 && q>=200){
           jivoti1=1;
           skorost+=0.1;
             skorost1+=0.01;
             skorost2+=0.01;
           console.log(skorost);
    }
   context.font="50px Times New Roman";
        context.fillText(jivoti1,500,100);
           context.font="50px Times New Roman";
        context.fillText(jivoti,100,100);
     context.font="50px Times New Roman";


}else{
            if(jivoti1<=0 && q>=200){
     my2X=0;
                my2Y=0;
           context.font="80px Times New Roman";
        context.fillText("",100,100);
                vX="NaN";
           vY="NaN";
                v1X="NaN";
           v1Y="NaN";
                v2X="NaN";
           v2Y="NaN";
                v3X="NaN";
           v3Y="NaN";
                v4X="NaN";
           v4Y="NaN";
           q1="NaN"
    }
  
         if(areColliding(my2X,my2Y,40,40,sX,sY,10,10)){
++q2
   }
    if(t<=2000){
               context.drawImage(turnament,kX,kY,800,600);
        context.fillStile = "black";
        context.font="40px Times New Roman";
        context.fillText("The blue ninga  go in a turnament.",0,100); 
                context.font="40px Times New Roman";
        context.fillText(" In the final he is vs red ninga.",0,150); 
          context.font="40px Times New Roman";
        context.fillText("Blue ninga win.",0,200); 
                  context.font="40px Times New Roman";
        context.fillText("First red ninga kill the blue ningas teacher...",0,250); 
                 context.font="40px Times New Roman";
        context.fillText("second he want to kill the blue ninga...",0,350);
                       context.font="40px Times New Roman";
        context.fillText("The blue ninga want to revenge",0,400);
    }else{
       context.drawImage(lol1,kX,kY,800,600);
         context.drawImage(ninja2,my2X,my2Y,40,40);
      context.fillRect(sX,sY,10,10);
        context.font="80px Times New Roman";
        context.fillText(q2,100,100);
      context.font="40px Times New Roman";
        context.fillText("it's your dojo,if you want play press key space",0,400);
      context.font="40px Times New Roman";
        context.fillText("you must click at the red ninja to win!",0,200);
    
    }
}
};
 
function keyup(key) {
if(key==32){
    t=5000;
}
if(key==72){
    t=2000;
}
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
 
function mousedown() {
sX=mouseX;
    sY=mouseY;
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
function mouseup() {
sX=80;
    sY=600;
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};