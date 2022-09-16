const express = require("express");
const http = require('http');
const path = require('path');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || "8000";

const peerServer = ExpressPeerServer(server, {
    proxied: true,
    debug: true,
    path: '/internet-phone',
    port: 9000,
    //ssl: {}
});

app.use(peerServer);
server.listen(port, () => {
    console.log(`server is listening on : ${port}`);
});