// GITHUB CODESPACE DOESN'T SUPPORT FOR WEBSTOCKETS


const WebSocket = require("ws");

// wss = web socket server
const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", (ws) => {
  console.log("Server: New Client connected!");

  ws.on("message", (data) => {
    console.log(`Server: Client has sent us: ${data}`);

    ws.send(data.toString().toUpperCase());
  });

  ws.on("close", () => {
    console.log("Server: Client has disconnected!");
  });
});

