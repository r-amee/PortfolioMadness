"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard2 = ({ imgUrl, title, school1, school2, school3 }) => (
  <motion.div
    variants={fadeIn("up", "spring", 2 * 0.5, 1)}
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
        <ul className="lg:text-[18px] text-[14px] text-secondary-white mt-2 list-disc px-5">
          <li className="py-2">
            Elementary |{" "}
            <span className="ml-2 mr-2 text-[#8cd9fe] font-semibold">
              {school1}
            </span>{" "}
            | 2008 - 2014{" "}
          </li>
          <li className="py-2">
            Junior & Senior High School |{" "}
            <span className="ml-2 text-[#ff8265] font-semibold">{school2}</span>{" "}
            | 2014 - 2020
          </li>
          <li className="py-2">
            Current College |{" "}
            <span className="ml-2 text-[#666bc6] font-semibold">{school3}</span>
            | 2020 -{" "}
          </li>
        </ul>
      </div>
    </div>
  </motion.div>
);

export default InsightCard2;
