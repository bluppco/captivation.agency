// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT REACT ICONS
import { FaAngleRight } from "react-icons/fa"

// IMPORT JSX COMPONENTS
import InputJSX from "@/components/common/header/input/jsx"
import SocialLinks from "@/components/common/header/social-links/jsx"

// IMPORT JSX ATOMS
import ButtonRedJSX from "@/atoms/atoms-shiva/buttons/red/jsx/index"
import LinkJSX from "@/atoms/links/jsx/index"
import ParagraphLgWhiteJSX from "@/atoms/atoms-shiva/paragraphs/lg/white/hover-red/jsx/index"
import PictureContainJSX from "@/atoms/picture/internal/contain/jsx/index"

const Header = ( { header_data, button_link, button_text } ) => {

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
                <LinkJSX href="/">
                    <div className="size-14">
                        <PictureContainJSX
                            alternative_text=""
                            source="/logo/captivation-main.svg"
                        />
                    </div>
                </LinkJSX>
                <div className="size-12 cursor-pointer" onClick={ toggleMenu }>
                    <PictureContainJSX
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
                                    <LinkJSX href={ item.data.link }>
                                        <div className="flex gap-6 items-center">
                                            <ParagraphLgWhiteJSX>{ item.data.title }</ParagraphLgWhiteJSX>
                                            {

                                                item.data.hasDropdown&&
                                                <span className={`text-white duration-300 ${ toggleDropdown ? "rotate-90 text-red-500" : "" }`}>
                                                    <FaAngleRight/>
                                                </span>

                                            }
                                        </div>
                                    </LinkJSX>
                                </div>
                                {
                                
                                    item.data.hasDropdown && openDropdowns[index] && (

                                        <ul className="flex flex-col gap-6 p-4">
                                            {
                                            
                                                item.data.items.map( ( subItem ) => (

                                                    <li>
                                                        <LinkJSX href={ subItem.link }>
                                                            <ParagraphLgWhiteJSX>{ subItem.title }</ParagraphLgWhiteJSX>
                                                        </LinkJSX>
                                                    </li>

                                                ))
                                            
                                            }
                                        </ul>

                                    )
                                
                                }
                            </li>

                        ))
                    
                    }
                    <InputJSX placeholder="Search..."/>
                    <LinkJSX href={ button_link }>
                        <ButtonRedJSX>{ button_text }</ButtonRedJSX>
                    </LinkJSX>
                    <SocialLinks/>
                </ul>
            </div>
        </header>

    )

}
export default Header
