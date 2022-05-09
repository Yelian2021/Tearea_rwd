$(document).ready(function(){
    //nav
    var navbar = document.getElementsByClassName('navbar')[0];
    navbar.addEventListener('click',function(){
        let bar1 = document.getElementsByClassName('bar1')[0];
        let bar2 = document.getElementsByClassName('bar2')[0];
        let bar3 = document.getElementsByClassName('bar3')[0];
        bar1.classList.toggle("open");
        bar2.classList.toggle("open");
        bar3.classList.toggle("open");

        let menutoggle =  document.getElementById("sideMenu");
        menutoggle.classList.toggle("toggleW");
    });
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav_top").style.top = "0";
            document.getElementById("nav_m_top").style.top = "0";
        } else {
            document.getElementById("nav_top").style.top = "-500px";
            document.getElementById("nav_m_top").style.top = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:80,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });


    //
    AOS.init();
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    var numOfSquares = 12;
    //貼文討論
    for (var i = 0; i < numOfSquares; i++) {
        var square = $(`<div class="square">
      <h3><img src='https://picsum.photos/200/300'></img></h3>
      <a href="###">請問茶葉去哪裡買?</a>
      
      </div>`);
        var rNum =  Math.floor( (Math.random() * 1000));
        $('.hero, .square__content').append(square);
    
        square.css({
            top: Math.random() * ($('.hero').height() - square.height()) + 'px', 
            left: Math.random() * ($('.hero').width() - square.width()) + 'px',
    
        })
    }

    //

})
