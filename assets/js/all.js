// active menu
window.addEventListener("wheel", myFunction);

$(".left-fixed-menu .nav-item").click(function(){

  setTimeout(function(){ 
    myFunction()
   }, 100);
});


function myFunction() {
  var url = document.URL

  var lastPartOfURL = url.substr(url.lastIndexOf('#') + 1);

  console.log(lastPartOfURL);
  
  switch(lastPartOfURL) {
    case "firstPage":
      $(".nav-item a").removeClass("coffee-color");
      $( ".home a" ).addClass( "coffee-color" );
      $(".nav-item").removeClass("active");
      $( ".home" ).addClass( "active" );
      break;
    case "secondPage":
      $(".nav-item a").removeClass("coffee-color");
      $( ".about a" ).addClass( "coffee-color" );
      $(".nav-item").removeClass("active");
      $( ".about" ).addClass( "active" );
      break;
    case "3rdPage":
      $(".nav-item a").removeClass("coffee-color");
      $( ".specialities a" ).addClass( "coffee-color" );
      $(".nav-item").removeClass("active");
      $( ".specialities" ).addClass( "active" );
      break;
    case "4thpage":
      $(".nav-item a").removeClass("coffee-color");
      $( ".projects a" ).addClass( "coffee-color" );
      $(".nav-item").removeClass("active");
      $( ".projects" ).addClass( "active" );
      break;
    case "5thpage":
      $(".nav-item a").removeClass("coffee-color");
      $( ".journal a" ).addClass( "coffee-color" );
      $(".nav-item").removeClass("active");
      $( ".journal" ).addClass( "active" );
      break;
    case "lastPage":
      $(".nav-item a").removeClass("coffee-color");
      $( ".contact a" ).addClass( "coffee-color" );
      $(".nav-item").removeClass("active");
      $( ".contact" ).addClass( "active" );
      break;
  }
}

// home hero slider
$('.home-banner-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 300,
});

// hide show mobile menus
$(".toggle-btn").click(function(){
  $(".mobile-collapse-area").toggle();
});
// hide menu area
$(".mobile-collapse-area .nav-link").click(function(){
  $(".mobile-collapse-area").toggle();
});