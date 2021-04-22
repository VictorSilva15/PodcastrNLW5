export default function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / 3600); // Pega as horas
  const minutes = Math.floor((duration % 3600) / 60); //Pega os minutos
  const seconds = duration % 60; // Pega os segundos

  const timeString = [hours, minutes, seconds]
    .map((unit) => {
      return String(unit).padStart(2, "0");
    })
    .join(":");

  return timeString;
}
