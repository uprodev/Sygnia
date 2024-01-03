'use strict';

(function ($) {

  var app = {
    init: function init() {
      app.windowResize();
      app.modals();
      app.menu();
      app.custom();
      app.fancybox();
      app.sliders();
      app.tabs();
      app.validate();
      app.accordeon();
      app.inputdecor();
    },

    windowResize: function windowResize() {
      $(window).on('resize', function () {});
    },

    windowLoad: function windowLoad() {
      $(window).on('load', function () {});
    },

    menu: function menu() {
      var $btnMenu = $('.jsMenu');
      $btnMenu.click(function () {
        $(this).toggleClass('menu-is-active');
        $('.mobile_header_menu').slideToggle(200);
        $('body').toggleClass('menuopen');
      });

      var $allMobileMenuItem = $('.mobile_menu_block .menu-item-has-children');

      $allMobileMenuItem.each(function () {
        var $this = $(this);
        $this.children('a').after('<div class=\'btn_open\'></div>');

        var $titlemenu = $this.children('a'),
            $title = $titlemenu.text();
        $this.children('.sub-menu').prepend('<li class="back_button">' + $title + '</li>');
      });

      $(document).on('click', '.mobile_menu_block .menu-item-has-children .btn_open', function () {
        $(this).parent('.menu-item-has-children').children('.sub-menu').addClass('open').parents('.menu-item-has-children').eq(1).addClass('parents');
      });

      $(document).on('click', '.mobile_menu_block .menu-item-has-children .back_button', function () {
        var $this = $(this);
        $this.parent('.sub-menu').removeClass('open').parents('.menu-item-has-children').eq(1).removeClass('parents');
      });
    },

    custom: function custom() {
      $('.jsScrollTo a').on('click', function (e) {
        e.preventDefault();
        var headerHeight = $('header').outerHeight();
        var $id = $(this).attr('href'),
            top = $($id).offset().top;

        if ($id) {
          $('body,html').animate({ scrollTop: top - headerHeight }, 700);
        } else {
          return false;
        }
      });

      var $mobile = false;
      $(window).on('ready resize load', function () {
        if ($(window).width() <= 768) {
          $mobile = true;
        } else {
          $mobile = false;
        }
      });

      $('.drop_menu_wrapper').each(function () {
        var $this = $(this),
            $thisBtn = $this.find('.jsDropMenuBtn'),
            $thisMenu = $this.find('.jsDropMenu');

        $thisBtn.on('click', function () {
          $thisMenu.fadeIn(200);
        });
        closeMenu($thisBtn, $thisMenu);
      });

      function closeMenu($thisBtn, $thisMenu) {
        $(document).on('click', function (e) {
          if (!$thisBtn.is(e.target) && $thisBtn.has(e.target).length === 0 && !$thisMenu.is(e.target) && $thisMenu.has(e.target).length === 0) {
            $thisMenu.fadeOut(200);
          }
        });
      }

      $('.jsPsitiionInfo').each(function () {
        var $this = $(this);
        var $data_row = $this.parents('.data_row');
        var $description_block = $this.parents('.data_row').find('.description_block');
        $this.on('click', function () {
          $data_row.toggleClass('active');
          $description_block.slideToggle(200);
        });
      });
    },

    fancybox: function fancybox() {
      // $('[data-fancybox]').fancybox({
      //   backFocus: false
      // });
    },

    sliders: function sliders() {

      if ($('.jsRelatedArticles').length) {
        $('.jsRelatedArticles').each(function (index, element) {
          var $this = jQuery(this);
          var $btnPrev = $this.find('.button-prev')[0];
          var $btNext = $this.find('.button-next')[0];
          var $swiperPagination = $this.find('.swiper-pagination')[0];

          var swiper = new Swiper(element, {
            spaceBetween: 25,
            slidesPerView: 1.1,
            loop: false,
            speed: 500,
            // autoplay: {
            //   delay: 3000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true
            // },
            breakpoints: {
              650: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            },
            pagination: {
              el: $swiperPagination,
              type: 'progressbar'
            },
            navigation: {
              nextEl: $btNext,
              prevEl: $btnPrev
            },
            on: {
              click: function click(event) {
                // swiper.slideTo(this.clickedIndex);
              }
            }
          });
        });
      }

      if ($('.jsArticlesListSlider').length) {
        $('.jsArticlesListSlider').each(function (index, element) {
          var $this = jQuery(this);
          var $btnPrev = $this.find('.button-prev')[0];
          var $btNext = $this.find('.button-next')[0];

          var $swiperPagination = $this.find('.swiper-pagination')[0];

          var swiper = new Swiper(element, {
            spaceBetween: 65,
            slidesPerView: 1,
            // centeredSlides: true,
            // roundLengths: true,
            loop: false,
            speed: 800,
            // autoplay: {
            //   delay: 3000,
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true
            // },
            breakpoints: {
              0: {
                slidesPerView: 1.2,
                spaceBetween: 25
              },
              650: {
                slidesPerView: 2
              },
              1200: {
                slidesPerView: 3
              }
            },
            navigation: {
              nextEl: $btNext,
              prevEl: $btnPrev
            },
            pagination: {
              el: $swiperPagination,
              type: 'progressbar'
            }
          });
        });
      }

      if ($('.hero_offering_wrapper').length) {
        $('.hero_offering_wrapper').each(function (index, element) {

          var $this_wrapper = $(this);
          var $nav_item = $this_wrapper.find('.nav_item');
          var $jsOfferingWrapper = $this_wrapper.find('.jsOfferingWrapper');

          var mql = window.matchMedia('(min-width: 992px)');

          function initOfferingWrapper() {
            $jsOfferingWrapper.each(function (index, element) {
              var $this = jQuery(this);
              var $progressbar = $this.find('.swiper-pagination')[0];

              var swiperOffer = new Swiper(element, {
                direction: 'vertical',
                grabCursor: true,
                centeredSlides: true,
                spaceBetween: 0,
                slidesPerView: 1,
                loop: false,
                speed: 800,
                // autoplay: {
                //   delay: 3000,
                //   disableOnInteraction: false,
                //   pauseOnMouseEnter: true
                // },
                // pagination: {
                //   el: $progressbar,
                //   // type: "progressbar",
                //   clickable: true,
                // },
                initialSlide: 0,
                on: {
                  init: function init() {
                    setTimeout(function () {
                      return updateProgressBar();
                    }, 10);
                  },
                  slideChange: function slideChange() {
                    updateProgressBar();
                  }
                }
              });

              function updateProgressBar() {
                var progress = swiperOffer.activeIndex / swiperOffer.slides.length * 100;
                var progressPercente = 100 / swiperOffer.slides.length;
                // console.log(progressPercente);
                document.getElementById('progress-bar-inner').style.width = progress + progressPercente + '%';

                $nav_item.removeClass('active');
                $nav_item.eq(swiperOffer.activeIndex).addClass('active');
              }

              $nav_item.each(function (index) {
                $(this).on('click', function () {
                  $nav_item.removeClass('active');
                  $(this).addClass('active');
                  if (!swiperOffer.destroyed) {
                    swiperOffer.slideTo(index);
                  }
                });
              });

              $(window).on('resize', function () {
                if (mql.matches && !$jsOfferingWrapper.hasClass('swiper-initialized')) {
                  return initOfferingWrapper();
                } else if (!mql.matches && $jsOfferingWrapper.hasClass('swiper-initialized')) {
                  if (swiperOffer !== undefined) swiperOffer.destroy(true, true);
                  return;
                }
              });
            });
          }

          if (mql.matches && !$jsOfferingWrapper.hasClass('swiper-initialized')) {
            initOfferingWrapper();
          }

          $(window).on('resize', function () {
            if (mql.matches && !$jsOfferingWrapper.hasClass('swiper-initialized')) {
              initOfferingWrapper();
            }
          });
        });
      }

      if ($('.jsAboutSlider').length) {
        $('.jsAboutSlider').each(function (index, element) {
          var $this = jQuery(this);
          var $btnPrev = $this.find('.button-prev')[0];
          var $btNext = $this.find('.button-next')[0];

          var swiperSpeakers = new Swiper(element, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            spaceBetween: 0,
            slidesPerView: 1,
            loop: true,
            speed: 800,
            coverflowEffect: {
              rotate: 0,
              stretch: 600,
              depth: 200,
              modifier: 1,
              slideShadows: true
            },
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                stretch: 0,
                depth: 0,
                centeredSlides: false,
                effect: 'slide'
              },
              992: {
                slidesPerView: 1.2
              },
              1200: {
                slidesPerView: 1.2
              },
              1300: {
                slidesPerView: 1.3
              },
              1500: {
                slidesPerView: 1.5
              }
            },
            navigation: {
              nextEl: $btNext,
              prevEl: $btnPrev
            },
            on: {
              click: function click(event) {
                // swiperSpeakers.slideTo(this.clickedIndex);
              }
            }
          });
        });
      }
    },

    modals: function modals() {
      // $('.jsOpenModals').magnificPopup({
      //   removalDelay: 300,
      //   mainClass: 'my-mfp-slide-bottom',
      //   fixedContentPos: true
      // });

      // $('.jsCloseModal').each(function () {
      //   var $this = $(this);
      //   $this.on('click', function () {
      //     $this.parents('.b_modal').magnificPopup('close');
      //   });
      // });
    },

    tabs: function tabs() {
      var tabs = $('.jsTabs');
      tabs.each(function () {
        var tabs = $(this),
            tab = tabs.find('.jsTabsTab'),
            content = tabs.find('.jsTabsItem');
        tab.each(function (index, element) {
          $(this).attr('data-tab', index);
        });

        function showContent(i) {
          tab.removeClass('-active');
          content.removeClass('-active').removeClass('-fade');
          tab.eq(i).addClass('-active');
          content.eq(i).addClass('-active');
          setTimeout(function () {
            content.eq(i).addClass('-fade');
          }, 1);
        }
        tab.on('click', function (e) {
          e.preventDefault();
          showContent(parseInt($(this).attr('data-tab')));
        });
      });
    },

    validate: function validate() {},

    accordeon: function accordeon() {
      $('.jsAccord').each(function () {
        var accord = $(this),
            accord_btn = accord.find('.jsAccordBtn'),
            accord_content = accord.find('.jsAccordContent'),
            accord_item = accord.find('.jsAccordItem');

        accord_btn.on('click', function (e) {
          e.preventDefault();
          var $this = $(this),
              $this_item = $this.closest('.jsAccordItem'),
              $this_content = $this.closest('.jsAccordItem').find('.jsAccordContent');
          if ($this.hasClass('-active')) {
            $this.removeClass('-active');
            $this_content.slideUp();
            $this_item.removeClass('item_active');
          } else {
            accord_item.removeClass('item_active');
            accord_btn.removeClass('-active');
            accord_content.slideUp();
            $this.addClass('-active');
            $this_content.slideDown();
            $this_item.addClass('item_active');
          }
        });
      });
    },

    inputdecor: function inputdecor() {
      $('.jsMaskFormControl .form_control').each(function (e) {
        $(this).wrap('<fieldset></fieldset>');
        var tag = $(this).attr('placeholder');
        $(this).attr('placeholder', '');
        $(this).after('<span class="label_top">' + tag + '</span>');
      });

      $('fieldset').each(function () {
        if ($(this).children('input').length > 0) {
          $(this).addClass('fieldset_input');
          // $(this).append('<span class="jsClearInput"></span>');
        }
        if ($(this).children('textarea').length > 0) {
          $(this).addClass('fieldset_textarea');
        }
      });

      function checkInput() {
        $('.jsMaskFormControl .form_control').each(function () {
          if (!$(this).val() == '') {
            $(this).parents('fieldset').addClass('has_text').find('.label_top').addClass('stay');
            // $(this).parents('.fieldset_input').find('.jsClearInput').addClass('active');
          } else {
            $(this).parents('fieldset').removeClass('has_text').find('.label_top').removeClass('stay');
            // $(this).parents('.fieldset_input').find('.jsClearInput').removeClass('active');
          }
        });
      }

      checkInput();

      $('.jsMaskFormControl .form_control').on('change blur', function () {
        if (!$(this).val() == '') {
          $(this).parents('fieldset').addClass('has_text').find('.label_top').addClass('stay');
        } else {
          $(this).parents('fieldset').removeClass('has_text').find('.label_top').removeClass('stay');
        }
      });

      $('fieldset input.form_control').on('blur keyup', function () {
        if ($(this).val() != '') {
          $(this).parents('.fieldset_input').find('.jsClearInput').addClass('active');
        } else {
          $(this).parents('.fieldset_input').find('.jsClearInput').removeClass('active');
        }
      });

      $(document).on('click', '.jsClearInput', function () {
        $(this).parents('fieldset').find('.jsClearInput').removeClass('active');
        $(this).parents('fieldset').find('input').val('').focus();
      });
    }

  };

  $(document).ready(app.init());

  app.windowLoad();
})(jQuery);