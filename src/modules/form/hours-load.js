import dayjs from "dayjs";

import { openingHour } from "../../utils/opening-hour.js";

const hours = document.getElementById("hours")

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
}

// Renderiza os horários.
opening.forEach(({ hour, available })=> {
  const li = document.createElement("li")
  li.classList.add("hour")
  li.classList.add(available ? "hour-available" : "hour-unavailable")

  li.textContent = hour
  hours.append(li)
});