import { motion } from "framer-motion";
import style from "./styles/Project.module.css";
import tbdal from "/tbdal.png";
import glovo from "/glovo.jpg";
import docplanner from "/docplanner.png";

function Project() {
  const projects = [
    {
      img: tbdal,
      alt: "TBDAL Project",
      title: "TBDAL Maroc",
      description: `A free exchange platform that allows users to swap their old products for new items they need without any monetary transactions.`,
      link: "https://aitmbark-hamza.github.io/project/"
    },
    {
      img: glovo,
      alt: "Glovo Project",
      title: "Glovo Maroc",
      description: `A front-end project for Glovo Maroc, showcasing a user-friendly interface for ordering food and other products.`,
      link: "https://aitmbark-hamza.github.io/project/"
    },
    {
      img: docplanner,
      alt: "Docplanner Project",
      title: "Docplanner",
      description: `A front-end project for Docplanner, designed to help users find and book appointments with healthcare professionals.`,
      link: "https://aitmbark-hamza.github.io/project/"
    }
  ];

  return (
    <section id="projects" className={style.projectsSection}>
      <h1 className={style.sectionTitle}>My Projects</h1>
      <div className={style.projectContainer}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className={style.projectCard}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <img className={style.projectImage} src={proj.img} alt={proj.alt} />

            {/* overlay content */}
            <motion.div
              className={style.overlay}
              variants={{
                rest: { y: "100%", opacity: 0 },
                hover: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <button>View Project</button>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
