var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Parse.readAll((data) => {
      for (let item of data.results) {
        // let item = JSON.parse(it);
        if (item.roomname && item.text) {
          if ( Rooms.data[item.roomname] === undefined ) {
            Rooms.data[item.roomname] = [item];
          } else {
            Rooms.data[item.roomname].push(item);
          }
        }
      }
      // for (let item of Messages.data) {
      //   MessagesView.$chats.append(MessageView.render(JSON.parse(item)));
      // }
    });
  },

  render: function() {
  }

};
