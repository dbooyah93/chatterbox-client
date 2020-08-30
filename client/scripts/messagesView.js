var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    Parse.readAll((data) => {
      for (let item of data.results) {
        // item.text = MessagesView.encode(item.text);
        // item.username = MessagesView.encode(item.text);
        // item.roomname = MessagesView.encode(item.roomname);
        if (item.username && item.text && item.roomname) {
          Messages.data.push(Messages.render(item));
        }
      }
      for (let item of Messages.data) {
        MessagesView.$chats.append(MessageView.render(JSON.parse(item)));
      }
    });
  },


  // encode: function(string) {
  //   if (string !== undefined) {
  //     let replaced = string;
  //     while ( replaced.indexOf('<') > -1 && replaced.indexOf('>') > -1 && replaced.indexOf('&') > -1) {
  //       replaced = replaced.replace('<', ' &lt');
  //       replaced = replaced.replace('>', ' &gt');
  //       replaced = replaced.replace('\\', '');
  //       replaced = replaced.replace('$', ' ');
  //       replaced = replaced.replace('"', ' \"');
  //       replaced = replaced.replace(`'`, ` \'`);
  //       replaced = replaced.replace('&', ' &amp');
  //     }
  //     return replaced;
  //   }
  // },

  render: _.template(`
      <div class="chat">
        <div class="username" id="<%- username %>"><%- username %></div>
        <div class="text"><%- text %></div>
        <div class="roomname">room: <%- roomname %></div>
      </div>
    `),

};