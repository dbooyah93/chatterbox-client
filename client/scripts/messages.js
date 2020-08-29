var Messages = {
  render: _.template(`  {
    "username": "<%= username %>",
    "text": "<%= text %>",
    "roomname": "<%= roomname %>"
  }`),

  data: []
};