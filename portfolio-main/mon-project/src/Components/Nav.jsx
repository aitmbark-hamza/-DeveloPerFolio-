
import styles from './styles/Nav.module.css';

function Nav() {
  return (
    <>
      <nav>
       <div className={styles.logo}>
         <span className={styles.tag}>&lt;</span>
         <span className={styles.name}>Ait Mbark Hamza</span>
         <span className={styles.tag}>/&gt;</span>
       </div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact-me">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
