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

      var points = 0;
      switch (fieldName) {


        case 'aces':


          diceArray.forEach(function(die){

            if (die.value == 1) {
              points += 1;
            }

          })

          if (points === 0) {
            points = "Bust"
          }

          this.score.aces = points


          break;

        case 'twos':

          diceArray.forEach(function(die){

            if (die.value == 2) {
              points += 2;
            }

          })

          if (points === 0) {
            points = "Bust"
          }

          this.score.twos = points

          break;

        case 'threes':

          diceArray.forEach(function(die){

            if (die.value == 3) {
              points += 3;
            }

          })

          if (points === 0) {
            points = "Bust"
          }

          this.score.threes = points

          break;

        case 'fours':

          diceArray.forEach(function(die){

            if (die.value == 4) {
              points += 4;
            }

          })

          if (points === 0) {
            points = "Bust"
          }

          this.score.fours = points
          break;

        case 'fives':

          diceArray.forEach(function(die){

            if (die.value == 5) {
              points += 5;
            }

          })

          if (points === 0) {
            points = "Bust"
          }

          this.score.fives = points

          break;

        case 'sixes':

          diceArray.forEach(function(die){

            if (die.value == 6) {
              points += 6;
            }

          })

          if (points === 0) {
            points = "Bust"
          }

          this.score.sixes = points

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