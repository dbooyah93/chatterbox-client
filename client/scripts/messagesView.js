var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      for (let item of data.results) {
        if (item.username && item.text && item.roomname && item.text.indexOf('<') === -1) {
          Messages.data.push(Messages.render(item));
        }
      }
      for (let item of Messages.data) {
        MessagesView.$chats.append(MessageView.render(JSON.parse(item)));
      }
    });
  },

  render: function() {
  }

};