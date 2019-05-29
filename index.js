var AWS = require('aws-sdk');

AWS.config.loadFromPath('credentials.json');
sqs = new AWS.SQS({apiVersion: '2012-11-05'});

base_queue_url = 'https://sqs.eu-west-2.amazonaws.com/652788579870/';
device_id = '1';
queueurl = base_queue_url + device_id;
console.log("Queue URL : " +queueurl);

var receiveParams =
{
    QueueUrl: queueurl,
    WaitTimeSeconds: 20
}

var receiveCallback = function(err, data)
{
    if (err)
    {
        console.log("Receive Error", err);
    }
    else if (data.Messages)
    {
        data.Messages.forEach(message => {
            console.log(message);
            var deleteParams =
            {
                QueueUrl: queueurl,
                ReceiptHandle: message.ReceiptHandle
            }

            var deleteCallback = function(err, data)
            {
                if (err) 
                {
                    console.log("Delete Error", err);
                }
                else
                {
                    console.log("Message Deleted", data);
                }
            }

            sqs.deleteMessage(deleteParams, deleteCallback);
        });
    }
}

sqs.receiveMessage(receiveParams, receiveCallback);