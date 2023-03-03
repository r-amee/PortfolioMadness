"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";

import {
  InsightCard1,
  InsightCard2,
  InsightCard3,
  TitleText,
  TypingText,
} from "../components";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| My Resume" textStyles="text-center text-[20px]" />
      <TitleText title="More Insights About Myself" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        <InsightCard1
          imgUrl={insights[0].imgUrl}
          title={insights[0].title}
          subtitle={insights[0].subtitle}
        />
        <InsightCard2
          imgUrl={insights[1].imgUrl}
          title={insights[1].title}
          school1={insights[1].school1}
          school2={insights[1].school2}
          school3={insights[1].school3}
        />
        <InsightCard3
          imgUrl={insights[2].imgUrl}
          title={insights[2].title}
          subtitle={insights[2].subtitle}
          exp1={insights[2].exp1}
          exp2={insights[2].exp2}
          exp3={insights[2].exp3}
        />
      </div>
    </motion.div>
  </section>
);

export default Insights;
