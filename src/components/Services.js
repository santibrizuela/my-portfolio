import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import { motion } from 'framer-motion';
// variants
import {fadeIn} from '../variants'
import Header from './Header';

// services data
const services = [
  
  {
    name: 'Marketing Digital',
    description:
     'Social Media, Campaña de Seguidores, Plantillas (Feed-Historias), Link/QR. Creamos/Desarrollamos perfiles en redes sociales en las que la Marca tenga un potencial impacto.',
    link: '/marketing',
  },
  {
    name: 'Desarrollo Web',
    description:
     'Diseño Web, UX/UI, Dominios, Correo Empresarial. Te diseñamos un sitio web con información de tu marca (Contacto, Locales, Horarios) y lo ponemos en línea con Vercel o con DNS.',
    link: '/development',
  },
  {
    name: 'Desarrollo de Marca',
    description:
     'Diseño Gráfico, Paleta de Colores, Logotipo, Imagotipo. Diseñamos el logo y la estética de tu marca desde cero. Es el punto de partida para digitalizar una marca.',
    link: '/branding',
  },
]

const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg-bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mb-0'
        >
          <h2 className='h2 text-accent mb-6'>Qué Hacemos.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Nos dedicamos al Desarrollo Web y Marketing Digital para Marcas.
          </h3>
          <a href='/work'>
            <button className='btn btn-sm'>Ver Últimos Trabajos</button>
          </a>
          
        </motion.div>
        {/* services */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'
        >
          {/* service list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const { name, description, link } = service;
              return (
                <div 
                  className='border-b border-white/20 h-[146px] 
                  mb-[38px] flex' 
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary 
                    font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a 
                      href={link} 
                      className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href={link} className='text-gradient text-sm'>
                      Ver Más
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Services;
