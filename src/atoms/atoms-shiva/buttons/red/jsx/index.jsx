const ButtonRedJsx = ( props ) => {

    return (

        <button class="border-2 border-red-600 bg-red-600 text-white text-lg font-medium hover:text-red-600 hover:bg-white duration-300 rounded-full py-2 px-8">
            { props.children }
        </button>

    )

}
export default ButtonRedJsx
