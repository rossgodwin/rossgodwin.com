var AWS = require('aws-sdk');
var ses = new AWS.SES();
 
var RECEIVER = 'tm.anonymous.1@gmail.com';
var SENDER = 'rgodwin.tsd@gmail.com';

var response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
 };

exports.handler = function (event, context) {
    console.log('Received event:', event);
    
    sendEmail(event, function (err, data) {
        context.done(err, response);
    });
};

function buildHtmlBody(request) {
    var htmlTableInputs = "<table>";
    
    var inputs = request["tsd_rfp_inputs"];
    inputs.forEach((entry) => {
        var label = entry["label"];
        var value = entry["value"];
        htmlTableInputs += "<tr><td><b>" + label + "</b></td><td>" + value + "</td></tr>";
    });
    
    htmlTableInputs += "</table>";
    
    const result = `
        <!DOCTYPE html>
        <html>
          <head>
          </head>
          <body>
            ${htmlTableInputs}
          </body>
        </html>
    `;
    
    return result;
}

function buildTextBody(request) {
    var result = "";
    
    var inputs = request["tsd_rfp_inputs"];
    inputs.forEach((entry) => {
        var label = entry["label"];
        var value = entry["value"];
        result += label + ": " + value + "\n";
    });
    
    return result;
}

function sendEmail(event, done) {
    var fromAddress = event["tsd_rfp_from"];
    var toAddresses = [];
    var subject = event["tsd_rfp_subject"];
    var htmlBody = buildHtmlBody(event);
    var textBody = buildTextBody(event);
    
    event["tsd_rfp_tos"].forEach((toAddress) => {
        toAddresses.push(toAddress);
    });
    
    var params = {
        Destination: {
            ToAddresses: toAddresses
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: htmlBody
                },
                Text: {
                    Charset: "UTF-8",
                    Data: textBody
                }
            },
            Subject: {
                Data: subject,
                Charset: 'UTF-8'
            }
        },
        Source: fromAddress
    };
    ses.sendEmail(params, done);
}