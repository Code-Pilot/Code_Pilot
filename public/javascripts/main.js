$(document).ready(function() {

  $(function() {
    var socket = io.connect();
    var $messageForm = $('#messageForm');
    var $message = $('#message');
    var $chat = $('#chat');
    var $messageArea = $('#messageArea');
    var $userFormArea = $('#userFormArea')
    var $userForm = $('#userForm')
    var $users = $('#users')
    var $username = $('#username')
    $messageForm.submit(function(e) {
      e.preventDefault();
      socket.emit('send message', $message.val());
      $message.val('');
    })
    socket.on('new message', function(data) {
      $chat.append('<div class="well"><strong>'+data.user+'</strong>: '+data.msg+'</div>')
    })
    $userForm.submit(function(e) {
      e.preventDefault();
      socket.emit('new user', $username.val(), function(data){
        if(data) {
          $userFormArea.hide();
          $messageArea.show();
        }
      });
      $username.val('');
    });
    socket.on('get users', function(data){
      var html = '';
      for(i = 0; i < data.length; i++) {
        html += '<li class="list-group-item">'+data[i]+'</li>';
      }
      $users.html(html)
    })
  });

  // Private Connection


  // 
  // $(function() {
  //   var socket1 = io.('/Pair-Program');
  //   var $messageForm = $('#messageForm1');
  //   var $message = $('#message1');
  //   var $chat = $('#chat1');
  //   var $messageArea = $('#messageArea1');
  //   var $userFormArea = $('#userFormArea1')
  //   var $userForm = $('#userForm1')
  //   var $users = $('#users1')
  //   var $username = $('#username1')
  //   $messageForm.submit(function(e) {
  //     e.preventDefault();
  //     socket.emit('send message1', $message.val());
  //     $message.val('');
  //   })
  //   socket.on('new message1', function(data) {
  //     $chat.append('<div class="well"><strong>'+data.user+'</strong>: '+data.msg+'</div>')
  //   })
  //   $userForm.submit(function(e) {
  //     e.preventDefault();
  //     socket.emit('new user1', $username.val(), function(data){
  //       if(data) {
  //         $userFormArea.hide();
  //         $messageArea.show();
  //       }
  //     });
  //     $username.val('');
  //   });
  //   socket.on('get users1', function(data){
  //     var html = '';
  //     for(i = 0; i < data.length; i++) {
  //       html += '<li class="list-group-item">'+data[i]+'</li>';
  //     }
  //     $users.html(html)
  //   })
  // });


// End of Private Connection

  $('.enterChat').click(function() {
    $('#messageArea').toggleClass('hide')
  })

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





  $('#check').click(function(){
    var pass = $('.pass')
    if(('.check').checked){
      pass.setAttribute('type','text')
    }
    else{
      pass.setAttribute('type','password')
    }
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
