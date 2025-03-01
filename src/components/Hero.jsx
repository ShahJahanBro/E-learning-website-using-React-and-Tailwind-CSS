import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroImg from "../assets/heroImg.jpg";  // Shorter path
import { animate, motion } from "framer-motion";
import { RxOpacity } from "react-icons/rx";
import { GiDuration } from "react-icons/gi";

export const FadeUp = (delay) => {
    return{
        initial:{
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffeness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            }
        }
    }
}

export const Hero = () => {
  return (
    <section
      className="bg-light overflow-hidden
    relative"
    >
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]:">
        {/* Brand Info */}

        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
            <div className="text-center md:text-left space-y-10 lg:max-w-[400px]:  ">
            <motion.h1 
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"

            className="text-3xl lg:text-5xl font-bold !leading-snug">
            let's Learn to build a
            <span className="text-secondary"> Website</span> for your Buisness
          </motion.h1>
          <motion.div
          variants={FadeUp(0.8)}
          initial="initial"
          animate="animate"
          className="flex justify-center md:justify-start">
            <button className="primary-btn flex items-center gap-2 group">
              <IoIosArrowRoundForward className="text-xl group-hover:-translate-x-2 group-hover:-rotate-45 duration-300" />
              Get Started
            </button>
          </motion.div>
            </div>
         
        </div>

        {/* Brand Image */}

        <div className="flex justify-center items-center">
            <motion.img 
            initial={{x:50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
            src={heroImg} alt="" className="w-[400px] xl:w-[600px] relative z-10 drop-shadow " />


        </div>
      </div>
    </section>
  );
};

export default Hero;
