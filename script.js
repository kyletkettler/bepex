let engineering = ".menu_egineering-links, .menu_engineering";
let processes = ".menu_processes-links, .menu_processes";
let applications = ".menu_applications-links, .menu_applications";
//Menu Category change
//engineering links
$(".menu_engineering").on("click", function () {
  let state = Flip.getState(engineering);
  $(processes).removeClass("is-active");
  $(applications).removeClass("is-active");
  $(engineering).addClass("is-active");
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});
//processes links
$(".menu_processes").on("click", function () {
  let state = Flip.getState(processes);
  $(engineering).removeClass("is-active");
  $(applications).removeClass("is-active");
  $(processes).addClass("is-active");
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});
//applications links
$(".menu_applications").on("click", function () {
  let state = Flip.getState(applications);
  $(engineering).removeClass("is-active");
  $(processes).removeClass("is-active");
  $(applications).addClass("is-active");
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});

//Menu Open
$(".nav_menu-button").on("click", function () {
  let state = Flip.getState("#menu-wrapper");
  $("#menu-wrapper").toggleClass("is-open");
  Flip.from(state, {
    duration: 0.4,
    ease: "power2.out"
  });
});
