.controller('YahtzeeController', ['$log', function($log) {
  var vm = this
  vm.title = "Yahtzee"



  var getRandom = function(max, min) {
  // $log.log('get random#')
   return (Math.floor(Math.random() * (max-min)) + min) * 90
  }

  vm.roll = function(id) {
    var min = 1
    var max = 24
    $log.log('roll called')
    var die = $('#' + id)
    var xRand = getRandom(max, min)
    var yRand = getRandom(max, min)

    die.css('transform', 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)');

  }

  vm.rollAll = function() {

    vm.roll('die1')
    vm.roll('die2')
    vm.roll('die3')
    vm.roll('die4')
    vm.roll('die5')

  }


}])

