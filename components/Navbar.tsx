import Link from "next/link"


const Navbar = () => {
  return (
    <div className="w-full top-0 flex justify-between items-center text-white bg-black shadow-xl p-4">
        <div className="text-2xl font-semibold">
            <Link href='/' className="underline font-bold text-red-400">((!))</Link>
        </div>
        <div className="invisible md:visible flex-1 flex gap-5 justify-end text-xl">
            <Link href="">About</Link>
            <Link href="/signin">Login</Link>
            <Link href="/signup">Register</Link>
        </div>
    </div>
  )
}

export default Navbar