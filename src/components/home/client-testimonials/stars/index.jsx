const stars = () => {

    {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push( 
                    <img 
                        alt="star_icon" 
                        class="size-3.5" 
                        src="/icons/star-icon.svg"
                    />

            );
        }

        return stars;
    
    };
}

export default stars;
