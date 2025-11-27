'use client';

import Image from 'next/image';
import imglivre01 from '../../public/img-livre-01.jpg';
import { UtensilsCrossed, Headphones, Sparkles } from 'lucide-react';


export default function Services() {

    return(
        <section
         className="bg-[#fff7ef] relative px-3 py-50">

            <h1 className="text-center md:text-5xl force-lora text-[#93804f] mb-12 -mt-18">Tudo o Que Preparamos Para Você</h1>


            <div className="grid  md:grid-cols-3 gap-8 h-[60vh] mt-36">

                 {/* card 1 */}
                 <div className="cards">
                     <UtensilsCrossed className="w-12 h-12 text-[#93804f] mb-6" />
                     <h2 className="cards-h2 force-lora">Refeiçao sob demanda</h2>
                     <p  className="cards-p">Nosso serviço de refeição sob demanda foi desenvolvido para proporcionar uma experiência gastronômica personalizada em harmonia com a natureza.</p>
                     <p className="cards-p">Selecione seus ingredientes, monte seu prato e desfrute de uma alimentação sob medida, com praticidade e qualidade.</p>
                 </div>
                 {/* card 2 */}
                 <div className="cards">
                     <Headphones className="w-12 h-12 text-[#93804f] mb-6" />
                     <h2 className="cards-h2 force-lora">Suporte geral</h2>
                     <p  className="cards-p">Nosso atendimento 24 horas foi pensado para acolher cada hóspede com cuidado e atenção únicos.</p>
                     <p className="cards-p">Oferecemos suporte personalizado, incluindo transporte exclusivo para hospedagens selecionadas e disponibilização de equipamentos sob demanda, especialmente</p>
                </div>
                 {/* card 3 */}
                <div className="cards">
                     <Sparkles className="w-12 h-12 text-[#93804f] mb-6" />
                     <h2 className="cards-h2 force-lora">Terapias naturais</h2>
                     <p  className="cards-p">Inspiradas pelo entorno natural que nos cerca, nossas terapias foram criadas para harmonizar corpo, mente e ambiente. Cada sessão é uma jornada suave rumo ao equilíbrio interior, convidando você a respirar fundo, soltar tensões e redescobrir o bem-estar mais profundo.</p>
                </div>

            </div>

            <div className="relative w-full h-[80vh] rounded-xl mt-30 overflow-hidden">
                <Image
                    src={imglivre01}
                    alt="acomodacao-01"
                    fill
                    className="object-cover opacity-90"
                    priority
                    />
            </div>

        </section>
    )
}
