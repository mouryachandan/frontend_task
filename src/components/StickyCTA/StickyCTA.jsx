import styles from './StickyCTA.module.css'

function StickyCTA() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>Ready for your perfect smile?</p>
        <div className={styles.buttons}>
          <button type="button" className={styles.primary}>
            Book scan at Home
          </button>
          <button type="button" className={styles.secondary}>
            Book scan at Clinic
          </button>
        </div>
      </div>
    </div>
  )
}

export default StickyCTA
