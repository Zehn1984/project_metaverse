'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >      
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>          
          <img
            src="/foto1.png"
            alt="foto1"
            className="w-[300px] h-[300px] object-contain align-center"
          />          
        </div>        
        <div>
          <h4 className="font-bold text-center sm:text-[25px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Anderson Campolina
          </h4>
          <p className="mt-[8px] text-center font-normal sm:text-[10px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Web3 Developer
          </p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[15px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
          “ Lets build the internet to the way it deserves and decentralize it together! Count on me! "
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center">
        <div>
          <TypingText title="Contact me ..." textStyles="text-center text-[50px] text-white font-extrabold" />
          <br/>
          <img
            src="/github.png"
            alt="foto1"
            className="w-[100px] h-[100px] object-contain align-center"
          />
          <br/><br/>
          <img
            src="/whatsapp.png"
            alt="foto1"
            className="w-[100px] h-[100px] object-contain align-center"
          />
          <br/><br/>
          <img
            src="/linkedin.svg"
            alt="foto1"
            className="w-[100px] h-[100px] object-contain align-center"
          />
        </div>
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >          
          {/* <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          /> */}
        </motion.div>        
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
