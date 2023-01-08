'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About me" textStyles="text-center text-[20px] text-white font-extrabold" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[20px] text-[15px] text-center text-secondary-white"
      >
        <br />
        1+  years of experience as Software Developer for Web 3.0<br />
        1+  years of experience on Smart Contract Development<br />
        1+  years of experience on Data Science and RPA <br />
        10+ years of experience on my own business, on wood mobile and project designer<br />
        Soft Skills: Strong Work Ethic, Problem-Solving, Adaptability, Organization, Communication<br />
        <br />
        <br />
        
      </motion.p>
      <TypingText title="| Hard Skills" textStyles="text-center text-[20px] text-white font-extrabold" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[20px] text-[15px] text-left text-secondary-white"
      >
        <br />
        • Azure DevOps / Azure REPOS / Git / Github / VScode<br />
        • Smart Contract Development with Solidity (NFT - ERC721 and ERC20 protocols)<br />
        • RPA, Bots, Data Analysis and WebScrap with Python (Selenium, Pandas, BotCity, BeautifulSoup)<br />
        • Web3 (NFT/Crypto) Development with JavaScript (NodeJS, Ethereum, Hardhat, EthersJS, ReactJS)<br />
        • API creation and consumption (Axios, Fetch, Request, Postman)<br />
        • Virtual Machine / Application Insights<br />
        • Environments: Development, Validation, and Production<br />
        • Scripts (bash, PowerShell, python)<br />
        • Postgres SQL / MongoDB Atlas / Prisma ORM<br />
        • Ubuntu, Debian, WIndows, MacOS<br />
        • System Architecture (SOLID, DDD)<br />
        • Agile methodology (Scrum)<br />
        
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
