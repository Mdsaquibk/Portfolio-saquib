import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      staggerChildren: 0.1,
    },
  },
};

export default function AboutMe() {
  return (
    <motion.section
      id="AboutMe"
      className="about--section"
      // variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="about--section--img" variants={variants}>
        <motion.img
          src="./img/saquib.jpg"
          alt="About Me"
          className="me"
          variants={variants}
        />
      </motion.div>
      <motion.div
        className="hero--section--content--box about--section--box"
        variants={variants}
      >
        <motion.div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <motion.h1 className="skills-section--heading" variants={variants}>
            About Me
          </motion.h1>
          <motion.p className="hero--section-description" variants={variants}>
            I’m a Front-End Developer driven by curiosity for new technologies and a commitment to creating fast, scalable, and intuitive applications.
          </motion.p>
          <motion.p className="hero--section-description" variants={variants}>
                I earned my B.Tech in Mechanical Engineering from OCEM, BPUT, Odisha, graduating with a CGPA of 8.18. My academic journey honed my problem-solving abilities and analytical skills, providing a strong foundation for tackling complex technical challenges.</motion.p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
