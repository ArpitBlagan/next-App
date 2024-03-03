import React, { Children } from "react";

export default function layout({children}:{children:React.ReactNode}){
    return <div>
        <div className=" bg-red-400 text-center md:text-2xl font-semibold absolute top-[70px] w-full">
            Special 20% discount offer to login/register today
        </div>
        {children}
    </div>
}