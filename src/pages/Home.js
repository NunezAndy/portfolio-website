import React from 'react'
import "../styles/Home.css";
import me from "../assets/me.jpeg";
import { motion } from "framer-motion";
import Skills from './Skills';

function Home() {
  return (
    <div className="home">
        <div className="about">
        <motion.h1
          className="mt-0"
          style={{ color: "black", fontFamily: 'Bebas Neue', fontSize: '3rem', marginTop: '15px' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8, ease: "easeOut" } }}
        >
          ANDY NUNEZ
        </motion.h1>
        <motion.img
          src={me}
          alt="Andy Nunez"
          className="rounded-circle img-fluid profile-pic"
          style={{ width: "200px", height: "200px" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 1, ease: "easeOut" } }}
        />
            <motion.h2
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 0.8, ease: "easeOut" } }}
        >
          Full Stack Developer
        </motion.h2>
        </div>
        <Skills />
    </div>
  )
}

export default Home