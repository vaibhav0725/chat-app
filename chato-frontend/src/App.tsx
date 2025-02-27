import { useEffect, useState } from "react"
import { Message } from "./components/Message"
import { TextBar } from "./components/TextBar"
import { TopBar } from "./components/TopBar"
function App() {
  const [socket,setSocket]=useState<WebSocket|null>(null);
  const [text,setText]=useState("");
  useEffect(()=>{
    const newSocket=new WebSocket("ws://localhost:8080",);
    newSocket.onopen=()=>{
      console.log("Connection Established");
      alert("Connected");
    }
    newSocket.onmessage=(message)=>{
      setText(message.data);
    }
    setSocket(newSocket);
    return ()=>newSocket.close();
  },[])  
  return (
    <div className="flex items-center justify-center h-screen p-2">
      <div className="w-[40%] p-2 flex flex-col border-1 border-neutral-800 rounded-lg gap-6">
        <TopBar/>
        <Message text={text}/>
        <TextBar socket={socket}/>
      </div>
    </div>
  )
}

export default App
