        // Enemies our player must avoid
        var score=1;
        var miss=1;
        var Enemy = function(x,y) {
            // Variables applied to each of our instances go here,
            // we've provided one for you to get started
            this.x=x;
            this.y=y;
            // The image/sprite for our enemies, this uses
            // a helper we've provided to easily load images
            this.sprite = 'images/enemy-bug.png';
        };


        // Update the enemy's position, required method for game
        // Parameter: dt, a time delta between ticks
        Enemy.prototype.update = function(dt) {
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
            // all computers.
            this.x=this.x+Math.random() * 200 * dt;
            if(this.x>505)
                this.x=0;
            player.update(this.x,this.y); //send to function update to check checkCollisions.
        };

        // Draw the enemy on the screen, required method for game
        Enemy.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        };
        var allEnemies=[new Enemy(0, Math.random() * 200 + 10),new Enemy(200, Math.random() * 50 + 200),new Enemy(100, Math.random() * 50 +100)]; //in array have three enemy.

          // Now write your own player class
        // This class requires an update(), render() and
        // a handleInut() method.
        var Player = function(x,y) {
            this.x=x;
            this.y=y;
            this.sprite = 'images/char-boy.png';
        };

        Player.prototype.update = function (XanEnemy,YanEnemy) {
            // check for collision between enemy and player

            if (
                player.y + 131 >= YanEnemy + 90 && player.x + 25 <= XanEnemy + 88 && player.y + 73 <= YanEnemy+ 135 && player.x + 76 >= XanEnemy + 11) {
                console.log('collided');
                player.x = 202.5;
                player.y = 383;
                alert("Misses: "+miss);
                miss++;
            }
        };

        Player.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

        };

        Player.prototype.handleInput = function(x) {

            if(x === 'left') {
                this.x = this.x - 30;
                if(this.x<0)  //check is a player out of canvas
                    this.x=0;
            }
            else if(x === 'right') {
                this.x = this.x + 30;
                if(this.x>400)
                    this.x=400;

            }

            else if(x === 'up') {
                this.y = this.y - 30;
                if(this.y<-20){

                    alert("Good job Scores is :"+score); //when player reach water that is succses
                    score++;
                    this.y=330;
                }
            }

            else if(x === 'down') {
                this.y = this.y + 30;
                if(this.y>440)
                    this.y=330;


            }

        };
        // Now instantiate your objects.
        // Place all enemy objects in an array called allEnemies
        // Place the player object in a variable called player


        // This listens for key presses and sends the keys to your
        // Player.handleInput() method. You don't need to modify this.
        document.addEventListener('keyup', function(e) {
            var allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };

            player.handleInput(allowedKeys[e.keyCode]);
        });
        var player= new Player(210,330);

