import { Link, NavLink } from "react-router-dom"
import { Navlinks } from "../../constants/Navlinks"
import { useState } from "react"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"

function Navbar() {
    const [open, setOpen] = useState(false)

    const closeMobileMenu = () => setOpen(false)

    const renderLinks = (isMobile = false) => Navlinks.map((link) => (
        <li key={link.id} className={isMobile ? "px-8 py-3" : "relative"}>
            {link.children ? (
                <details className="group">
                    <summary className="cursor-pointer list-none">
                        {link.label}
                        <span className="ml-1 inline-block transition-transform group-open:rotate-180" aria-hidden="true">⌄</span>
                    </summary>
                    <ul className={`${isMobile ? "mt-2 space-y-1 pl-4" : "absolute left-0 top-full z-10 mt-2 min-w-44 rounded bg-white py-2 shadow-lg"} text-gray-800`}>
                        <li>
                            <Link
                                to={link.path}
                                onClick={isMobile ? closeMobileMenu : undefined}
                                className="block whitespace-nowrap px-4 py-2 hover:bg-gray-100"
                            >
                                Overview
                            </Link>
                        </li>
                        {link.children.map((child) => (
                            <li key={child.id}>
                                <Link
                                    to={child.path}
                                    onClick={isMobile ? closeMobileMenu : undefined}
                                    className="block whitespace-nowrap px-4 py-2 hover:bg-gray-100"
                                >
                                    {child.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </details>
            ) : (
                <NavLink to={link.path} onClick={isMobile ? closeMobileMenu : undefined}>
                    {link.label}
                </NavLink>
            )}
        </li>
    ))

    return (
        <header className="fixed w-full z-1 border-b border-gray-300 bg-white ">
            <div className="flex justify-between items-center p-2">
                <NavLink to="/" className="flex justify-center items-center gap-2">
                    <img src="/090112-mslb.png" alt="MLBSL" className="h-10 w-15" />
                    <h1>MLBSL</h1>

                </NavLink>

                <button
                    type="button"
                    aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={open}
                    className="sm:hidden relative left-20 text-xl border border-gray-300 p-2"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>

                <nav>
                    <ul className="gap-10 items-center relative right-20 font-semibold hidden sm:flex">
                        {renderLinks()}
                    </ul>
                </nav>
            </div>

            {open && (
                <ul className="sm:hidden space-y-2 absolute left-0 top-14 bg-gray-300 text-gray-800 w-full pt-4">
                    {renderLinks(true)}
                </ul>
            )}
        </header>
    )
}

export default Navbar