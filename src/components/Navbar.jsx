import { Link, NavLink } from "react-router-dom"
import { Navlinks } from "../constants/Navlinks"
import { useState } from "react"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <header className="fixed w-full z-1 border-b border-gray-300 bg-white ">
            <div className="flex justify-between items-center p-2">
                <NavLink className="flex justify-center items-center gap-2">
                    <img src="/profile.jpeg" alt="MLBSL" className="h-10 w-15" />
                    <h1>MLBSL</h1>

                </NavLink>

                <button className="sm:hidden relative left-20 text-xl border border-gray-300 p-2" onClick={() => setOpen(!open)}>{open ? <HiOutlineX /> : <HiOutlineMenu />}</button>

                <nav>
                    <ul className="gap-10 items-center relative right-20 font-semibold hidden sm:flex">
                        {
                            Navlinks.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.path}>
                                        {link.label}
                                    </Link>
                                </li>

                            ))
                        }
                    </ul>
                </nav>
            </div>


            { 
                open &&


                <ul className="sm:hidden space-y-2 absolute left-0 top-14 bg-gray-300 text-gray-800 w-full pt-4">
                    {
                        Navlinks.map((link) => (
                            <li key={link.id} className="px-8 py-3 ">
                                <Link to={link.path} onClick={() => setOpen(false)}>
                                    {link.label}
                                </Link>
                            </li>

                        ))
                    }
                </ul>
            }
        </header>
    )
}

export default Navbar