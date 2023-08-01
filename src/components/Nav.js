import React from 'react';
//Import Icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboard, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      {/*nav inner */}
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <a 
          href='/'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[60px] h-[60px] flex items-center'
        >
          <BiHomeAlt />
        </a>
        <a 
          href='/about' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center'
        >
          <BiUser />
        </a>
        <a 
          href='/skills'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center'
        >
          <BsClipboard />
        </a>
        <a 
          href='/work'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center'
        >
          <BsBriefcase />
        </a>
        <a 
          href='#contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center'
        >
          <BsChatSquareText />
        </a>
      </div>

    </div>
    
  </nav>;
};

export default Nav;
