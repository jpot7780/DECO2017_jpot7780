import Navigation from './navigation.js';
import './tasklist';
import './music';
import './timer';
import './stopwatch';
// import './dictionary';

const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

var nav = new Navigation(links, pages);
nav.getLinks();

nav.links.forEach(function(link){
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId);
    })
})

const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

var subNav = new Navigation(subLinks, subPages);

subNav.links.forEach((link) => {
    link.addEventListener('click', function () {
        let pageId = subNav.getHash(link);
        subNav.setPage(pageId);
    })
})

/* Custom Dragula JS */
dragula([
    document.getElementById("to-do"),
    document.getElementById("doing"),
    document.getElementById("done"),
  ]);
  removeOnSpill: false
    .on("drag", function(el) {
      el.className.replace("ex-moved", "");
    })
    .on("drop", function(el) {
      el.className += "ex-moved";
    })
    .on("over", function(el, container) {
      container.className += "ex-over";
    })
    .on("out", function(el, container) {
      container.className.replace("ex-over", "");
    });

