
// Imports
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const fs = require('fs')
var XMLHttpRequest = require('xhr2');


// Static Files
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS'})
})

app.get('/about', (req, res) => {
    res.render('about', { text: 'About Page'})
})


//post
app.post('', (req, res) => {
    res.send(`<b>YOU REPORTED:</b>  ${req.body.COCNAME}  <b>REASON:</b>  ${req.body.REASON}  <b>IT HAPPEND AT:</b>  ${req.body.WHENDIDITHAPPEN} <b>YOU REPORTED AT:</b>  ${req.body.TIMESTAMP}`);
    //loggingfile
    const content = `\n ${req.body.YourCOCName} REPORTED:  ${req.body.COCNAME}  REASON:  ${req.body.REASON} IT HAPPEND AT:  ${req.body.WHENDIDITHAPPEN} THE PERSON REPORTED AT:  ${req.body.TIMESTAMP}`
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/934814154219474954/QBnxdFwfg1L-fiD5_h9jLei-8R2Eg-Kj01M366cE9y928FVPOlcYtbEkVOWE820rkIqe");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "My Webhook Name",
      avatar_url: "",
      content : content
    }

    request.send(JSON.stringify(params));
    
fs.appendFile("reportlog.txt",content,err => {
if(err){
    console.err;
    return;
}});
//sending to webhook

sendMessage()

  });
//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))
//save Data to Webhook



