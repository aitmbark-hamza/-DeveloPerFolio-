import img from '/img.png';
import styles from './styles/Header.module.css';
import { FaGithub, FaLinkedin, FaFacebook, FaTiktok, FaEnvelope} from "react-icons/fa";

function Header() {
  return (
    <section id='home'>
      <div className={styles.headerContent}>
        <div className={styles.headerChild}>
          <div className={styles.headerTitle} data-aos="fade-down">
            <h3>Hi all, I'm Hamza 👋</h3>
          </div>

          <div className={styles.headerDescription} data-aos="fade-up">
            <p>I am a Moroccan software developer passionate about web development.</p>
            <br />
            <p>I specialize in building modern digital solutions using web technologies.</p>
            <br />
            <p>My main tools are <strong>HTML / CSS / JavaScript / React / Node.js / MongoDB</strong>.</p>
            <br />
            <p>I am always eager to learn more and improve my skills every day.</p>
          </div>

          {/* ✅ Social Icons */}
          <div className={styles.headerSocialIcons} data-aos="fade-up">
            <a href='https://github.com/aitmbark-hamza' className={`${styles.icon} ${styles.github}`} target='_blank' rel='noreferrer'>
              <FaGithub />
            </a>
            <a href='https://www.linkedin.com/in/hamza-ait-mbark-77261a368/' className={`${styles.icon} ${styles.linkedin}`} target='_blank' rel='noreferrer'>
              <FaLinkedin />
            </a>
            <a href='https://web.facebook.com/mester.hamza.549?_rdc=1&_rdr#' className={`${styles.icon} ${styles.facebook}`} target='_blank' rel='noreferrer'>
              <FaFacebook />
            </a>
            <a href='https://www.tiktok.com/@7amzahz' className={`${styles.icon} ${styles.tiktok}`} target='_blank' rel='noreferrer'>
              <FaTiktok />
            </a>
            <a href="mailto:aitmbarkhamza777@gmail.com" className={`${styles.icon} ${styles.email}`} target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </div>

          <div className={styles.headerSocial} data-aos="fade-up">
            <div className={styles.headerContact}>
              <a href="#contact"><button>Contact Me</button></a>
              <div className={styles.headerResume}>
                <a href="#" download>
                  <button>Download my resume</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.headerImage} data-aos="fade-left">
          <img src={img} width="500" height="500" alt="Logo" />
        </div>
      </div>
    </section>
  );
}

export default Header;
