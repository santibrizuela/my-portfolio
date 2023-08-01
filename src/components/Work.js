import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import portfolioDivano2 from '../assets/portfolioDivano2.png';
import portfolioZetaGroup from '../assets/portfolioZetaGroup.png';
import portfolioResisten from '../assets/portfolioResisten.png';

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              Servicios <br />
              Recientes.
            </h2>
            <p className='max-w-sm mb-16'>
              Si necesitás Diseño Gráfico (logo, marca, colores) elegí el servicio de Desarrollo de Marca.
              Si querés un sitio en internet podemos desarrollar tu Web.
            </p>
            <a href='/portfolio'>
              <button className='btn btn-sm'>View all projects</button>
            </a>
            
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioZetaGroup} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>UI/UX Design - Next.js</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>ZETA GROUP</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://zgroup-nextjs.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioDivano2} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Desarrollo de Marca - Desarrollo Web - Marketing Digital</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>DIVANO 2.0</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://divano-nextjs.vercel.app/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 
          border-white/50 rounded-xl'>
            {/* overlay */}
            <div className=' group-hover:bg-black/70 w-full h-full absolute 
            z-40 transition-all duration-300'></div>
            {/* img */}
            <img 
              className='group-hover:scale-125 transition-all duration-500' 
              src={portfolioResisten} 
              alt='img' 
            />
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-gradient'>Desarrollo Web - ReactApp</span>             
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>RE-SIS-TEN.COM</span>
            </div>
            {/* button */}
            <div className='absolute -bottom-full left-12 
            group-hover:bottom-2 transition-all duration-700 z-50'>
                <a href='https://resisten.com.ar/' target='_blank' rel="noreferrer">
                    <button className='btn btn-sm'>DEMO</button>
                </a>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </section>
  );
};

export default Work;
