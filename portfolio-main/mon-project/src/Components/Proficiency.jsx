import styles from './styles/Proficiency.module.css';

function Proficiency() {
  return (
    <>
      <div className={styles.title} data-aos="fade-right">
        <h2>Proficiency</h2>
      </div>

      <div className={styles.skill} data-aos="fade-left">
        <div className={styles.label}>
          <h1>Frontend/Design</h1>
        </div>
        <span className={`${styles.bar} ${styles.frontend}`}><span></span></span>
      </div>

      <div className={styles.skill} data-aos="fade-left">
        <div className={styles.label}>
          <h1>Backend</h1>
        </div>
        <span className={`${styles.bar} ${styles.backend}`}><span></span></span>
      </div>

      <div className={styles.skill} data-aos="fade-left">
        <div className={styles.label}>
          <h1>Programming</h1>
        </div>
        <span className={`${styles.bar} ${styles.programming}`}><span></span></span>
      </div>
    </>
  );
}

export default Proficiency;
