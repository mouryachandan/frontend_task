import styles from './ClinicBanner.module.css'

function ClinicBanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <img
          src="/Frame 2609923.png"
          alt="Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you"
          className={styles.bannerImage}
        />
      </div>
    </section>
  )
}

export default ClinicBanner
