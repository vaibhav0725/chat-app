import { MessageCircle,Copy } from 'lucide-react';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
export const Auth=({setRoomFlag,setRoomNumber})=>{
    const inputRef=useRef();
    function roomHandler(){
        setRoomNumber(inputRef.current?.value);
        setRoomFlag(inputRef.current?.value);
    }
    const [room,setRoom]=useState(0);
    function roomGenerator(){
        const x = Math.floor((Math.random() * 9000) + 1000);
        console.log(x);
        setRoom(x);
    }
    function clipboard(){
        navigator.clipboard.writeText(room.toString());
        toast.success("Code Copied To Clipboard")
    }
    return (
        room==0?<div className="w-[40%] p-2 flex flex-col border-1 border-neutral-800 rounded-lg gap-3">
        <div className='flex items-center justify-center'>
            <div className="text-neutral-200 text-4xl flex gap-1 items-center">
                <MessageCircle size={35}/>
                <div>Real Time Chat</div>
            </div>
        </div>
        <div className="flex">
            <input ref={inputRef} type="text" placeholder="Enter Room Code" className="rounded-lg h-10 w-[50%] p-2 text-md text-neutral-500 border-neutral-800 border-1 focus:border-1 focus:border-neutral-5"/>\
            <button onClick={roomHandler} className="bg-white text-black text-center w-[50%] rounded-lg h-10 text-md cursor-pointer">Enter The Room</button>
        </div>
        <button onClick={roomGenerator} className="bg-neutral-500 text-white text-center w-[100%] rounded-lg h-12 text-md cursor-pointer">Generate Room Code</button>
    </div>
    :
    <div className="w-[40%] p-2 flex flex-col border-1 border-neutral-800 rounded-lg gap-3">
            <div className='flex items-center justify-center'>
                <div className="text-neutral-200 text-4xl flex gap-1 items-center">
                    <MessageCircle size={35}/>
                    <div>Real Time Chat</div>
                </div>
            </div>
            <div className="flex gap-2">
                <input ref={inputRef} type="text" placeholder="Enter Room Code" className="rounded-lg h-10 w-[50%] p-2 text-md text-neutral-500 border-neutral-800 border-1 focus:border-1 focus:border-neutral-5"/>
                <button onClick={roomHandler} className="bg-white text-black text-center w-[50%] rounded-lg h-10 text-md cursor-pointer">Enter The Room</button>
            </div>
            <button onClick={roomGenerator} className="bg-neutral-500 text-white text-center w-[100%] rounded-lg h-12 text-md cursor-pointer">Generate Room Code</button>
            <div className="text-white text-center text-lg border-1 rounded-lg border-neutral-800 p-2 flex items-center justify-center gap-2">Room Code : {room}
                <button onClick={clipboard} className='cursor-pointer hover:text-neutral-500'><Copy size={20}/></button>
            </div>
        </div>
        
    )
}
