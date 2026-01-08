'use client';

import Image from "next/image";

import imgacm01 from '../../public/acomodacao-01.jpg';
import imgacm02 from '../../public/acomodacao-02.jpg';
import imgacm04 from '../../public/acomodacao-04.jpg';
import imgacmbed01 from '../../public/acomodacao-bed-01.jpg';
import imgacmbed02 from '../../public/acomodacao-bed-02.jpg';
import imgacmbed04 from '../../public/acomodacao-bed-04.jpg';

import useParallaxAcomodacao from "../../hooks/useParallaxAccommodation";

export default function Accommodation() {

     const {
        container,
        bed1,
        bed2,
        bed3
    } = useParallaxAcomodacao();


    return(
       <section ref={container} className="relative w-full h-[300vh] bg-[#fff7ef]">
        <h1 className="text-5xl 2xl:text-7xl force-lora text-center py-16 text-[#93804f] ">Hospede-se em harmonia com a natureza</h1>
        <div>

            {/* acomodação 1 */}
            <div className="accommodation-img">

                <Image
                src={imgacm01}
                alt="acomodacao-01"
                fill
                quality={75}
                className="object-cover brightness-90"
                />
                <div ref={bed1} className="accommodation-imgbed">
                <Image
                src={imgacmbed02}
                alt="acomodacao-bed-01"
                fill
                quality={75}
                className="object-cover brightness-90"
                />
                </div>

            </div>

            {/* acomodação 2 */}
            <div className="accommodation-img">

                <Image
                src={imgacm02}
                alt="acomodacao-02"
                fill
                quality={75}
                className="object-cover brightness-90"
                />
                <div ref={bed2} className="accommodation-imgbed">
                <Image
                src={imgacmbed01}
                alt="acomodacao-bed-02"
                fill
                quality={75}
                className="object-cover"
                />
                </div>

            </div>

            {/* acomodação 3 */}
            <div className="accommodation-img">

                <Image
                src={imgacm04}
                alt="acomodacao-04"
                fill
                quality={75}
                className="object-cover brightness-90"
                />
                <div ref={bed3} className="accommodation-imgbed">
                <Image
                src={imgacmbed04}
                alt="acomodacao-bed-04"
                fill
                quality={75}
                className="object-cover"
                />
                </div>

            </div>
        </div>
       </section>
    )
}
