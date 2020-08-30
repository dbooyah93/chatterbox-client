var Messages = {
  render: _.template(`  {
    "username": "<%- username %>",
    "text": "<%- text %>",
    "roomname": "<%- roomname %>"
  }`),

  data: [],

  update: function(messages) {
    for (let message of messages) {
      data.push(message);
    }
  }
};