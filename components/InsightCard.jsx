"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({
  imgUrl,
  title,
  subtitle,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  index,
}) => (
  <motion.div
    variant={fadeIn("up", "spring", index * 0.5, 1)}
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
        <ul className="lg:text-[18px] text-[12px] text-secondary-white mt-2 px-4">
          <li className="py-2">
            {text2}{" "}
            <span className="ml-2 text-[#8cd9fe] font-semibold">{text3}</span>
          </li>
          <li className="py-2">
            {text4}{" "}
            <span className="ml-2 text-[#cd20ff] font-semibold">{text5}</span>
          </li>
          <li className="py-2">
            {text6}{" "}
            <span className="ml-2 text-[#ff8265] font-semibold">{text7}</span>
          </li>
        </ul>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
