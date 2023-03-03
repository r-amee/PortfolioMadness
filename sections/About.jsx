"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

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
      <TypingText title=" | Who am I?" textStyles="text-center text-[20px]" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white mt-4 w-[80%] "
      >
        Hi there! I am{" "}
        <span className="font-extrabold text-white">Russel Yasol</span> , a
        passionate{" "}
        <span className="font-extrabold text-white">
          Computer Science Student
        </span>{" "}
        with a{" "}
        <span className="font-extrabold text-white">love for coding</span> and a
        deep interest in{" "}
        <span className="font-extrabold text-white">
          Artificial Intelligence
        </span>
        . When I'm not immersed in tech, you can find me{" "}
        <span className="font-extrabold text-white">stargazing</span> and{" "}
        <span className="font-extrabold text-white">
          cuddling with my feline friends
        </span>
        . Ready to see what I've been working on? Just scroll down and{" "}
        <span className="font-extrabold text-white">explore</span> my portfolio!
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
