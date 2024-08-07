// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT CUSTOM CSS
import "@/styles/custom.css"

// IMPORT REACT ICONS
import { FaAngleRight } from "react-icons/fa"

// IMPORT ASTRO COLLECTION
import { getCollection } from "astro:content"

// IMPORT HEADER COLLECTION
let header_data = await getCollection("header")
header_data = header_data.filter(item => item.data.active).sort((a, b) => a.data.order - b.data.order)

// IMPORT MARKDOWN
import { frontmatter as button } from "@/content/header-extra/button.md"
const Button_link = button.button_link
const Button_text = button.button_text

// IMPORT JSX COMPONENTS
import InputJsx from "../input/jsx"
import MobileHeader from "@/components/common/header/mobile/jsx/index"
import SocialLinks from "../social-links/jsx"

// IMPORT JSX ATOMS
import ButtonRedJsx from "@/atoms/atoms-shiva/buttons/red/jsx"
import LinkJsx from "@/atoms/links/jsx"
import ParagraphLgWhiteJsx from "@/atoms/atoms-shiva/paragraphs/lg/white/hover-red/jsx"
import PictureContainJsx from "@/atoms/picture/internal/contain/jsx"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [openDropdowns, setOpenDropdowns] = useState({})

    // TOGGLE NAVBAR MENU
    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen)

    }

    // TOGGLE DROPDOWN FOR LINKS WITH DROPDOWN
    const toggleDropdown = ( index ) => {

        setOpenDropdowns( prevState => ({

            ...prevState,
            [index]: !prevState[index]

        }))

    }

    return (

        <header>
            <nav className="hidden md:flex flex-col items-center gap-6 fixed left-0 bg-black h-full w-28 z-30 px-2 py-14">
                <LinkJsx href="/">
                    <div className="w-14 h-14">
                        <PictureContainJsx
                            alternative_text=""
                            source="/logo/captivation-main.svg"
                        />
                    </div>
                </LinkJsx>
                <div className="w-12 h-12 cursor-pointer" onClick={toggleMenu}>
                    <PictureContainJsx
                        alternative_text=""
                        source={isMenuOpen ? "/icons/cross.svg" : "/icons/menu.svg"}
                    />
                </div>
            </nav>
            <div className={`fixed top-0 left-0 h-full pl-28 py-14 w-96 max-w-full max-h-dvh overflow-y-auto bg-black transform z-20 scrollbar-hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
                <ul className="flex flex-col gap-6 p-8 text-white">
                    {
                    
                        header_data.map( ( item, index ) => (

                            <li className="cursor-pointer">
                                <div onClick={() => item.data.hasDropdown ? toggleDropdown( index ) : null}>
                                    <LinkJsx href={ item.data.link }>
                                        <div className="flex gap-6 items-center">
                                            <ParagraphLgWhiteJsx>{ item.data.title }</ParagraphLgWhiteJsx>
                                            {

                                                item.data.hasDropdown&&
                                                <span className={`text-white duration-300 ${ toggleDropdown ? "rotate-90 text-red-500" : "" }`}>
                                                    <FaAngleRight/>
                                                </span>

                                            }
                                        </div>
                                    </LinkJsx>
                                </div>
                                {
                                
                                    item.data.hasDropdown && openDropdowns[index] && (

                                        <ul className="flex flex-col gap-6 p-4">
                                            {
                                            
                                                item.data.items.map( ( subItem ) => (

                                                    <li>
                                                        <LinkJsx href={ subItem.link }>
                                                            <ParagraphLgWhiteJsx>{ subItem.title }</ParagraphLgWhiteJsx>
                                                        </LinkJsx>
                                                    </li>

                                                ))
                                            
                                            }
                                        </ul>

                                    )
                                
                                }
                            </li>

                        ))
                    
                    }
                    <InputJsx placeholder="Search..."/>
                    <LinkJsx href={ Button_link }>
                        <ButtonRedJsx>{ Button_text }</ButtonRedJsx>
                    </LinkJsx>
                    <SocialLinks/>
                </ul>
            </div>
            <MobileHeader
                header_data={ header_data }
                button_link={ Button_link }
                button_text={ Button_text }
            />
        </header>

    )

}
export default Header
