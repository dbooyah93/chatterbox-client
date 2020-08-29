var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $roominput: $('#roominput'),

  initialize: function() {
    RoomsView.$button.click(RoomsView.handleAddRoom);

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
      let keys = Object.keys(Rooms.data);
      for (let key of keys) {
        RoomsView.$select.append(RoomsView.render({ roomname: key }));
      }
    });
  },

  handleAddRoom: function(event) {
    //event.preventDefault();
    let inputstring = RoomsView.$roominput.val();
    $.ajax({
      url: 'http://parse.hrr.hackreactor.com/chatterbox/classes/rooms',
      type: 'POST',
      data: JSON.stringify({
        user: 'n/a',
        room: inputstring,
        text: 'n/a'
      }),
      contentType: 'application/json',
      success: function(data) {
        console.log('chatterbox: Room added');
      },
      error: function(data) {
        console.error('chatterbox: Failed to add room', data);
      }
    });
    RoomsView.$select.append(RoomsView.render({roomname: inputstring}));
  },

  render: _.template(
    '<option value="<%= roomname %>"><%= roomname %></option>')
};
