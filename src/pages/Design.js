import React from 'react';
// image
import portfolioResisten from '../assets/portfolioResisten.png';
// icons 
import { RiRadioButtonFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Design = () => {
  return (
    <>
        <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10'/>
            <img className='absolute z-1' layout='fill' objectFit='cover' src={portfolioResisten} alt='Green Card & Visa'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Madero Imprime</h2>
                <h3>ReactApp-CSS-ProductCards</h3>
            </div>
        </div>

        <div className='max-2-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Proyecto Activo</p>
                <h2>Madero Imprime</h2>
                <p>La tecnología FDM (Modelado por Deposición Fundida) se utiliza con 
                    impresoras 3D especializadas y termoplásticos (PLA/ABS) de producción 
                    para fabricar piezas resistentes, duraderas, dimensionalmente estables 
                    y hasta flexibles según el material utilizado. Éstas piezas se realizan 
                    superponiendo PLA en las distintas capas de las mismas.


                </p>
                <Link target='_blank' href='https://santibrizuela.github.io/madero/'>
                    <button className='btn btn-outline px-8 py-2 mt-4 mr-8 text-emerald-500'>Demo</button>
                </Link>
                <Link target='_blank' href='https://www.whatsapp.com/'>
                    <button className='btn px-8 py-2 mt-4 text-white bg-green-600'>Whatsapp</button>
                </Link>
            </div>

            
            <Link href='/#projects'>
                <p className='underline cursor-pointer font-bold'>Back</p>
            </Link>
        </div>
    </div>

    </>
  )
}

export default Design