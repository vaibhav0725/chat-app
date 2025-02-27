import { WebSocket, WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8080});
// function roomGenerator(){
//     let x = Math.floor((Math.random() * 9000) + 1000);
//     return x;
// }
interface User{
    socket:WebSocket; 
    room:string;
}
let allSockets:User[]=[];
wss.on("connection",(socket)=>{
    //console.log("CONNECTED TO WS");
    socket.on("message",(textToObj:string)=>{
        const parseObj=JSON.parse(textToObj);
        if(parseObj.type==="join"){
            allSockets.push({
                socket:socket,
                room:parseObj.payload.roomId
            })
        }
        if(parseObj.type==="chat"){
            const currentUserRoom=allSockets.find(x=>x.socket==socket)?.room
            for(let i=0;i<allSockets.length;i++){
                if(allSockets[i].room==currentUserRoom){
                    allSockets[i].socket.send(parseObj.payload.message);
                }
            }
        }
    })
});