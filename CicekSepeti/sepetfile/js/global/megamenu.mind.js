var burgerBtn = document.getElementById("burgerBtn"), mainWrapper = document.getElementById("mainWrapper"), btnContainer = document.getElementById("mainMenu"), searchBtn = document.getElementById("searchBtn"), searchFrom = document.getElementById("searchForm"), menuBtns = btnContainer.getElementsByClassName("o-megaMenu__item--link"), backBtns = btnContainer.getElementsByClassName("o-subMenuContent__title"); function searchFormFnc(e) { searchFrom.classList.toggle("d-none"), e.classList.contains("cmi-search") ? (e.classList.remove("cmi-search"), e.classList.add("cmi-close")) : (e.classList.remove("cmi-close"), e.classList.add("cmi-search")) } searchBtn.addEventListener("click", function () { searchFormFnc(this) }, !1), burgerBtn.addEventListener("click", function () { mainWrapper.classList.contains("active") ? (mainWrapper.classList.remove("active"), mainWrapper.classList.add("passive"), setTimeout(function () { mainWrapper.classList.remove("passive") }, 300)) : (mainWrapper.classList.remove("passive"), mainWrapper.classList.add("active")) }, !1); for (var i = 0; i < menuBtns.length; i++) menuBtns[i].addEventListener("touchend", function (e) { var t = document.querySelectorAll(".o-subMenuContent"); for (x = 0; x < t.length; x++) t[x].classList.remove("active"); e.target.nextElementSibling.classList.add("active") }); for (i = 0; i < backBtns.length; i++) backBtns[i].addEventListener("touchend", function (e) { var t = document.querySelectorAll(".o-subMenuContent"); for (x = 0; x < t.length; x++) t[x].classList.remove("active") }); var menuSticky = document.getElementById("mainMenu"), sticky = menuSticky.offsetTop; function stickyMenuFn() { window.pageYOffset > sticky ? menuSticky.classList.add("-fixed") : menuSticky.classList.remove("-fixed") }