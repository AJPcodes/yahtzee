.factory('playerService', ['$log', function($log) {

  var Player = function(name){

    this.name = name

    this.score = {

      aces: null,
      twos: null,
      threes: null,
      fours: null,
      fives: null,
      sixes: null,
      bonus: null,
      threeOfAKind: null,
      fourOfAKind: null,
      fullHouse: null,
      smallStraight: null,
      largeStraight: null,
      yahtzee: null,
      chance: null
    }

    this.scoreField = function(diceArray, fieldName) {

      $log.log('score called')

      switch (fieldName) {

        case 'aces':

          var points = 0;

          diceArray.forEach(function(die){

            if (die.value == 1) {
              points += 1;
            }

          })

          this.score.aces = points


          break;

        case 'twos':

          var points = 0;

          diceArray.forEach(function(die){

            if (die.value == 2) {
              points += 2;
            }

          })

          this.score.twos = points

          break;

        case 'threes':

          diceArray.forEach(function(die){
            var points = 0;
            if (die.value == 3) {
              points += 3;
            }

          })

          break;

        case 'fours':

          diceArray.forEach(function(die){
            var points = 0;
            if (die.value == 4) {
              points += 4;
            }

          })

          break;

        case 'fives':

          diceArray.forEach(function(die){
            var points = 0;
            if (die.value == 5) {
              points += 5;
            }

          })

          break;

        case 'sixes':

          diceArray.forEach(function(die){
            var points = 0;
            if (die.value == 6) {
              points += 6;
            }

          })

          break;



        default:
          //Statements executed when none of the values match the value of the expression
          break;
      }


    }



  }

  var newPlayer = function(name){
    return new Player(name)
  }

  return {
    newPlayer: newPlayer
  }

}])