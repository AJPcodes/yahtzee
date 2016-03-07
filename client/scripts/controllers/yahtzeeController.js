.controller('YahtzeeController', ['$log', 'diceService', 'playerService', function($log, $dice, $player) {
  var vm = this

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

    vm.numRolls--
  }

  //initialize die roll
  vm.rollAll()

  //on a turn end, increment current turn, re-roll die, and update current player
  vm.endTurn = function(){
    turn += 1
    vm.numRolls = 3
    vm.rollAll()
    vm.currentPlayer = vm.players[turn % vm.players.length]
  }


}])

