import Link from "next/link"


const Authform = ({type}:{type:string}) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="mb-2 text-xl font-semibold ">
            <p>
                {type=="signup"?"Already have an account":"Don't have an account"} 
                <Link href={type=="signin"?"/signup":"/signin"} className="underline">
                    {type=="signup"?" Login":" Create "}
                </Link>
            </p>
        </div>
        <form className="w-full">
            {type=="signup"&&<div className="flex flex-col mt-5 w-full">
                <label>Name</label>
                <input type="text" className="p-3.5 border border-gray-300 w-full rounded-md" placeholder="Arpit Blagan"/>
            </div>}
            <div className="flex flex-col w-full">
                <label>Email</label>
                <input type="email" className="p-3.5 border  border-gray-300 w-full rounded-md" placeholder="arpit@gmail.com"/>
            </div>
            <div className="flex flex-col w-full">
                <label>Password</label>
                <input type="password" className="p-3.5 border border-gray-300 w-full rounded-md" placeholder="kds@12342"/>
            </div>
            <div className="mt-5">
                <button className="w-full p-3.5 bg-red-500 rounded-md hover:bg-red-600">{type=="signup"?"Create":"Login"}</button>
            </div>
        </form>     
    </div>
  )
}

export default Authform