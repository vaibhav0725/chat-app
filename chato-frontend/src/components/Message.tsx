// import { useEffect, useState } from "react";
import { Block } from "./Block"
interface Msg{
    text?:string;
}
export const Message=(props:Msg)=>{
    return (
        <div className="rounded-lg border-neutral-800 h-[350px] border-1 w-[100%] p-2 flex flex-col gap-1">
            <Block text={props.text}></Block>
        </div>
    )
}