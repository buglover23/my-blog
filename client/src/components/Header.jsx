import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from "../redux/theme/themeSlice";



export default function Header() {


    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user)
    const { theme } = useSelector((state) => state.theme);
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
                <Button className="w-12 h-10 hidden sm:inline" color='gray' pill onClick={() => dispatch(toggleTheme())}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </Button>

                {currentUser ? (

                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="user"
                                img={currentUser.profilePicture}
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">@{currentUser.username}</span>
                            <span className="block text-sm font-medium truncate">@{currentUser.email}</span>
                        </Dropdown.Header>
                        <Link to={'/dashboard?tab=profile'}>
                            <Dropdown.Item>
                                Profile
                            </Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>

                    </Dropdown>
                ) : (
                    <Link to='/sign-in'>
                        <Button outline gradientDuoTone='redToYellow' pill>
                            Sign In
                        </Button>
                    </Link>
                )
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to="/about">About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}
