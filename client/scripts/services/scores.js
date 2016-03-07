.factory('scoreService', ['$log', function($log) {

  var scoreGame = function(players){

    var gameOver = true;
    players.forEach(function(player){

      player.final = 0;

      var allScoreKeys = Object.keys(player.score)

      allScoreKeys.map(function(key){


        var bonusCheckArr = ['aces','twos','threes','fours','fives','sixes']
        var bonusCheck = 0

        bonusCheckArr.forEach(function(bonusKey){

          if (player.score[bonusKey] && player.score[bonusKey] !== "Bust") {
            bonusCheck += player.score[bonusKey]
          }

        })

        if (bonusCheck >= 63 ) {
          player.score.bonus = 35
        }

        if (player.score[key] && player.score[key] !== "Bust"){
          player.final += player.score[key]
        }

        //check for bonus

        //check for any null values
        if (key !== 'bonus' && !player.score[key]) {
          gameOver = false
        }

      })

    }); //end forEach

    if(gameOver){
      return 'gameOver'
    }



  } //end scoreGame

  return {
    game: scoreGame
  }

}])