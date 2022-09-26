$(document).ready(()=>{
    $('.fixed-nav-container').prepend(`
        <nav class="hero-nav position-relative container mx-auto px-0">
          <ul class="nav w-100 list-unstyled align-items-center p-0">
            <li class="hero-nav__item"><a href="/"><img class="hero-nav__logo" src="./img/logo.png" change-src-onscroll="./img/logo.png" alt="our logo"></a><!-- Don't remove this empty span --><span class="mx-2"></span></li>
            <li javascript-language-selector="" class="hero-nav__item hero-nav__item--with-dropdown hero-nav__item--dropdown-right hero-nav__item--lg-dropdown-left mx-3 mx-lg-2 flex-grow-1 flex-lg-grow-0 d-flex justify-content-end"><span class="hero-nav__link" tabindex="1" role="button"><span class="mr-2"><img class="language-image" width="22px" src="https://app.frontendor.com/assets/ui-library/Blocks/blocks__assets/images/flags/us.png"></span><svg class="hero-nav__item-chevron bi bi-chevron-down" width=".8em" height=".8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg></span>
              <div class="hero-nav__dropdown dropdown dropdown--of-1-columns dropdown--language-selector dropdown--important p-3">
                <div class="row flex-wrap">
                  <div class="col-lg-12">
                    <!-- Uncomment this to add a title to the dropdown list -->
                    <!-- <span class="dropdown__title">SECURITY</span> -->
                    <div class="dropdown__link dropdown__link--selected align-items-center">
                      <div><img width="24px" src="https://app.frontendor.com/assets/ui-library/Blocks/blocks__assets/images/flags/us.png"></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                      <div class="dropdown__item"><span class="dropdown__item-title">English (US)</span></div>
                    </div>
                    <div class="dropdown__link align-items-center">
                      <div><img width="24px" src="https://app.frontendor.com/assets/ui-library/Blocks/blocks__assets/images/flags/fr.png"></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                      <div class="dropdown__item"><span class="dropdown__item-title">Française</span></div>
                    </div>
                    <div class="dropdown__link align-items-center">
                      <div><img width="24px" src="https://app.frontendor.com/assets/ui-library/Blocks/blocks__assets/images/flags/dz.png"></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                      <div class="dropdown__item text-right"><span class="dropdown__item-title">العربية</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li id="hero-menu" class="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu">
              <ul class="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
                <li class="flex-grow-1">
                  <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                    <li class="flex-grow-1">
                      <ul class="nav nav--lg-side flex-column-reverse flex-lg-row-reverse list-unstyled align-items-center p-0">
                        <li class="hero-nav__item"><a href="#contact" class="btn btn-primary">Связаться</a></li>
                      </ul>
                    </li>
                    <li class="hero-nav__item"><a href="./about.html" class="hero-nav__link">О себе</a></li>
                    <li class="hero-nav__item hero-nav__item--with-dropdown"><span class="hero-nav__link" tabindex="1" role="button"><span class="flex-grow-1 mr-2">Для педагогов</span><svg class="hero-nav__item-chevron bi bi-chevron-down" width=".8em" height=".8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                      </svg></span>
                    <div class="hero-nav__dropdown dropdown dropdown--of-1-columns">
                      <div class="row flex-wrap">
                        <div class="col-lg-12"><span class="dropdown__title mt-0">Для педагогов</span>
                        <a href="./ber-teh.html" target="_blank" class="dropdown__link">
                            <div><span class="dropdown__icon"><i class="fas fa-globe"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                            <div class="dropdown__item"><span class="dropdown__item-title">Бережливые технологии</span>
                              <p class="dropdown__item-description">БЕРЕЖЛИВЫЕ ТЕХНОЛОГИИ В КАБИНЕТЕ МУЗЫКАЛЬНОГО РУКОВОДИТЕЛЯ..</p>
                            </div>
                        </a>
 
                        <a href="./scenarii.html" class="dropdown__link">
                            <div><span class="dropdown__icon"><i class="fas fa-pen"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                            <div class="dropdown__item"><span class="dropdown__item-title">Сценарии</span>
                              <p class="dropdown__item-description">Build a beautiful landing page by copy-paste.</p>
                            </div>
                        </a>
                        <a href="#" class="dropdown__link">
                            <div><span class="dropdown__icon"><i class="fas fa-pen"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                            <div class="dropdown__item"><span class="dropdown__item-title">Танцы на все случаи</span>
                              <p class="dropdown__item-description">Build a beautiful landing page by copy-paste.</p>
                            </div>
                        </a>
                        <a href="#" class="dropdown__link">
                            <div><span class="dropdown__icon"><i class="fas fa-pen"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                            <div class="dropdown__item"><span class="dropdown__item-title">Документация музыкального руководителя</span>
                              <p class="dropdown__item-description">Build a beautiful landing page by copy-paste.</p>
                            </div>
                        </a>
                      </div>
                    </div>
                    </li>
                    <li class="hero-nav__item hero-nav__item--with-dropdown"><span class="hero-nav__link" tabindex="1" role="button"><span class="flex-grow-1 mr-2">Инновационная деятельность</span><svg class="hero-nav__item-chevron bi bi-chevron-down" width=".8em" height=".8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                      </svg></span>
                    <div class="hero-nav__dropdown dropdown dropdown--of-1-columns">
                      <div class="row flex-wrap">
                        <div class="col-lg-12"><span class="dropdown__title mt-0">Инновационная деятельность</span>
                          <a href="inov_muz.html" target="_blank" class="dropdown__link">
                            <div><span class="dropdown__icon"><i class="fas fa-globe"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                            <div class="dropdown__item"><span class="dropdown__item-title">Музыкотерапия</span>
                              <p class="dropdown__item-description">Музыкотерапия – важная составляющая музыкально-оздоровительной работы ДОУ</p>
                            </div>
                          </a><a href="./kinozalogiya.html" class="dropdown__link">
                            <div><span class="dropdown__icon"><i class="fas fa-pen"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                            <div class="dropdown__item"><span class="dropdown__item-title">Кинезиология</span>
                              <p class="dropdown__item-description">КИНЕЗИОЛОГИЧЕСКИЕ ПРИЕМЫ В РАБОТЕ С ДЕТЬМИ НА МУЗЫКАЛЬНЫХ ЗАНЯТИЯХ В ДОУ.</p>
                            </div>
                          </a>
                      </div>
                    </div>
                    </li>
                    <li class="hero-nav__item hero-nav__item--with-dropdown"><span class="hero-nav__link" tabindex="1" role="button"><span class="flex-grow-1 mr-2">Для родителей</span><svg class="hero-nav__item-chevron bi bi-chevron-down" width=".8em" height=".8em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                        </svg></span>
                      <div class="hero-nav__dropdown dropdown dropdown--of-1-columns">
                        <div class="row flex-wrap">
                          <div class="col-lg-12"><span class="dropdown__title mt-0">MARKETING PRODUCTS</span><a href="https://google.com" target="_blank" class="dropdown__link">
                              <div><span class="dropdown__icon"><i class="fas fa-globe"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                              <div class="dropdown__item"><span class="dropdown__item-title">Играем дома</span>
                                <p class="dropdown__item-description">It's time to write a sales copy for your landing page for FREE.</p>
                              </div>
                            </a><a href="#" class="dropdown__link">
                              <div><span class="dropdown__icon"><i class="fas fa-pen"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                              <div class="dropdown__item"><span class="dropdown__item-title">Важно знать</span>
                                <p class="dropdown__item-description">Build a beautiful landing page by copy-paste.</p>
                              </div>
                            </a><span class="dropdown__title mt-0">DESIGN PRODUCTS</span><a href="#" class="dropdown__link">
                              <div><span class="dropdown__icon"><i class="fas fa-bed"></i></span></div><!-- Don't remove this empty "span" --><span class="mx-2"></span><!-- ------------------------------ -->
                              <div class="dropdown__item"><span class="dropdown__item-title">Идеи для домашних праздников</span>
                                <p class="dropdown__item-description">The easiest way to work with HTML from your browser.</p>
                              </div>
                            </a></div>
                        </div>
                      </div>
                    </li>
                    <li class="hero-nav__item"><a href="./index.html" class="hero-nav__link">Главная</a></li>
                  </ul>
                </li>
              </ul><button close-nav-menu="" class="ft-menu__close-btn animated"><svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"></path>
                  <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"></path>
                </svg></button>
            </li>
            <li class="hero-nav__item d-lg-none d-flex flex-row-reverse"><button open-nav-menu="" class="text-center px-2"><i class="fas fa-bars"></i></button></li>
          </ul>
        </nav>`)



    var showDropdown = function(e) {
        e.currentTarget.classList.add("hero-nav__item--show-dropdown")
      },
      hideDropdown = function(e) {
        e.currentTarget.classList.remove("hero-nav__item--show-dropdown")
      },
      toggleDropdown = function(e) {
        e.currentTarget.classList.toggle("hero-nav__item--show-dropdown")
      };
  
    function setupDropdowns(n) {
      document.querySelectorAll(".hero-nav__item--with-dropdown").forEach(function(e) {
        var o, t;
        n.matches ? ((o = e.classList).contains("hero-nav__item--dropdown-left") && o.contains("hero-nav__item--dropdown-right") || (t = e.getBoundingClientRect().width, e.querySelector(".dropdown").style.transform = "translateX(calc(-50% + " + t / 2 + "px))"), e.addEventListener("mouseenter", showDropdown), e.addEventListener("mouseleave", hideDropdown), e.querySelector(".hero-nav__link").removeEventListener("click", toggleDropdown)) : (e.removeEventListener("mouseenter", showDropdown), e.removeEventListener("mouseleave", hideDropdown), e.querySelector(".dropdown").style.transform = "", e.addEventListener("click", toggleDropdown))
      })
    }
    var mediaQuery = window.matchMedia("(min-width: 992px)");
    setupDropdowns(mediaQuery), mediaQuery.addListener(function(e) {
      var o;
      setupDropdowns(e), e.matches && ((o = document.querySelector("#hero-menu")).style.height = "", bodyScrollLock.unlock(o))
    });
    var heroMenu = document.querySelector("#hero-menu");
  
    function closeMenuAndGoTo(o) {
      document.querySelector("#hero-menu").classList.toggle("ft-menu--js-show");
      var e = document.querySelector("#hero-menu");
      if (e.style.height = "", bodyScrollLock.unlock(e), "#" === o || !document.querySelector(o)) return !1;
      setTimeout(function() {
        var e = document.querySelector(o);
        window.scrollTo({
          top: e.getBoundingClientRect().top,
          behavior: "smooth"
        })
      }, 250)
    }
    document.querySelector("[close-nav-menu]").onclick = function(e) {
      heroMenu.classList.toggle("ft-menu--js-show"), bodyScrollLock.unlock(heroMenu)
    }, document.querySelector("[open-nav-menu]").onclick = function(e) {
      heroMenu.classList.toggle("ft-menu--js-show"), heroMenu.style.height = window.innerHeight + "px", bodyScrollLock.lock(heroMenu)
    }, document.querySelector("#hero-menu").querySelectorAll("[href*='#']").forEach(function(o) {
      o.onclick = function(e) {
        e.preventDefault(), closeMenuAndGoTo(o.getAttribute("href"))
      }
    });
    var nav = document.querySelector(".hero-nav");
    window.onscroll = function(e) {
      var o = document.querySelector("[change-src-onscroll]");
      window.scrollY > nav.getBoundingClientRect().height ? (nav.classList.contains("hero-nav--is-sticky") || (window.logoSrc = o.getAttribute("src"), o.setAttribute("src", o.getAttribute("change-src-onscroll")), o.setAttribute("change-src-onscroll", logoSrc)), nav.classList.add("hero-nav--is-sticky")) : 0 === window.scrollY && (nav.classList.contains("hero-nav--is-sticky") && (window.logoSrc = o.getAttribute("src"), o.setAttribute("src", o.getAttribute("change-src-onscroll")), o.setAttribute("change-src-onscroll", logoSrc)), nav.classList.remove("hero-nav--is-sticky"))
    };
    var languageDropdown = document.querySelector("[javascript-language-selector]");
    languageDropdown.onclick = function(e) {
      e.target.classList.contains("dropdown__link") && (languageDropdown.querySelector(".dropdown__link--selected").classList.remove("dropdown__link--selected"), e.target.classList.add("dropdown__link--selected"), document.querySelector(".language-image").setAttribute("src", e.target.querySelector("img").getAttribute("src")))
    }



    $('.block-41.py-5').append(`
    
  <div class="container">
    <div class="row px-2">
      <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0"><img class="block-41__logo mb-3" src="./img/logo.png">
        <p class="block-41__brand-story mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
        <ul class="block-41__links-list list-unstyled p-0">
          <li class="block-41__li-heading">Product</li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Entreprise</a></li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Affiliate</a></li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Contact Sales</a></li>
        </ul>
      </div>
      <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
        <ul class="block-41__links-list list-unstyled p-0">
          <li class="block-41__li-heading">Services</li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Entreprise</a></li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Affiliate</a></li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Contact Sales</a></li>
        </ul>
      </div>
      <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
        <ul class="block-41__links-list list-unstyled p-0">
          <li class="block-41__li-heading">Community</li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Entreprise</a></li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Affiliate</a></li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Contact Sales</a></li>
        </ul>
      </div>
      <div class="col-md-3 col-lg-2 mb-sm-4 mb-lg-0">
        <ul class="block-41__links-list list-unstyled p-0">
          <li class="block-41__li-heading">Solutions</li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Entreprise</a></li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Affiliate</a></li>
          <li class="block-41__li"><a href="#!" class="block-41__li-link">Contact Sales</a></li>
        </ul>
      </div>
    </div>
  </div>
  <hr class="block-41__divider">
  <div class="container">
    <div class="row px-2">
      <div class="flex-grow-1">
        <ul class="block-41__extra-links d-flex list-unstyled p-0">
          <li class="mx-2"><a href="#!" class="block-41__extra-link m-0"><i class="fab fa-twitter"></i></a></li>
          <li class="mx-2"><a href="#!" class="block-41__extra-link m-0"><i class="fab fa-instagram"></i></a></li>
          <li class="mx-2"><a href="#!" class="block-41__extra-link m-0"><i class="fas fa-envelope"></i></a></li>
        </ul>
      </div>
      <p class="block-41__copyrights">© 2022 esergeevna.github.io. All Rights Reserved.</p>
    </div>
  </div>
    `)
})

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});