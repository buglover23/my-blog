import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
    return (
        <Navbar className="border-b-2">
            <Link to="/" className="self-center dark:text-white">
                <img className="rounded-full w-28 h-28 " src="/image/logo.png" alt="logo.png" />
            </Link>
            <form action="">
                <TextInput
                    type="text"
                    placeholder="search"
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                ></TextInput>
            </form>
            <Button className="w-12 h-10 lg:hidden" color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className="flex gap-2 md:order-2">
                <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to='/sign-in'>
                    <Button  color='gray' pill>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle/>
            </div>
                <Navbar.Collapse>
                    <Navbar.Link >
                        <Link to="/">Home</Link>
                    </Navbar.Link>
                    <Navbar.Link >
                        <Link to="/about">About</Link>
                    </Navbar.Link>
                    <Navbar.Link >
                        <Link to="/projects">Projects</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
        </Navbar>
    )
}
