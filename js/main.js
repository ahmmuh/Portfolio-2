$(document).ready(function () {
  $(".toggleMenu").on("click", function () {
    var $navbar = $("#navbar");
    $navbar.toggleClass("toggleNavbar");
    $navbar.addClass("animate__animated animate__fadeInDown");
  });

  // scroll to menu section

  $(".scroll_To_study").click(function () {
    $("html,body").animate({ scrollTop: $(".js--study").offset().top }, 1000);
  });

  $(".scroll_To_about").click(function () {
    $("html,body").animate({ scrollTop: $(".js--about").offset().top }, 1000);
  });

  $(".scroll_To_contact").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--contactForm").offset().top },
      1000
    );
  });

  // scroll to menu section ends

  setTimeout(() => {
    $("#logo").addClass("animate__animated animate__rotateIn");
  }, 3000);

  setTimeout(() => {
    var languages = $("#languages div");
    languages.addClass("animate__animated animate__fadeInUp");
  }, 3500);

  setTimeout(() => {
    $(".study .study-container div").animate({
      opacity: 0.8,
    });
  }, 7000);

  $(".about-description").hover(
    function () {
      $(".about-description p").css({
        opacity: 0.7,
      });
    },
    function () {
      $(".about-description p").css({
        opacity: 1,
      });
    }
  );

  function aboutSection() {
    setTimeout(() => {
      $(".about-description").addClass("animate__animated animate__fadeInUp");
    }, 5000);
  }

  aboutSection();

  function animateStudyBoxes() {
    setTimeout(() => {
      $(".study-container div").addClass(
        "animate__animated animate__fadeInUp "
      );
    }, 7300);
  }
  animateStudyBoxes();

  function formContact() {
    setTimeout(() => {
      $("#formContact").addClass("animate__animated   animate__swing");
    }, 6400);
  }
  formContact();
  var myProfile = $(".myProfile");
  myProfile.mouseenter(function () {
    myProfile.addClass("animate__animated animate__rotateIn");
  });
});
