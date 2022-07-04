    // video

    $(document).ready(function () {
        setTimeout(function () {
            $('.vd').fadeOut('fast', function () {
                $(this).remove()
            });
        }, 3000);
        $('.vd').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
          });
    })


    // 
    $(document).ready(function () {
        $(window).scroll(function () {
            $('.sec3 .list li').each(function (i) {

                let bottom_of_element = $(this).offset().top + $(this).outerHeight();
                let bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({
                        'opacity': '1',
                        'margin-left': '10vw'
                    }, 1000);
                }

            });
        });
    });

    $(function () {

        const header = document.querySelector("header");
        const headerHeight = header.getBoundingClientRect().height;

        window.addEventListener("scroll", () => {
            if (window.scrollY > headerHeight) {
                header.setAttribute("style", "background: #171717;");
            } else {
                header.setAttribute("style", "background: transparent;");
            }
        });

        $('.ham').click(function () {
            $('.gnb').on('scroll touchmove mousewheel', function(event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
              });
            $(this).toggleClass('on')
            $('nav').toggleClass('on')
        })

        let w = $('.slide_banner>li').width()
        let intv = setInterval(function () {
            nextAni()
        }, 5000)

        $('.slide_line span').click(function () {
            let nth = $(this).index()

            clearInterval(intv)
            numAni(nth)
            setInterval(function () {
                nextAni()
            }, 5000)

        })

        function nextAni() {
            $('.slide_banner').animate({
                marginLeft: -100 + '%'
            }, 700, function () {
                $('.slide_banner>li').eq(0).appendTo('.slide_banner')
                $('.slide_banner').css({
                    marginLeft: 0
                })

                $('.slide_line span').eq(0).appendTo('.slide_line')
            })
        }

        function numAni(Bnth) {
            for (let x = 0; x < Bnth; x++) {
                $('.slide_banner>li').eq(0).appendTo('.slide_banner')
                $('.slide_line span').eq(0).appendTo('.slide_line')
            }
        }

        // sec2
        let w2 = $('.slide>li').width()
        let intv2 = setInterval(function () {
            nextAni2()
        }, 5000)


        $('.next').click(function () {
            clearInterval(intv2)
            numAni2()
            setInterval(function () {
                nextAni()
            }, 5000)

        })

        function nextAni2() {
            $('.slide').animate({
                marginLeft: -87 + '%'
            }, 700, function () {
                $('.slide>li').eq(0).appendTo('.slide')
                $('.slide').css({
                    marginLeft: 0
                })
            })
        }

        // 2_click.html 
        $('.tab button').click(function () {
            let i = $(this).index()

            $('.tab button').removeClass('on')
            $(this).addClass('on')
            $('.tab_sec').removeClass('on')
            $('.tab_sec').eq(i).addClass('on')
        })

        // 3_click.html
        $('.sec_nav ul li').click(function () {
            let i = $(this).index()

            $('.sec_nav ul li').removeClass('on')
            $(this).addClass('on')
            $('.sec2_tab').removeClass('on')
            $('.sec2_tab').eq(i).addClass('on')
        })

    })