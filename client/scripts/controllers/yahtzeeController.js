.controller('YahtzeeController', ['$log', 'diceService', function($log, $dice) {
  var vm = this
  vm.title = "Yahtzee"

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

