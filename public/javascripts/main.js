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

  setTimeout(slide_front_text, 2500);

  function slide_front_text() {
  $('#slider_text').slideUp(800, function() {
      $(this).text('Paired Programming for Now').slideDown(500).delay(2200);
      $(this).slideUp(1200, function() {
        $(this).text("Paired Programming for Tomorrow").slideDown(500).delay(2200);
        $(this).slideUp(1200, function() {
          $(this).text("Code_Pilot").slideDown(500).delay(5500);
        });
      });
  });
};

})
