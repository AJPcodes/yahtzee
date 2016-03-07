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


      var points = 0;

      var num1s = 0;
      var num2s = 0;
      var num3s = 0;
      var num4s = 0;
      var num5s = 0;
      var num6s = 0;

      diceArray.forEach(function(die){


        if (die.value == 1) {
          num1s += 1;
        }

        if (die.value == 2) {
          num2s += 1;
        }

        if (die.value == 3) {
          num3s += 1;
        }

        if (die.value == 4) {
          num4s += 1;
        }

        if (die.value == 5) {
          num5s += 1;
        }

        if (die.value == 6) {
          num6s += 1;
        }

      })

      var totals = [num1s, num2s, num3s, num4s, num5s, num6s];

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

        case 'threeOfAKind':

          this.score.threeOfAKind = 'Bust'

          totals.forEach(function(number){
            if (number >= 3 ) {
              diceArray.forEach(function(die){
                points += die.value
              })
              this.score.threeOfAKind = points
            }
          }.bind(this))

          break;

        case 'fourOfAKind':

          this.score.fourOfAKind = 'Bust'

          totals.forEach(function(number){
            if (number >= 4 ) {
              diceArray.forEach(function(die){
                points += die.value
              })
              this.score.fourOfAKind = points
            }
          }.bind(this))

          break;

        case 'fullHouse':

          if (totals.indexOf(2) !== -1 && totals.indexOf(3) !== -1) {
            this.score.fullHouse = 25

          } else {
            this.score.fullHouse = "Bust"
          }


          break;

        case 'smallStraight':

          $log.log(totals.indexOf(1))

          if (num1s >= 1 && num2s >= 1 && num3s >= 1 && num4s >= 1 ) {
            this.score.smallStraight = 30
          } else if (num2s >= 1 && num3s >= 1 && num4s >= 1 && num5s >= 1 ) {
            this.score.smallStraight = 30
          } else if (num3s >= 1 && num4s >= 1 && num5s >= 1 && num6s >= 1 ) {
            this.score.smallStraight = 30
          } else {
            this.score.smallStraight = "Bust"
          }

          break;

        case 'largeStraight':

          if (num1s >= 1 && num2s >= 1 && num3s >= 1 && num4s >= 1 && num5s >= 1 ) {
            this.score.largeStraight = 40
          } else if (num2s >= 1 && num3s >= 1 && num4s >= 1 && num5s >= 1 && num6s >= 1 ) {
            this.score.largeStraight = 40
          } else {
            this.score.largeStraight = "Bust"
          }

          break;

        case 'yahtzee':


          if (num5s >= 1) {
            this.score.yahtzee = 50
          } else {
            this.score.yahtzee = "Bust"
          }

          break;

        case 'chance':

          diceArray.forEach(function(die){
              points += die.value;
          })

          this.score.chance = points

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