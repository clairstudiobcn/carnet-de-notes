import Link from 'next/link'
import {START_YEAR, YEAR, TITLE} from '../lib/constants'
import styles from '../styles/Site.module.css'

export default function Header() {
  return (
      <div className={styles.header}>
          <h1><Link href="/"><a>{TITLE}</a></Link></h1>
          <p>{START_YEAR} &mdash; {YEAR}</p>
      </div>
    )
}
