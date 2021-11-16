import { intervalToDuration } from 'date-fns'
import { format, utcToZonedTime } from 'date-fns-tz'
import fr from 'date-fns/locale/fr'

export function todayDate() {
  const date = new Date();
  const parisTimeZone = 'Europe/Paris'
  const parisDate = utcToZonedTime(date, parisTimeZone)
  return <time dateTime={todayDate}>{format(parisDate, 'd LLLL yyyy', { timeZone: 'Europe/Paris', locale: fr, })}</time>
}
