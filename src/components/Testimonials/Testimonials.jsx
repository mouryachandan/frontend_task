import { useFetchData } from '../../hooks/useFetchData'
import styles from './Testimonials.module.css'

function Testimonials() {
  const { data: testimonials, loading, error } = useFetchData('testimonials')

  return (
    <section className={styles.section}>
      <div className="container">
        {loading && (
          <div className={styles.state}>
            <div className={styles.spinner} aria-label="Loading testimonials" />
            <p>Loading testimonials...</p>
          </div>
        )}

        {error && (
          <p className={styles.error} role="alert">{error}</p>
        )}

        {!loading && !error && testimonials && (
          <img
            src="/Frame 2609823.png"
            alt="Happy Smilers — testimonials by Whistle"
            className={styles.sectionImage}
          />
        )}
      </div>
    </section>
  )
}

export default Testimonials
