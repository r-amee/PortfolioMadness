"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard3 = ({ imgUrl, title, subtitle, exp1, exp2, exp3 }) => (
  <motion.div
    variants={fadeIn("up", "spring", 3 * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] wf-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[850px] ">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white ">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
        <ul className="lg:text-[18px] text-[14px] text-secondary-white mt-2 list-disc px-5">
          <li className="py-2 ml-2 text-[#8cd9fe] font-semibold">{exp1} | 2021 - 2021</li>
          <li className="py-2 ml-2 text-[#ff8265] font-semibold">{exp2} | 2022 - </li>
          <li className="py-2 ml-2 text-[#666bc6] font-semibold">{exp3} | 2022 - </li>
        </ul>
      </div>
    </div>
  </motion.div>
);

export default InsightCard3;
