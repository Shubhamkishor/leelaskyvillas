// owl js
 $(document).ready(function() {
  $('.video-gallery').owlCarousel({
      items: 1,
      loop: true,
      video: true,
      lazyLoad: true,
      nav:true,
      autoplay:true
  });

  // 2 owl
   $('.gallery-carousel').owlCarousel({
      loop:true,
      items: 1,
      margin:8,
      nav:true,
      dots:true,
      loop: true,
      autoplay:true,
      lazyLoad: true,
      items:1,
          itemsDesktop:[1000,1],
          itemsDesktopSmall:[979,1],
          itemsTablet:[768,1],
          pagination:false,
          navigation:false,
          navigationText:["1","2"]
  });
});

 $(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 300) { 
              $('.navbar').addClass('solid');
              $('.navbar-brand .logo').addClass('scroll-logo');

          } else {
              $('.navbar').removeClass('solid');
              $('.navbar-brand .logo').removeClass('scroll-logo');
          }
        });

        $(window).width(function(){
          if ($(window).outerWidth() >= 991) {
           // $('.feed-section .col-lg-3').addClass('feed-w');
          }
          else{
            // $('.feed-section .col-lg-3').removeClass('feed-w');
          }
        });   
});

  window.onscroll = () =>{

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }
}



