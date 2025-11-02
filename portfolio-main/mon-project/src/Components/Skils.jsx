import pic from '/pic.png';
import styles from './styles/Skils.module.css';
import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import { FaCss3Alt, FaJsSquare, FaNode, FaGitAlt, FaDatabase } from "react-icons/fa";

function Skils() {
  return (
    <section id="skills">
      <div className={styles.skillsContent}>
        
        {/* Image Section */}
        <div className={styles.skillsImage} data-aos="fade-right">
          <img src={pic} alt="Skills" width="500" height="500" />
        </div>

        {/* Text & Icons Section */}
        <div className={styles.skillsText} data-aos="fade-left">
          <h3>What I do</h3>
          <p>
            CRAZY FULL STACK DEVELOPER WHO WANTS TO<br />
            EXPLORE EVERY TECH STACK
          </p>

          <div className={styles.skillsIcons}>
            <div className={styles.iconBox}>
              <IoLogoHtml5 title="HTML5" />
              <span>HTML5</span>
            </div>
            <div className={styles.iconBox}>
              <FaCss3Alt title="CSS3" />
              <span>CSS3</span>
            </div>
            <div className={styles.iconBox}>
              <FaJsSquare title="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className={styles.iconBox}>
              <IoLogoReact title="React" />
              <span>React</span>
            </div>
            <div className={styles.iconBox}>
              <FaNode title="Node.js" />
              <span>Node.js</span>
            </div>
            <div className={styles.iconBox}>
              <FaGitAlt title="Git" />
              <span>Git</span>
            </div>
            <div className={styles.iconBox}>
              <FaDatabase title="Database" />
              <span>Database</span>
            </div>
          </div>

          <h3>The Stylist 🎨</h3>
          <p>
            With a sharp eye for detail, I bring user interfaces<br />
            to life using CSS and modern design principles.<br />
            Smooth, elegant, and responsive.
          </p>

          <h3>The Coder 💻</h3>
          <p>
            I make things move and respond. From JavaScript<br />
            to APIs — I love building logic that turns<br />
            static pages into smart web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skils;
