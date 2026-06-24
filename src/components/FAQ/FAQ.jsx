import { useState } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import styles from './FAQ.module.css'

function FAQ() {
  const { data: faqs, loading, error } = useFetchData('faqs')
  const [openId, setOpenId] = useState(null)

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className={styles.section} id="faqs">
      <div className="container">
        <h2 className={styles.heading}>
          <span className={styles.purple}>Got Questions?</span>{' '}
          We&apos;ve got answers
        </h2>

        {loading && (
          <div className={styles.state}>
            <div className={styles.spinner} aria-label="Loading FAQs" />
            <p>Loading FAQs...</p>
          </div>
        )}

        {error && (
          <div className={styles.state} role="alert">
            <p className={styles.error}>{error}</p>
          </div>
        )}

        {!loading && !error && faqs && (
          <div className={styles.list}>
            {faqs.map((faq) => {
              const isOpen = openId === faq.id

              return (
                <div key={faq.id} className={styles.item}>
                  <button
                    className={`${styles.question} ${isOpen ? styles.open : ''}`}
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default FAQ
