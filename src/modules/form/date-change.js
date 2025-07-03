import { schedulesDay } from "../schedules/load.js"

// Sleciona o input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quando a data mudar
selectedDate.onchange = () => schedulesDay()