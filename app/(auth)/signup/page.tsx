import Authform from "@/components/Authform"


const page = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 h-screen ">
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 md:w-1/2">
                <Authform type="signup"/>
            </div>
        </div>
        <div className="hidden md:flex flex-col justify-center items-center ">
            <div className="mx-6">
                <p className="text-2xl text-center font-semibold">"Trying to serve the society and community that give us so much."</p>
                <p className="text-sm ">-CEO Arpit Blagan.</p>
            </div>
        </div>
    </div>
  )
}

export default page