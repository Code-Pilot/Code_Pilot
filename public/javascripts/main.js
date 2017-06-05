$(document).ready(function() {

  $('.signup-modal-button').click(function() {
    console.log('poop');
    $('.signup-modal-div').toggleClass('hide')
    $('.login-modal-button').toggleClass('hide')
      $('.signup-modal-button').replaceWith('<a href="/"><button>Back</button></a>')
  })

  $('.login-modal-button').click(function() {
    console.log('big poop');
    $('.login-modal-div').toggleClass('hide')
    $('.signup-modal-button').toggleClass('hide')
    $('.login-modal-button').replaceWith('<a href="/"><button>Back</button></a>')
  })

  $('#teacher-signup').click(function() {

  })



})
