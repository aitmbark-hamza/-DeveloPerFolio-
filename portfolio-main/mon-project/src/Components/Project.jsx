import { motion } from "framer-motion";
import style from "./styles/Project.module.css";
import tbdal from "/tbdal.png";
import MarocDeals from "/MarocDeals.png";
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
      img: MarocDeals,
      alt: "MarocDeals Project",
      title: "MarocDeals",
      description: `Browse products from
various online stores
Find the best deals from Avito, Jumia, and Marjan in one place. Save time and money with our smart search tool.`,
      link: "https://maroc-deal.vercel.app/"
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
      <h1 className={style.sectionTitle} data-aos="fade-down">My Projects</h1>
      <div className={style.projectContainer}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className={style.projectCard}
            whileHover="hover"
            initial="rest"
            animate="rest"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            data-aos-once="true"
          >
            <img className={style.projectImage} src={proj.img} alt={proj.alt} />

            {/* overlay content */}
            <motion.div
              className={style.overlay}
              variants={{
                rest: { y: "100%" },
                hover: { y: 0 }
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
