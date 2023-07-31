import React from 'react';
//Images
import Logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/*Logo*/}
          <a href='#'>
            <img src={Logo} alt='Logo' />
          </a>
          {/*Buttonn*/}
          <button className='btn btn-sm'>Work with us</button>


        </div>

      </div>
    </header>
    );
};

export default Header;
