import { useState } from 'react'
import styles from './Hero.module.css'

function Hero({ teethIssue, setTeethIssue }) {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [consent, setConsent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Thank you, ${name || 'there'}! We'll contact you shortly.`)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroTop}>
        <div className={`container ${styles.heroBannerWrap}`}>
          <img
            src="/Hero.png"
            alt="Invisible Aligners for a dream smile"
            className={styles.heroBanner}
          />
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={`container ${styles.formContainer}`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formTop}>
              <p className={styles.formQuestion}>
                Do you have Teeth Gaps or Crooked Teeth?
              </p>

              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="teethIssue"
                    value="yes"
                    checked={teethIssue === 'yes'}
                    onChange={(e) => setTeethIssue(e.target.value)}
                  />
                  <span className={styles.radioCustom} />
                  Yes
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="teethIssue"
                    value="no"
                    checked={teethIssue === 'no'}
                    onChange={(e) => setTeethIssue(e.target.value)}
                  />
                  <span className={styles.radioCustom} />
                  No
                </label>
              </div>
            </div>

            <div className={styles.inputRow}>
              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="fullName">
                  Full Name<span className={styles.required}>*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Ajay Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.field}>
                <label className={styles.fieldLabel} htmlFor="mobile">
                  Mobile number<span className={styles.required}>*</span>
                </label>
                <div className={styles.phoneInput}>
                  <span className={styles.countryCode}>+91</span>
                  <input
                    id="mobile"
                    type="tel"
                    placeholder="Mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Book a Free Scan
              </button>
            </div>

            <label className={styles.consent}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>
                I hereby consent to receive calls / messages from Whistle and its
                partners and override DND settings.
              </span>
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
