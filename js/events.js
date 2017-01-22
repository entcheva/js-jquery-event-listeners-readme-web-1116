function getIt() {
  $('p').on('click', function() {
    alert('you clicked!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if (key.which == 103 || key.which == 71) {
      alert("you pressed g")
    }
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  submitIt()
  pressIt()
});
