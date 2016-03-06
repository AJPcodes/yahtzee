.controller('YahtzeeController', ['$log', 'diceService', 'playerService', function($log, $dice, $player) {
  var vm = this
  vm.title = "Yahtzee"

  vm.players = [
    $player.newPlayer('Player1'),
    $player.newPlayer('Player2')
  ]

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

    vm.dice.forEach(function(die, index) {
      if(!die.keeper) {
       vm.roll(die)
      }

    })

  }


}])

