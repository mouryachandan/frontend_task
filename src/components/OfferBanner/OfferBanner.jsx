import styles from './OfferBanner.module.css'

function OfferBanner() {
  return (
    <div className={styles.banner}>
      Starting at <s className={styles.strike}>₹53,999</s>{' '}
      <strong>₹47,999</strong>. Hurry! Offer ends soon.
    </div>
  )
}

export default OfferBanner
