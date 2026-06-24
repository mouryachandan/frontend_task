import { useFetchData } from '../../hooks/useFetchData'
import styles from './WhyWhistle.module.css'

function WhyWhistle() {
  const { data: cards, loading, error } = useFetchData('whyWhistle')

  return (
    <section className={styles.section}>
      <div className="container">
        {loading && (
          <div className={styles.state}>
            <div className={styles.spinner} aria-label="Loading" />
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className={styles.state} role="alert">
            <p className={styles.error}>{error}</p>
          </div>
        )}

        {!loading && !error && cards && (
          <img
            src="/Frame 2609921.png"
            alt="Why Whistle — custom aligners, predictable results, Clove Dental partnership"
            className={styles.sectionImage}
          />
        )}
      </div>
    </section>
  )
}

export default WhyWhistle
