const LinkJsx = ( { aria_label, href, children } ) => {

    return (

        <a href={ href } aria-label={ aria_label }>
            { children }
        </a>

    )

}
export default LinkJsx
