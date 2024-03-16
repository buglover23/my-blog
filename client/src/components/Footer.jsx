import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook,BsInstagram,BsTwitter,BsGithub,BsLinkedin } from 'react-icons/bs'
export default function FooterComponent() {
    return (
        <Footer container className="border-t-">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to="/" className="self-center dark:text-white">
                            <img className="rounded-full w-28 h-28 " src="/image/logo.png" alt="logo.png" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm: mt-4 sm: grid-cols-3 sm: gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                                    My Projects
                                </Footer.Link>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                                    {`Shun's Blog`}
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Personal Link" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Shun's Blog" year={new Date().getFullYear()} />
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href="#" icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="https://github.com/buglover23" icon={BsGithub} />
                    <Footer.Icon href="#" icon={BsLinkedin} />
                </div>
                </div>
            </div>
        </Footer>
    )
}

