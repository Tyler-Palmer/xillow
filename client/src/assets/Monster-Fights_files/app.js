new Vue({
    el: "#app",
    data: {
        newGame: false,
        conversation: [],
        userHealth: 100,
        enemyHealth: 100,
    },
    methods: {
        makeNewGame: function () {
            this.newGame = true
        },

        attack: function (damage) {
            const randomAttack = Math.floor(Math.random() * (damage.damage ? 10 + damage : 10 + 10))
            const healthMinus = (this.enemyHealth - randomAttack) / 100 * 100
            this.enemyHealth = healthMinus
            const newdialouge = `You attack ${randomAttack} damages, enemy have ${this.enemyHealth} left` 
            conversation.push(newdialouge)
            this.enemyAutoAttack();
            this.alertWinner();
            
        },

        heal: function(){
            const randomHealing = Math.floor(Math.random() * 15 + 10)
            const boost = (this.userHealth + randomHealing) / 100 * 100;
            this.userHealth = boost
            const newdialouge = `You're healing ${randomHealing} hp, your health increases to ${this.userHealth}`
            conversation.push(newdialouge)
            this.enemyAutoAttack();
            this.alertWinner();
        },

        enemyAutoAttack: function () {
            const randomEnemyAttack = Math.floor(Math.random() * 10 + 10)
            const newHealthMinus = (this.userHealth - randomEnemyAttack) / 100 * 100
            this.userHealth = newHealthMinus
            const newdialouge = `Enemy deals ${randomEnemyAttack} to you health, you have ${this.userHealth} left` 
            conversation.push(newdialouge)
        },

        alertWinner: function () {
            if (this.userHealth <= 0) {
                alert("You Won")
                this.userHealth =  0
                this.resetGame()
            } else if (this.enemyHealth <= 0) {
                alert("You Won")
                this.enemyHealth =  0;
                this.resetGame()
            }
        },


        resetGame: function () {
            this.conversation = [];
            this.newGame = false
            this.userHealth = 100;
            this.enemyHealth = 100;
        }
    }
}) 