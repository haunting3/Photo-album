import styles from './Footer.module.css'


function Footer() {
  return (
    <footer className={`${styles.footer} bg-dark`}>
      <p >
        <span>Copyright</span> &copy; 2021
      </p>
    </footer>
  )
}

export default Footer