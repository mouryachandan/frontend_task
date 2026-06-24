import { useState } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import styles from './ComparisonTable.module.css'

function CellValue({ value }) {
  if (value === 'check') {
    return <span className={styles.check} aria-label="Yes">✓</span>
  }
  if (value === 'cross') {
    return <span className={styles.cross} aria-label="No">✕</span>
  }
  return <span>{value}</span>
}

function ComparisonTable() {
  const { data: rows, loading, error } = useFetchData('comparison')
  const [expandedId, setExpandedId] = useState(null)

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section-title">What sets Whistle apart?</h2>

        {loading && <p className={styles.state}>Loading comparison...</p>}
        {error && <p className={styles.error} role="alert">{error}</p>}

        {!loading && !error && rows && (
          <div className={styles.table}>
            <div className={`${styles.row} ${styles.headerRow}`}>
              <div className={styles.featureCol}>Features</div>
              <div className={`${styles.brandCol} ${styles.whistleCol}`}>
                <span className={styles.brandLogo}>whistle</span>
              </div>
              <div className={styles.brandCol}>Other Brands</div>
            </div>

            {rows.map((row) => (
              <div key={row.id} className={styles.row}>
                <button
                  className={styles.featureCol}
                  onClick={() => setExpandedId(expandedId === row.id ? null : row.id)}
                  aria-expanded={expandedId === row.id}
                >
                  <span>{row.feature}</span>
                  <svg
                    className={`${styles.chevron} ${expandedId === row.id ? styles.chevronOpen : ''}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className={`${styles.brandCol} ${styles.whistleCol}`}>
                  <CellValue value={row.whistle} />
                </div>
                <div className={styles.brandCol}>
                  <CellValue value={row.others} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ComparisonTable
