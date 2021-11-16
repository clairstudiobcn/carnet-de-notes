import Meta from '../components/Meta'
import Header from '../components/Header'
import Note from '../components/Note'
import Footer from '../components/Footer'

import styles from '../styles/Site.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.layout}>
        <div className={styles.div}>
          <Header />
          <Note />
        </div>
        <div className={styles.div}>
          {children}
          <Footer />
        </div>
      </div>
    </>
  )
}
