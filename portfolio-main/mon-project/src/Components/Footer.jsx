import photo from '/photo.png';
import styles from './styles/Footer.module.css';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <section id="contact-me" className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <h1>Reach Out to me!</h1>
          <p>Discuss a project or just want to say hi? My inbox is open for all.</p>
          <span>aitmbarkhamza777@gmail.com</span>
          <h6><FaMapMarkerAlt /> Morocco</h6>
          <span>Open to opportunities: <strong>Yes</strong></span>

          {/* ✅ Social Icons */}
          <div className={styles.footerSocialIcons}>
            <a href="https://github.com/aitmbark-hamza" className={`${styles.icon} ${styles.github}`} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/hamza-ait-mbark-77261a368/" className={`${styles.icon} ${styles.linkedin}`} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://web.facebook.com/mester.hamza.549?_rdc=1&_rdr#" className={`${styles.icon} ${styles.facebook}`} target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/@7amzahz" className={`${styles.icon} ${styles.tiktok}`} target="_blank" rel="noreferrer">
              <FaTiktok />
            </a>
            <a href="mailto:aitmbarkhamza777@gmail.com" className={`${styles.icon} ${styles.email}`}>
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className={styles.profileImage}>
          <img src={photo} alt="Hamza's Profile" width="400" />
        </div>
      </div>

      <footer className={styles.footer}>
        <h1>Made with ❤️ by Hamza Ait Mbark</h1>
      <h2> Theme by <a href="https://github.com/aitmbark-hamza">Hamza Ait Mbark</a> </h2>
      </footer>
    </section>
  );
}

export default Footer;
