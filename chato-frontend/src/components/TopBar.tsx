import { MessageCircle,Copy } from 'lucide-react';
export const TopBar=()=>{
    return (
        <div className="text-slate-500 border-1 border-neutral-800 rounded-lg p-3 flex flex-col gap-3">
            <div className='px-1'>
                <div className="text-neutral-200 text-2xl flex gap-1 items-center">
                    <MessageCircle/>
                    <div>Real Time Chat</div>
                </div>
                <p className="text-sm text-neutral-500 mt-[-5px]">temporary room that expires after all users exit</p>
            </div>
            <div className="flex justify-between bg-neutral-800 rounded-lg items-center text-center text-neutral-500 px-1">
                <div className='flex items-center gap-1'>
                    <div>Room Code: #1234</div>
                    <button className='hover:text-white cursor-pointer'>
                        <Copy size={15}/>
                    </button>
                </div>
                <div className='flex items-center'>Users: 1/5</div>
            </div>
        </div>
    )
}