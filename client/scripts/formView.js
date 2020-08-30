var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);

    $('.refresher').click(function() {
      MessagesView.$chats.html('');
      MessagesView.initialize();
    });

    $('button.friend').click(function(event) {
      debugger;
      event.preventDefault();
      console.log('AAAAAAAAAAAAAAAAA');
    });

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let inputstring = $('input#message').val();
    var message = {
      username: $('#usernameinput').val(),
      text: inputstring,
      roomname: RoomsView.$select.val()
    };

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
        /**
         * this.data === message
         */
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    }); $(this).on();

    MessagesView.$chats.prepend(MessageView.render(message));

    // $(this)
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};