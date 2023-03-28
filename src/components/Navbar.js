import Link from "next/link"

export default function Navbar({ link }) {
    
    
    return (
        <div className="flex gap-5 pb-10 font-bold text-2xl">
            <Link href="/">Todos</Link>
            <Link href="/todo">Done Todos</Link>
        </div>
    )
}