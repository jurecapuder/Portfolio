import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import computerImage from '../assets/misc/computer.png';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-40 h-20 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I&apos;m <span className='text-[#915EFF]'>Jure</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Self-taught Full-stack <br className='block sm:hidden' /> Web Developer
          </p>
        </div>
      </div>

      <div className='absolute inset-0'>
        {isMobile ? <img src={computerImage} alt="3D Model" className='w-full h-auto object-contain absolute' style={{bottom: '30%'}} /> : <ComputersCanvas />}
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;