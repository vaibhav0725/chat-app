interface InputText{
    text?:string;
}
export const Block=(props:InputText)=>{
    const text="hello"
    const textWidth=`w-[${10*text.length}] bg-white text-black p-0.5 rounded-lg px-1 w-[40px]`;
    return (
        <div className={textWidth}>
            {props.text}
        </div>
    )
}