.controller('YahtzeeController', ['$log', function($log) {
  var vm = this
  vm.title = "Yahtzee"

  vm.dice = [];

  var Die = function(name, value) {
    this.name = name;
    this.value = value;
    this.keeper = false;
  }

  vm.dice.push(new Die('die1', 1))
  vm.dice.push(new Die('die2', 1))
  vm.dice.push(new Die('die3', 1))
  vm.dice.push(new Die('die4', 1))
  vm.dice.push(new Die('die5', 1))

  $log.log(vm.dice)

  vm.toggleDie = function(id) {
    var die = $('#' + id)

    vm.dice.forEach(function(die, index) {
      if (die.name == id) {
        die.keeper ? die.keeper = false: die.keeper = true;
      }
    })

    die.toggleClass('keeper')
  }

  vm.roll = function(dieObj) {

    var die = $('#' + dieObj.name)
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

    die.css('transform', 'rotateX('+xRotate+'deg) rotateY('+yRotate+'deg)')

    dieObj.value = dieValue

  }

  vm.rollAll = function() {

    vm.dice.forEach(function(die, index) {
      if(!die.keeper) {
       vm.roll(die)
      }

    })

  }


}])

