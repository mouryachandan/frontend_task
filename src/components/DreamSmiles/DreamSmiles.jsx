import styles from './DreamSmiles.module.css'

function DreamSmiles() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Dream smiles achieved secretly</h2>
          <p className={styles.paragraph}>
            Whistle Aligners are crafted from premium 3-layer PU material for a comfortable,
            invisible fit. With 450+ Clove Dental clinics across India, expert orthodontic care
            is always within reach.
          </p>
          <p className={styles.paragraph}>
            Pricing may vary based on the complexity of your case. Your orthodontist will provide
            a personalized quote after your free 3D scan and consultation.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>Whistle Aligners</h3>
            <p className={styles.pricing}>
              <span className={styles.strike}>₹84,000</span>{' '}
              starting at <strong className={styles.price}>₹47,999</strong>{' '}
              <span className={styles.taxNote}>inc. of all taxes</span>
            </p>

            <ul className={styles.features}>
              <li>
                <span className={styles.check}>✓</span>
                Offer valid for a limited time
              </li>
              <li>
                <span className={styles.check}>✓</span>
                Easy financing options
              </li>
            </ul>

            <a href="#" className={styles.learnMore}>
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className={styles.cardImage}>
            <img
              src="https://picsum.photos/seed/aligner-case/220/220"
              alt="Whistle aligner case"
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DreamSmiles
