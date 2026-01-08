import Image from 'next/image';
import imgmachado from '../../../public/machado.png';

export default function Services() {
  return (
    <section className='h-screen relative bg-[#fff7ef] justify-center overflow-hidden pt-32 2xl:pt-80'>
    <div className='relative w-64 h-64 2xl:w-96 2xl:h-96 mx-auto'>
      <Image
                    src={imgmachado}
                    alt="imgmachado"
                    fill
                    className="object-contain"
                    priority
                    />
    </div>

    <div className=" flex items-center justify-center  z-10">
        <h1 className="text-center force-lora text-6xl 2xl:text-8xl text-[#93804f] mb-100">
          Em construção
        </h1>
    </div>

    </section>
  );
}
