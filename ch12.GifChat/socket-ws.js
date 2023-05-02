const WebSocket = require("ws");

module.exports = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (wws, req) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    console.log("새로운 클라이언트 접속", ip);
    wws.on("message", (message) => {
      console.log(message.toString());
    });
    wws.on("error", console.error);
    wws.on("close", () => {
      console.log("클라이언트 접속 해제", ip);
      clearInterval(wws.interval);
    });
    wws.interval = setInterval(() => {
      if (wws.readyState === wws.OPEN) {
        wws.send("서버에서 클라이언트로 메시지를 보냅니다");
      }
    }, 3000);
  });
};
