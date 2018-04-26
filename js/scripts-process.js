$(function () {

    function stopEvents(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function initFunc(parent) {
        // icons sprite
        $("#ui-icons").load("images/ui/ui-icons.html");
        // end of icons sprite

        // hide after load
        var hideItem = $(".hide");
        hideItem.each(function () {
            $(this).delay(100).hide();
            $(this).delay(200).addClass("visible");
        });
        // end of hide after load

        // radio & checkbox
        var checkBox = $("input:checkbox"),
            radioBtn = $("input.radio-btn");

        parent.find(checkBox).each(function () {
            $(this).wrap("<span class='checkbox'></span>");
            $(this).change(function () {
                if ($(this).is(":checked")) {
                    $(this).parent().addClass("checked");
                    $(this).parent().parent().addClass("checked");
                    if ($(this).is(".card-check")) {
                        $(".card-line").slideDown("fast");
                    }

                } else {
                    $(this).parent().removeClass("checked");
                    $(this).parent().parent().removeClass("checked");

                    if ($(this).is(".card-check")) {
                        $(".card-line").slideUp("fast");
                    }
                }
            });
            if ($(this).is(":checked")) {
                $(this).parent().addClass("checked");
                $(this).parent().parent().addClass("checked");

                if ($(this).is(".card-check")) {
                    $(".card-line").slideDown("fast");
                }
            } else {
                $(this).parent().removeClass("checked");
                $(this).parent().parent().removeClass("checked");

                if ($(this).is(".card-check")) {
                    $(".card-line").slideUp("fast");
                }
            }
        });

        parent.find(radioBtn).each(function () {
            var groupName = $(this).attr("name") + "-radio";

            $(this).wrap("<span class='radio " + groupName + "'></span>");
            $(this).change(function () {
                if ($(this).is(":checked")) {
                    $('.' + groupName).removeClass("checked");
                    $(this).parent().addClass("checked");

                } else {
                    $(this).parent().removeClass("checked");
                }
            });
            if ($(this).is(":checked")) {
                $(this).parent().addClass("checked");
                $(this).parent().parent().addClass("checked");
            } else {
                $(this).parent().removeClass("checked");
                $(this).parent().parent().removeClass("checked");
            }
        });

        $(".filter-section .section-list > label.radio-label").click(function () {
            $(this).addClass("checked").siblings().removeClass("checked");
        });

        $(".filter-section .section-list > label.check-label").click(function () {
            if ($(this).is(".active")) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active");
            }
        });
        // end of radio & checkbox

        // forms
        $("#login-form").validate({
            /*errorPlacement: function (error, element) {},*/ /*disable error label*/
            ignore: '', /*do not ignore hidden elements*/
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                }
            },
            highlight: function (element) {
                $(element).parent().addClass("error");
                $(element).addClass("error");
            },
            unhighlight: function (element) {
                $(element).parent().removeClass("error");
                $(element).removeClass("error");
            },
            submitHandler: function (form) {

            },
            invalidHandler: function (event, validator) {

            }, errorElement: "span"
        });

        $("#video-form").validate({
            /*errorPlacement: function (error, element) {},*/ /*disable error label*/
            ignore: '', /*do not ignore hidden elements*/
            rules: {
                phone: {
                    required: true
                }
            },
            highlight: function (element) {
                $(element).parent().addClass("error");
                $(element).addClass("error");
            },
            unhighlight: function (element) {
                $(element).parent().removeClass("error");
                $(element).removeClass("error");
            },
            submitHandler: function (form) {
                $(".video-form").slideUp("fast");
                $(".video-confirm").slideDown("fast");
            },
            invalidHandler: function (event, validator) {

            }, errorElement: "span"
        });

        $("#user-form").validate({
            /*errorPlacement: function (error, element) {},*/ /*disable error label*/
            ignore: '', /*do not ignore hidden elements*/
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                },
                phone: {
                    required: true
                }
            },
            highlight: function (element) {
                $(element).parent().addClass("error");
                $(element).addClass("error");
            },
            unhighlight: function (element) {
                $(element).parent().removeClass("error");
                $(element).removeClass("error");
            },
            submitHandler: function (form) {

            },
            invalidHandler: function (event, validator) {

            }, errorElement: "span"
        });

        $("#registration-form").validate({
            ignore: '', /*do not ignore hidden elements*/
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                },
                passwordB: {
                    required: true,
                    equalTo: "#password"
                }
            },
            highlight: function (element) {
                $(element).parent().addClass("error");
                $(element).addClass("error");
            },
            unhighlight: function (element) {
                $(element).parent().removeClass("error");
                $(element).removeClass("error");
            },
            submitHandler: function (form) {

            },
            invalidHandler: function (event, validator) {

            }, errorElement: "span"
        });

        $("#recovery-form").validate({
            ignore: '', /*do not ignore hidden elements*/
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true
                },
                passwordB: {
                    required: true
                },
                passwordC: {
                    required: true,
                    equalTo: "#passwordB"
                }
            },
            highlight: function (element) {
                $(element).parent().addClass("error");
                $(element).addClass("error");
            },
            unhighlight: function (element) {
                $(element).parent().removeClass("error");
                $(element).removeClass("error");
            },
            submitHandler: function (form) {

            },
            invalidHandler: function (event, validator) {

            }, errorElement: "span"
        });

        $("#question-form").validate({
            ignore: '', /*do not ignore hidden elements*/
            rules: {
                email: {
                    required: true,
                    email: true
                },
                name: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            highlight: function (element) {
                $(element).parent().addClass("error");
                $(element).addClass("error");
            },
            unhighlight: function (element) {
                $(element).parent().removeClass("error");
                $(element).removeClass("error");
            },
            submitHandler: function (form) {

            },
            invalidHandler: function (event, validator) {

            }, errorElement: "span"
        });

        var rangeSlider = $("#range");
        rangeSlider.slider({
            range: true,
            min: 1000,
            max: 10000,
            values: [1250, 7000],
            slide: function (event, ui) {
                $(".from-input").val(ui.values[0] + " р.");
                $(".to-input").val(ui.values[1] + " р.");
            }
        });
        $(".from-input").val(rangeSlider.slider("values", 0) + " р.");
        $(".to-input").val(rangeSlider.slider("values", 0) + " р.");

        $("input[name=phone]").mask("+7 (999) 999-99-99");

        $("#cart-form").validate({
            ignore: '', /*do not ignore hidden elements*/
            focusInvalid: false,
            onfocusout: function (element) {
                this.element(element);  // <- "eager validation"
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    var currentObj = this;
                    var currentElement = element;
                    var delay = function () {
                        currentObj.element(currentElement);
                    };
                    setTimeout(delay, 0);
                }
            },
            rules: {
                email: {
                    required: true,
                    email: true
                },
                name: {
                    required: true
                },
                phone: {
                    required: true
                }
            },
            highlight: function (element) {
                $(element).parent().addClass("error");
                $(element).addClass("error");
            },
            unhighlight: function (element) {
                $(element).parent().removeClass("error");
                $(element).removeClass("error");
            },
            submitHandler: function (form) {

            },
            invalidHandler: function (event, validator) {

            }, errorElement: "span"
        });
        // end of forms


        function closeAllModals() {
            modalHolder.empty().removeClass("active");
            pageBody.removeClass("modal-open").removeAttr("style");
        }

        $("[class*='modal-close']").click(function (e) {
            closeAllModals();
            stopEvents(e);
        });


        function dropdown(trigger, content) {
            trigger.click(function () {

                if ($(this).is(".active")) {
                    $(this).removeClass("active");
                    $(this).parent().find(content).slideUp("fast");
                    $(this).find("span.button-text").toggleClass("hidden");
                } else {
                    $(this).addClass("active");
                    $(this).parent().find(content).slideDown("fast");
                    $(this).find("span.button-text").toggleClass("hidden");
                }
            });
        }

        dropdown($(".section-trigger"), $(".section-list"));

    }

    initFunc($(document));


    // modal
    //noinspection JSUnusedLocalSymbols
    var header = $("header"),
        footer = $("footer"),
        pageHtml = $("html"),
        pageBody = $("body"),
        desktopNavHolder = $(".desktop-nav-holder"),
        mobileNavHolder = $(".mobile-nav-holder"),
        headerNav = $(".header-nav"),
        main = $(".main"),
        scrollBarW = 0;

    function getScrollBarWidth() {
        var inner = document.createElement("p");
        inner.style.width = "100%";
        inner.style.height = "200px";

        var outer = document.createElement("div");
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);

        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = "scroll";
        var w2 = inner.offsetWidth;
        if (w1 == w2) w2 = outer.clientWidth;

        document.body.removeChild(outer);

        scrollBarW = (w1 - w2);
    }

    getScrollBarWidth();

    var modalHolder = $("#modal-holder");
    $(document).on("click", ".modal-trigger", function (e) {
        var target = "modals/" + $(this).attr("data-target") + ".html";
        modalHolder.empty();
        pageBody.addClass("modal-open").css("padding-right", scrollBarW);
        modalHolder.load(target, function () {
            var mod = $(".modal");
            initFunc(mod);
            $(this).addClass("active");
        });
        navClose();
        closeAllPupups();

        stopEvents(e);
    });


    function closeAllModals() {
        modalHolder.empty().removeClass("active");
        pageBody.removeClass("modal-open").removeAttr("style");
    }

    // end of modal

    // sliders
    $(".hero-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30
    });

    $(".catalogue-preview-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $(".products-preview-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".reasons-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".magazine-slider-1").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".magazine-slider-2").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".magazine-slider-3").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".partners-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 6,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });


    $(".description-slider-1").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".description-slider-2").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".additional-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".product-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: false,
        centerPadding: "60px",
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30
    });

    var sidebar = $("#stick");
    sidebar.stick_in_parent({
        offset_top: 60,
        parent: '.fixed-parent',
        recalc_every: true,
        bottoming: true,
        spacer: false
    });

    $(".compare-slider-1").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30
    });

    $(".compare-slider-2").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        initialSlide: 1,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30
    });

    $(".compare-item .product-item-frame").matchHeight();


    $(".benefits-slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: false,
        variableWidth: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 7000,
        appendDots: ".benefits-dots",
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        initialSlide: 0,
        pauseOnHover: true,
        vertical: false,
        focusOnSelect: false,
        accessibility: false,
        touchThreshold: 30,

        responsive: [
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // end of sliders

    // tabs
    function tabs(tabTrigger, tabContent) {
        $(tabTrigger).click(function () {
            $(this).addClass("current").siblings().removeClass("current")
                .parents().find(tabContent).eq($(this).index()).fadeIn(500).siblings(tabContent).hide();

            function updateSlider(slider) {
                slider.each(function () {
                    if ($(this)) {
                        $(this).get(0).slick.setPosition();
                    }
                });
            }

            updateSlider($(".magazine-slider-1"));
            updateSlider($(".magazine-slider-2"));
            updateSlider($(".magazine-slider-3"));
            updateSlider($(".description-slider-1"));
            updateSlider($(".description-slider-2"));
        });
    }

    tabs($(".magazine-tabs > li"), $(".magazine-tabs-list > .tab-content"));
    tabs($(".product-tabs > li"), $(".product-tabs-list > .tab-content"));
    // end of  tabs

    function accordion(trigger, content) {
        trigger.click(function () {

            if ($(this).is(".active")) {
                $(this).removeClass("active");
                $(this).parent().find(content).slideUp("fast");
                $(this).find("span.button-text").toggleClass("hidden");
            } else {
                trigger.removeClass("active");
                content.slideUp("fast");
                $(this).addClass("active");
                $(this).parent().find(content).slideDown("fast");
                $(this).find("span.button-text").toggleClass("hidden");
            }
        });
    }

    accordion($(".acc-trigger-1"), $(".acc-content-1"));
    accordion($(".acc-trigger-2"), $(".acc-content-2"));


    // forms
    $("#dropdown-feedback").validate({
        errorPlacement: function (error, element) {
        }, /*disable error label*/
        ignore: '', /*do not ignore hidden elements*/
        focusInvalid: false,
        onfocusout: function (element) {
            this.element(element);  // <- "eager validation"
            if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                var currentObj = this;
                var currentElement = element;
                var delay = function () {
                    currentObj.element(currentElement);
                };
                setTimeout(delay, 0);
            }
        },
        rules: {
            phone: {
                required: true
            }
        },
        highlight: function (element) {
            $(element).parent().addClass("error");
            $(element).addClass("error");
        },
        unhighlight: function (element) {
            $(element).parent().removeClass("error");
            $(element).removeClass("error");
        },
        submitHandler: function (form) {

        },
        invalidHandler: function (event, validator) {

        }
    });

    $("#footer-form").validate({
        errorPlacement: function (error, element) {
        }, /*disable error label*/
        ignore: '', /*do not ignore hidden elements*/
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        highlight: function (element) {
            $(element).parent().addClass("error");
            $(element).addClass("error");
        },
        unhighlight: function (element) {
            $(element).parent().removeClass("error");
            $(element).removeClass("error");
        },
        submitHandler: function (form) {

        },
        invalidHandler: function (event, validator) {

        }
    });
    // end of  forms

    // on scroll functions
    $(window).on("load scroll resize", function () {

        /*$(".product-tabs-fix").each(function () {
         var tabsHolder = $(".product-tabs-holder");
         var tabsList = $(".product-tabs-list");
         var fixStart = tabsHolder.offset().top;
         var fixStop = tabsList.offset().top + tabsList.height();

         if ($(window).scrollTop() >= fixStart - 60) {
         $(this).addClass("fixed");
         } else {
         $(this).removeClass("fixed");}

         if ($(window).scrollTop() >= fixStop - 60) {
         $(this).addClass("stopped");
         } else {
         $(this).removeClass("stopped");
         }
         });*/

        $(".product-item .image img").each(function () {
            var h = $(this).height();
            var w = $(this).width();

            if(h > w) {
                $(this).css({
                    height : '100%',
                    width : 'auto'
                });
            }
        });
    });
    // on scroll functions

    // responsive___________________
    $(window).on("load resize", function () {

        if ($(window).width() + scrollBarW <= 960) {
            $(".action-buttons-holder .action-buttons").appendTo(".fixed-slider");
        } else {
            $(".fixed-slider .action-buttons").appendTo(".action-buttons-holder");
        }

        if ($(window).width() + scrollBarW <= 768) {

        } else {

        }

        $(".compare-slider .slick-dots").each(function () {
           var h = $(".compare-slider .product-item").height() + 17;

           $(this).css("top", h);
        });
    });


    /*var preloader = document.getElementById('preloader');
     preloader.addEventListener('touchmove', function(e) {
     e.preventDefault();
     }, false);*/
    // end of responsive___________

    // popups
    function closeAllPupups() {
        $(".popup").removeClass("active");
        $(".popups").removeClass("active");
    }

    function popupTriggers(trigger, content) {
        trigger.click(function (e) {

            if ($(this).is(".active")) {
                $(this).removeClass("active");
                closeAllPupups();
            } else {
                navClose();
                closeAllPupups();
                closeAllModals();

                $(this).addClass("active");
                $(".popups").addClass("active");
                content.addClass("active");

                if ($(this).is(".hide-on-click")) {
                    $(this).parent().parent().hide();
                }
            }

            stopEvents(e);
        });
    }

    popupTriggers($(".compare-action-butn"), $(".compare-popup"));
    popupTriggers($(".favorite-action-butn"), $(".registration-popup"));
    popupTriggers($(".cart-butn"), $(".cart-popup"));

    $(".popups .dismiss-butn").click(function (e) {
        closeAllPupups();
        stopEvents(e);
    });

    $("a.fancy").fancybox({
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
    // end of popups

    // remove from favorite
    $(".favorite .remove-action-butn").click(function () {
        $(this).parentsUntil(".inner").remove();
        if ($(".favorite .catalogue-list-item").length == 0) {
            $(".no-items").removeClass("hide").show();
        }
    });
    // end of remove from favorite

    // navigation___________________
    function navClose() {
        $(".header-trigger").removeClass("active");
        $(".header-dropdown").removeClass("active");
        $(".subnav-trigger").removeClass("active");
        $(".subnav-column").removeClass("active");
    }

    function mobileNavTriggers(trigger, content) {
        trigger.click(function (e) {

            if (!$(this).is(".cart-link")) {
                if ($(this).is(".active")) {

                    $(this).removeClass("active");
                    content.removeClass("active");

                } else {
                    navClose();
                    closeAllPupups();
                    closeAllModals();

                    $(this).addClass("active");
                    content.addClass("active");
                }
            }

            stopEvents(e);
        });
    }

    mobileNavTriggers($(".nav-trigger"), $(".nav-dropdown"));
    mobileNavTriggers($(".feedback-trigger"), $(".feedback-dropdown"));
    mobileNavTriggers($(".user-trigger"), $(".user-dropdown"));

    $(".dropdown-close").click(function () {
        navClose();
    });

    $(".subnav-trigger").click(function (e) {
        var thisAtr = $(this).attr("data-target");
        if ($(this).is(".active")) {
            $(this).removeClass("active");
            $(".subnav-column").removeClass("active");
        } else {
            $(".subnav-column").each(function () {
                var subAtr = $(this).attr("data-subnav");
                if (thisAtr == subAtr) {
                    $(".subnav-column").removeClass("active");
                    $(this).addClass("active");
                } else {
                    $(this).removeClass("active");
                }
            });

            $(".subnav-trigger").removeClass("active");
            $(this).addClass("active");
        }
        stopEvents(e);
    });

    $(".subnav-back").click(function () {
        $(".subnav-trigger").removeClass("active");
        $(".subnav-column").removeClass("active");
    });
    // end of navigation___________

    // Browser And Platform Detect_______________
    //noinspection JSUnresolvedVariable
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    iOS && pageHtml.addClass("ios");
    //noinspection JSUndeclaredVariable
    browserDetect = {
        matchGroups: [
            [
                {uaString: "win", className: "win"},
                {uaString: "mac", className: "mac"},
                {uaString: "android", className: "android"},
                {uaString: "linux", className: "linux"}
            ],
            [
                {uaString: "msie", className: "trident"},
                {uaString: "applewebkit", className: "webkit"},
                {uaString: "gecko", className: "gecko"},
                {uaString: "opera", className: "presto"}
            ],
            [
                {uaString: "msie 8.0", className: "ie8"},
                {uaString: "msie 9.0", className: "ie9"},
                {uaString: "msie 10.0", className: "ie10"},
                {uaString: "firefox", className: "firefox"},
                {uaString: "opera", className: "opera"},
                {uaString: "chrome", className: "chrome"},
                {uaString: "safari", className: "safari"},
                {uaString: "unknown", className: "unknown"}
            ]
        ],

        init: function () {
            //noinspection CommaExpressionJS
            return this.detect(), this
        },
        addClass: function (a) {
            //noinspection JSUnusedGlobalSymbols,CommaExpressionJS
            this.pageHolder = document.documentElement, document.documentElement.className += " " + a
        },
        detect: function () {
            for (var a, s = 0; s < this.matchGroups.length; s++) {
                a = this.matchGroups[s];
                for (var e, i = 0; i < a.length; i++) { //noinspection CommaExpressionJS
                    if (e = a[i], "string" == typeof e.uaString) {
                        if (this.uaMatch(e.uaString)) {
                            this.addClass(e.className);
                            break
                        }
                    } else {
                        for (var t = 0, r = !0; t < e.uaString.length; t++)if (!this.uaMatch(e.uaString[t])) {
                            r = !1;
                            break
                        }
                        if (r) {
                            this.addClass(e.className);
                            break
                        }
                    }
                }
            }
        },
        uaMatch: function (a) {
            //noinspection CommaExpressionJS
            return this.ua || (this.ua = navigator.userAgent.toLowerCase()), -1 != this.ua.indexOf(a)
        }
    }.init();

    // pixel ratio
    //noinspection JSUnresolvedVariable
    var retina = window.devicePixelRatio > 1 ? "retina" : "no-retina";
    pageHtml.addClass(retina);
    // end of pixel ratio

    if (pageHtml.is(".ie8, .ie9")) {
        modalHolder.load("modals/warning-modal.html");
    }
    // end of Browser And Platform Detect_______

    /*modalHolder.load('modals/video-modal.html', function () {
     var mod = $('.modal');
     initFunc(mod);
     $(this).addClass("active");
     });*/
});

$(window).load(function () {
    $("html").each(function () {
        // $(this).addClass("loaded");

        setTimeout(function () {
            $("html").addClass("loaded");
        }, 2);

        if ($(this).is(".ios") || $(this).is(".android")) {
            $(this).addClass("mobile");
        } else {
            $(this).addClass("desktop");
        }
    });
});