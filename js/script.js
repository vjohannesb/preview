const hamburger=document.getElementsByClassName("hamburger")[0],dropdownMenu=document.getElementById("dropdown-nav"),langSwitch=document.getElementById("lang-switch"),fixedMenu=document.getElementById("fixed-menu"),showFixedMenu=225;let scrollTimeout=!1;function setLanguage(e){switch(e){case"en":document.getElementsByName("home").forEach(e=>e.innerText="Home"),document.getElementsByName("services").forEach(e=>e.innerText="Services"),document.getElementsByName("about-us").forEach(e=>e.innerText="About us"),document.getElementsByName("contact").forEach(e=>e.innerText="Contact us");break;case"sv":document.getElementsByName("home").forEach(e=>e.innerText="Hem"),document.getElementsByName("services").forEach(e=>e.innerText="Tj�nster"),document.getElementsByName("about-us").forEach(e=>e.innerText="Om oss"),document.getElementsByName("contact").forEach(e=>e.innerText="Kontakta oss")}}function imageLoaded(e,t){return new Promise(n=>{e.complete?(e.classList.remove("lazy-loading"),n(e)):setTimeout(()=>imageLoaded(e,t),250)})}$(document).ready(function(){$(hamburger).click(()=>{$(dropdownMenu).toggle(400),hamburger.classList.contains("fa-bars")?hamburger.classList.replace("fa-bars","fa-times"):hamburger.classList.replace("fa-times","fa-bars")}),$("#contact-info").hide(),$("#contact-us").on("click",()=>$("#contact-info").toggle(200)),$(".contact-link").each(function(){$(this).on("click",function(){$("#contact-info").is(":hidden")&&$("#contact-info").show(200)})}),window.onscroll=(()=>{window.pageYOffset>225?scrollTimeout||(fixedMenu.classList.replace("unsticky-menu","sticky-menu"),scrollTimeout=!0,setTimeout(()=>{scrollTimeout=!1},500)):fixedMenu.classList.replace("sticky-menu","unsticky-menu")}),lightbox.option({alwaysShowNavOnTouchDevices:!0,albumLabel:"%1 / %2",disableScrolling:!0,fadeDuration:200,imageFadeDuration:0,resizeDuration:100,wrapAround:!0});var e=0,t=$(".my-lightbox .col"),n=Array.from($(t[0]).find(".lazy-img")),o=[Array.from($(t[1]).find(".lazy-img")),Array.from($(t[2]).find(".lazy-img")),Array.from($(t[3]).find(".lazy-img"))],a=n.map((e,t)=>{let n=[e];for(const e of o)t<e.length&&n.push(e[t]);return n}).flat(),c=$(a);console.log(c);c.on("load",function(){if(c.length===e)return;let t=c[e];t.setAttribute("src",t.getAttribute("data-src")),imageLoaded(t,e).then(e=>console.log(e)),e++})});