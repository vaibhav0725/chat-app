"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    //console.log("CONNECTED TO WS");
    socket.on("message", (textToObj) => {
        var _a;
        const parseObj = JSON.parse(textToObj);
        if (parseObj.type === "join") {
            allSockets.push({
                socket: socket,
                room: parseObj.payload.roomId
            });
        }
        if (parseObj.type === "chat") {
            const currentUserRoom = (_a = allSockets.find(x => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.room;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parseObj.payload.message);
                }
            }
        }
    });
});
