Add aws.json credentials received from eEE to directory

npm install
node index.js

Each call reads one message from queue, or if no messages are available listens on queue for 20s for incoming messages.
Edit device_id to read different queues.

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-json-file.html

https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sqs-examples-send-receive-messages.html

Note : It is important to always use 'WaitTimeSeconds: 20' in receivemessage params. Failure to do so will lead to credentials being revoked.