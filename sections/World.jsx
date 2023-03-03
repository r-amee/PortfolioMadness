"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

import { TitleText, TypingText } from "../components";

const World = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title=" | Contact Me"
          textStyles="text-center text-[20px]"
        />
        <TitleText
          title={<>Click Me To Know More</>}
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-60 right-60 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] ">
            <img
              src="people-01.png"
              alt="people"
              onClick={() => setIsCardVisible(!isCardVisible)}
            />
          </div>

          {isCardVisible && (
            <div className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 absolute top-40 right-80">
              <ul role="list" className="space-y-5 my-2">
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-[#cf4ae7] dark:text-[#cf4ae7]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-secondary-white">
                    Purok 1, Tambuan, Malinao, Aklan
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-[#cf4ae7] dark:text-[#cf4ae7]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-secondary-white">
                    (+639) 686973969
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-[#cf4ae7] dark:text-[#cf4ae7]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-secondary-white">
                    russel.yasol@wvsu.edu.ph
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-[#cf4ae7] dark:text-[#cf4ae7]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-secondary-white">
                    fastnetphbyrus.com
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-[#cf4ae7] dark:text-[#cf4ae7]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-secondary-white">
                    20 years old
                  </span>
                </li>
              </ul>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
