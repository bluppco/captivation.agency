// IMPORT REACT ICONS
import { FaInstagramSquare, FaFacebookSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa"

// IMPORT JSX ATOMS
import LinkJsx from "@/atoms/links/jsx"

// LINKS DATA
const links = [

    {
        icon: <FaInstagramSquare/>,
        link: "/",
    },
    {
        icon: <FaFacebookSquare/>,
        link: "/",
    },
    {
        icon: <FaLinkedinIn/>,
        link: "/",
    },
    {
        icon: <FaYoutube/>,
        link: "/",
    },

]

const SocialLinks = () => (

    <div className="flex gap-6">
        {
        
            links.map( ( item ) => (

                <div className="hover:-translate-y-1 duration-300">
                    <LinkJsx href={ item.link }>
                        <span className="text-2xl text-white hover:text-red-500 duration-300">{ item.icon }</span>
                    </LinkJsx>
                </div>   

            ))
        
        }
    </div>

)
export default SocialLinks
