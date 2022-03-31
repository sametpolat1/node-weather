const request = require("request");
require("dotenv").config();
let city = "Kocaeli";
const url = `http://api.weatherstack.com/current?access_key=${process.env.apiKey}&query=${city}`;
var http = require("http");
http
  .createServer(function (req, res) {
    const htmlBody = `
<div class="container">
    <fieldset>
        <form action="/" method="POST">
            City : <input name=""/>
            <button type="Submit">Submit</button>
        </form>
    </fieldset>
</div>
`;
res.write(htmlBody)
let body = ""
req.on('data', function (chunk) {  //takes input value from DOM
      body += chunk;
     // console.log("body", body)
    })
    request(url, function (err, response, body) {
      if (err) {
        console.log("error:", error);
      } else {
        console.log('body:', body);
        const obj = JSON.parse(body);
        console.log(
          `Today ${obj.current.temperature} degrees in ${obj.request.query}`
        );
      }
    });
    res.end();
  })
  .listen(8000);


















