import { useRef } from "react";
export const TextBar=(props:{socket:WebSocket|null})=>{
    const inputRef=useRef("");
    function sendHandler(){
        props.socket?.send(inputRef.current.value);
    }
    return (
        <div className="text-white flex flex-row justify-around h-8 items-center w-[100%] gap-2">
            <input ref={inputRef} type="text" placeholder="Type Your Message" className="rounded-lg h-8 w-[80%] p-2 text-sm text-neutral-500 border-neutral-800 border-1 focus:border-1 focus:border-neutral-5"/>
            <button onKeyDown={(e)=>{inputKey(e)}} onClick={sendHandler} className="bg-white text-black text-center w-[20%] rounded-lg h-8 text-sm cursor-pointer">Send</button>
        </div>
    )
}