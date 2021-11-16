import Clock from 'react-live-clock';
import { todayDate } from "./TodayDate.js";
import styles from '../styles/Site.module.css'

export default function Note() {
  return (
    <div className={styles.note}>
      <p>Paris, France<br></br>{todayDate()} &mdash; <Clock format={'HH:mm:ss'} ticking={true} timezone={'CET'} /></p>
    </div>
  )
}
