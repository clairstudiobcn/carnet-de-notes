import { parseISO, format } from 'date-fns'
import fr from 'date-fns/locale/fr'

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'd LLLL yyyy', { timeZone: 'Europe/Paris', locale: fr, })}</time>
}
