import { useFetchData } from '../../hooks/useFetchData'
import styles from './ResultsGallery.module.css'

function ResultsGallery() {
  const { data: results, loading, error } = useFetchData('results')

  return (
    <section className={styles.section}>
      <div className="container">
        {loading && (
          <div className={styles.state}>
            <div className={styles.spinner} aria-label="Loading results" />
            <p>Loading results...</p>
          </div>
        )}

        {error && (
          <div className={styles.state} role="alert">
            <p className={styles.error}>{error}</p>
          </div>
        )}

        {!loading && !error && results && (
          <img
            src="/Frame 2609803.png"
            alt="Results You'll Love — before and after smile transformations"
            className={styles.sectionImage}
          />
        )}
      </div>
    </section>
  )
}

export default ResultsGallery
