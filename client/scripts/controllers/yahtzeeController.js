.controller('YahtzeeController', ['$log', function($log) {
  var vm = this
  vm.title = "Yahtzee"

  vm.roll = function(id) {

    var die = $('#' + id)
    var dieValue = Math.floor(Math.random() * 6) + 1

    //rotate between 5 and 25 times
    var xRotate = 360 * (Math.floor(Math.random() * 20) + 5)
    var yRotate = 360 * (Math.floor(Math.random() * 20) + 5)


    //make sure the die ends up back at 1
    while (xRotate % 360 !== 0 ) {
      xRotate += 90;
    }

    while (yRotate % 360 !== 0 ) {
      yRotate += 90;
    }

    $log.log(dieValue)

    switch (dieValue) {

      case 2:
        xRotate += 90
        break;

      case 3:
        yRotate -= 90
        break;

      case 4:
        yRotate += 90
        //Statements executed when the result of expression matches valueN
        break;

      case 5:
        xRotate -= 90
        //Statements executed when the result of expression matches valueN
        break;

      case 6:
        xRotate += 180
        //Statements executed when the result of expression matches valueN
        break;

      default:
        //Statements executed when none of the values match the value of the expression
        break;
    }

    die.css('transform', 'rotateX('+xRotate+'deg) rotateY('+yRotate+'deg)');

  }

  vm.rollAll = function() {

    vm.roll('die1')
    vm.roll('die2')
    vm.roll('die3')
    vm.roll('die4')
    vm.roll('die5')

  }


}])

