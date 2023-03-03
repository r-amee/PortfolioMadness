"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Portfolio Madness
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 rounded-[32px] gap-[12px]"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: "50%",
              backgroundColor: "#0158b5",
              borderRadius: "32px 32px 0 0",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#fed500",
              borderRadius: "0 0 32px 32px",
            }}
          />
          <img
            src="/hashtag.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
            style={{ zIndex: 1 }}
          />
          <span
            className="font-bold text-[16px] text-black"
            style={{ zIndex: 1 }}
          >
            FREEDOMFORALL
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10 " />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white capitalize">
            A Wanna Be Dev
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            © 2023 A Wanna Be Dev.{" "}
            <span className="ml-2">All rights reserved.</span>
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
