// export default function clock(opStartClock, section) {
//   const d = document;
//   d.addEventListener("click", (e) => {
//     if (e.target.matches(opStartClock)) {
//       const temporizador = d.querySelector(section).createElement("div");
//       temporizador.class = "nashe";
//       temporizador.appendChild("jejeje");
//     }
//   });
// }

const d = document;
export function digitalClock(clock, opStartClock, opEndClock) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(opStartClock)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(opEndClock)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(opStartClock).disabled = false;
    }
  });
}
export function alarm(sound, opStartAlarm, opEndAlarm) {
  let alarmState;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;
  d.addEventListener("click", (e) => {
    if (e.target.matches(opStartAlarm)) {
      alarmState = setTimeout(() => {
        $alarm.play();
      }, 0);
      e.target.disabled = true;
    }

    if (e.target.matches(opEndAlarm)) {
      clearTimeout(alarmState);
      $alarm.pause();
      $alarm.currentTime = 0; //para empezar desde 0
      d.querySelector(opStartAlarm).disabled = false;
    }
  });
}
