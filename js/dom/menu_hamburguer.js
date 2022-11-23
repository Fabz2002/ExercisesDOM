export default function hamburguer(dashboardbtn, aside, menuItem) {
  const d = document;
  d.addEventListener("click", (e) => {
    if (
      e.target.matches(dashboardbtn) ||
      e.target.matches(`${dashboardbtn} *`)
    ) {
      d.querySelector(aside).classList.toggle("is-active");
      d.querySelector(dashboardbtn).classList.toggle("is-active");
    }

    if (e.target.matches(menuItem)) {
      d.querySelector(aside).classList.remove("is-active");
    }
  });
}
