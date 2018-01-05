<script type="text/javascript">
/*  Animated Grid Background Effect */
(function($) {

       /* insert canvas inside the fullwidth header container */
       $( "#grid_bg_effect_container" ).prepend( "<canvas id='grid_bg_effect'></canvas>" ); 

(function(main) {
    main();
  })(function() {

    'use strict';

    var c = document.getElementById('grid_bg_effect');
    var ctx = c.getContext('2d');
    var W = c.width = window.innerWidth;
    var H = c.height = window.innerHeight;
    var CX = W / 2;
    var CY = H / 2;

    var Square = function(x, y, size, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.angle = Math.random() * Math.PI * 2;
      this.resize = 1;
    };

    Square.prototype = {
      constructor: Square,
      update: function() {
        this.color += 1; /* set speed of color change */
        this.angle += 0.08; /* set speed of grid animation */
        this.resize = 1 + Math.cos(this.angle) * 0.2; /* set grid resize scale */
      },
      render: function(ctx) {
        ctx.save();

        /* DO NOT USE THE FOLLOWING 2 LINES AT THE SAME TIME */
          /* ctx.fillStyle = 'hsla(' + this.color + ', 100%, 50%, 1)'; */ /* uncomment this line to enable animated grid color */
          ctx.fillStyle = '#ffcc00'; /* set static grid color here */
        ctx.translate(this.x, this.y);
        ctx.scale(this.resize, this.resize);
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
      }
    };

    var size = 50; /* set grid size */
    var square = null;
    var squares = [];
    var maxCol = 20; /* set grid column number */
    var maxRow = 10; /* set grid row number */
    var x = CX - (size / 2) * (maxCol - 1);
    var y = CY - (size / 2) * (maxRow - 1);

    for(var row = 0; row < maxRow; row++) {
      x = CX - (size / 2) * (maxCol - 1);
      for(var col = 0; col < maxCol; col++) {
        square = new Square(x, y, size * Math.random(), Math.random() * 100);
        squares.push(square);
        x += size;
      }
      y += size;
    }

    requestAnimationFrame(function loop() {
      requestAnimationFrame(loop);

      ctx.clearRect(0, 0, W, H);

      for(var i = 0; i < squares.length; i++) {
        square = squares[i];
        square.update();
        square.render(ctx);				
      }

    });
    
  });

})(jQuery);

</script>