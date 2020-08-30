var FriendsView = {
  $friends: $('.friends'),
  $friendbutton: $('.newFriends'),

  initialize: function() {
    Parse.readAll((data) => {
      for (let item of data.results) {
        // let item = JSON.parse(it);
        // item.text = MessagesView.encode(item.text);
        // item.username = MessagesView.encode(item.text);
        // item.roomname = MessagesView.encode(item.roomname);
        if (item.username && item.text) {
          if (Friends.data[item.username] === undefined ) {
            Friends.data[item.username] = [item];
          } else {
            Friends.data[item.username].push(item);
          }
        }
      }
      let keys = Object.keys(Friends.data);
      for (let key of keys) {
        if (key.length > 0 && key) {
          FriendsView.$friends.append(FriendsView.render({ username: key }));
        }
      }
    });

  },

  render: _.template(
    '<div class="friend"><%- username %></div>'),

  handleButton: function(event) {
    event.preventDefault();

  }
};