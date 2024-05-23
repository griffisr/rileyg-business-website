var AWS = require('aws-sdk');
var ses = new AWS.SES();
 
var RECEIVER = 'elamsroofing@gmail.com';
var SENDER = 'elamsroofing@gmail.com';

var response = {
 "isBase64Encoded": false,
 "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
 "statusCode": 200,
 "body": "{\"result\": \"Success.\"}"
 };

exports.handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
};
 
function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Name: ' + event.name + '\nEmail/Phone Number: ' + event.contact + '\nServices Needed: ' + event.services
                    + '\nHow did you find us?: ' + event.foundUs
                    + '\nHow can we help?: ' + event.message,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Referral: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}
