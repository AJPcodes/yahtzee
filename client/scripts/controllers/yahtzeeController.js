.controller('YahtzeeController', ['$log', 'diceService', 'playerService', 'scoreService', function($log, $dice, $player, $score) {
  var vm = this

  vm.gameOver = false

  vm.numRolls = 3;
  var turn = 0;

  vm.players = [
    $player.newPlayer('Player1'),
    $player.newPlayer('Player2')
  ]

  vm.currentPlayer = vm.players[0]

  vm.dice = $dice.getDice();

  vm.toggleDie = function(id) {
    var selectedDie = $('#' + id)

    vm.dice.forEach(function(die, index) {
      if (die.name == id) {
        die.keeper ? die.keeper = false: die.keeper = true;
      }
    })

    selectedDie.toggleClass('keeper')
  }

  vm.roll = function(dieObj) {
    $dice.roll(dieObj)
  }

  vm.rollAll = function() {
    if (vm.numRolls > 0){

      vm.dice.forEach(function(die, index) {
        if(!die.keeper) {
         vm.roll(die)
        }

      })

    }
    //decrement remaining number of rolls
    vm.numRolls--
  }

  //initialize die roll
  vm.rollAll()

  //on a turn end, increment current turn, re-roll die, and update current player
  vm.endTurn = function(){
    turn += 1
    vm.numRolls = 3
    //ensure all dice are deselected
    vm.dice.forEach(function(die, index) {
      die.keeper = false;
    })

    var selectedDice = $('.dieCube')
    selectedDice.each(function(index, selectedDie){
      $(selectedDie).removeClass('keeper')
    })

    vm.rollAll()
    vm.currentPlayer = vm.players[turn % vm.players.length]

    //check if game is over
    if ($score.game(vm.players) == 'gameOver') {

      vm.gameOver = true
    }
  }

  vm.rotate = function(){
    $('.scorecard:first-child').fadeOut(400, 'swing')
    $('.scorecard:first-child').appendTo('.scoreBoard').hide().fadeIn(400, 'swing')
  }

}])

