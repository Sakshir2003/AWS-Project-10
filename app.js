const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Node.js App on ECS</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
                    .container { background: white; padding: 40px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block; }
                    h1 { color: #333; }
                    p { color: #666; font-size: 1.2em; }
                    .info { margin-top: 20px; font-size: 0.9em; color: #888; border-top: 1px solid #eee; padding-top: 20px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🚀 Hello from AWS ECS!</h1>
                    <p>This Node.js application is running in a Docker container on AWS Fargate.</p>
                    <div class="info">
                        <strong>Container Hostname:</strong> ${os.hostname()}<br/>
                        <strong>Platform:</strong> ${os.platform()} ${os.release()}
                    </div>
                </div>
            </body>
        </html>
    `);
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Node.js app listening on port ${port}`);
});
