 var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        // line
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        //circle
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        //stroke text
        ctx.strokeText("Hi Friends", 10,50);
        // text
        ctx.font = "30px Arial";
       ctx.fillText("Hello Guys", 10, 50);
       // Create gradient
      var grd = ctx.createLinearGradient(0, 0, 200, 0);
       grd.addColorStop(0, "violet");
       grd.addColorStop(1, "white");

     // Fill with gradient
      ctx.fillStyle = grd;
     ctx.fillRect(10, 10, 150, 80);
     //image
     var c = document.getElementById("myCanvas");
     var ctx = c.getContext("2d");
     var img = document.getElementById("Image/scream.jpg");
     ctx.drawImage(img, 10, 10);