// IMPORT REACT HOOKS
import { useState } from "react"

// IMPORT CUSTOM CSS
import "@/styles/custom.css"

// IMPORT REACT ICONS
import { FaAngleRight } from "react-icons/fa"

// IMPORT JSX COMPONENTS
import InputJsx from "@/components/common/header/input/jsx/index"
import SocialLinks from "@/components/common/header/social-links/jsx/index"

// IMPORT JSX ATOMS
import ButtonRedJsx from "@/atoms/atoms-shiva/buttons/red/jsx"
import LinkJsx from "@/atoms/links/jsx"
import ParagraphLgWhiteJsx from "@/atoms/atoms-shiva/paragraphs/lg/white/hover-red/jsx"
import PictureContainJsx from "@/atoms/picture/internal/contain/jsx"

const MobileHeader = ( { header_data, button_link, button_text } ) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [openDropdowns, setOpenDropdowns] = useState({})

    // TOGGLE NAVBAR MENU
    const toggleMobileMenu = () => {

        setIsMenuOpen(!isMenuOpen)

    }

    // TOGGLE DROPDOWN FOR LINKS WITH DROPDOWN
    const toggleMobileDropdown = ( index ) => {

        setOpenDropdowns( prevState => ({

            ...prevState,
            [index]: !prevState[index]

        }))

    }

    return (

        <mobileheader>
            <nav className="md:hidden flex justify-between items-center gap-6 fixed top-0 left-0 bg-black h-20 w-full z-30 p-4">
                <LinkJsx href="/">
                    <div className="w-14 h-14">
                        <PictureContainJsx
                            alternative_text=""
                            source="/logo/captivation-main.svg"
                        />
                    </div>
                </LinkJsx>
                <div className="w-12 h-12 cursor-pointer" onClick={ toggleMobileMenu }>
                    <PictureContainJsx
                        alternative_text=""
                        source={isMenuOpen ? "/icons/cross.svg" : "/icons/menu.svg"}
                    />
                </div>
            </nav>
            <div className={`fixed top-0 left-0 h-full py-14 w-full max-h-dvh overflow-y-auto bg-black transform z-20 scrollbar-hidden ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out`}>
                <ul className="flex flex-col gap-6 p-8 text-white">
                    {
                    
                        header_data.map( ( item, index ) => (

                            <li className="cursor-pointer">
                                <div onClick={() => item.data.hasDropdown ? toggleMobileDropdown( index ) : null}>
                                    <LinkJsx href={ item.data.link }>
                                        <div className="flex gap-6 items-center">
                                            <ParagraphLgWhiteJsx>{ item.data.title }</ParagraphLgWhiteJsx>
                                            {

                                                item.data.hasDropdown&&
                                                <span className={`text-white duration-300 ${ toggleMobileDropdown ? "rotate-90 text-red-500" : "" }`}>
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
                    <LinkJsx href={ button_link }>
                        <ButtonRedJsx>{ button_text }</ButtonRedJsx>
                    </LinkJsx>
                    <SocialLinks/>
                </ul>
            </div>
        </mobileheader>

    )

}
export default MobileHeader
