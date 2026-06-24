import styles from './DoctorLed.module.css'

function DoctorLed() {
  return (
    <section className={styles.section}>
      <div className="container">
        <img
          src="/Frame 2609801.png"
          alt="We are Doctor-led, not direct-to-customers"
          className={styles.sectionImage}
        />
      </div>
    </section>
  )
}

export default DoctorLed
