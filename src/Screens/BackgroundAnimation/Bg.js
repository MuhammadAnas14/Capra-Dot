import React from "react";
import Image from 'next/image'

const Bg = () => {
    return(
        <Image 
        src="/capra_face-01.png"
        alt="Logo Picture"
        width="100%"
        height="50%"
        layout="responsive" 
        objectFit="contain"
        />
    )
}
export default Bg;