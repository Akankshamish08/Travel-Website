import React from 'react';
import { FaApple, FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaBootstrap } from 'react-icons/fa';
 function footer() {
  return (
    <div className=' bg-light text-center text-white'>
      <div className=' flex justify-around flex-row items-center p-4 pb-0'>
        <section className='flex flex-row mb-4'>
          <FaFacebook
            floating
            className='m-1 h-8 w-8'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <FaBootstrap fab icon='facebook-f' />
          </FaFacebook>

          <FaTwitter
            floating
            className='m-1 w-8 h-8'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <FaBootstrap fab icon='twitter' />
          </FaTwitter>

          <FaGoogle
            floating
            className='m-1 w-8 h-8'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <FaBootstrap fab icon='google' />
          </FaGoogle>
          <FaInstagram
            floating
            className='m-1 w-8 h-8'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <FaBootstrap fab icon='instagram' />
          </FaInstagram>

          <FaLinkedin
            floating
            className='m-1 h-8 w-8'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <FaBeer fab icon='linkedin-in' />
          </FaLinkedin>

          <FaGithub
            floating
            className='m-1 w-8 h-8'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <FaBootstrap fab icon='github' />
          </FaGithub>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          abc.com
        </a>
      </div>
    </div>
  );
}
export default footer