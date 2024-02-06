import React from "react";


const HeroBanner = () => {
    return (
        <>
                <div className='max-h-[600px] relative'>
                    <img
                        className='w-full max-h-[500px] object-cover'
                        src="/assets/herobanner.webp"
                        alt='hero banner image'
                    />
                </div>
        </>
    );
}

export default HeroBanner;