import styles from './Marquee.module.css'

const ITEMS = [
  { text: 'Our inaugural launch benefit', bold: false },
  { text: 'Free teeth scan', bold: true, suffix: ' worth ₹500' },
  { text: 'Free orthodontic consultation', bold: true, suffix: ' worth ₹1500' },
]

function Marquee() {
  const content = ITEMS.map((item) => (
    <span key={item.text} className={styles.item}>
      {item.bold ? (
        <>
          <strong>{item.text}</strong>
          {item.suffix}
        </>
      ) : (
        item.text
      )}
      <span className={styles.dot}>•</span>
    </span>
  ))

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {content}
        {content}
      </div>
    </div>
  )
}

export default Marquee
