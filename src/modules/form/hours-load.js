import dayjs from "dayjs";

import { openingHour } from "../../utils/opening-hour.js";

export function hoursLoad( { date }){
  const opening = openingHour.map((hour) =>{
    //Recupera somente a hora
    const [scheduleHour] = hour.split(":")

    //Adiciona a hora na date e verifica se está no passado.
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

    // Define se o horário está disponível
    return{
      hour,
      isHourPast
    }
  })
  console.log(opening)
}