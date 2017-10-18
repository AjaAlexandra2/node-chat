const express = require('express');
const bodyParser = require('body-parser');
const messagesController =  require(__dirname + '/controllers/messages_controller');


const app = express();
const port = 3000;

app.use(bodyParser.json() );
app.use(express.static(__dirname +'/../public/build'));


const messagesBaseUrl = '/api/messages';


app.post(messagesBaseUrl, messagesController.create);
app.get(messagesBaseUrl, messagesController.read);
app.put(`${ messagesBaseUrl }/:id`, messagesController.update);
app.delete(`${ messagesBaseUrl }/:id`, messagesController.delete);



















app.listen( port, () => {
  console.log(`I love icecream ${port}`);

});
