/*! 160368 */!function(e){let n="www.microsoft.com"!==window.location.hostname,i="https://go.microsoft.com/fwlink/p/?LinkID=",t={HERO:".highlight",ME_CONTROL_SIGN_IN:'#mectrl_main_trigger[href*="SignIn"]',SIGN_IN_LINK:'a[data-bi-bhvr="100"]',SIGN_UP_LINK:'a[data-bi-bhvr="210"]',UHF_SIGN_UP:"#c_shellmenu_signupforfree"},o,r=0,s;function a(){let e=document.querySelector(t.ME_CONTROL_SIGN_IN),i=document.querySelector(t.UHF_SIGN_UP);e||e&&i?(o.signIn&&e.setAttribute("href",o.signIn),o.signUp&&i.setAttribute("href",o.signUp),clearInterval(s),n&&console.log("UHF sign-in override loaded after "+r+" iterations.")):r>40&&(clearInterval(s),n&&console.log("UHF sign-in override skipped after "+r+" iterations.")),r++}function l(){(o=function o(){let r=document.querySelector(t.HERO),s,a;if(r){let l=r.querySelector(t.SIGN_IN_LINK),g=r.querySelector(t.SIGN_UP_LINK);l?s=l.getAttribute("href"):n&&console.log("No hero sign in link found."),g?a=g.getAttribute("href"):n&&console.log("No hero sign up link found.")}else n&&console.log("No hero found.");if((!s||!a)&&e.conditionalFwLinks)for(let c=0,I=e.conditionalFwLinks.length;c<I;c++){let f=e.conditionalFwLinks[c];f.pathTest.test(window.location.pathname)&&(f.signInFwLink&&!s&&(s=i+f.signInFwLink),f.signUpFwLink&&!a&&(a=i+f.signUpFwLink))}if(!s&&e.signInFwLink&&(s=i+e.signInFwLink),!s&&!a)return null;{let d={};return s&&(d.signIn=s),a&&(d.signUp=a),d}}())&&(s=setInterval(a,250)),[...document.querySelectorAll("main a[data-bi-tags]")].forEach(e=>{try{let n=JSON.parse(e.dataset.biTags),i=function e(n,i){let t=i.toLowerCase();return n[Object.keys(n).find(e=>e.toLowerCase()===t)]}(n,"bilinkname");i&&(e.dataset.biCn=i)}catch(t){console.error(t)}})}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)}({conditionalFwLinks:[{pathTest:/teams-for-home(?:\/[^\/\s]+)?$/i,signInFwLink:"2148766",signUpFwLink:"2163566",m365SignInFwLink:"2111487"}],signInfwLink:"873020&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn"});
/*! 183044 */try{(()=>{"use strict";const t="[data-mount='multi-feature-vertical-tab'] .lazyload",n=new CustomEvent("resize");function c(){window.dispatchEvent(n)}!function(){const n=document.querySelectorAll(t);n.length&&n.forEach(t=>t.onload=c)}()})()}catch{}
/*! 154450 */!function(){if(!window.location.pathname.includes("microsoft-365/microsoft-365-for-existing-subscribers"))return;function e(){const e=document.querySelector("#c-uhf-nav-cta");e&&(e.style.display="none")}"complete"===document.readyState||"interactive"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();
/*! 190578 */!function(){const e=window.location.pathname,t=".root .universalfooter",o=`${t} #uhf-footer`,c=`${o} .c-uhff-base`,n=`${o} .c-uhff-nav .c-heading-4, .c-uhff-nav a.c-uhff-link`,u=`${o} .c-uhff-base>a.c-uhff-link.c-uhff-lang-selector`,a=`${c} ul.c-list.f-bare`,l="#191919",r="text-light";function d(){e.includes("mixed-reality/windows-mixed-reality")&&(function(){const e=document.querySelector(t);e&&(e.style.backgroundColor=l);const n=document.querySelector(o);n&&(n.style.backgroundColor=l);const u=document.querySelector(c);u&&(u.style.backgroundColor=l)}(),function(){const e=document.querySelectorAll(n);e&&e.length>0&&e.forEach(e=>e.classList.add(r));const t=document.querySelector(u);t&&t.classList.add(r);const o=document.querySelector(a);o&&o.classList.add(r)}())}"interactive"===document.readyState||"complete"===document.readyState?d():document.addEventListener("DOMContentLoaded",d)}();
/*! ?????? */!function(a){if(window.location.pathname.indexOf("/microsoft-365/onedrive")>-1){function b(){let b=document.querySelector(h);b?(b.setAttribute("href",e+(a.fwLink?a.fwLink:a.pageFwLinks[j])),clearInterval(k),d&&console.log("UHF sign-in override loaded after "+l+" iterations.")):l>g&&(clearInterval(k),d&&console.log("UHF sign-in override skipped after "+l+" iterations.")),l++}function c(){(a.fwLink||j in a.pageFwLinks)&&(k=setInterval(b,f))}const d="www.microsoft.com"!==window.location.hostname,e="https://go.microsoft.com/fwlink/p/?LinkID=",f=250,g=40,h='#mectrl_main_trigger[href*="signin"]',i=window.location.pathname.split("/"),j=i[i.length-1];let k,l=0;"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)}}({fwLink:"2119709"});
/*! 199932 */!function(){if(window.location.pathname.includes("/en-us/security/business/solutions/identity-access")){var e=document.querySelector("#feature-oc61b9 .grid-feature-item-1");e.classList.remove("col-md-6"),e.classList.add("col-md")}}();
/*! 160671 */!function(e){let t="www.microsoft.com"!==window.location.hostname,i="https://go.microsoft.com/fwlink/p/?LinkID=",n=window.location.pathname.split("/"),s=n[n.length-1],o=n.length>2?n[2]:"";0==s.length&&(s=n[n.length-2]);let r=0,a;function l(){let n=document.querySelector('#mectrl_main_trigger[href*="signin" i]');n?(s in e.pageFwLinks?n.setAttribute("href",i+e.pageFwLinks[s]):o in e.siteFwLinks?n.setAttribute("href",i+e.siteFwLinks[o]):n.setAttribute("href",i+e.fwLink),n.setAttribute("target","_blank"),clearInterval(a),t&&console.log("UHF sign-in override loaded after "+r+" iterations.")):r>40&&(clearInterval(a),t&&console.log("UHF sign-in override skipped after "+r+" iterations.")),r++}function g(){var t,i=3e3;let n,r;var g=(t=l,n=void 0!==i?i:10,function(){r&&window.clearTimeout(r),r=window.setTimeout(function(){r=null,t()},n)});(e.fwLink||s in e.pageFwLinks||o in e.siteFwLinks)&&(a=setInterval(l,250),window.addEventListener("resize",g))}"interactive"===document.readyState||"complete"===document.readyState?g():document.addEventListener("DOMContentLoaded",g)}({pageFwLinks:{"online-surveys-polls-quizzes":"2115709"},siteFwLinks:{"windows-365":"2168661"}});
/*! 227522 */setTimeout(()=>{document.querySelectorAll("#feature-oceb69 video.w-100").forEach(e=>{e.setAttribute("loop","true"),e.paused?(e.defaultPlaybackRate=.9,e.play(),e.playbackRate=.9):(e.defaultPlaybackRate=.9,e.playbackRate=.9)})},500);
/*! 233045 */!function(){const t="Learn about the new Bing in Windows and more.";if(-1!==window.location.href.indexOf("https://www.microsoft.com/en-us/ai")){const e=document.querySelector("#alert-uid2b22 a.cta");e&&(e.innerText=t,e.setAttribute("aria-label",t),e.setAttribute("href","https://blogs.windows.com/"))}}();
/*! 232011 */!function(){function e(){document.querySelectorAll("li > [id^='c-shellmenu-hidden-'i]").forEach(function(e){e.parentElement.style="display: none!important;"})}"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();
/*! 237517 */(()=>{let e="d-none",t="d-md-block",o=o=>{let r=o.querySelectorAll(`.card-footer > .${e}.${t}`);r.forEach(o=>{o.classList.remove(e),o.classList.remove(t)});let l=o.querySelectorAll(".card-body");l.forEach(t=>{t.classList.remove("mb-md-g"),t.classList.add("mb-g");let o=t.querySelectorAll(`.${e}.d-sm-block`);o.forEach(t=>{t.classList.remove(e)})})},r=()=>{let e=document.querySelectorAll(".compare-chart");e.forEach(e=>{let t=e.querySelector("thead:not(.position-sticky)"),r=e.querySelector("tfoot");t&&o(t),r&&o(r)})};"complete"===document.readyState||"interactive"===document.readyState?r():document.addEventListener("DOMContentLoaded",r)})();
/*! 240075 */(()=>{function e(e){if(e&&e.length){let t=!1,o=0;for(const c of e){const e=c.firstElementChild;e&&!e.classList.contains("card-header")&&(t=!0,e.style.height="auto",e.offsetHeight>o&&(o=e.offsetHeight))}if(t)for(const t of e){const e=t.firstElementChild;if(e.classList.contains("card-header")){const c=document.createElement("div");c.classList.add("mb-1"),c.style.height=o+"px",t.insertBefore(c,e)}else e.style.height=o+"px"}}}function t(){const t=window.location.search.indexOf("wcmmode")>-1?".cmp-tabs .tab-panel":".cmp-tabs .cmp-tabs__tabpanel",c=document.querySelectorAll(t);for(const t of c.length?c:[document]){e(t.querySelectorAll("table.compare-chart .card"));o(t.querySelectorAll("table.compare-chart thead .card-header"));o(t.querySelectorAll("table.compare-chart tfoot .card-header"));o(t.querySelectorAll("table.compare-chart thead .card-body"));o(t.querySelectorAll("table.compare-chart tfoot .card-body"));o(t.querySelectorAll("table.compare-chart thead .card-footer"));o(t.querySelectorAll("table.compare-chart tfoot .card-footer"))}}function o(e){if(e&&e.length>1){let t=0;for(const t of e)t.style.height="auto",t.style.flexGrow="0",t.style.flexShrink="0",t.style.flexBasis="auto";for(const o of e)o.offsetHeight>t&&(t=o.offsetHeight);if(t>0)for(const o of e)o.style.height=t+"px"}}function c(){setTimeout(function(){t()},500)}function a(){const e=function(e,t){let o,c=void 0!==t?t:10;return function(){o&&window.clearTimeout(o),o=window.setTimeout(function(){o=null,e()},c)}}(t,100);window.addEventListener("resize",e),t(),function(){const e=document.querySelectorAll(".cmp-tabs .tab-group a[data-cmp-hook-tabs]");for(const t of e)t.addEventListener("click",e=>{c()}),t.addEventListener("keydown",e=>{"Enter"!==e.code&&"Space"!==e.code||c()})}()}"complete"===document.readyState||"interactive"===document.readyState?a():document.addEventListener("DOMContentLoaded",a)})();
/*! 252649 */(()=>{let e=window.location.pathname,i=(window.location.hostname,e.split("/")[1]),t=[`/${i}/ai`,`/${i}/ai/dynamics-365-ai`,`/${i}/startups/ai`],n=`.universalheader,.uhf {letter-spacing: normal !important;line-height: 1.5;}body {font-weight: 400;font-size: 0.875rem;line-height: 1rem;letter-spacing: -0.03em; }@media (min-width: 860px) {body {font-size: 1rem;line-height: 1.5rem; } }.display-1 {font-weight: 600;font-size: 2.98625rem;line-height: 4.5rem;letter-spacing: -0.05em; }@media (min-width: 860px) {.display-1 {font-size: 3.76812rem;line-height: 5rem; } }@media (min-width: 1084px) {.display-1 {font-size: 4.76813rem;line-height: 6rem; } }.display-2 {font-weight: 600;font-size: 2.48813rem;line-height: 3rem;letter-spacing: -0.05em; }@media (min-width: 860px) {.display-2 {font-size: 2.815rem;line-height: 3.5rem; } }@media (min-width: 1084px) {.display-2 {font-size: 3.815rem;line-height: 5rem; } }h1,.h1 {font-weight: 600;font-size: 2.07375rem;line-height: 2.5rem;letter-spacing: -0.05em; }@media (min-width: 860px) {h1,.h1 {font-size: 2.30187rem; } }@media (min-width: 1084px) {h1,.h1 {font-size: 3.05187rem;line-height: 4.5rem; } }h2,.h2 {font-weight: 600;font-size: 1.69125rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 1084px) {h2,.h2 {font-size: 2.44125rem;line-height: 3.5rem; } }h3,.h3 {font-weight: 600;font-size: 1.45312rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 1084px) {h3,.h3 {font-size: 1.95312rem;line-height: 2.5rem; } }h4,.h4 {font-weight: 600;font-size: 1.25rem;line-height: 2rem;letter-spacing: -0.05em; }@media (min-width: 860px) {h4,.h4 {line-height: 1.5rem; } }@media (min-width: 1084px) {h4,.h4 {font-size: 1.5625rem;line-height: 2rem; } }h5,.h5 {font-weight: 600;font-size: 1.125rem;line-height: 1.5rem;letter-spacing: -0.03em; }@media (min-width: 860px) {h5,.h5 {font-size: 1rem; } }@media (min-width: 1084px) {h5,.h5 {font-size: 1.25rem;line-height: 1.5rem; } }.lead {font-weight: 400;font-size: 1.5rem;line-height: 1.125rem;letter-spacing: -0.03em; }@media (min-width: 860px) {.lead {font-size: 1rem; } }@media (min-width: 1084px) {.lead {font-size: 1.25rem;line-height: 2rem; } }.base {font-weight: 400;font-size: 0.875rem;line-height: 1rem;letter-spacing: -0.03em; }@media (min-width: 860px) {.base {font-size: 1rem;line-height: 1.5rem; } }.small {font-weight: 400;font-size: 0.875rem;line-height: 1.25rem;letter-spacing: -0.03em; }.x-small {font-weight: 400;font-size: 0.75rem;line-height: 1rem;letter-spacing: -0.03em; }.label-eyebrow {font-weight: 600;font-size: 0.75rem;line-height: 1rem;letter-spacing: 0.08em; }.label-base {font-weight: 600;font-size: 1rem;line-height: 1.5rem; }.label-small {font-weight: 600;font-size: 0.875rem;line-height: 1rem; }.label-x-small {font-weight: 600;font-size: 0.75rem;line-height: 1rem; }.action-trigger,.btn,.cta {letter-spacing: -0.02em; }`,h=e=>t.some(i=>m(e)===i),m=e=>(e=e.replace(".html","")).replace(/\/+$/,""),r=e=>{let i=document.createElement("style");i.setAttribute("id","Static Override 252649"),document.head.appendChild(i),i.appendChild(document.createTextNode(e))},a=()=>!0,$=()=>document.body.classList.contains("reimagine-page"),l=()=>{h(e)&&a()&&!$()&&r(n)};"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*! 252296 */try{(()=>{const{pathname:e,hostname:t}=window.location,o=["ai","startups","startups/ai"],n=["ai_hp"],a=".cmp-tabs .tab-group [data-cmp-hook-tabs='tab']",r=".ow-m365-video",c="video:not([muted])";function i(){(document.querySelectorAll(a)||[]).forEach(e=>{let t="#"+e.getAttribute("aria-controls"),o=document.querySelector(t),n=null!=o?o.querySelectorAll(r):[];if(n!=[]){e.addEventListener("onHide",function(){n.forEach(e=>{var t;(t=e.querySelector(c))&&!t.paused&&t.pause()})})}})}(function(){const a=e.replace(".html","").toLowerCase().split("/").filter(function(e){return""!==e}),r=a[a.length-1]||"",c=a[a.length-2]||"";return!!(0==o.indexOf(r)||1==o.indexOf(r)||o.indexOf(c+"/"+r)>-1||n.includes(r)&&"sites-author.adobeppe.microsoft.com"===t)})()&&("interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i,!1))})()}catch(e){console.log(e)}
/*! 254514 */(()=>{let e=window.location.pathname,t=(window.location.hostname,{TABS:".tabs.aem-GridColumn.aem-GridColumn--default--12[data-component-id='15172cf55fd198c73e128a7ebd647612']",BACK_TO_TAB:".btn.btn-link.sr-only-focusable"}),a=["/ai_hp","/ai"],l=["mb-4","mt-n5","mt-lg-n6","mb-lg-5","d-flex","mw-fit-content"],n=e=>a.some(t=>o(e).indexOf(t)>0),o=e=>(e=e.replace(".html","")).replace(/\/+$/,""),d=()=>{let e=document.querySelectorAll(t.TABS);for(let a of e){let n=a.querySelector(t.BACK_TO_TAB);n&&n.classList.add(...l)}},m=()=>!0,c=()=>{n(e)&&m()&&d()};"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*! 267416 */(()=>{let e=()=>{let e=["mx-ng","mx-md-0"];document.querySelectorAll('.aem-Grid>.feature [data-mount="m365-feature"] .card').forEach(t=>t.classList.remove(...e))};"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*! 268589 */(()=>{let t=window.location.origin,e=window.location.pathname,o=e.split("/")[1],c="/"+o,r=e.replace(c,"");function s(){return"https://azure.microsoft.com"===t&&null!==r.match(/^\/products/)}function i(){if(!s())return;let t=['[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ISO?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_csa?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_itar?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_cjis?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/security_hipaa?"]','[data-srcset^="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/IRS?"]'];var e=null;for(let o=0;o<t.length;o++){let c=t[o];if(e=document.querySelector(c))break}!function t(e){if(!e)return;let o=e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;if(!o.classList.contains("col"))return;let c=o.parentNode;c.classList.contains("row","row-cols-md-3")&&(o.style.display="none",c.classList.add("justify-content-center"))}(e)}"interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i)})();
/*! 270602 */(()=>{const t=()=>{document.location.pathname.indexOf("windows-365/frontline")>0&&setTimeout(function(){var t=document.querySelectorAll(".oc-sku-list-table-component .sr-only.oc-list-price");if(t&&t.length>0)for(var e=0;e<t.length;e++){var n=t[e],o=n.nextElementSibling;o&&o.classList.contains("oc-list-price")&&(o.textContent=n.textContent,n.remove())}},1e3)};"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*! 282219 */(()=>{let[e,t]=[window.location.hostname,window.location.pathname],o="/products/ai-services/cognitive-search",i=document.querySelectorAll('.ow-m365-video[data-video-type="inline"] .ow-m365-video-player-ctn:not([data-is-initialized="true"])'),n=function(){let e=document.createElement("script");e.src="https://azure.microsoft.com/etc.clientlibs/onecloud/components/content/onecloud-player/v1/onecloud-player/clientlibs/site.min.ACSHASH1602c90e606d7c8626641fad69febea8.js",document.body.appendChild(e)};"azure.microsoft.com"===e&&(t.endsWith(o)||t.endsWith(o+"/"))&&i.length&&n()})();
/*! 275018 288521 Fix horizontal scroll issue with tables*/(()=>{const pageScope={"www.microsoft.com":{},previews:true};const CUSTOM_STYLE=`
      @media (max-width: 560px) {
        [data-component-id="b77a3c59aec694da566e0bb18c2d7e26"] {
            overflow: auto;
        }
      }
    `;function run(){if(!window.SOUtil.pageIsInScope(pageScope)){return}document.body.insertAdjacentHTML("beforeend",'<style id="static-override-275018">'+CUSTOM_STYLE+"</style>")}if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 288501 */(()=>{let e=`
        @media (max-width: 560px) {
            .SO-288501  {
                display: flex !important;
                flex-direction: column-reverse !important;
            }
        
            .SO-288501 .carousel-controls {
                position: relative !important;
                transform: translateX(0) !important;
                left: 0 !important;
                bottom: 0 !important;
                display: grid !important;
                grid-template-rows: repeat(1, 1fr);
                grid-template-columns: repeat(2, 1fr);
            }
            
            .SO-288501 .carousel-controls ol.carousel-indicators {
                flex-wrap: wrap;
                grid-row: 1;
                grid-column-start: 1;
                grid-column-end: 3;
            }
            
            .SO-288501 .carousel-controls .carousel-control-prev {
                grid-row: 2;
                grid-column: 1;
            }
            
            .SO-288501 .carousel-controls .carousel-control-next {
                grid-row: 2;
                grid-column: 2;
                margin-left: auto;
            }
        }
    `;function t(){let t=window.location.href;if(t.includes("https://azure.microsoft.com")&&t.includes("solutions/industries/discrete-manufacturing/iot")){document.body.insertAdjacentHTML("beforeend",'<style id="static-override-286152">'+e+"</style>");document.querySelector("#sneakpeekcontentcardscarousel-uide0e6").querySelector("section div.carousel.slide.carousel-sneak-peek div").classList.add("SO-288501")}}"interactive"===document.readyState||"complete"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*!288523 */(()=>{let o=["/microsoft-365/outlook/outlook-for-mac"],a=window.location.pathname,t=n(a),r=`
.material-color-dark.heading-bg-color-layout-container-uid32fd [data-component-id="6bcfe650a6c8d0d6861d5c2318eb410c"] [data-mount="click-group"] button{
  color: #fff !important;
}
.material-color-dark.heading-bg-color-layout-container-uida6fa .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-layout-container-uid58414 .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .text-primary {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .ms-rte-link {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .link-group .cta {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] .link-group .cta {
  color: #fff !important;
}
.material-color-dark.heading-bg-color-tabs [data-component-id="7d035e44732558122f71f786dbc90344"] [data-mount="click-group"] a {
  color: #fff !important;
}
.material-color-dark a.btn-link.sr-only-focusable {
  color: #fff !important;
}
[data-component-id="681246136dd91ef8d8438942a2cc9102"] .btn.btn-link {
  color: #fff !important;
}
[data-component-id="681246136dd91ef8d8438942a2cc9102"] .btn.btn-link.inactive {
  color: #757575 !important;
}
.material-color-dark [data-component-id="5aae1cc391ba1be81238febb88e2ef7b"] .superscript {
  color: #fff !important;
}

`;function e(){return o.some(o=>t.endsWith(o))}function n(o){return o.replace(/\/+$/,"")}function c(){e()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-288523">'+r+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!288510*/(()=>{const e=".horizontal-nav a.bg-transparent",t=()=>{document.querySelectorAll(e).forEach(e=>{e.classList.remove("bg-transparent")})};"complete"===document.readyState||"interactive"===document.readyState?t():document.addEventListener("DOMContentLoaded",t)})();
/*!288704*/(()=>{function e(){let e=document.querySelector("#oc-contact-sales");if(e){let t=e.querySelectorAll("span.btn.glyph-prepend.btn-glyph-only");t.forEach(e=>{e.setAttribute("aria-hidden","true")})}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*! 288993 */(()=>{let e=window.location.origin,t="https://sites-author.adobeprod.microsoft.com",r=window.location.pathname,n=r.split("/")[1],o="/"+n,a=r.replace(o,"");function i(){var e,t=document.querySelector(".carousel__controls"),r=document.querySelector(".carousel__arrow-next"),n=document.querySelector(".carousel__arrow-prev"),o=document.querySelectorAll(".carousel__indicators-item"),a=o.length,i=document.createElement("span");i.setAttribute("class","sr-only"),i.setAttribute("aria-live","polite"),t&&t.appendChild(i);for(var u=0;u<o.length;u++)!function(t){let r=o[t];r.setAttribute("role","button");var n=document.createElement("span");n.setAttribute("class","sr-only"),n.innerHTML="Slide "+(t+1),r.appendChild(n),0===t&&(e=r,r.setAttribute("aria-current","true")),r.addEventListener("click",function(){e.removeAttribute("aria-current"),o[t].setAttribute("aria-current","true"),e=o[t],s(t,a,i)})}(u);null!==r&&null!==n&&(r.addEventListener("click",function(){setTimeout(function(){let e=c(o);s(e,a,i)},1e3)}),n.addEventListener("click",function(){setTimeout(function(){let e=c(o);s(e,a,i)},1e3)}))}function c(e){var t=document.querySelector(".carousel__indicators-item.active");return Array.from(e).indexOf(t)}function s(e,t,r){r.innerHTML="Showing "+(e+1)+" of "+t+" items."}function u(){return e===t&&a.startsWith("/azure/acom/en-us/homepage")||e===t&&a.startsWith("/launches/2023/09/12/october_refresh/content/azure/acom/en-us/homepage")||e===t&&a.startsWith("/azure/acom/en-au/homepage")||"https://sites-author.adobeppe.microsoft.com"===e&&a.startsWith("/azure/acom/en-us/homepage")||"https://azure.microsoft.com"===e&&("/"===a||""===a)}function l(){u()&&i()}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*! 292632 292948 */(()=>{function e(){let e=window.location.hostname,t=window.location.pathname,o=t.split("/").slice(2).join("/");if(["sites-author.adobeprod.microsoft.com","sites-author.adobeppe.microsoft.com","www.microsoft.com"].includes(e)&&["aiforall","aiforall/","copilot","copilot/","microsoft/bade/en-us/aiforall.html","microsoft/bade/en-us/copilot.html","microsoft/bade/en-us/qa-folder/iss_qa/aiforall_test.html"].includes(o.toLowerCase())){(function e(){let t=`
          .media-control.media-control--override::before {
            display: none;
          }
          .media-control.media-control--override::after {
            display: none;
          }
          .media-control.media-control--override:focus {
            outline: 2px dotted;
          }
          .media-control.media-control--override {
            background-color: transparent;
            color: var(--theme-foreground-accent-strong-normal);
            border: 2px solid var(--theme-foreground-accent-strong-normal);
            box-shadow: none;
            height: 32px;
            width: 32px;
          }
          .media-control.media-control--override .glyph-prepend {
            position: unset;
          }
          
          .hero-media.hero-media--featured-xl.hero-media--campaign .html5-video video {
            object-position: 0% 80%;
          }

          [data-component-id="3d6c0c8bbf28ee24fc5733387b814476"].theme-night .tab-panel .media__slot .btn.btn--icon-only {
            --button-color: #2a446f !important;
            --button-border-color: #2a446f !important;
          }
      `,o=document.querySelectorAll('[data-mount="m365-video"] .media-control');if(0!==o.length)for(let a of(document.body.insertAdjacentHTML("beforeend",'<style id="static-override-293120">'+t+"</style>"),o))a.classList.add("btn","btn--icon-only","btn--secondary","media-control--override")})(),function e(){let t=`
      .interactive-demo.theme-night .tabs .tab {
        border-color: var(--theme-border-special-fade) !important;
      }
      .interactive-demo.theme-night .tabs .tab__item {
        background: var(--theme-background-glass-normal);
      }
      .interactive-demo .tabs .active .tab__item {
        background: var(--theme-background-glass-selected);
      }
      .interactive-demo .tabs .tab__item .badge {
        background-color: var(--theme-background-overlay-full);
        var(--theme-border-special-fade);
      }
      .section-master.theme-night .card {
        background: var(--theme-background-glass-normal);
      }
      .interactive-demo.theme-night .tabs .arrow-next {
        --arrow-background-gradient-start-position: 0%;
        --arrow-background-color: #003259;
      }
      .interactive-demo.theme-night .tabs .arrow-prev {
        --arrow-background-gradient-start-position: 0%;
        --arrow-background-color: var(--root-color-blue-black-700);
      }
      .interactive-demo .block-feature .block-feature__paragraph {
        text-align-last: center;
      }
      .section-master--layout-header-horizontal-alignment-center-focus.section-master--layout-header-horizontal-alignment-center.section-master--alignment-center .accordion {
        width: 100%;
      }
      `;document.body.insertAdjacentHTML("beforeend",'<style id="static-override-dark-theme">'+t+"</style>")}();document.querySelectorAll(".statement-banner .block-heading--campaign").forEach(e=>{e.classList.remove("block-heading--size-xl");let t=e.querySelector(".block-heading__title"),o=t.getAttribute("class");t.removeAttribute("class");let a=t.querySelector("[data-oc-token-text]"),r=t.querySelector("h1")||t.querySelector("h2")||t.querySelector("h3")||t.querySelector("h4")||t.querySelector("h5")||t.querySelector("h6");r?r.setAttribute("class",o):a.setAttribute("class",o)});let a=document.querySelectorAll(".interactive-demo .tabs .block-feature");a.forEach(e=>{let t=document.createElement("div");t.classList.add("layout","layout--focus"),t.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)});let r=document.querySelectorAll(".statement-banner .block-heading:not(:has(.text-gradient)");r.forEach(e=>{let t=document.createElement("div");t.classList.add("layout","layout--focus"),t.appendChild(e.cloneNode(!0)),e.parentNode.replaceChild(t,e)});let n=document.querySelector(".statement-banner .block-heading--campaign");n?.classList.add("statement-banner-override-class");let i=document.querySelectorAll(".section-master--layout-header-horizontal-alignment-center-focus");i.forEach(e=>{e.classList.add("section-master--layout-header-horizontal-alignment-center","section-master--alignment-center")})}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!295096*/(()=>{let e=document.querySelectorAll("#oc-contact-sales ul > li > div > button");e.forEach(e=>{"7"!==e.dataset.biBhvr&&(e.dataset.biBhvr="7",e.dataset.biCn+="_Icon")});let t=`#oc-contact-sales ul > li > div > span.glyph-prepend:hover {cursor: default;}`,a=document.createElement("style");a.setAttribute("id","Static Override 295096"),a.appendChild(document.createTextNode(t)),document.head.appendChild(a)})();
/*!295857*/(()=>{let e=window.location.origin,t=window.location.pathname,i=t.split("/")[1],r="/"+i,o=t.replace(r,""),a=["/isv/qa-folder/qa/copilot-for-work","/microsoft-365/copilot-for-work","/microsoft-365/copilot-for-work/"];function n(){for(let t of a)if(o===t)return"https://www.microsoft.com"===e}var l=function(){function e(e){var t=this;e&&e.dataset&&e.dataset.video&&(this.playerContainerElementId=e.getAttribute("id"),this.playerData=JSON.parse(e.dataset.video),this.originalTelemetryDataObject=null,e&&e.dataset&&e.dataset.m&&(this.originalTelemetryDataObject=JSON.parse(e.dataset.m)),this.videoEventsNotBound=!0,this.previousTime=0,this.previousWatchTimePercentage=0,this.playerAPI=function(e){t.videoPlayer=e},this.renderOnePlayer())}return e.prototype.renderOnePlayer=function(){var e=this;window.MsOnePlayer.render(this.playerContainerElementId,this.playerData,function(t){e.playerAPI(t)})},e.prototype.disposeVideoPlayer=function(){this.videoPlayer&&this.videoPlayer.dispose&&this.videoPlayer.dispose()},e}();function s(e){e&&e.length&&e.forEach(function(e){var t=e.querySelector(".ow-m365-video-player-ctn");if(t){var i="m365-video-inline-override-"+d();window&&window.MsOnePlayer&&"true"!==t.dataset.isInitialized&&(t.id=i,new l(t),t.dataset.isInitialized="true")}})}function d(){var e=new Uint32Array(3);return window.crypto.getRandomValues(e),(performance.now().toString(36)+Array.from(e).map(function(e){return e.toString(36)}).join("")).replace(/\./g,"")}function c(){if(!n())return;let e=document.querySelectorAll(".ow-m365-video");e.length&&s(e)}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!296927*/(()=>{function e(){let e=window.location.hostname;["www.microsoft.com","azure.microsoft.com"].includes(e)&&void 0!=document.querySelector(".testimonial-card__content-media .ocr-img")&&function e(){let t=`
.testimonial-card__content-media .ocr-img {
  --image-width: unset;
}
`;document.body.insertAdjacentHTML("beforeend",'<style id="static-override-296927">'+t+"</style>")}()}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!298516*/(()=>{let t=window.location.origin,e=`
.btn.btn--icon-only.btn--sm {
    padding: var(--root-spacing-xs);
}
`;function o(){let t=document.querySelector("body");return t&&t.classList.contains("reimagine-page")}function n(){return"https://www.microsoft.com"===t||"https://azure.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t}function r(){n()&&o()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-298516">'+e+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?r():document.addEventListener("DOMContentLoaded",r)})();
/*!298533*/(()=>{let t=window.location.origin,e=window.location.pathname,o=e.split("/")[1],i="/"+o,r=e.replace(i,""),a=["/microsoft/bade/en-us/copilot.html","/launches/2023/11/16/282257-november-21-2023/content/microsoft/bade/en-us/microsoft-cloud.html"],n=["/copilot","/copilot/","/microsoft-cloud","/microsoft-cloud/"],s=`
.section-master.section-master--override298533 {
    @media (min-width: 860px) {
        height: 100vh;
        max-height: 550px;
        display: flex;
        align-items: center;
    }
    @media (min-width: 1440px) {
        max-height: 800px;
    }
}
`;function d(){for(let e of a)if(r.startsWith(e))return"https://sites-author.adobeprod.microsoft.com"===t}function c(){for(let e of n)if(r===e)return"https://www.microsoft.com"===t}function l(){if(!d()&&!c())return;let t=document.querySelectorAll('[data-mount="m365-video"].section-master__video');for(let e of t)e.classList.add("m365-video--control-top-right"),e.parentElement.classList.add("section-master--override298533");document.body.insertAdjacentHTML("beforeend",'<style id="static-override-298533">'+s+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",l)})();
/*!301626*/(()=>{let e=window.location.origin,t=`
.theme-day {
  --theme-background-background-overlay-fill : var(--root-overlay-day-bg-overlay-fill);
}
.theme-night {
  --theme-background-background-overlay-fill : var(--root-overlay-night-bg-overlay-fill);
}
`;function o(){for(var e=document.querySelectorAll(".carousel__indicators-item__media .media.media--ratio-21-9 .ocr-img.img-fluid.media__asset"),t=0;t<e.length;t++){var o=e[t],r=o.parentElement,a=o.innerHTML;o.remove(),r.innerHTML=a}}function r(){let e=document.querySelector("body");return e&&e.classList.contains("reimagine-page")}function a(){return"https://www.microsoft.com"===e||"https://azure.microsoft.com"===e||"https://sites-author.adobeprod.microsoft.com"===e||"https://sites-author.adobeppe.microsoft.com"===e}function i(){a()&&r()&&(document.body.insertAdjacentHTML("beforeend",'<style id="static-override-301626">'+t+"</style>"),o())}"interactive"===document.readyState||"complete"===document.readyState?i():document.addEventListener("DOMContentLoaded",i)})();
/*!303250*/(()=>{let t=window.location.origin,o=`
.modal--full-screen [data-mount='reimagine-modal'].theme-night .modal-close {
    border-color: #fff;
}
.modal--full-screen [data-mount='reimagine-modal'].theme-night .modal-close .glyph-prepend-cancel {
    color: #fff !important;
}
`;function e(){for(var t=document.querySelectorAll(".media__slot .btn--icon-onlybtn--secondary"),o=0;o<t.length;o++){var e=t[o];e.classList.remove("btn--icon-onlybtn--secondary"),e.classList.add("btn--icon-only","btn--secondary")}}function n(){document.body.insertAdjacentHTML("beforeend",'<style id="static-override-303250">'+o+"</style>")}function r(){let t=document.querySelector("body");return t&&t.classList.contains("reimagine-page")}function a(){return"https://www.microsoft.com"===t||"https://azure.microsoft.com"===t||"https://sites-author.adobeprod.microsoft.com"===t||"https://sites-author.adobeppe.microsoft.com"===t}function c(){a()&&r()&&(e(),n())}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!293492*/(()=>{let o=window.location.origin,t=window.location.pathname,r=t.split("/")[1],e="/"+r,s=t.replace(e,""),c=["/microsoft/bade/en-us/microsoft-365/homepage-b.html","/microsoft/bade/en-us/microsoft-365/microsoft-365-business.html","/microsoft/bade/en-us/microsoft-365/microsoft-365-enterprise.html","/microsoft/bade/en-us/microsoft-365/copilot-for-work.html","/microsoft/bade/en-us/power-platform.html","/microsoft/bade/en-us/microsoft-365.html"],i=["/microsoft-365/homepage-b","/microsoft-365/homepage-b/","/microsoft-365/microsoft-365-business","/microsoft-365/microsoft-365-business/","/microsoft-365/microsoft-365-enterprise","/microsoft-365/microsoft-365-enterprise/","/microsoft-365/copilot-for-work","/microsoft-365/copilot-for-work/","/power-platform","/power-platform/","/microsoft-365","/microsoft-365/","/power-platform/resources","/power-platform/resources/"],f=["/products/managed-ccf","/products/managed-ccf/"];function m(){for(let t of c)if(s.startsWith(t))return"https://sites-author.adobeprod.microsoft.com"===o}function a(){for(let t of i)if(s===t)return"https://www.microsoft.com"===o}function l(){for(let t of f)if(s===t)return"https://azure.microsoft.com"===o}function n(){if(!m()&&!a()&&!l())return;let o=document.querySelectorAll(".card-grid");for(let t of o){let r=t.querySelectorAll(".card-grid__cards .layout__col");for(let e of r)e.querySelector(".block-feature__paragraph")||(e.style.display="none")}}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})();
/*!304410*/(()=>{function e(){let e="block-feature__eyebrow",t=document.querySelector('[data-component-id="88c73f454d3d7e6b4978837690a0c11d"]');if(t){let a=t.querySelector(".dynamic-content__template .card-grid--disable-card-promo .block-feature__headings");if(a){let n=a.getElementsByClassName(e);if(!n||0==n.length){let d=document.createElement("div");d.className=e;let l=document.createElement("h5");l.className="block-feature__label",l.innerText="Label",d.appendChild(l),a.insertBefore(d,a.firstChild);var r=document.createEvent("Event");r.initEvent("DOMContentLoaded",!0,!0),window.document.dispatchEvent(r)}}}}"interactive"===document.readyState||"complete"===document.readyState?e():document.addEventListener("DOMContentLoaded",e)})();
/*!315749*/(()=>{let t=window.location.origin,e=window.location.pathname,i=e.split("/")[1],o="/"+i,s=e.replace(o,""),r=`
.section-master .section-master__slot .col div.media-block:last-child .media-block__caption {padding-bottom: 0;}
`;function a(){return"https://sites-author.adobeprod.microsoft.com"===t&&s.startsWith("/microsoft/bade/en-us/security/security-insider/")||"https://www.microsoft.com"===t&&s.startsWith("/security/security-insider/")}function c(){a()&&document.body.insertAdjacentHTML("beforeend",'<style id="static-override-315749">'+r+"</style>")}"interactive"===document.readyState||"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)})();
/*!317765*/(()=>{"use strict";(()=>{const t="Success",e=".oc-shared-pricing-data",c="[data-oc-product~='purchase']",r="[data-oc-product~='not-available'] p",o="[data-oc-shared-data='oc-tax-disclaimer'] p",a="[data-oc-shared-data='oc-consumer-tax-disclmr'] p",n="data-oc-product",d="oc-tax-disclaimer",i="oc-consumer-tax-disclmr",u="/etc.clientlibs/onecloud/clientlibs/clientlib-product-pricing.min";function l(){const e=null!==document.querySelector('[data-component-id="3a796505b6c04fa385e30bdb1b3679f7"]'),r=null!==document.querySelector(c);if(!e||!r)return;const o=performance.getEntriesByType("resource").filter(t=>200===t.responseStatus),a=o.some(t=>"script"===t.initiatorType&&t.name.includes(u));o.some(t=>"link"===t.initiatorType&&t.name.includes(u))||function(){const t=document.createElement("style");t.id="static-override-317765",t.textContent='\n            [data-oc-product]:not([data-oc-product*=Success]) > * {\n                display: none;\n            }\n\n            [data-oc-product]:not([data-oc-product*=Success]) [data-oc-product="not-available"],\n            [data-oc-product]:not([data-oc-product*=Success]) [data-oc-product="not-available"] * {\n                display: block !important\n            }\n        ',document.head.appendChild(t)}(),a||(s(),p(),document.addEventListener("onComplete",()=>{document.querySelectorAll("[data-token-text]").forEach(e=>{const c=e.querySelector("[data-oc-product*=purchase][data-oc-product*=main]");if(!c)return;const r=e.querySelectorAll("[data-oc-product*=purchase]:not([data-oc-product*=main])[data-token=m365ProductPrice]");if(!r)return;let o=t;for(const e of r){let c=e.getAttribute(n).split(" ")[1];if(c!==t){o=c;break}}let a=c.getAttribute(n),d=a.split(" ")[2];c.setAttribute(n,a.replace(d,o))}),p(),s()}))}function s(){const t=document.querySelectorAll(c);t&&t.forEach(t=>{const c=t.getAttribute(n).split(" ")[2],u=document.querySelector(e);let l=t.querySelector(o),s=t.querySelector(a),p=t.querySelector(r);u&&(p&&c&&(p.innerHTML=u.getAttribute(c)),l&&(l.innerHTML=u.getAttribute(d)),s&&(s.innerHTML=u.getAttribute(i)))})}function p(){const e=document.querySelectorAll(c);e&&e.forEach(e=>{const c=e.getAttribute(n).split(" ")[2];let d=e.querySelector(o),i=e.querySelector(a),u=e.querySelector(r);c===t?(d&&d.removeAttribute("aria-hidden"),i&&i.removeAttribute("aria-hidden"),u&&u.setAttribute("aria-hidden","true")):(d&&d.setAttribute("aria-hidden","true"),i&&i.setAttribute("aria-hidden","true"),u&&u.removeAttribute("aria-hidden"))})}"interactive"===document.readyState||"complete"===document.readyState?l():document.addEventListener("DOMContentLoaded",()=>l())})()})();
/*!329115*/(()=>{let t=document.querySelectorAll("img.card-img"),e=t=>{if("IMG"!==t.tagName)return!1;let e=t.getAttribute("width")||t.getAttribute("height")||t.naturalWidth||t.naturalHeight;if(!e)return!1;let r=Number.parseInt(e);return!isNaN(r)&&!!(r<100)},r=t=>new Promise((e,r)=>{let a=new MutationObserver((t,r)=>{for(let a of t)if("attributes"===a.type&&"class"===a.attributeName){let i=a.target;i.classList.contains("lazyloaded")&&(r.disconnect(),e())}});a.observe(t,{attributes:!0,attributeFilter:["class"]})}),a=t=>{t.classList.remove("card-img")},i=Array.from(t).filter(e);i.forEach(a);let l=document.querySelectorAll("img.card-img.lazyload, img.card-img.lazyloading");l.forEach(t=>{r(t).then(()=>{e(t)&&a(t)})})})();
/*!340602*/(()=>{let e=window.location.origin,t="https://www.microsoft.com",o="https://sites-author.adobeprod.microsoft.com",a=window.location.pathname,l=a.split("/")[1],i="/"+l,r=a.replace(i,""),c=`
        @media (min-width: 1280px) {
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__label {
                color: var(--root-color-sky-blue-300);
            }
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__title {
                --block-feature-title-color: var(--root-color-sky-blue-50);
            }
            .carousel--type-media-playlist-video .carousel__overlay-content.theme-night .block-feature__paragraph {
                color: var(--root-color-sky-blue-100);
            }
            .carousel--type-media-playlist-video .carousel__controls.theme-night .list-item__content .label-small {
                --fg-val: var(--root-color-sky-blue-300);
            }
            .carousel--type-media-playlist-video .carousel__controls.theme-night  .list-item__content-title {
                --fg-val: var(--root-color-sky-blue-50);
            }
        }

        @media (max-width: 1279.8px) {
            .carousel--type-media-playlist-video .carousel__controls {
                z-index: 1 !important;
            }
        }
    `;function s(){return e===o&&r.startsWith("/microsoft/bade/en-us/copilot/maximize-impact")||e===t&&r.startsWith("/microsoft-copilot/maximize-impact")||e===o&&r.startsWith("/launches/2024/04/26/328153-may-9-2024/content/microsoft/bade/en-us/copilot/ai-get-ready")||e===t&&r.startsWith("/microsoft-copilot/ai-get-ready")}function n(){s()&&(d(),document.body.insertAdjacentHTML("beforeend",'<style id="static-override-340602">'+c+"</style>"))}function d(){let e=document.querySelectorAll(".interactive-demo__tab .tab");e.length&&e.forEach(e=>{e.addEventListener("click",e=>{let t=document.querySelector(".video-js.vjs-playing");if(t){let o=t.querySelector("video");o.pause()}})})}"interactive"===document.readyState||"complete"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)})();
/*!334365*/(()=>{let e={"www.microsoft.com":{markets:["en-us"]},"azure.microsoft.com":{markets:["en-us"]},previews:!0},t=e=>{let t=location.hostname,o=location.pathname,s=document.documentElement.lang.toLowerCase(),a={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[s]},c=a[s]||a.default,n=c.find(e=>-1!==o.indexOf(e)),l=o.replace(`/${n}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),m={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},d=t,u=r(),f=l;if(i){let h=o.replace(/\/content\/launches(\/[^\/]+){4}/g,""),p=Object.keys(m).find(e=>h.startsWith(e));if(d=m[p],!p||!d)return!1;f=h.replace(p,"").replace(`/${n}`,"").replace(".html","")}let w=e[d];return!!(w&&(!w.markets||w.markets.includes(u))&&(!w.paths||w.paths.includes(f)))},r=()=>{let e=document.documentElement.lang.toLowerCase(),t=e.split("-")[0],r=new URLSearchParams(location.search).get("market")?.toLowerCase();return r?`${t}-${r}`:e},o=()=>{document.querySelectorAll(".us-hidden").forEach(e=>{let t=new URL(e.href),r=new URLSearchParams(t.search);r.delete("clcid"),r.delete("culture"),r.delete("country"),t.search=r.toString(),e.href=t.toString()})},s=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&s(o)})();
/*!343666*/(()=>{let e={"www.microsoft.com":{markets:["ar","bg-bg","zh-cn","zh-hk","zh-tw","hr-hr","cs-cz","da-dk","nl-nl","nl-be","en","et-ee","fi-fi","fr-be","fr-ca","fr-fr","fr","fr-ch","de-de","de-at","de-ch","el-gr","he-il","hu-hu","id-id","it-it","ja-jp","ko-kr","lv-lv","lt-lt","nb-no","pl-pl","pt-pt","pt-br","ro-ro","ru-ru","sr-latn-rs","sk-sk","sl-si","es-ar","es-cl","es-co","es","es-mx","es-es","sv-se","th-th","tr-tr","uk-ua","vi-vn"],paths:["/microsoft-365/planner/microsoft-planner-plans-and-pricing"]},previews:!0,marketAware:!1},t=e=>{let t=location.hostname,a=location.pathname,s=document.documentElement.lang.toLowerCase(),o={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[s]},n=o[s]||o.default,l=n.find(e=>-1!==a.indexOf(e)),c=a.replace(`/${l}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),d={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},m=t,p=r(e.marketAware),h=c;if(i){let f=a.replace(/\/content\/launches(\/[^\/]+){4}/g,""),u=Object.keys(d).find(e=>f.startsWith(e));if(m=d[u],!u||!m)return!1;h=f.replace(u,"").replace(`/${l}`,"").replace(".html","")}let w=e[m];return!!(w&&(!w.markets||w.markets.includes(p))&&(!w.paths||w.paths.includes(h)))},r=e=>{let t=document.documentElement.lang.toLowerCase(),r=t.split("-")[0],a=new URLSearchParams(location.search).get("market")?.toLowerCase();return a&&!1!==e?`${r}-${a}`:t},a=()=>{document.querySelectorAll('[data-product-id="CFQ7TTC0HDB1"] .oc-title').forEach(e=>{e.textContent="Planner Plan 1"})},s=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&s(a)})();
/*!345256*/(()=>{let e={"azure.microsoft.com":{},previews:!0},t=e=>{let t=location.hostname,a=location.pathname,o=document.documentElement.lang.toLowerCase(),s={"sr-rs":["sr-rs","sr-latn-rs","sr-cyrl-rs"],default:[o]},n=s[o]||s.default,c=n.find(e=>-1!==a.indexOf(e)),l=a.replace(`/${c}`,"").replace(/\/$/,""),i=e.previews&&("sites-author.adobeprod.microsoft.com"===t||"sites-author.adobeppe.microsoft.com"===t),m={"/content/microsoft/bade":"www.microsoft.com","/content/azure/acom":"azure.microsoft.com"},d=t,p=r(e.marketAware),u=l;if(i){let f=a.replace(/\/content\/launches(\/[^\/]+){4}/g,""),h=Object.keys(m).find(e=>f.startsWith(e));if(d=m[h],!h||!d)return!1;u=f.replace(h,"").replace(`/${c}`,"").replace(".html","")}let w=e[d];return!!(w&&(!w.markets||w.markets.includes(p))&&(!w.paths||w.paths.includes(u)))},r=e=>{let t=document.documentElement.lang.toLowerCase(),r=t.split("-")[0],a=new URLSearchParams(location.search).get("market")?.toLowerCase();return a&&!1!==e?`${r}-${a}`:t},a=()=>{telemetry.appInsightsCore.addTelemetryInitializer(e=>{try{e.ext.web.userConsent=!1}catch(t){console.error(t)}return e})},o=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()};t(e)&&o(a)})();
/*! 351594: Fix issue where sticky table header covers too much of viewport in sku-list-table component */
(()=>{const run=()=>{const stickyTableHeaders=document.querySelectorAll(`.sku-list-table thead.position-sticky`);if(!stickyTableHeaders.length||!mwf?.Sticky){return}stickyTableHeaders.forEach(stickyTableHeader=>{stickyTableHeader.classList.remove("position-sticky","top-0");stickyTableHeader.style.display="table-header-group";const stickyTableHeaderComponent=new mwf.Sticky({el:stickyTableHeader})})};if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 189677 Outlook deeplink support */
(()=>{if(location.pathname.indexOf("/microsoft-365/outlook/")===-1)return;const doLogging=window.location.hostname!=="www.microsoft.com";const emptyString="";const intervalDelay=250;const maxIterations=40;const dogfoodSignInURL="https://outlook-sdf.live.com/mail/";let signInParams={};const dogfoodSignInParams={cobrandid:"ab0455a0-8d03-46b9-b18b-df2f57b9e44c",nlp:"1"};const pageSignInSelector=`
		[href*="LinkID=2092832" i],
		[href*="LinkID=2105311" i],
		[href*="LinkID=2105416" i],
		[href*="LinkID=2125442" i]
	`;const uhfSignInSelector='#mectrl_main_trigger[href*="signin" i]';let iterations=0;let overrideInterval;const pageQueryParams=new URLSearchParams(window.location.search);const signInFWLink="https://go.microsoft.com/fwlink/p/?LinkID=2125442";let signInHref;function debounce(func,delay){let debounceDelay=delay!==undefined?delay:10;let debounceTimeout;return function(){if(debounceTimeout){window.clearTimeout(debounceTimeout)}debounceTimeout=window.setTimeout(function(){debounceTimeout=null;func()},debounceDelay)}}function safeDecodeURIComponent(value){try{return decodeURIComponent(value)}catch(error){if(doLogging){console.log("Outlook deeplink decode failed. Using raw value.")}return value}}function getQueryParamValue(paramName){let normalizedParamName=paramName.toLowerCase();for(const[key,value]of pageQueryParams.entries()){if(key.toLowerCase()===normalizedParamName){return value}}return undefined}function tryUpdateUHFSignInHref(){let uhfSignIn=document.querySelector(uhfSignInSelector);if(uhfSignIn){setSignInHref(uhfSignIn);return true}return false}function doCoherenceOverride(){let shouldClearInterval=false;if(tryUpdateUHFSignInHref()){shouldClearInterval=true;if(doLogging){console.log("Outlook UHF sign-in override loaded after "+iterations+" iterations.")}}else if(iterations>=maxIterations){shouldClearInterval=true;if(doLogging){console.log("Outlook UHF sign-in override skipped after "+iterations+" iterations.")}}if(shouldClearInterval){clearInterval(overrideInterval)}iterations++}function setSignInHref(el){el.setAttribute("href",signInHref)}function run(){overrideInterval=setInterval(doCoherenceOverride,intervalDelay);window.addEventListener("resize",debounce(doCoherenceOverride,3e3));if(signInParams["deeplink"]||isDogfood){Array.prototype.forEach.call(document.querySelectorAll(pageSignInSelector),setSignInHref);if(doLogging){console.log("Outlook page sign-in override loaded.")}}else if(doLogging){console.log("Outlook page sign-in override skipped.")}}const deeplink=getQueryParamValue("deeplink");const sessionId=getQueryParamValue("sessionId");const includeSessionId=localStorage.getItem("testOutlookSessionId")==="true";const isDogfood=getQueryParamValue("sdf")==="1";if(deeplink){signInParams["deeplink"]=safeDecodeURIComponent(deeplink).replace(/^\//,emptyString)}if(includeSessionId&&sessionId){signInParams["sessionId"]=sessionId}if(isDogfood){signInParams={...dogfoodSignInParams,...signInParams}}signInHref=isDogfood?dogfoodSignInURL:signInFWLink;const signInUrl=new URL(signInHref);Object.keys(signInParams).forEach(key=>signInUrl.searchParams.append(key,signInParams[key]));signInHref=signInUrl.href;window.SOUtil.runOnPageLoad(run)})();
/*! 356617 UMPs inside of carousels not correctly sized */
(()=>{const pageScope={"www.microsoft.com":{paths:["/qa-folder/iss_qa/ai-get-ready3","/microsoft-365/business/win-with-copilot"],markets:["en-us"]},previews:true};function updateModalCarouselUMPWidths(){let modalCarousels=document.querySelectorAll(".modal .carousel");modalCarousels.forEach(carousel=>{const hasUMP=carousel.querySelector("universal-media-player");if(hasUMP){const carouselContainer=carousel.querySelector(".carousel__container");const carouselSlides=carousel.querySelectorAll(".carousel__slide");const carouselCMP=carousel.querySelectorAll(".cascade-media-player");if(carouselContainer){carouselContainer.classList.add("w-100")}carouselSlides.forEach(slide=>{slide.classList.add("w-100")});carouselCMP.forEach(cmp=>{cmp.classList.add("w-100")})}})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateModalCarouselUMPWidths)}})();
/*! 356283: Biz Apps trial links in secondary nav "lock" the page. Remove duplicate trial DOM elements for mobile VPs */
(()=>{const pageScope={"www.microsoft.com":{paths:["/power-platform/products/power-apps","/power-platform/products/power-apps/partners","/power-platform/products/power-pages","/dynamics-365/products/customer-insights","/dynamics-365/products/guides","/dynamics-365/products/field-service","/dynamics-365/products/customer-service","/dynamics-365/products/sales","/dynamics-365/products/contact-center"]},previews:true};function removeDuplicateSecondaryNavBAPButton(){let secondaryNavBAPTrialButton=document.querySelector(".secondary-nav .dropdown [new-trial-web-component-trigger]");let secondaryNavBAPTrial=document.querySelector(".secondary-nav .dropdown new-trial");if(secondaryNavBAPTrialButton&&secondaryNavBAPTrial){secondaryNavBAPTrialButton.remove();secondaryNavBAPTrial.remove()}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(removeDuplicateSecondaryNavBAPButton)}})();
/*! 359042/1114852: Windows 365 GPU sku Variable price */
(()=>{const pageScope={"www.microsoft.com":{paths:["/windows-365/enterprise/compare-plans-pricing"]},previews:true};const locContent={ar:"متغير","bg-bg":"Променлива","cs-cz":"Variabilní","da-dk":"Variable","de-at":"Variabel","de-ch":"Variabel","de-de":"Variabel","el-gr":"Μεταβλητή",en:"Variable","en-au":"Variable","en-ca":"Variable","en-gb":"Variable","en-ie":"Variable","en-in":"Variable","en-my":"Variable","en-nz":"Variable","en-sg":"Variable","en-us":"Variable","en-za":"Variable",es:"Variable","es-ar":"Variable","es-cl":"Variable","es-co":"Variable","es-es":"Variable","es-mx":"Variable","et-ee":"Muutuja","fi-fi":"Vaihtelee",fr:"Variable","fr-be":"Variable","fr-ca":"Variable","fr-ch":"Variable","fr-fr":"Variable","he-il":"משתנה","hr-hr":"Promjenjivo","hu-hu":"Változó","id-id":"Variabel","it-it":"Variable","ja-jp":"変動制","ko-kr":"가변","lt-lt":"Priklauso nuo aplinkybių","lv-lv":"Mainīgais","nb-no":"Variable","nl-be":"Variabele","nl-nl":"Variabele","pl-pl":"Różnie","pt-br":"Variável","pt-pt":"Variável","ro-ro":"Variabilă","ru-ru":"Переменная","sk-sk":"Variabilné","sl-si":"Spremenljivo","sr-rs":"Promenljiva","sv-se":"Varierar","th-th":"ตัวแปร","tr-tr":"Değişken","uk-ua":"Змінна","vi-vn":"Biến","zh-cn":"变量","zh-hk":"變數","zh-tw":"變數"};const locale=document.documentElement.lang.toLowerCase();function setSkuPricing(){const priceSelector='.oc-sku-card-w365 [data-product-id="CFQ7TTC0HHS9"][data-sku-id="0050"] .oc-list-price, .oc-sku-card-w365 [data-product-id="CFQ7TTC0HHS9"][data-sku-id="00J1"] .oc-list-price';document.querySelectorAll(priceSelector).forEach(price=>{price.textContent=locContent[locale]||locContent["en-us"];price.setAttribute("data-product-price-override","true")})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(setSkuPricing)}})();
/*!313132/332084 Copilot pricing for annual commitment placement */
(()=>{const targetSelector="[data-ocr-skurequest='a0c4p0_pidcfq7ttc0mm8r_skuid0002_r2p1']";const cardPlanDetailListClass="card-plan-detail-list";const cardPlanDetailGridCardSelector=".card-plan-detail--grid-card";const skuPricingSelector=".sku__pricing";const skuParagraphSelector=".sku__paragraph";const skuRecurrenceSelector=".sku__detail-recurrence";const pageScope={"www.microsoft.com":{paths:["/microsoft-365/business/copilot-for-microsoft-365","/microsoft-365/microsoft-copilot","/microsoft-365/enterprise/copilot-for-microsoft-365"]},previews:true};function moveSkuParagraph(){const skus=document.querySelectorAll(targetSelector);skus.forEach(sku=>{const cardPlanDetail=sku.closest(cardPlanDetailGridCardSelector);moveSkuParagraphByElement(sku);moveSkuParagraphByGrid(cardPlanDetail)})}function moveSkuParagraphByElement(sku){if(!sku){return}const skuParagraph=sku.querySelector(skuParagraphSelector);if(!skuParagraph){return}const skuRecurrence=sku.querySelector(skuRecurrenceSelector);if(!skuRecurrence){return}sku.insertBefore(skuParagraph,skuRecurrence.nextSibling)}function moveSkuParagraphByGrid(cardPlanDetail){if(!cardPlanDetail){return}const cardPlanDetailList=cardPlanDetail.parentElement;if(!cardPlanDetailList||!cardPlanDetailList.classList.contains(cardPlanDetailListClass)){return}changeGridElementPosition(cardPlanDetailList,skuPricingSelector,"2");changeGridElementPosition(cardPlanDetailList,skuRecurrenceSelector,"3");changeGridElementPosition(cardPlanDetailList,skuParagraphSelector,"4")}function changeGridElementPosition(cardPlanDetailList,sectionSelector,position){const skuSections=cardPlanDetailList.querySelectorAll(sectionSelector);if(skuSections){skuSections.forEach(skuSection=>skuSection.style.gridRowStart=position)}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(moveSkuParagraph)}})();
/*! 254637: Add Banner to ACOM and BizApps sites for RU-* locales stating that sales are suspended */
(()=>{const pageScope={"www.microsoft.com":{paths:["/power-platform","/dynamics-365"],allSubpaths:true,markets:["ru-ru"]},"azure.microsoft.com":{markets:["ru-ru"]},previews:true,marketAware:false};function addBannerMarkup(){var isAzurePage=window.location.hostname==="azure.microsoft.com"||window.location.href.includes("https://sites-author.adobeprod.microsoft.com/content/azure/acom/")||window.location.href.includes("https://sites-author.adobeppe.microsoft.com/content/azure/acom/");var isReimagine=document.querySelector("body.reimagine-page")?true:false;var bannerHTML=isReimagine?`<div ocr-component-name="announcement-banner" data-component-id="01dbc0460ff412456ec49899ac06c10e" class="ocr-announcement-banner ${isAzurePage?"theme-night":"theme-day"}">
              <section data-mount="ocr-alert-dismissible" class="announcement-banner">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="announcement-banner__center">
                        <div class="announcement-banner__content" role="alert">
                          <div data-oc-token-text="">Майкрософт приостановил все новые продажи продуктов и услуг в Беларуси и России.</div>
                        </div>
                        <div class="announcement-banner__action">
                          <div ocr-component-name="action" data-component-id="467e35e809075d121962a1d239c316b2" class="action d-contents">
                            <a class="link link-inline " data-bi-ecn="Подробнее" data-bi-tags="{}" tabindex="0" data-bi-bhvr="0" data-bi-cn="Подробнее" target="_self" data-oc="oc16a3" id="action-oc16a3" href="https://blogs.microsoft.com/on-the-issues/2022/03/04/microsoft-suspends-russia-sales-ukraine-conflict/?icid=mscom_marcom_TS1_Sales_update" data-bi-sn="1" lang="ru-RU" aria-label="Label">
                              <span class="link__text">Подробнее</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>`:`<div data-oc="ocfd20" id="alert-uid852f">
              <section class="alert alert-full-bleed bg-primary alert-dismissable" data-bi-ecn="Alert bar" data-bi-pa="Body" data-bi-ct="Button" data-bi-bhvr="0" data-bi-cn="Alert bar" data-bi-compnm="Alert" style="cursor: pointer;">
                <div class="alert-content">
                  <div class="d-flex align-items-center">
                    <style>
                      .description-content p {
                        margin-bottom: 0;
                      }

                      .description-content+a {
                        margin-left: 0.5rem;
                      }
                    </style>
                    <div class="description-content" data-oc-token-text="">
                      <p>Майкрософт приостановил все новые продажи продуктов и услуг в Беларуси и России.</p>
                    </div>
                    <a data-bi-cn="Подробнее" data-bi-ecn="Подробнее" data-bi-ct="cta" data-bi-pa="body" data-bi-bhvr="230" data-bi-tags="{}" class="cta text-light cta-font-normal" data-target="https://blogs.microsoft.com/on-the-issues/2022/03/04/microsoft-suspends-russia-sales-ukraine-conflict/?icid=mscom_marcom_TS1_Sales_update" aria-label="Подробнее" target="_blank" data-regenerate-fwlink="true" href="https://blogs.microsoft.com/on-the-issues/2022/03/04/microsoft-suspends-russia-sales-ukraine-conflict/?icid=mscom_marcom_TS1_Sales_update">Подробнее</a>
                  </div>
                </div>
              </section>
            </div>`;var container=document.querySelector(".aem-Grid.aem-Grid--12.aem-Grid--default--12")?.querySelector(".aem-Grid.aem-Grid--12.aem-Grid--default--12")?.querySelector(".aem-Grid.aem-Grid--12.aem-Grid--default--12");if(container){container.insertAdjacentHTML("afterbegin",bannerHTML)}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(addBannerMarkup)}})();
/*!370970 Copilot Naming */
(()=>{const targetSelector="[data-ocr-skurequest='a0c4p0_pidcfq7ttc0mm8r_skuid0002_r2p1']";const productTitleSelector=".sku__title .oc-product-title";const productTitle="Microsoft 365 Copilot";const pageScope={"www.microsoft.com":{paths:["/microsoft-365/microsoft-365-enterprise","/microsoft-365/copilot","/microsoft-365/copilot/enterprise","/microsoft-365/copilot/business","/microsoft-copilot/microsoft-copilot-studio"]},previews:true,marketAware:false};const pageScopeChina={"www.microsoft.com":{paths:["/microsoft-365/microsoft-365-enterprise","/microsoft-365/copilot","/microsoft-365/copilot/enterprise","/microsoft-365/copilot/business","/microsoft-copilot/microsoft-copilot-studio"],markets:["zh-cn"]},previews:true};function updateProductTitle(){const skus=document.querySelectorAll(targetSelector);skus.forEach(sku=>{const productTitleElem=sku.querySelector(productTitleSelector);if(productTitleElem){productTitleElem.textContent=productTitle}})}if(window.SOUtil.pageIsInScope(pageScope)&&!window.SOUtil.pageIsInScope(pageScopeChina)){window.SOUtil.runOnPageLoad(updateProductTitle)}})();
/*!07/14 Override for AI pages */
(()=>{const pageScope={"www.microsoft.com":{paths:["/ai/principles-and-approach","/ai/tools-practices","/ai/responsible-ai"]},previews:true};const cssOverride=`
		[data-oc="oc209b"] + .row.section-master__slot,
		[data-oc="ocf7ba"] + .row.section-master__slot,
		[data-oc="oc9d58"] + .row.section-master__slot,
		[data-oc="ocf6a1"] + .row.section-master__slot,
		[data-oc="ocfa16"] + .row.section-master__slot,
		[data-oc="oc404b"] + .row.section-master__slot{
		margin-left: 0 !important;
		margin-right: 0 !important;
		}
		.ocr-accordion:not(.ocr-accordion--contained) .accordion .ocr-accordion-item:first-child .ocr-accordion-item__header {
		padding-top: 1.5rem !important
		}
	
		.ocr-accordion:not(.ocr-accordion--contained) .accordion .accordion-vertical-item:first-child .ocr-accordion-item__header {
		padding-top: 0 !important;
		}
		@media (min-width:860px) {
		.accordion--vertical .media {
			width: 50%  !important;
		}
		}
    `;function applyCSS(){const style=document.createElement("style");style.setAttribute("id","Static Override AI Pages 0714");document.head.appendChild(style);style.appendChild(document.createTextNode(cssOverride))}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(applyCSS)}})();
/*! 377400 - Update button styles in AI Chat Drawer */
(()=>{const overrideId="377400";const cssStyles=`
	.ai-chat-drawer .webchat__bubble__content--follow-up {
		background-color: transparent !important;
	}

	.ai-chat-message, .ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		padding: var(--root-spacing-m) var(--root-spacing-l);
		border-radius: var(--root-radii-s);
		font-size: 0.875rem;
		font-weight: 400;
	}
	.ai-chat-message--tag, .ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		border-width: var(--root-border-xs);
		padding: var(--root-spacing-xs) 10px;
		width: auto;
		line-height: 20px;
	}

	.ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"],
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] {
		padding: 0 !important;
	}

	.ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet,
  .ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet {
  	align-items: flex-end !important;
	}

	.ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		max-width: 100%;
	}

	.ai-chat-message, .ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		padding: var(--root-spacing-m) var(--root-spacing-l);
		border-radius: var(--root-radii-s);
		font-size: 0.875rem;
		font-weight: 400;
	}

	.ai-chat-message--tag, .ai-chat-drawer .webchat__bubble__content .webchat__text-content[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback),
	.ai-chat-drawer .webchat__bubble__content .ac-adaptiveCard[id^="follow-up"] .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		border-width: var(--root-border-xs);
		padding: var(--root-spacing-xs) 10px;
		width: auto;
		line-height: 20px;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback) {
		--button-justify-content: center;
		border: 2px solid var(--button-border-color);
		padding: var(--button-padding-y) var(--button-padding-x);
		justify-content: var(--button-justify-content);
		font-weight: 600;
		font-size: 0.9375rem;
		line-height: 1.375rem;
		letter-spacing: -0.02em;
		--button-padding-x: var(--root-spacing-m);
		--button-padding-y: var(--root-spacing-s);
		--button-padding-glyph: calc(var(--root-spacing-m) - 2px);
		border-radius: var(--root-radii-s);
		--button-spacing-glyph: var(--root-spacing-s);
		--button-bg-color: var(--theme-background-accent-strong-normal);
		--button-color: var(--theme-foreground-accent-strong-normal);
		--button-border-color: transparent;
		background-color: var(--button-bg-color);
		color: var(--button-color);
		--button-hover-bg-color: var(--theme-background-accent-strong-hover);
		--button-hover-color: var(--theme-foreground-accent-strong-hover);
		--button-hover-border-color: transparent;
		--button-pressed-bg-color: var(--theme-background-accent-strong-pressed);
		--button-pressed-color: var(--theme-foreground-accent-strong-pressed);
		--button-pressed-border-color: transparent;
		border-radius: var(--root-radii-s);
		--button-opacity: 0.2;
		--button-padding-x: var(--root-spacing-m);
		--button-padding-y: var(--root-spacing-xs);
		--button-padding-glyph: calc(var(--root-spacing-s) - 2px);
		--button-spacing-glyph: var(--root-spacing-xs);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):hover {
		--button-bg-color: var(--button-hover-bg-color);
		--button-color: var(--button-hover-color);
		--button-border-color: var(--button-hover-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
		background-image: none;
		box-shadow: none;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):active {
		--button-bg-color: var(--button-pressed-bg-color);
		--button-color: var(--button-pressed-color);
		--button-border-color: var(--button-pressed-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):disabled, .ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).disabled, .ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).inactive {
		cursor: default;
		opacity: var(--button-opacity);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-default:not(.style-positive):not(.primary) {
		box-sizing: border-box;
		--button-bg-color: transparent;
		--button-color: var(--theme-foreground-accent-subtle-normal) !important;
		--button-border-color: var(--theme-border-accent-subtle-normal);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
		--button-hover-bg-color: transparent;
		--button-hover-color: var(--theme-foreground-accent-subtle-hover) !important;
		--button-hover-border-color: var(--theme-border-accent-subtle-hover);
		--button-pressed-bg-color: transparent;
		--button-pressed-color: var(--theme-foreground-accent-subtle-pressed) !important;
		--button-pressed-border-color: var(--theme-border-accent-subtle-pressed);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-default:not(.style-positive):not(.primary):hover {
		--button-bg-color: var(--button-hover-bg-color);
		--button-color: var(--button-hover-color);
		--button-border-color: var(--button-hover-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
		background-image: none;
		box-shadow: none;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-default:not(.style-positive):not(.primary):active {
		--button-bg-color: var(--button-pressed-bg-color);
		--button-color: var(--button-pressed-color);
		--button-border-color: var(--button-pressed-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-positive {
		--button-bg-color: var(--theme-background-accent-strong-normal);
		--button-color: var(--theme-foreground-accent-strong-normal);
		--button-border-color: transparent;
		background-color: var(--button-bg-color);
		color: var(--button-color);
		--button-hover-bg-color: var(--theme-background-accent-strong-hover);
		--button-hover-color: var(--theme-foreground-accent-strong-hover);
		--button-hover-border-color: transparent;
		--button-pressed-bg-color: var(--theme-background-accent-strong-pressed);
		--button-pressed-color: var(--theme-foreground-accent-strong-pressed);
		--button-pressed-border-color: transparent;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-positive:hover {
		--button-bg-color: var(--button-hover-bg-color);
		--button-color: var(--button-hover-color);
		--button-border-color: var(--button-hover-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
		background-image: none;
		box-shadow: none;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback).style-positive:active {
		--button-bg-color: var(--button-pressed-bg-color);
		--button-color: var(--button-pressed-color);
		--button-border-color: var(--button-pressed-border-color);
		background-color: var(--button-bg-color);
		color: var(--button-color);
		border-color: var(--button-border-color);
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):focus {
		outline-offset: -0.375rem;
	}

	.ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback):active, .ai-chat-drawer .ac-actionSet .ac-pushButton:not(.action--ai-feedback)[aria-pressed="true"] {
		background-color: var(--button-pressed-bg-color);
		color: var(--button-pressed-color);
		border-color: var(--button-pressed-border-color);
	}
	`;const getAIChatDrawer=()=>{const drawer=window.ocrReimagine?.AIChatDrawer||window.m365?.AIChatDrawer;if(!drawer||drawer.getInstances().length===0){return null}return drawer.getInstances()[0]};function handleIncomingAdaptiveCard(adaptiveCardData){if(adaptiveCardData.id?.startsWith("follow-up")){const adaptiveCardId=adaptiveCardData.id;window.setTimeout(()=>{const followUpAdaptiveCardElem=document.getElementById(adaptiveCardId);if(followUpAdaptiveCardElem){const webChatBubbleContent=followUpAdaptiveCardElem.closest(".webchat__bubble__content");webChatBubbleContent.classList.add("webchat__bubble__content--follow-up")}})}}function init(){let aiChatDrawerInstance;aiChatDrawerInstance=getAIChatDrawer();if(!aiChatDrawerInstance){return}const store=aiChatDrawerInstance.store;let activities=[];const unsubscribe=store.subscribe(()=>{const state=store.getState();if(state.activities.length>activities.length){activities.push(state.activities[state.activities.length-1]);const lastActivity=activities[activities.length-1];if(lastActivity.from.role==="bot"&&lastActivity.type==="message"&&lastActivity.attachments?.length&&lastActivity.attachments[0].content?.type==="AdaptiveCard"){const adaptiveCardData=lastActivity.attachments[0].content;handleIncomingAdaptiveCard(adaptiveCardData)}}});window.addEventListener("beforeunload",()=>{unsubscribe()})}window.SOUtil.addStylesheet(cssStyles,overrideId);window.addEventListener("webchatconnectfulfilled",init)})();
/*! 383650 - Fix for UMP video playing in the background after closing the Modal */
(()=>{const reimagineModals=document.querySelectorAll("[data-mount='reimagine-modal']");reimagineModals.forEach(modal=>{const ump=modal.querySelector("universal-media-player");const modalCloseBtn=modal.querySelector(".modal-close");if(ump&&modalCloseBtn){modalCloseBtn.addEventListener("click",()=>{if(ump.pause){ump.pause()}})}})})();
/*! 383817 - Fix for Media Playlist not working due to UMP update */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-copilot/ai-get-ready","/microsoft-copilot/maximize-impact","/copilot/ai-get-ready","/copilot/maximize-impact","/power-platform/products/power-automate/guided-tour","/microsoft-365-copilot/business"]},previews:true};function updateMediaPlaylist(){const Attributes={DISABLED:"disabled",TABINDEX:"tabindex",ARIALABEL:"aria-label",ARIACURRENT:"aria-current",DATA_TRANSLATABLE:"data-current-slide-translatable",MULTI_SLIDE_TRANSLATABLE:"data-multi-slide-translatable",SINGLE_SLIDE_TRANSLATABLE:"data-single-slide-translatable",DATA_SLIDE_SELECTOR:"data-slide-selector",ATTRIBUTES:"attributes",ARIA_EXPANDED:"aria-expanded",ARIA_LIVE:"aria-live",ARIA_HIDDEN:"aria-hidden",DATA_EXPANDED_ARIA_LABEL:"data-expanded-aria-label",DATA_COLLAPSED_ARIA_LABEL:"data-collapsed-aria-label",ARIA_CONTROLS:"aria-controls"};const ClassName={CAROUSEL:"carousel",CAROUSEL_CONTROLS:"carousel__controls",CAROUSEL_WINDOW:"carousel__window",CAROUSEL_WINDOW_NO_MARGIN:"carousel__window--no-controls",CAROUSEL_ITEM:"carousel__slide",CAROUSEL_ITEM_ACTIVE:"active",CAROUSEL_MEDIA_NAV:"carousel__indicators-item",CAROUSEL_INDICATORS:"carousel__indicators",CAROUSEL_CTA:"carousel__cta",CONTAINER:"carousel__container",PADDING_INLINE_END:"padding-inline-end",SCROLL_PADDING_INLINE_START:"scroll-padding-inline-start",CASE_STUDY_TYPE:"carousel--type-case-study",CASE_STUDY_MODAL_TYPE:"carousel--type-case-study-modal",CASE_STUDY_NEWS_TYPE:"carousel--type-case-study-news",PROMO_TYPE:"carousel--type-promo",VERTICAL_TYPE:"carousel--type-vertical",HERO_MEDIA_TYPE:"carousel--type-hero-media",MEDIA_TABS_TYPE:"carousel--type-media-tabs",ANNOUNCEMENT_TEXT:"carousel__announcement-text",MEDIA_PLAYLIST_VIDEO_TYPE:"carousel--type-media-playlist-video",SLIDE_OVERLAY_CONTENT:"carousel__overlay-content",SLIDE_OVERLAY_TOGGLE_BTN:"carousel__overlay-btn-toggle",SINGLE_SLIDE:"single-slide",THEME_NIGHT:"theme-night",THEME_DAY:"theme-day",SLIDER_ARROWS:"slider-arrows",CAROUSEL_INDICATOR_ITEM_WRAPPER:"carousel__indicators-item-wrapper",SHOW_MORE_INDICATOR:"carousel__show-more-indicator",BACK_TO_CONTROLS:"carousel__back-to-controls",SCROLL_SNAP_MANDATORY:"scroll-snap-mandatory",ANIMATION:"animation",EFFECT_ON:"effect-on"};const MediaPlaylistVideoClassNames={BLOCK_FEATURE:"block-feature",MEDIA:"media",UMP_CONTAINER:"ump-container",UMP:"universal-media-player",SLIDE_UP_ANIMATION:"slide-up-animation",SLIDE_UP_BOTTOM_ANIMATION:"slide-up-bottom-animation",SLIDE_DOWN_BOTTOM_ANIMATION:"slide-down-bottom-animation",OVERLAY_HEADING_HIDDEN:"overlay-heading-hidden",OVERLAY_CONTROLS_HIDDEN:"overlay-controls-hidden",CAROUSEL_OVERLAY_CONTENT_HIDDEN:"carousel__overlay-content-hidden",D_NONE:"d-none",D_FLEX:"d-flex",OVERLAY_VISIBLE:"overlay-visible",OVERLAY_HIDDEN:"overlay-hidden",OVERLAY_TARGET:"overlay__target",VIDEO_JS:"video-js",VJS_BIG_PLAY_BUTTON:"vjs-big-play-button",VJS_PLAY_CONTROL:"vjs-play-control",VJS_VOLUME_PANEL_VERTICAL:"vjs-volume-panel-vertical",VJS_MODAL_DIALOG:"vjs-modal-dialog",VJS_TEXT_TRACK_SETTINGS:"vjs-text-track-settings",VJS_MENU_BUTTON_POPUP:"vjs-menu-button-popup",VJS_USER_ACTIVE:"vjs-user-active",VJS_USER_INACTIVE:"vjs-user-inactive",VJS_PLAYING:"vjs-playing",VJS_PAUSED:"vjs-paused",VJS_HOVER:"vjs-hover",VJS_SLIDER_ACTIVE:"vjs-slider-active",VJS_HIDDEN:"vjs-hidden"};const EventName={CLICK_DATA_API:"click",ON_CLICK:"onClick",ON_INIT:"onInit",ON_REMOVE:"onRemove",ON_SCROLL:"onScroll",ON_UPDATE:"onUpdate",RESIZE_DATA_API:"resize",SCROLL_DATA_API:"scroll"};const Selector={CAROUSEL_WRAPPER_WITH_ANIMATION:`.${ClassName.CAROUSEL}.${ClassName.ANIMATION}`,CAROUSEL_WRAPPER:`.${ClassName.CAROUSEL}`,CAROUSEL_CONTROLS:`.${ClassName.CAROUSEL_CONTROLS}`,CAROUSEL_WINDOW:`.${ClassName.CAROUSEL_WINDOW}`,CAROUSEL_ITEMS:`.${ClassName.CAROUSEL_ITEM}`,CAROUSEL_MEDIA_NAV:`.${ClassName.CAROUSEL_MEDIA_NAV}`,CAROUSEL_INDICATORS:`.${ClassName.CAROUSEL_INDICATORS}`,CAROUSEL_CTA:`.${ClassName.CAROUSEL_CONTROLS} .${ClassName.CAROUSEL_CTA}`,CONTAINER:`.${ClassName.CONTAINER}`,DATA_MOUNT:`[data-mount="ocr-carousel"]`,DATA_MOUNT_OLD:`.carousel__section[data-mount="carousel"]`,SNAP_ALIGN_START:`.${ClassName.CAROUSEL_ITEM}`,MODAL_WINDOW:`[data-mount="modal"]`,CASE_STUDY_TYPE:`.${ClassName.CASE_STUDY_TYPE}`,CASE_STUDY_MODAL_TYPE:`.${ClassName.CASE_STUDY_MODAL_TYPE}`,CASE_STUDY_NEWS_TYPE:`.${ClassName.CASE_STUDY_NEWS_TYPE}`,PROMO_TYPE:`.${ClassName.PROMO_TYPE}`,VERTICAL_TYPE:`.${ClassName.VERTICAL_TYPE}`,HERO_MEDIA_TYPE:`.${ClassName.HERO_MEDIA_TYPE}`,MEDIA_TABS_TYPE:`.${ClassName.MEDIA_TABS_TYPE}`,ANNOUNCEMENT_TEXT:`.${ClassName.ANNOUNCEMENT_TEXT}`,MEDIA_PLAYLIST_VIDEO_TYPE:`.${ClassName.MEDIA_PLAYLIST_VIDEO_TYPE}`,SLIDE_OVERLAY_CONTENT:`.${ClassName.SLIDE_OVERLAY_CONTENT}`,SLIDE_OVERLAY_TOGGLE_BTN:`.${ClassName.SLIDE_OVERLAY_TOGGLE_BTN}`,SLIDER_ARROWS:`.${ClassName.SLIDER_ARROWS}`,CAROUSEL_INDICATOR_ITEM_WRAPPER:`.${ClassName.CAROUSEL_INDICATOR_ITEM_WRAPPER}`,SHOW_MORE_INDICATOR:`.${ClassName.SHOW_MORE_INDICATOR}`,BACK_TO_CONTROLS:`.${ClassName.BACK_TO_CONTROLS}`};const MediaPlaylistVideoSelectors={BLOCK_FEATURE:`.${MediaPlaylistVideoClassNames.BLOCK_FEATURE}`,MEDIA:`.${MediaPlaylistVideoClassNames.MEDIA}`,UMP_CONTAINER:`.${MediaPlaylistVideoClassNames.UMP_CONTAINER}`,UMP:`${MediaPlaylistVideoClassNames.UMP}`,VIDEO_JS:`.${MediaPlaylistVideoClassNames.VIDEO_JS}`,VJS_BIG_PLAY_BUTTON:`.${MediaPlaylistVideoClassNames.VJS_BIG_PLAY_BUTTON}`,VJS_PLAY_CONTROL:`.${MediaPlaylistVideoClassNames.VJS_PLAY_CONTROL}`,VJS_VOLUME_PANEL_VERTICAL:`.${MediaPlaylistVideoClassNames.VJS_VOLUME_PANEL_VERTICAL}`,VJS_MENU_BUTTON_POPUP:`button.${MediaPlaylistVideoClassNames.VJS_MENU_BUTTON_POPUP}`};class MediaPlaylistVideo{constructor(opts){const{carouselSlides,carouselMount}=opts;this.carouselMount=carouselMount;this.carouselSlides=carouselSlides;this.carouselMediaPlaylistVideoContainer=carouselMount.closest(Selector.MEDIA_PLAYLIST_VIDEO_TYPE);this.carouselMediaPlaylistVideoContainer.style.setProperty("--media-playlist-overlay-bottom-spacing","80px");this.carouselContainerClassList=this.carouselMediaPlaylistVideoContainer.classList;this.initialCarouselTheme=null;for(const className of this.carouselContainerClassList){if(className===ClassName.THEME_DAY||className===ClassName.THEME_NIGHT){this.initialCarouselTheme=className;break}}this.carouselContainer=carouselMount.querySelector(Selector.CONTAINER);this.bgClass=null;this.vp3mediaQuery1280px=window.matchMedia("(min-width: 1280px)");this.isDesktopLayout=this.vp3mediaQuery1280px.matches;this.indexShowMoreIndicator=4;this.showMoreIndicatorAmount=4;this.dataExpandedAriaLabel=this.carouselContainer.getAttribute(Attributes.DATA_EXPANDED_ARIA_LABEL);this.dataCollapsedAriaLabel=this.carouselContainer.getAttribute(Attributes.DATA_COLLAPSED_ARIA_LABEL);if(carouselSlides.length>0){this.carouselControls=this.carouselMount.querySelector(Selector.CAROUSEL_CONTROLS);this.carouselControlsClassList=this.carouselControls?.classList;this.indicatorItems=this.carouselMount.querySelectorAll(Selector.CAROUSEL_MEDIA_NAV);this.slideOverlayContents=this.carouselMount.querySelectorAll(Selector.SLIDE_OVERLAY_CONTENT);this.sliderArrows=this.carouselMount.querySelector(Selector.SLIDER_ARROWS);this.slideOverlayBlockFeatures=[];this.showMoreIndicatorBtnWrapper=this.carouselMount.querySelector(Selector.SHOW_MORE_INDICATOR);if(this.showMoreIndicatorBtnWrapper){this.showMoreIndicatorBtn=this.showMoreIndicatorBtnWrapper.querySelector("button")}this.listCarouselIndicatorItems=this.carouselMount.querySelectorAll(Selector.CAROUSEL_INDICATOR_ITEM_WRAPPER);carouselSlides.forEach(carouselSlide=>{const currentSlideDOMElements=this.getCurrentSlideDOMElements(carouselSlide,this.carouselControls);this.bindEventsToSlideContent(currentSlideDOMElements);this.initSlideElements(carouselSlide.id,currentSlideDOMElements)});if(this.isSingleSlideWithoutControls(carouselSlides,this.carouselControls)){this.carouselMount.classList.add(ClassName.SINGLE_SLIDE)}else{this.resizeObserverCarouselControls(this.carouselControls,this.carouselMount)}this.activeIndex=0;this.prevIndex=0;this.bindEvents();if(!this.vp3mediaQuery1280px.matches){this.setupMobileView()}}}isSingleSlideWithoutControls(carouselSlides,carouselControls){return carouselSlides.length===1&&!carouselControls}setupMobileView(){this.bgClass=this.findClassStartingWith(this.carouselMediaPlaylistVideoContainer,"bg--");if(!this.bgClass){const sectionMaster=this.carouselMediaPlaylistVideoContainer.closest(".section-master");this.bgClass=this.findClassStartingWith(sectionMaster,"bg--")}if(this.initialCarouselTheme===ClassName.THEME_NIGHT){this.addOrRemoveNightTheme(false);this.carouselContainerClassList.remove(ClassName.THEME_NIGHT);this.carouselContainerClassList.add(ClassName.THEME_DAY)}this.sliderArrows?.classList.add(MediaPlaylistVideoClassNames.D_NONE);this.hideOverlayControls(false);this.slideOverlayContents.forEach(slideOverlayContent=>{slideOverlayContent?.classList.remove(MediaPlaylistVideoClassNames.CAROUSEL_OVERLAY_CONTENT_HIDDEN);if(this.bgClass){slideOverlayContent?.classList.add(this.bgClass)}});this.slideOverlayBlockFeatures.forEach(slideOverlayBlockFeature=>{this.hideOverlayHeadingContent(false,slideOverlayBlockFeature)});if(this.indicatorItems.length<=4&&this.showMoreIndicatorBtnWrapper){this.showMoreIndicatorBtnWrapper.classList.add(MediaPlaylistVideoClassNames.D_NONE)}}getCurrentSlideDOMElements(carouselSlide,carouselControls){const query=(selector,base=carouselSlide)=>base.querySelector(selector);const mediaElement=query(MediaPlaylistVideoSelectors.MEDIA);const umpContainer=query(MediaPlaylistVideoSelectors.UMP_CONTAINER);const umpElement=query(MediaPlaylistVideoSelectors.UMP);const umpElementShadowRoot=umpElement?.shadowRoot;const umpVideoElement=query("video",umpContainer);const slideOverlayContent=query(Selector.SLIDE_OVERLAY_CONTENT);const slideOverlayBlockFeature=slideOverlayContent?query(MediaPlaylistVideoSelectors.BLOCK_FEATURE,slideOverlayContent):null;const slideOverlayToggleBtn=slideOverlayContent?query(Selector.SLIDE_OVERLAY_TOGGLE_BTN,slideOverlayContent):null;const spanElement=slideOverlayToggleBtn?query("span",slideOverlayToggleBtn):null;this.slideOverlayBlockFeatures.push(slideOverlayBlockFeature);return{mediaElement:mediaElement,umpContainer:umpContainer,umpElement:umpElement,umpElementShadowRoot:umpElementShadowRoot,umpVideoElement:umpVideoElement,carouselControls:carouselControls,slideOverlayContent:slideOverlayContent,slideOverlayBlockFeature:slideOverlayBlockFeature,slideOverlayToggleBtn:slideOverlayToggleBtn,spanElement:spanElement,isUserInteractedWithVideo:false,isVolumeHovered:false,isModalDialogOpen:false,isControlsAriaExpanded:false}}initSlideElements(carouselSlideID,currentSlideDOMElements){const{slideOverlayToggleBtn,slideOverlayBlockFeature,carouselControls}=currentSlideDOMElements;carouselControls.style.zIndex=11;if(slideOverlayBlockFeature){slideOverlayBlockFeature.setAttribute(Attributes.ARIA_LIVE,"polite");slideOverlayBlockFeature.id=`${carouselSlideID}-bf`}if(slideOverlayToggleBtn){slideOverlayToggleBtn.setAttribute(Attributes.ARIA_CONTROLS,`${slideOverlayBlockFeature.id} ${carouselControls.id}`);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataCollapsedAriaLabel)}}bindEvents(){document.defaultView.addEventListener(EventName.RESIZE_DATA_API,this.handleResize.bind(this));this.indicatorItems.forEach(indicatorItem=>{indicatorItem.addEventListener(EventName.CLICK_DATA_API,this.handleIndicatorClick.bind(this))});if(this.showMoreIndicatorBtn){this.showMoreIndicatorBtn.addEventListener(EventName.CLICK_DATA_API,this.handleShowMoreIndicatorClickBtn.bind(this,this.listCarouselIndicatorItems))}}handleResize(){if(this.vp3mediaQuery1280px.matches){if(this.initialCarouselTheme===ClassName.THEME_NIGHT){this.addOrRemoveNightTheme(false);this.carouselContainerClassList.add(ClassName.THEME_NIGHT);this.carouselContainerClassList.remove(ClassName.THEME_DAY)}this.sliderArrows?.classList.remove(MediaPlaylistVideoClassNames.D_NONE);if(this.bgClass){this.slideOverlayContents.forEach(slideOverlayContent=>{slideOverlayContent?.classList.remove(this.bgClass)})}if(!this.isDesktopLayout){this.pausePlayingVideo(true);const activeIndicator=this.getActiveSlideIndicator();if(activeIndicator){activeIndicator.click()}this.isDesktopLayout=true}}else{this.setupMobileView();const activeIndicator=this.getActiveSlideIndicator();if(activeIndicator){activeIndicator.click()}this.isDesktopLayout=false}}handleIndicatorClick(){setTimeout(()=>{const activeIndicator=this.getActiveSlideIndicator();if(activeIndicator){const activeIndicatorParentLi=activeIndicator.parentElement;if(activeIndicatorParentLi){const index=Array.from(this.listCarouselIndicatorItems).findIndex(node=>node===activeIndicatorParentLi);if(index!==-1){this.prevIndex=this.activeIndex;this.activeIndex=index}}}this.pausePlayingVideo()},1e3)}bindEventsToSlideContent(currentSlideDOMElements){const umpControls=currentSlideDOMElements.umpElementShadowRoot.querySelector("ump-controls");const bigPlayBtn=umpControls.shadowRoot.querySelector("ump-big-play-button");const umpPlayBtn=bigPlayBtn?.shadowRoot.querySelector("button");if(!bigPlayBtn||!umpPlayBtn)return;if(document.dir==="rtl"){bigPlayBtn.style.right="50px";bigPlayBtn.style.left="auto"}else{bigPlayBtn.style.left="50px"}bigPlayBtn.style.top="70px";umpControls?.addEventListener(EventName.CLICK_DATA_API,this.handleUmpControlBarClick.bind(this,currentSlideDOMElements));umpPlayBtn?.addEventListener(EventName.CLICK_DATA_API,this.handleUMPBigPlayBtn.bind(this,currentSlideDOMElements));if(currentSlideDOMElements.slideOverlayToggleBtn){currentSlideDOMElements.slideOverlayToggleBtn.addEventListener(EventName.CLICK_DATA_API,this.handleSlideOverlayToggleBtn.bind(this,currentSlideDOMElements))}}bindVolumeBtnEvents(currentSlideDOMElements,targetElement){const volumeBtn=targetElement.querySelector("button.btn-volume");const volumeMenu=targetElement.querySelector(".volume-menu");const volumeSlider=volumeMenu?.querySelector("ump-slider")?.shadowRoot?.querySelector("input");if(!volumeBtn)return;volumeBtn.addEventListener("mouseenter",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,true)});volumeMenu.addEventListener("mouseenter",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,true)});volumeBtn.addEventListener("mouseleave",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,false)});volumeMenu.addEventListener("mouseleave",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,false)});volumeBtn.addEventListener("focus",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,true)});volumeSlider.addEventListener("focus",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,true)});volumeBtn.addEventListener("focusout",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,false)});volumeSlider.addEventListener("focusout",()=>{this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,false)})}handleUMPBigPlayBtn(currentSlideDOMElements){this.observeUMPV2Controls(currentSlideDOMElements);this.handleUMPPlay.bind(this,currentSlideDOMElements,true)}handleUmpControlBarClick(currentSlideDOMElements){this.switchClass(MediaPlaylistVideoClassNames.OVERLAY_VISIBLE,MediaPlaylistVideoClassNames.OVERLAY_HIDDEN,currentSlideDOMElements.slideOverlayToggleBtn);this.handleUMPPlay(currentSlideDOMElements,true)}handleUMPPlay(currentSlideDOMElements,isUmpPlayBtnClicked){if(!this.isViewportWidthAtLeast1280px())return;const{slideOverlayToggleBtn,mediaElement,slideOverlayBlockFeature,carouselControls,slideOverlayContent}=currentSlideDOMElements;if(slideOverlayBlockFeature){this.switchClass(MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,null,slideOverlayBlockFeature);this.hideOverlayHeadingContent(true,slideOverlayBlockFeature)}if(carouselControls){this.switchClass(MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,null,carouselControls);this.hideOverlayControls(true)}this.switchClass(MediaPlaylistVideoClassNames.OVERLAY_TARGET,null,mediaElement);if(slideOverlayContent){slideOverlayContent.style.zIndex="11";this.switchClass(MediaPlaylistVideoClassNames.SLIDE_UP_BOTTOM_ANIMATION,MediaPlaylistVideoClassNames.SLIDE_DOWN_BOTTOM_ANIMATION,slideOverlayContent);this.switchClass(null,MediaPlaylistVideoClassNames.CAROUSEL_OVERLAY_CONTENT_HIDDEN,slideOverlayContent)}if(slideOverlayToggleBtn){if(isUmpPlayBtnClicked||!currentSlideDOMElements.isUserInteractedWithVideo){currentSlideDOMElements.isUserInteractedWithVideo=true;this.addClassWithDelay(MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,MediaPlaylistVideoClassNames.D_NONE,null,slideOverlayToggleBtn,500);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataExpandedAriaLabel);slideOverlayToggleBtn.setAttribute(Attributes.ARIA_EXPANDED,"true")}else{this.switchClass(MediaPlaylistVideoClassNames.OVERLAY_VISIBLE,MediaPlaylistVideoClassNames.OVERLAY_HIDDEN,slideOverlayToggleBtn);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataCollapsedAriaLabel);slideOverlayToggleBtn.setAttribute(Attributes.ARIA_EXPANDED,"false")}}}handleShowMoreIndicatorClickBtn(listCarouselIndicatorItems){let firstElementOfSet;for(let i=0;i<this.showMoreIndicatorAmount;i++){if(listCarouselIndicatorItems[i+this.indexShowMoreIndicator]){if(i===0)firstElementOfSet=listCarouselIndicatorItems[i+this.indexShowMoreIndicator];listCarouselIndicatorItems[i+this.indexShowMoreIndicator].style.display="flex"}else{this.showMoreIndicatorBtnWrapper.classList.add(MediaPlaylistVideoClassNames.D_NONE)}}const firstElementOfSetAnchor=firstElementOfSet.querySelector("a");firstElementOfSetAnchor.focus();this.indexShowMoreIndicator+=4}handleSlideOverlayToggleBtn(currentSlideDOMElements){if(!this.isViewportWidthAtLeast1280px())return;const{umpElement,slideOverlayToggleBtn,mediaElement,slideOverlayBlockFeature,carouselControls,slideOverlayContent}=currentSlideDOMElements;umpElement.pause();if(slideOverlayToggleBtn.classList.contains(MediaPlaylistVideoClassNames.OVERLAY_HIDDEN)){this.switchClass(MediaPlaylistVideoClassNames.OVERLAY_HIDDEN,MediaPlaylistVideoClassNames.OVERLAY_VISIBLE,slideOverlayToggleBtn);this.switchClass(null,MediaPlaylistVideoClassNames.OVERLAY_TARGET,mediaElement);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataExpandedAriaLabel);slideOverlayToggleBtn.setAttribute(Attributes.ARIA_EXPANDED,"true");if(carouselControls){this.switchClass(null,MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,carouselControls);this.hideOverlayControls(false)}if(slideOverlayBlockFeature){this.switchClass(null,MediaPlaylistVideoClassNames.SLIDE_UP_ANIMATION,slideOverlayBlockFeature);this.hideOverlayHeadingContent(false,slideOverlayBlockFeature)}if(slideOverlayContent){this.switchClass(MediaPlaylistVideoClassNames.SLIDE_DOWN_BOTTOM_ANIMATION,MediaPlaylistVideoClassNames.SLIDE_UP_BOTTOM_ANIMATION,slideOverlayContent);this.switchClass(MediaPlaylistVideoClassNames.CAROUSEL_OVERLAY_CONTENT_HIDDEN,null,slideOverlayContent)}}else{this.handleUMPPlay(currentSlideDOMElements,false);slideOverlayToggleBtn.setAttribute(Attributes.ARIALABEL,this.dataCollapsedAriaLabel);slideOverlayToggleBtn.setAttribute(Attributes.ARIA_EXPANDED,"false")}}createAndStartResizeObserver(targetElement,callback){if(!targetElement)return;const resizeObserver=new ResizeObserver(callback);resizeObserver.observe(targetElement)}resizeObserverCarouselControls(carouselControls,carouselMount){this.createAndStartResizeObserver(carouselControls,entries=>{if(!this.isViewportWidthAtLeast1280px())return;for(const entry of entries){if(entry.contentBoxSize){const contentBoxSize=entry.contentBoxSize[0];carouselMount.style.setProperty("--media-playlist-indicator-height",`${contentBoxSize.blockSize}px`)}}})}createAndStartObserver(targetElements,currentSlideDOMElements){const observer=new MutationObserver(mutationsList=>{for(const mutation of mutationsList){if(mutation.type===Attributes.ATTRIBUTES&&mutation.attributeName==="class"){if(mutation.target.classList.contains(MediaPlaylistVideoClassNames.VIDEO_JS)){this.handleUMPUserInteraction(currentSlideDOMElements,mutation.target)}else if(mutation.target.classList.contains(MediaPlaylistVideoClassNames.VJS_VOLUME_PANEL_VERTICAL)){this.handleUMPUserInteractionWithVolume(currentSlideDOMElements,mutation.target)}else if(mutation.target.classList.contains(MediaPlaylistVideoClassNames.VJS_MODAL_DIALOG)&&mutation.target.classList.contains(MediaPlaylistVideoClassNames.VJS_TEXT_TRACK_SETTINGS)){this.handleUMPUserInteractionWithDialog(currentSlideDOMElements,mutation.target)}}else if(mutation.type===Attributes.ATTRIBUTES&&mutation.attributeName===Attributes.ARIA_EXPANDED){this.handleUMPUserInteractionWithPopupButtons(currentSlideDOMElements,mutation.target)}}});for(const targetElement of targetElements){if(!targetElement)continue;observer.observe(targetElement,{attributes:true})}}observeUMPV2Controls(currentSlideDOMElements){const umpControls=currentSlideDOMElements.umpElementShadowRoot.querySelector("ump-controls");const controlsDiv=umpControls.shadowRoot?.querySelector(".controls");if(umpControls){const observer=new MutationObserver(mutationsList=>{for(const mutation of mutationsList){if(mutation.type==="childList"&&mutation.addedNodes.length>0){this.observeUMPV2ControlBar(currentSlideDOMElements,mutation.target)}if(mutation.type===Attributes.ATTRIBUTES&&mutation.attributeName==="class"){this.handleUMPUserInteraction(currentSlideDOMElements,mutation.target)}}});observer.observe(controlsDiv,{attributes:true,childList:true,subtree:true})}}observeUMPV2ControlBar(currentSlideDOMElements,parentElement){const umpControlBar=parentElement.querySelector("ump-control-bar");if(umpControlBar){const observer=new MutationObserver(mutationsList=>{for(const mutation of mutationsList){if(mutation.type==="childList"&&mutation.addedNodes.length>0){this.observeUMPV2VolumeMenu(currentSlideDOMElements,mutation.target);observer.disconnect()}}});observer.observe(umpControlBar.shadowRoot,{childList:true,subtree:true})}}observeUMPV2VolumeMenu(currentSlideDOMElements,targetElement){const volumeMenu=targetElement.querySelector(".volume-menu");const volumeSlider=volumeMenu?.querySelector("ump-slider");if(volumeSlider){const observer=new MutationObserver(mutationsList=>{for(const mutation of mutationsList){if(mutation.type==="childList"&&mutation.addedNodes.length>0){this.bindVolumeBtnEvents(currentSlideDOMElements,targetElement);observer.disconnect()}}});observer.observe(volumeSlider.shadowRoot,{childList:true,subtree:true})}}handleUMPUserInteraction(currentSlideDOMElements,targetElement){if(!this.isViewportWidthAtLeast1280px())return;const isUserActive=!targetElement.classList.contains("hidden");const isPlayingAndUserInactive=targetElement.classList.contains("hidden");if(isUserActive&&currentSlideDOMElements.isUserInteractedWithVideo){currentSlideDOMElements.slideOverlayToggleBtn.classList.remove(MediaPlaylistVideoClassNames.D_NONE)}else if(isPlayingAndUserInactive){currentSlideDOMElements.slideOverlayToggleBtn.classList.add(MediaPlaylistVideoClassNames.D_NONE);this.handleUMPPlay(currentSlideDOMElements,false)}}handleUMPUserInteractionWithVolume(currentSlideDOMElements,isHoveredOrSliderActive){if(!this.isViewportWidthAtLeast1280px())return;this.setControlsZIndex(currentSlideDOMElements,isHoveredOrSliderActive?10:11);this.setControlsOpacity(currentSlideDOMElements,isHoveredOrSliderActive?.5:1)}handleUMPUserInteractionWithDialog(currentSlideDOMElements,targetElement){if(!this.isViewportWidthAtLeast1280px())return;const isDialogHidden=targetElement.classList.contains(MediaPlaylistVideoClassNames.VJS_HIDDEN);currentSlideDOMElements.isModalDialogOpen=!isDialogHidden;this.setControlsZIndex(currentSlideDOMElements,!isDialogHidden||this.isUserInteractingWithVideoControls(currentSlideDOMElements)?0:2)}handleUMPUserInteractionWithPopupButtons(currentSlideDOMElements,targetElement){if(!this.isViewportWidthAtLeast1280px())return;const isAriaExpanded=targetElement.getAttribute(Attributes.ARIA_EXPANDED)==="true";currentSlideDOMElements.isControlsAriaExpanded=isAriaExpanded;this.setControlsZIndex(currentSlideDOMElements,isAriaExpanded||this.isUserInteractingWithVideoControls(currentSlideDOMElements)?0:2)}pausePlayingVideo(isDesktopLayout=false){const activeSlide=this.carouselMount.querySelector('.carousel__slide[tabindex="0"]');const prevActiveUmp=this.carouselSlides[this.prevIndex].querySelector("universal-media-player");prevActiveUmp.pause();const videoPlaying=document.querySelector(`.${MediaPlaylistVideoClassNames.VIDEO_JS}.${MediaPlaylistVideoClassNames.VJS_PLAYING}`);if(videoPlaying){const videoElem=videoPlaying.querySelector("video");if(videoElem){videoElem.pause()}if(isDesktopLayout){const mediaElement=videoPlaying.closest(MediaPlaylistVideoSelectors.MEDIA);if(mediaElement){mediaElement.classList.add(MediaPlaylistVideoClassNames.OVERLAY_TARGET)}}}}hideOverlayControls(hide){if(!this.carouselControls)return;if(hide){this.carouselControls.classList.add(MediaPlaylistVideoClassNames.OVERLAY_CONTROLS_HIDDEN);this.addClassWithDelay(null,null,MediaPlaylistVideoClassNames.D_NONE,this.carouselControls,1e3)}else{this.carouselControls.classList.remove(MediaPlaylistVideoClassNames.D_NONE);this.carouselControls.classList.remove(MediaPlaylistVideoClassNames.OVERLAY_CONTROLS_HIDDEN)}}hideOverlayHeadingContent(hide,element){if(!element)return;if(hide){element.classList.add(MediaPlaylistVideoClassNames.OVERLAY_HEADING_HIDDEN);this.addClassWithDelay(null,MediaPlaylistVideoClassNames.D_FLEX,MediaPlaylistVideoClassNames.D_NONE,element,1e3)}else{element.classList.remove(MediaPlaylistVideoClassNames.D_NONE);element.classList.add(MediaPlaylistVideoClassNames.D_FLEX);element.classList.remove(MediaPlaylistVideoClassNames.OVERLAY_HEADING_HIDDEN)}}setControlsZIndex(currentSlideDOMElements,zIndex){const{carouselControls,slideOverlayContent}=currentSlideDOMElements;this.setElementZIndex(zIndex,carouselControls);this.setElementZIndex(zIndex,slideOverlayContent)}setControlsOpacity(currentSlideDOMElements,opacity){const{carouselControls,slideOverlayContent}=currentSlideDOMElements;this.setElementOpacity(opacity,carouselControls);this.setElementOpacity(opacity,slideOverlayContent)}setElementZIndex(zIndex,targetElement){if(targetElement){targetElement.style.zIndex=zIndex}}setElementOpacity(opacity,targetElement){if(targetElement){targetElement.style.opacity=opacity}}switchClass(classToRemove,classToAdd,targetElement){if(targetElement){if(classToRemove){targetElement.classList.remove(classToRemove)}if(classToAdd){targetElement.classList.add(classToAdd)}}}addClassWithDelay(classToAdd,delayClassToRemove,delayClassToAdd,targetElement,delay){if(targetElement){if(classToAdd)targetElement.classList.add(classToAdd);setTimeout(()=>{if(delayClassToRemove){targetElement.classList.remove(delayClassToRemove)}if(delayClassToAdd){targetElement.classList.add(delayClassToAdd)}},delay)}}addOrRemoveNightTheme(addNightTheme){if(addNightTheme){this.slideOverlayContents.forEach(slideOverlayContent=>{slideOverlayContent.classList.add(ClassName.THEME_NIGHT)});this.carouselControls?.classList.add(ClassName.THEME_NIGHT)}else{this.slideOverlayContents.forEach(slideOverlayContent=>{slideOverlayContent.classList.remove(ClassName.THEME_NIGHT)});this.carouselControls?.classList.remove(ClassName.THEME_NIGHT)}}findClassStartingWith(element,prefix){if(!element||!element.classList)return null;return Array.from(element.classList).find(className=>className.startsWith(prefix))}isUserInteractingWithVideoControls(currentSlideDOMElements){const{isControlsAriaExpanded,isVolumeHovered,isModalDialogOpen}=currentSlideDOMElements;return isControlsAriaExpanded||isVolumeHovered||isModalDialogOpen}isViewportWidthAtLeast1280px(){return this.vp3mediaQuery1280px.matches}getActiveSlideIndicator(){return this.carouselMount.querySelector(`.${ClassName.CAROUSEL_MEDIA_NAV}.${ClassName.CAROUSEL_ITEM_ACTIVE}`)}}const carousels=document.querySelectorAll(`${Selector.MEDIA_PLAYLIST_VIDEO_TYPE} ${Selector.DATA_MOUNT}`);carousels.forEach(carousel=>{const carouselWindow=carousel.querySelector(Selector.CAROUSEL_WINDOW);let carouselItems=[];if(carousel.dataset.slideSelector){carouselItems=carousel.querySelectorAll(carousel.dataset.slideSelector)}else{carouselItems=carouselWindow.querySelectorAll(Selector.CAROUSEL_ITEMS)}new MediaPlaylistVideo({carouselSlides:carouselItems,carouselMount:carousel})})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateMediaPlaylist)}})();
/*! 485949 - Fix for AIChatDrawer - incorrect sourceSite after opening new browser tab with AIChatDrawer on it */
(()=>{const init=()=>{let aiChatDrawerInstance;if(window.ocrReimagine!==undefined){aiChatDrawerInstance=window.ocrReimagine.AIChatDrawer.getInstances()[0]}else{aiChatDrawerInstance=window.m365.AIChatDrawer.getInstances()[0]}if(!aiChatDrawerInstance||!aiChatDrawerInstance.sourceSite||!aiChatDrawerInstance.updateSourceSite){return}aiChatDrawerInstance.updateSourceSite(aiChatDrawerInstance.sourceSite)};window.addEventListener("webchatconnectfulfilled",init)})();
/*! 1026806 - Add "Created with Copilot Studio to AI assistant components" */
/*! 1095103 Update banner text for Ask Microsoft rebrand */
/*! 1095319 - Fix for Ask Microsoft rebrand banner text */
(()=>{const overrideId="1026806";const pageScope={"www.microsoft.com":{allSubpaths:true},"azure.microsoft.com":{allSubpaths:true},previews:true};function updateAIStuff(){const twoFeatures=document.querySelector(".chatgpt-banner.chatgpt-banner__2-block-features");const aiChatDrawerInstance=document.querySelector(".ai-chat-drawer");const aiChatButton=document.querySelector(".ai-chat-button");const aiChatButtonText=aiChatButton?.querySelector(".ai-chat-button__text");const smallText=aiChatButtonText?.querySelector("small");const heading=aiChatDrawerInstance?.querySelector(".block-feature__headings");const disclaimer=aiChatDrawerInstance?.querySelector(".block-feature__paragraph");if(twoFeatures&&smallText&&disclaimer){return}let styleText=``;const twoFeaturesBannerStyles=`
		.ai-chat-banner .block-feature__headings {
			gap: 4px !important;
		}

		.ai-chat-banner .ai-chat-banner__main-text .block-feature {
			gap: 32px !important;
		}

		.ai-chat-banner .block-feature .ocr-icon {
			margin-top: 4px !important;
		}

		.ai-chat-banner .block-feature__top {
			align-items: center !important;
		}

		.ai-chat-banner .block-feature--xs .block-feature__title {
			white-space: nowrap !important;
			font-size: var(--root-h3-font-size) !important;
			font-weight: 400 !important;
		}

		.ai-chat-banner .ai-chat-banner__main-text .block-feature .block-feature__paragraph {
			font-size: 16px !important;
		}
		`;const aiChatBanner=document.querySelector(".ai-chat-banner");let aiChatBannerBlockFeature=aiChatBanner?.querySelector(".block-feature");if(aiChatBannerBlockFeature&&!twoFeatures){const imgSource=aiChatBannerBlockFeature.querySelector(".ocr-img img").src;let paragraphText=aiChatBannerBlockFeature.querySelector(".block-feature__body .block-feature__paragraph")?.textContent;if(paragraphText){paragraphText=paragraphText.replace(/Ask the AI-powered assistant/g,"Try Ask Microsoft").replace(/the AI-powered assistant/g,"Ask Microsoft").replace(/AI-powered assistant/g,"Ask Microsoft")}const HTMLOverrideBlockFeatureForBanner=`
			<div ocr-component-name="block-feature" data-component-id="9290bbb697f35c37e989109584e9d258" class="block-feature d-flex align-items-start block-feature--xs">
				<div class="block-feature__top d-flex flex-row align-items-start">
					<div ocr-component-name="icon" data-component-id="467e35e809075d121962a1d239c316b2" class="ocr-icon d-inline-flex">
					  <div class="ocr-img media__asset"> 
						<img src="${imgSource}" aria-hidden="true" role="presentation" alt="" style="height: 50px;"> 
					  </div> 
					</div> 
					<div class="block-feature__headings d-flex flex-column align-items-start">
						<h2 class="block-feature__title ">Ask Microsoft</h2>
						<span class="subtext"></span>
					</div>
				</div>
				<div class="block-feature__body d-flex flex-column align-items-start">
					<p class="block-feature__paragraph base block-feature__paragraph">${paragraphText||"Need help finding a product or solution? Try Ask Microsoft."}</p>
				</div>
			</div>
			`;aiChatBannerBlockFeature.innerHTML=HTMLOverrideBlockFeatureForBanner;styleText+=twoFeaturesBannerStyles}window.SOUtil.addStylesheet(styleText,overrideId)}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateAIStuff)}})();
/*! 1036215 - Fix for Product Plan Cards Blades */
(()=>{const adjustMarginBottom=blades=>{blades.forEach(blade=>{const textElement=blade.querySelector(".layout.section-master__layout .section-master__layout-header .block-heading");const buttonElement=blade.querySelector(".pill-bar.pill-bar--selector");if(textElement&&buttonElement){if(window.innerWidth<=859.98){buttonElement.style.marginBottom=`0px`}else{const textHeight=textElement.offsetHeight;const buttonHeight=buttonElement.offsetHeight;const marginBottom=textHeight-buttonHeight;buttonElement.style.marginBottom=`${marginBottom}px`}}})};function debounce(func,delay){let timeout;return function(...args){clearTimeout(timeout);timeout=setTimeout(()=>func.apply(this,args),delay)}}const productPlanCardsBlades=document.querySelectorAll(".section-master.section-master--blade-product-plan-cards");const debouncedResize=debounce(()=>adjustMarginBottom(productPlanCardsBlades),200);adjustMarginBottom(productPlanCardsBlades);if(productPlanCardsBlades.length>0){window.addEventListener("resize",debouncedResize)}})();
/*! 1039278 - Compare Table - Fixes for small viewports / high zoom, so content in columns does not overlap */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/business/microsoft-365-for-business-support-options","/microsoft-365/enterprise/microsoft365-plans-and-pricing","/microsoft-teams/microsoft-teams-rooms/compare-rooms-plans","/microsoft-teams/compare-microsoft-teams-business-options","/microsoft-365/business/compare-all-microsoft-365-business-products-with-microsoft-365-copilot","/microsoft-teams/compare-microsoft-teams-business-options"],markets:["en-us"]},previews:true};const CUSTOM_STYLE=`
	.compare-chart-4 {
		min-width: 500px;
	}

	@media (max-width: 1083.98px) {
		.compare-chart:not(.compare-chart-2) thead td:first-child {
			padding: 0;
			width: 0%;
		}
	}

	@media (max-width: 859.98px) {
		.compare-chart.compare-chart-2 thead td:first-child {
			padding:0;
			width: 0%
		}
	}
	`;function run(){if(!window.SOUtil.pageIsInScope(pageScope)){return}document.body.insertAdjacentHTML("beforeend",'<style id="static-override-1039278">'+CUSTOM_STYLE+"</style>");setTimeout(()=>{const stickyTheads=document.querySelectorAll(".compare-chart thead.sticky");stickyTheads.forEach(thead=>{thead.style.height="auto"});window.dispatchEvent(new Event("resize"))},50)}if(document.readyState!=="loading"){run()}else{document.addEventListener("DOMContentLoaded",run)}})();
/*! 1058399 - SKU Telemetry - Add data-bi-tags for SKU CTAs */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/business/microsoft-365-plans-and-pricing","/microsoft-365/business/no-teams-plans-and-pricing","/microsoft-365/business/with-copilot-plans-and-pricing","/microsoft-365/business/nonprofit-plans-and-pricing","/microsoft-365/business/additional-services-plans-and-pricing","/microsoft-365/copilot/pricing","/microsoft-365/copilot/pricing/enterprise","/microsoft-365/copilot/pricing/copilot-studio"],markets:["en-us"]},previews:true};const SELECTORS={SKU:"[data-component-id='29d382aad0139a094d341ff4dd652cd5']",BUTTON_OR_ANCHOR:"a,button",SKU_BUTTON:".sku__buttons",SKU_TITLE:".sku__title .oc-product-title"};const TELEMETRY_ATTRIBUTES={HEADER_NAME:"data-bi-hn",DATA_BI_ENGLISH_HEADER:"data-bi-ehn",DATA_BI_PRODNAME:"data-bi-prod",DATA_BI_SKU:"data-bi-sku",DATA_BI_SKUNAME:"data-bi-subnm",DATA_BI_PRODID:"data-bi-pid",DATA_BI_AREANAME:"data-bi-an",DATA_BI_CONTAINERNAME:"data-bi-view"};const TELEMETRY_BEHAVIOR={ACTION_ADD_TO_CART:"81",ACTION_EMAIL:"124",ACTION_TRIAL_INITIATE:"201"};if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(processSkuTelemetry)}function processSkuTelemetry(){const skus=document.querySelectorAll(SELECTORS.SKU);if(skus.length){skus.forEach(sku=>{const ocrRequest=sku.querySelector(".sku")?.dataset?.ocrSkuRequest;const skuId=ocrRequest?.split("_")[2].split("skuid")[1];const pid=ocrRequest?.split("_")[1].split("pid")[1];const skuTitle=sku.querySelector(SELECTORS.SKU_TITLE)?.textContent;const ACTION_LINKS=sku.querySelectorAll(SELECTORS.SKU_BUTTON+" "+SELECTORS.BUTTON_OR_ANCHOR);ACTION_LINKS.forEach(actionLink=>{if(actionLink.dataset.biBhvr==TELEMETRY_BEHAVIOR.ACTION_ADD_TO_CART||actionLink.dataset.biBhvr==TELEMETRY_BEHAVIOR.ACTION_EMAIL||actionLink.dataset.biBhvr==TELEMETRY_BEHAVIOR.ACTION_TRIAL_INITIATE){if(skuTitle){actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_PRODNAME,skuTitle);actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_SKUNAME,skuTitle)}}if(skuTitle){actionLink.setAttribute(TELEMETRY_ATTRIBUTES.HEADER_NAME,skuTitle);actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_ENGLISH_HEADER,skuTitle)}if(!actionLink.dataset.biAn||!actionLink.dataset.biView){setAreaTags(actionLink,sku)}if(pid){actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_PRODID,pid)}if(skuId){actionLink.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_SKU,skuId)}})})}}function setAreaTags(link,sku){const tabPillBarItemId=findTabPillBar(sku.parentElement);if(!tabPillBarItemId)return;const tabPillBarItem=document.getElementById(tabPillBarItemId+"-tab");if(!tabPillBarItem)return;if(tabPillBarItem.dataset?.biAn){link.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_AREANAME,tabPillBarItem.dataset.biAn)}if(tabPillBarItem.dataset?.biView){link.setAttribute(TELEMETRY_ATTRIBUTES.DATA_BI_CONTAINERNAME,tabPillBarItem.dataset.biView)}}function findTabPillBar(currentElement){if(!currentElement)return null;if(currentElement.className==="root responsivegrid")return null;if(currentElement.id?.includes("tabs-pill-bar")){return currentElement.id}return findTabPillBar(currentElement.parentElement)}})();
/*! 1069096 Pricing Hub Telemetry */
(()=>{const TelemetryUtils={setAttributes(element,attributes){Object.keys(attributes).forEach(key=>{element.setAttribute(key,attributes[key])})},getSlotNumber(element,siblings){return Array.prototype.indexOf.call(siblings,element)+1},findClosestParent(element,parentTags){return parentTags.map(tag=>element.closest(tag)).find(parent=>parent)},formatComponentName(parentComponentTagName){return parentComponentTagName.toLowerCase().replace(/^reimagine-/,"").replace(/-/g," ").replace(/\b\w/g,char=>char.toUpperCase())},querySelectorAllDeep(selector,rootNode,deep,all){if(!selector){return null}if(!deep){if(all){return Array.from(rootNode.querySelectorAll(selector))}else{return rootNode.querySelector(selector)}}const results=[];const traverser=node=>{if(!all&&results.length)return;if(node==null)return;if(node.nodeType!==Node.ELEMENT_NODE)return;if(node.matches(selector)){results.push(node);if(!all)return}const children=node.children;if(children.length){for(const child of children){traverser(child)}}const shadowRoot=node.shadowRoot;if(shadowRoot){const shadowChildren=shadowRoot.children;for(const shadowChild of shadowChildren){traverser(shadowChild)}}};traverser(rootNode);return all?results:results.length?results[0]:null},closestDeep(element,selector){while(element){if(element.matches&&element.matches(selector)){return element}if(element.parentNode){element=element.parentNode}else if(element.host){element=element.host}else{element=null}}return null}};const ActionTelemetry={init(){const elements=TelemetryUtils.querySelectorAllDeep("reimagine-button",document.body,true,true);elements.forEach(element=>{const filteredSearchParent=TelemetryUtils.closestDeep(element,"reimagine-filtered-search");const aiPoweredAssistant=TelemetryUtils.closestDeep(element,"reimagine-ai-powered-assistant");if(filteredSearchParent){this.setTelemetryAttributesFilteredSearch(element,filteredSearchParent)}else if(aiPoweredAssistant){this.setTelemetryAttributesAiPoweredAssistant(element,aiPoweredAssistant)}else{this.setTelemetryAttributes(element)}});document.addEventListener("click",this.handleClick)},setTelemetryAttributes(element){let slotNumber=1;const parentComponent=element.parentElement;if(!parentComponent){return}if(parentComponent.tagName.toLowerCase()==="reimagine-button-group"){const siblingElements=parentComponent.querySelectorAll("reimagine-button, reimagine-link");slotNumber=TelemetryUtils.getSlotNumber(element,siblingElements)}const isButton=element.tagName.toLowerCase()==="reimagine-button";const textSlot=isButton?"button__text":"link__text";const textElement=element.querySelector(`span[slot='${textSlot}']`);const elementText=textElement?textElement.textContent.trim():"";const enCtaAttribute=element.getAttribute("enCtatext");const enCtaAttributeText=enCtaAttribute?enCtaAttribute.trim():"";const parentComponentTagName=TelemetryUtils.formatComponentName(parentComponent.tagName);TelemetryUtils.setAttributes(element,{"data-bi-cn":elementText,"data-bi-ecn":enCtaAttributeText,"data-bi-sn":slotNumber,"data-bi-compnm":parentComponentTagName,"data-bi-ct":isButton?"Component Button":"Component Link"})},setTelemetryAttributesFilteredSearch(element,parentComponent){const cardElement=TelemetryUtils.findClosestParent(element,["reimagine-card-product-pricing"]);const siblingElements=TelemetryUtils.querySelectorAllDeep("reimagine-button, reimagine-link",cardElement?cardElement:parentComponent,true,true);const slotNumber=TelemetryUtils.getSlotNumber(element,siblingElements);const isButton=element.tagName.toLowerCase()==="reimagine-button";const textSlot=isButton?"button__text":"link__text";const textElement=TelemetryUtils.querySelectorAllDeep(`span[slot='${textSlot}']`,element,true,false);const elementText=textElement?textElement.textContent.trim():"";const enCtaAttribute=element.getAttribute("enCtatext");const enCtaAttributeText=enCtaAttribute?enCtaAttribute.trim():"";let headingTextElement;let headingText="";if(cardElement){headingTextElement=TelemetryUtils.querySelectorAllDeep("[slot='title']",cardElement,true,false)}else{headingTextElement=TelemetryUtils.querySelectorAllDeep("[slot='heading-block__heading-text']",parentComponent,true,false)}headingText=headingTextElement?headingTextElement.textContent.trim():"";const parentComponentTagName="Section with Filtered Search";const headingBlock=TelemetryUtils.querySelectorAllDeep("reimagine-heading-block",parentComponent,true,false);const eyebrowLabelElement=TelemetryUtils.querySelectorAllDeep("[slot='heading-block__eyebrow-label']",headingBlock,true,false);const eyebrowHeadingTextElement=TelemetryUtils.querySelectorAllDeep("[slot='heading-block__heading-text']",headingBlock,true,false);const eyebrowLabel=eyebrowLabelElement?eyebrowLabelElement.textContent.trim():"";const eyebrowHeadingText=eyebrowHeadingTextElement?eyebrowHeadingTextElement.textContent.trim():"";const combinedHeading=eyebrowLabel&&eyebrowHeadingText?`${eyebrowLabel} | ${eyebrowHeadingText}`:eyebrowLabel||eyebrowHeadingText;TelemetryUtils.setAttributes(element,{"data-bi-cn":elementText,"data-bi-ecn":enCtaAttributeText,"data-bi-hn":headingText,"data-bi-ehn":headingText,"data-bi-sn":slotNumber,"data-bi-compnm":parentComponentTagName,"data-bi-view":combinedHeading,"data-bi-ct":cardElement?isButton?"Card Button":"Card Link":isButton?"Component Button":"Component Link"})},setTelemetryAttributesAiPoweredAssistant(element,parentComponent){const cardElement=TelemetryUtils.findClosestParent(element,["reimagine-card-plan-detail"]);const siblingElements=TelemetryUtils.querySelectorAllDeep("reimagine-button, reimagine-link",cardElement?cardElement:parentComponent,true,true);const slotNumber=TelemetryUtils.getSlotNumber(element,siblingElements);const isButton=element.tagName.toLowerCase()==="reimagine-button";const textSlot=isButton?"button__text":"link__text";const textElement=TelemetryUtils.querySelectorAllDeep(`span[slot='${textSlot}']`,element,true,false);const elementText=textElement?textElement.textContent.trim():"";const enCtaAttribute=element.getAttribute("enCtatext");const enCtaAttributeText=enCtaAttribute?enCtaAttribute.trim():"";let headingTextElement;let headingText="";if(cardElement){headingTextElement=TelemetryUtils.querySelectorAllDeep("[slot='title']",cardElement,true,false)}else{headingTextElement=TelemetryUtils.querySelectorAllDeep("[slot='heading-block__heading-text']",parentComponent,true,false)}headingText=headingTextElement?headingTextElement.textContent.trim():"";const parentComponentTagName="Section with full screen web assistant";const headingBlock=TelemetryUtils.querySelectorAllDeep("reimagine-heading-block",parentComponent,true,false);const eyebrowLabelElement=TelemetryUtils.querySelectorAllDeep("[slot='heading-block__eyebrow-label']",headingBlock,true,false);const eyebrowHeadingTextElement=TelemetryUtils.querySelectorAllDeep("[slot='heading-block__heading-text']",headingBlock,true,false);const eyebrowLabel=eyebrowLabelElement?eyebrowLabelElement.textContent.trim():"";const eyebrowHeadingText=eyebrowHeadingTextElement?eyebrowHeadingTextElement.textContent.trim():"";const combinedHeading=eyebrowLabel&&eyebrowHeadingText?`${eyebrowLabel} | ${eyebrowHeadingText}`:eyebrowLabel||eyebrowHeadingText;TelemetryUtils.setAttributes(element,{"data-bi-cn":elementText,"data-bi-ecn":enCtaAttributeText,"data-bi-hn":headingText,"data-bi-ehn":headingText,"data-bi-sn":slotNumber,"data-bi-compnm":parentComponentTagName,"data-bi-view":combinedHeading,"data-bi-ct":cardElement?isButton?"Card Button":"Card Link":isButton?"Component Button":"Component Link"})},handleClick(event){let element=null;const path=event.composedPath();for(let i=0;i<path.length;i++){const el=path[i];if(el&&el.tagName&&(el.tagName==="REIMAGINE-BUTTON"||el.tagName==="REIMAGINE-LINK")){element=el;break}}if(element){window?.telemetry?.webAnalyticsPlugin?.capturePageAction?.(element)}}};const pageScope={"www.microsoft.com":{},"azure.microsoft.com":{},previews:true};if(window.SOUtil.pageIsInScope(pageScope)){document.addEventListener("onOcrClientPricingRenderComplete",()=>{ActionTelemetry.init()})}})();
/*! 1068876 - Fix issue: Cannot get token on Moray pages with MarketSelector */
(()=>{
/*! If both global m365 and ocrReimagine exist, use m365 version of AI Chat Drawer */
function fixSetAIChatDrawerInstance(){if(window.m365?.AIChatDrawer&&window.ocrReimagine){window.ocrReimagine.AIChatDrawer=window.m365.AIChatDrawer;window.ocrReimagine.AISearchForm={getInstances:()=>[null]}}}window.SOUtil.runOnPageLoad(fixSetAIChatDrawerInstance)})();
/*! 1077059 - [Events] Update display for Topic facets */
(()=>{const pageScope={"www.microsoft.com":{paths:["/events/search-catalog","/events/category/microsoft-virtual-training-days","/events/category/microsoft-365-copilot-training","/events/category/industry-events","/isv/qa-folder/events/search-catalog","/isv/qa-folder/events/category/microsoft-virtual-training-days","/isv/qa-folder/events/category/microsoft-365-copilot-training","/isv/qa-folder/events/category/industry-events"]},previews:true};function run(){const topicPanel=document.querySelector('[ocr-en-text="Topic"]')?.closest(".filter-panel-item");const topicFacets=topicPanel?.querySelectorAll(".ocr-input__facet");if(topicFacets&&topicFacets.length>0){topicFacets.forEach(facet=>{facet.classList.add("d-none")})}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();
/*! 1077539 - [Events] Fix URL copied to email */
(()=>{const pageScope={"www.microsoft.com":{paths:["/events/search-catalog","/events/category/microsoft-virtual-training-days","/events/category/microsoft-365-copilot-training","/events/category/industry-events","/isv/qa-folder/events/search-catalog","/isv/qa-folder/events/category/microsoft-virtual-training-days","/isv/qa-folder/events/category/microsoft-365-copilot-training","/isv/qa-folder/events/category/industry-events"]},previews:true};function run(){const eventShareModal=document.querySelector("#events-share-modal-dialog");if(!eventShareModal){return}eventShareModal.addEventListener("onShow",updateShareUrl)}function updateShareUrl(){const clipShareElements=document.querySelectorAll("[data-mount='clipboard-share']");clipShareElements.forEach(clipShareElement=>{var linkElement=clipShareElement.querySelector("a");if(!linkElement){return}if(linkElement.href){const emailHrefPrefix=linkElement.href.split("http")[0];if(!emailHrefPrefix.includes("mailto:")){return}const url=window.location.href.split("#")[0];const encodedUrl=encodeURIComponent(url);linkElement.href=emailHrefPrefix+encodedUrl}})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();
/*! 1079235 - Rolling Text component behavior updates */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365-copilot"]},previews:true};let overrideId="1079235";function adjustRollingTextBehavior(){let rollingTextInstances=window.ocrReimagine.RollingText.getInstances();if(!rollingTextInstances||rollingTextInstances.length===0)return;rollingTextInstances.forEach(rollingText=>{if(window.innerWidth>=860){const rollingTextContainer=rollingText.rollingTextContainer||rollingText.element;if(rollingTextContainer){const sectionMaster=rollingTextContainer.closest(".section-master");if(sectionMaster){const eyebrowContainer=sectionMaster.querySelector(".block-heading__eyebrow");if(eyebrowContainer&&rollingText.playPauseButton){if(!eyebrowContainer.contains(rollingText.playPauseButton)){eyebrowContainer.appendChild(rollingText.playPauseButton)}}}}}else{const parentSectionMaster=rollingText.el.closest(".section-master");if(parentSectionMaster&&rollingText.playPauseButton){parentSectionMaster.prepend(rollingText.playPauseButton)}}})}function adjustNavSpacing(){if(window.innerWidth<860)return;const secondaryStickyNav=document.querySelector(".secondary-sticky-nav .dropdown");if(!secondaryStickyNav)return;const navLinks=secondaryStickyNav.querySelectorAll("a[href]");navLinks.forEach(link=>{const href=link.getAttribute("href");if(href&&href.startsWith("#")){const targetId=href.substring(1);const targetElement=document.getElementById(targetId);if(targetElement){targetElement.style.paddingTop="108px";const sectionMaster=targetElement.closest(".section-master");if(sectionMaster){sectionMaster.style.padding="0px"}}}})}const styleText=`
		.section-master:has(.block-heading__rolling-text--dynamic-container) .layout.section-master__layout {
			--layout-column-gap: var(--root-density-horizontal-comfortable, 3rem);
		}

		@media (max-width: 859.98px) {
			.section-master:has(.block-heading__rolling-text--dynamic-container) .layout.section-master__layout {
				flex-direction: column;
			}
		}

		.section-master:has(.block-heading__rolling-text--dynamic-container) .block-heading__rolling-text--dynamic {
			padding-bottom: 0.25lh;
			margin-bottom: -0.25lh;
			inset-inline-start: auto;
		}

		.section-master:has(.block-heading__rolling-text--dynamic-container) .section-master__layout-slot .media:has(.media__badge) {
			margin: calc(var(--badge-offset) * -1);
		}

		.block-heading__rolling-text--dynamic-container {
			height: 1.20lh;
		}

		.block-heading--alignment-centered .block-heading__rolling-text--dynamic-container {
			display: flex;
			justify-content: center;
		}

		.block-heading--size-3xl .block-heading__slot {
			margin: var(--root-spacing-2xl) 0 0;
		}

		@media (min-width: 860px) {
			.sticky.sticky--contained.sticky-direction-top {
				--sticky-contained-top: 32px;
			}

			.section-master:has(.block-heading__rolling-text--dynamic-container) .block-heading__eyebrow {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}

			.section-master:has(.block-heading__rolling-text--dynamic-container) .block-heading__eyebrow .block-heading__rolling-text-button {
				margin: 0;
			}
		}
	`;const mobileStyleText=`
		@media (max-width: 859.99px) {
			.section-master:has(.block-heading__rolling-text--dynamic-container) > .btn.btn--icon-only {
				position: absolute;
				top: 16px;
				left: 16px;
				z-index: 1;
			}

			.section-master:has(.block-heading__rolling-text--dynamic-container) .button-group {
				width: 100%;
			}
		}
	`;if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(adjustRollingTextBehavior);window.SOUtil.runOnPageLoad(adjustNavSpacing);window.SOUtil.addStylesheet(styleText,overrideId);window.SOUtil.addStylesheet(mobileStyleText,overrideId+"-mobile")}})();
/*! 1079235 - Copilot Page Featured Card Updates Scope Creep */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365-copilot","/microsoft-365-copilot/in-apps-for-work"]},previews:true};let overrideId="1079235-v2";const styleText=`
		.featured-cards .featured-cards__media .media .html5-video,
		.featured-cards .featured-cards__media .media img,
		.featured-cards .featured-cards__media .media {
			overflow: hidden;
		}

		.featured-cards--default-media img {
			height: auto !important;
		}

		.featured-cards__default-media .html5-video,
		.featured-cards__card-media .html5-video {
			border-radius: 24px;
		}
	`;if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.addStylesheet(styleText,overrideId)}})();
/*! 1079681 - Crop Hero Images instead of Stretch */
(()=>{const pageScope={"www.microsoft.com":{paths:["/security/security-insider/"],allSubpaths:true},previews:true};let overrideId="1079681";const styleText=`
		.hero-article .hero-article__media img {
			--image-object-fit: cover
		}
	`;if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.addStylesheet(styleText,overrideId)}})();
/*! 1081134 - Fix the OCV App ID */
(()=>{const pageScope={"www.microsoft.com":{},"azure.microsoft.com":{},previews:true};function updateOCVAppID(){const element=document.querySelector('[data-appid="50316"]');if(element){element.setAttribute("data-appid","2906")}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateOCVAppID)}})();
/*! SO 1082457 - Pricing Hub Telemetry */
(()=>{class ReimagineTelemetryUtils{static querySelectorDeep=(selector,rootNode=document.body,deep=false)=>{const results=this.querySelectorAllDeep(selector,rootNode,deep,false);return Array.isArray(results)&&results.length?results[0]:results};static querySelectorAllDeep=(selector,rootNode=document.body,deep=false,all=true)=>{if(!selector)return null;if(!deep){return all?Array.from(rootNode.querySelectorAll(selector)):rootNode.querySelector(selector)}const results=[];const traverser=node=>{if(!all&&results.length)return;if(node.nodeType!==Node.ELEMENT_NODE)return;if(node.matches(selector)){results.push(node);if(!all)return}for(const child of node.children){traverser(child)}if(node.shadowRoot){for(const shadowChild of node.shadowRoot.children){traverser(shadowChild)}}};traverser(rootNode);return all?results:results.length?results[0]:null}}const BI_ATTR={biBhvr:"data-bi-bhvr",biTags:"data-bi-tags",biHn:"data-bi-hn",biCn:"data-bi-cn",biEcn:"data-bi-ecn",biSn:"data-bi-sn",biCompnm:"data-bi-compnm",biCt:"data-bi-ct",lang:"lang"};const listenForPageAction=elem=>{elem.addEventListener("click",()=>{if(window.telemetry&&window.telemetry.webAnalyticsPlugin&&typeof window.telemetry.webAnalyticsPlugin.capturePageAction==="function"){window.telemetry.webAnalyticsPlugin.capturePageAction(elem)}})};const getSlottedText=slot=>{const assignedNodes=Array.from(slot.assignedNodes());return assignedNodes.filter(node=>node.nodeType===Node.TEXT_NODE&&node.textContent?.trim()!=="").map(node=>node.textContent?.trim()||"").join(" ")};const awaitDefined=async(component,callback)=>{await customElements.whenDefined(component);callback()};const setupAISearchHeroTelemetry=()=>{const COMPONENT_NAME="AI Search Hero";const aiSearchHeros=ReimagineTelemetryUtils.querySelectorAllDeep("reimagine-hero-ai-search",document.body,true,true);aiSearchHeros.forEach(aiSearchHero=>{const headingElement=ReimagineTelemetryUtils.querySelectorDeep('reimagine-layout-column reimagine-heading-block [slot="heading-block__heading-text"]',aiSearchHero,true);const headingContent=headingElement.textContent.trim();const promptCards=ReimagineTelemetryUtils.querySelectorAllDeep("reimagine-card-badge",aiSearchHero,true,true);promptCards.forEach((promptCard,index)=>{const cardHeadingElement=ReimagineTelemetryUtils.querySelectorDeep('[slot="text-block__heading"]',promptCard,true);const cardHeading=cardHeadingElement.textContent.trim();promptCard.setAttribute(BI_ATTR.biHn,cardHeading);promptCard.setAttribute(BI_ATTR.biSn,index+1);promptCard.setAttribute(BI_ATTR.biCompnm,COMPONENT_NAME);listenForPageAction(promptCard)});const secondaryNavItem=ReimagineTelemetryUtils.querySelectorDeep(".secondary-nav-item__link",aiSearchHero,true);const secondaryNavLabelSlot=ReimagineTelemetryUtils.querySelectorDeep(".secondary-nav-item__label slot",secondaryNavItem,true);const labelText=getSlottedText(secondaryNavLabelSlot);secondaryNavItem.setAttribute(BI_ATTR.biCn,labelText);secondaryNavItem.setAttribute(BI_ATTR.biHn,headingContent);secondaryNavItem.setAttribute(BI_ATTR.biSn,promptCards.length);secondaryNavItem.setAttribute(BI_ATTR.biCompnm,COMPONENT_NAME);listenForPageAction(secondaryNavItem)})};const setupFilteredSearchTelemetry=()=>{const COMPONENT_NAME="Filtered Search";const filteredSearchComponents=ReimagineTelemetryUtils.querySelectorAllDeep("reimagine-filtered-search",document.body,true,true);filteredSearchComponents.forEach(filteredSearch=>{const headingElement=ReimagineTelemetryUtils.querySelectorDeep('reimagine-heading-block [slot="heading-block__heading-text"]',filteredSearch,true);const headingContent=headingElement.textContent.trim();const pills=ReimagineTelemetryUtils.querySelectorAllDeep("reimagine-pill",filteredSearch,true,true);pills.forEach((pill,index)=>{const pillWrapperSlot=ReimagineTelemetryUtils.querySelectorDeep(".pill_wrapper slot:not([name])",pill,true);const label=getSlottedText(pillWrapperSlot);pill.setAttribute(BI_ATTR.biCn,label);pill.setAttribute(BI_ATTR.biSn,index+1);pill.setAttribute(BI_ATTR.biHn,headingContent);pill.setAttribute(BI_ATTR.biCompnm,COMPONENT_NAME);listenForPageAction(pill)})});document.addEventListener("onOcrClientPricingRenderComplete",()=>{setTimeout(()=>{filteredSearchComponents.forEach(filteredSearch=>{const filteredSearchCardContainers=ReimagineTelemetryUtils.querySelectorAllDeep(".card-container",filteredSearch,true,true);filteredSearchCardContainers.forEach(cardContainer=>{const cardLinks=ReimagineTelemetryUtils.querySelectorAllDeep("reimagine-link, reimagine-button",cardContainer,true,true);cardLinks.forEach(setupActionTelemetry)})})},500)})};const copyLinkTelemetry=(elemFrom,elemTo)=>{if(!elemFrom||!elemTo)return;const attributesToCopy=["data-bi-bhvr","data-bi-tags","lang","data-bi-cn","data-bi-ecn","data-bi-sn","data-bi-compnm","data-bi-ct"];attributesToCopy.forEach(attr=>{const value=elemFrom.getAttribute(attr);if(value){elemTo.setAttribute(attr,value)}})};const setupActionTelemetry=reimagineElement=>{const anchorElem=ReimagineTelemetryUtils.querySelectorDeep("a, button",reimagineElement,true);if(!anchorElem)return;copyLinkTelemetry(reimagineElement,anchorElem);reimagineElement.addEventListener("click",()=>{if(window.telemetry&&window.telemetry.webAnalyticsPlugin&&typeof window.telemetry.webAnalyticsPlugin.capturePageAction==="function"){window.telemetry.webAnalyticsPlugin.capturePageAction(anchorElem)}},true)};document.addEventListener("DOMContentLoaded",()=>{awaitDefined("reimagine-hero-ai-search",setupAISearchHeroTelemetry);awaitDefined("reimagine-filtered-search",setupFilteredSearchTelemetry);setTimeout(()=>{var isAcomAssetHubPreviewPageInScope=window.location.href.includes("https://golf-author.adobeprod.microsoft.com/content/launches/2026/01/21/1098091-dev-2026/content/azure/acom/en-us/resources/research.html");var isAcomAssetHubPageInScope=window.location.href.includes("https://azure.microsoft.com/en-us/resources/research");if(isAcomAssetHubPreviewPageInScope||isAcomAssetHubPageInScope){return}const reimagineLinks=ReimagineTelemetryUtils.querySelectorAllDeep("reimagine-link, reimagine-button",document.body,true,true);if(Array.isArray(reimagineLinks)){reimagineLinks.forEach(setupActionTelemetry)}},1500)})})();
/*! 1082371, 1106961 - Add hero transactional class to hero */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/enterprise/e3","/microsoft-365/enterprise/e5","/microsoft-365/enterprise/office-365-e3","/microsoft-365/enterprise/f1","/microsoft-365/enterprise/f3","/microsoft-365/enterprise/office-365-e1","/microsoft-365/enterprise/office-365-e5","/microsoft-365/business/microsoft-365-business-basic","/microsoft-365/business/microsoft-365-business-premium","/microsoft-365/business/microsoft-365-business-standard","/security/business/microsoft-365-business-premium-upgrade","/security/business/microsoft-365-business-premium-free-trial"]},previews:true};function updateHeroTransactional(){document.querySelector(".section-master:has(.tabs-pill-bar .block-heading .card-plan-detail)")?.classList.add("section-master--blade-hero-transactional")}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(updateHeroTransactional)}})();(()=>{function hideL0AuthoringContainer(){if(window.parent&&window.parent.document&&window.parent!==window){try{const style=window.parent.document.createElement("style");style.id="l0-header-hider";style.textContent='[title="OneCloud Universal Header (L0) [Root]"] { display: none !important; }';window.parent.document.head.appendChild(style)}catch(e){}}else{}}window.SOUtil.runOnPageLoad(hideL0AuthoringContainer)})();
/*! 1092966 - Microsoft Clarity tracking script */
(async()=>{const domains={"azure.microsoft.com":"cn33fv2fqq"};const storeClarityId="rcwvv0hsnp";const sites=[["ai","fklpdhl3lg"],["customers","nqgr9bv86z"],["dynamics-365","56ntj8n5ti"],["education","qbw8y1v5xr"],["evalcenter","co915hf5d5"],["events","bx9lrsl3v8"],["fasttrack","co87mqlj22"],["flexibility","8j710qd1zy"],["health-solutions","qch4fin049"],["hololens","8j7188n0nf"],["industry","8j70sts7ed"],["isv","co8cdtj65f"],["marketplace","sxijn6d0cr"],["mesh","8j7188n0nf"],["microsoft-365","8qumfcbe49"],["microsoft-365-copilot","8qumfcbe49"],["microsoft-cloud","8rugvc69mo"],["microsoft-copilot","jf75j84chi"],["microsoft-fabric","gnlfnng0p8"],["microsoft-learn","gxa46mx9ho"],["microsoft-loop","co87wrbsd6"],["microsoft-teams","8j6z5n8me5"],["microsoft-viva","8j70e2bszm"],["power-platform","69q536qdr1"],["security","8j70lgy2cr"],["software-development-companies","r2mqwu0t85"],["sovereignty","v9s43lmegt"],["sql-server","8j71hxh8mv"],["startups","h9oep2750d"],["store",storeClarityId],["sustainability","co90igj0k6"],["system-center","8ruh2qg98n"],["trust-center","8j70lgy2cr"],["us-government","v9s516swgw"],["windows-365","8j705rlc54"],["windows-server","8ruh98y350"]];const sitePathPattern=String.raw`\/([a-z]{2}|[a-z]{2}-[a-z]{2}|[a-z]{2}-[a-z]{4}-[a-z]{2})\/%SECTION%(\/$|\/.*|$)`;const regexList=sites.map(([section,id])=>[new RegExp(sitePathPattern.replace("%SECTION%",section.replace(/-/g,"\\-")),"i"),id]);const homepagePattern=/^\/([a-z]{2}|[a-z]{2}-[a-z]{2}|[a-z]{2}-[a-z]{4}-[a-z]{2})\/?$/i;function getClarityId(){const host=window.location.hostname;if(domains[host]){return domains[host]}const urlPath=window.location.pathname;for(const[regex,id]of regexList){if(regex.test(urlPath)){return id}}if(host==="www.microsoft.com"&&homepagePattern.test(urlPath)){return storeClarityId}return null}const waitForWcpConsentObj=(maxRetries=100,interval=50)=>{return new Promise((resolve,reject)=>{let retries=0;const checkWcpConsent=setInterval(()=>{if(window.WcpConsent&&window.WcpConsent.siteConsent){clearInterval(checkWcpConsent);resolve()}else if(retries>=maxRetries){clearInterval(checkWcpConsent);reject(new Error("WcpConsent object not found within the expected time"))}retries++},interval)})};function isWcpConsentPresent(){return typeof WcpConsent!=="undefined"&&WcpConsent&&typeof WcpConsent.siteConsent!=="undefined"&&WcpConsent.siteConsent}function isGpcOptInPresent(){return typeof GPC_DataSharingOptIn!=="undefined"&&GPC_DataSharingOptIn!=null}function isConsentRequired(){if(isWcpConsentPresent()&&WcpConsent.siteConsent&&WcpConsent.siteConsent.isConsentRequired!==undefined&&WcpConsent.siteConsent.isConsentRequired!==null){return WcpConsent.siteConsent.isConsentRequired}return true}function isConsentGranted(userConsent){return userConsent&&userConsent.Advertising&&userConsent.Analytics&&userConsent.SocialMedia}function getUserConsent(){if(WcpConsent&&WcpConsent.siteConsent&&0!==Object.keys(WcpConsent.siteConsent).length){return WcpConsent.siteConsent.getConsent()}return undefined}function checkUserConsent(){var userConsent=getUserConsent();return isConsentGranted(userConsent)}const loadClarity=()=>{const clarityId=getClarityId();if(!clarityId){console.warn("Clarity not loaded: No matching Clarity project for this site");return}(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);t.id="oc-clarity-script-1092966"})(window,document,"clarity","script",clarityId)};await waitForWcpConsentObj().then(()=>{if(isGpcOptInPresent()&&GPC_DataSharingOptIn===true&&(!isConsentRequired()||checkUserConsent())){loadClarity();console.log("Clarity loaded")}else{console.log("Clarity not loaded due to lack of user consent")}}).catch(error=>{console.error("Error loading Clarity:",error)})})();
/*! 1096730 - Incorrect tab item aria-label */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/business/microsoft-365-plans-and-pricing"],markets:["en-us"]},previews:true};const Selectors={tabsPillBarRadio:".pill-bar.pill-bar--radio-tabs",tabItem:".ocr-input.ocr-input--type-radio",tabItemTagContent:".tag.tag--not-clickable.tag--size-s .label-eyebrow p"};function run(){const tabsPillBars=document.querySelectorAll(Selectors.tabsPillBarRadio);tabsPillBars.forEach(tabsPillBar=>{const tabItems=tabsPillBar.querySelectorAll(Selectors.tabItem);tabItems.forEach(tabItem=>{const tagElement=tabItem.querySelector(Selectors.tabItemTagContent);if(tagElement){const content=tagElement.textContent.trim();const ariaLabel=tabItem.getAttribute("aria-label");if(content&&ariaLabel){tabItem.setAttribute("aria-label",`${ariaLabel} ${content}`)}else if(content&&!ariaLabel){tabItem.setAttribute("aria-label",content)}}})})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-viva/integrations"]},previews:true};function fixCarouselAccessibility(){const carousels=document.querySelectorAll(".carousel");carousels.forEach(carousel=>{const prevBtn=carousel.querySelector(".carousel-control-prev")||carousel.querySelector('[data-slide="prev"]');const nextBtn=carousel.querySelector(".carousel-control-next")||carousel.querySelector('[data-slide="next"]');const updateTabindex=()=>{setTimeout(()=>{const activeItem=carousel.querySelector(".carousel-item.active");if(activeItem){const cards=activeItem.querySelectorAll(".card");cards.forEach(card=>{const img=card.querySelector("img.card-img");if(card.hasAttribute("tabindex")){card.removeAttribute("tabindex")}if(img!==null){img.setAttribute("tabindex","0")}})}},600)};if(prevBtn){prevBtn.addEventListener("click",updateTabindex)}if(nextBtn){nextBtn.addEventListener("click",updateTabindex)}updateTabindex()})}if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(fixCarouselAccessibility)}})();
/*! 1061292 - Fix Play Icon Accessibility Role */
(()=>{const pageScope={"www.microsoft.com":{paths:["/trust-center/compliance/due-diligence-checklist"]},previews:true};function run(){const modalTriggerBtns=document.querySelectorAll(".modal-trigger");modalTriggerBtns.forEach(btn=>{btn.setAttribute("role","button");btn.style.cursor="pointer"})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();
/*! 1096783 - hide background image for hero media in high contrast mode */
(()=>{const pageScope={"www.microsoft.com":{paths:["/security"],markets:["en-us"]},previews:true};const customStyles=`
		@media (forced-colors: active) {
			[ocr-component-name="hero-media"] .hero-media__media [ocr-component-name="html-video"] {
				display: none;
			}
		}
	`;const overrideId="1096783";if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(()=>{window.SOUtil.addStylesheet(customStyles,overrideId)})}})();
/*! 1096784 - Fix multiple issues with the dropdown */
(()=>{const pageScope={"www.microsoft.com":{paths:["/security/pricing","/qa-folder/iss_qa"],allSubpaths:true,markets:["en-us"]},previews:true};class ReimagineSOUtils{static querySelectorDeep=(selector,rootNode=document.body,deep=false)=>{const results=this.querySelectorAllDeep(selector,rootNode,deep,false);return Array.isArray(results)&&results.length?results[0]:results};static querySelectorAllDeep=(selector,rootNode=document.body,deep=false,all=true)=>{if(!selector)return null;if(!deep){return all?Array.from(rootNode.querySelectorAll(selector)):rootNode.querySelector(selector)}const results=[];const traverser=node=>{if(!all&&results.length)return;if(node.nodeType!==Node.ELEMENT_NODE)return;if(node.matches(selector)){results.push(node);if(!all)return}for(const child of node.children){traverser(child)}if(node.shadowRoot){for(const shadowChild of node.shadowRoot.children){traverser(shadowChild)}}};traverser(rootNode);return all?results:results.length?results[0]:null}}function run(){const dropdowns=ReimagineSOUtils.querySelectorAllDeep("reimagine-dropdown",document.body,true,true);const menulists=ReimagineSOUtils.querySelectorAllDeep("reimagine-menu-list",document.body,true,true);dropdowns.forEach(dropdown=>{if(dropdown){dropdown.setAttribute("trigger-role","listbox")}});menulists.forEach(menulist=>{if(menulist){const menulistItems=ReimagineSOUtils.querySelectorAllDeep("reimagine-menu-list-item",menulist,true,true);if(menulist.getAttribute("configuration")==="heading"){processMenuListWithHeadings(menulistItems)}else{processMenuListWithoutHeadings(menulistItems)}addKeyboardNavigation(menulist,menulistItems);function processMenuListWithHeadings(items){let currentGroupOptions=[];let currentGroupHeading=null;items.forEach(item=>{const config=item.getAttribute("configuration");if(config==="heading"){if(currentGroupHeading&&currentGroupOptions.length>0){setAriaLabelsForGroup(currentGroupHeading,currentGroupOptions)}currentGroupHeading=item;currentGroupOptions=[]}else if(config==="option"){currentGroupOptions.push(item)}});if(currentGroupHeading&&currentGroupOptions.length>0){setAriaLabelsForGroup(currentGroupHeading,currentGroupOptions)}}function findElementWithSelectors(shadowRoot,selectors){for(const selector of selectors){const element=shadowRoot.querySelector(selector);if(element)return element}return null}function setAriaLabelsForGroup(heading,options){const groupLen=options.length;const headingText=heading.innerText;options.forEach((optionItem,optionIndex)=>{const optionElement=findElementWithSelectors(optionItem.shadowRoot,['div.option[role="option"]','div[role="option"]',"div.option","a"]);const optionText=optionItem.innerText;if(optionElement){optionElement.setAttribute("aria-label",`${headingText}, ${optionText}, ${optionIndex+1} of ${groupLen} items`)}else{console.warn(`No matching element found for optionItem at index ${optionIndex} in group "${headingText}"`)}})}function processMenuListWithoutHeadings(items){const len=items.length;items.forEach((item,index)=>{const target=findElementWithSelectors(item.shadowRoot,["a",'[part="option"]','div.option[role="option"]','div[role="option"]']);if(target){const text=item.innerText;target.setAttribute("aria-label",`${text}, ${index+1} of ${len}`)}else{console.warn(`No matching element found for menulistItem at index ${index}`)}})}function addKeyboardNavigation(menulist,items){const isGrouped=menulist.getAttribute("configuration")==="heading";const focusableItems=items.filter(item=>item.getAttribute("configuration")!=="heading");if(focusableItems.length===0)return;menulist.addEventListener("keydown",e=>{if(!["ArrowDown","ArrowUp"].includes(e.key))return;e.preventDefault();let currentIndex=-1;focusableItems.forEach((item,index)=>{const optionElement=findElementWithSelectors(item.shadowRoot,['div.option[role="option"]','div[role="option"]',"div.option","a",'[part="option"]']);if(optionElement&&(document.activeElement===optionElement||optionElement.contains(document.activeElement))){currentIndex=index}});let nextIndex=currentIndex;if(isGrouped&&(e.key==="ArrowDown"||e.key==="ArrowUp")){const currentItem=focusableItems[currentIndex];if(currentItem){const currentGroupItems=[];let foundGroup=false;items.forEach(item=>{const config=item.getAttribute("configuration");if(config==="heading"){if(foundGroup)return;foundGroup=false}else if(config==="option"){if(item===currentItem)foundGroup=true;if(!foundGroup)return;currentGroupItems.push(item)}});const posInGroup=currentGroupItems.indexOf(currentItem);if(e.key==="ArrowDown"){if(posInGroup<currentGroupItems.length-1){nextIndex=focusableItems.indexOf(currentGroupItems[posInGroup+1])}else{const nextGroupFirstItem=focusableItems[currentIndex+1];nextIndex=nextGroupFirstItem?currentIndex+1:0}}else{if(posInGroup>0){nextIndex=focusableItems.indexOf(currentGroupItems[posInGroup-1])}else{const prevGroupLastItem=focusableItems[currentIndex-1];nextIndex=prevGroupLastItem!==undefined?currentIndex-1:focusableItems.length-1}}}}else{switch(e.key){case"ArrowDown":nextIndex=currentIndex<focusableItems.length-1?currentIndex+1:0;break;case"ArrowUp":nextIndex=currentIndex>0?currentIndex-1:focusableItems.length-1;break}}if(nextIndex!==-1&&focusableItems[nextIndex]){const nextOptionElement=findElementWithSelectors(focusableItems[nextIndex].shadowRoot,['div.option[role="option"]','div[role="option"]',"div.option","a",'[part="option"]']);if(nextOptionElement){nextOptionElement.focus()}}})}}})}if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();
/*! 1097090 - Fix <reimagine-featured/> incorrect tabindex within legacy secondary nav */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-teams/teams-free"],markets:["en-us"]},previews:true};const selector={secondaryStickyNav:'[ocr-component-name="secondary-sticky-nav"]',reimagineFeatured:"reimagine-featured"};function run(){const secondaryStickyNavs=document.querySelectorAll(selector.secondaryStickyNav);secondaryStickyNavs.forEach(nav=>{const reimagineFeatureds=nav.querySelectorAll(selector.reimagineFeatured);reimagineFeatureds.forEach(featured=>{if(featured.tabIndex===-1){featured.removeAttribute("tabindex")}})})}if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();
/*! 1065419 - Ensure screen readers announce when the Clear button is activated and all selected options in the dropdown are cleared.  */
(()=>{"use strict";const pageScope={"www.microsoft.com":{paths:["/microsoft-365/microsoft-365-products"],markets:["en-us"]},previews:true};const Selectors={filteredSearch:"reimagine-filtered-search",container:'reimagine-container[class="container"]',tabs:"reimagine-tabs",tabPanel:"reimagine-tab-panel",dropdownBar:"reimagine-dropdown-bar",counter:'[slot="counter"]',clearButton:"reimagine-link"};const announce=(message,priority="polite")=>{const region=document.createElement("div");region.setAttribute("role","status");region.setAttribute("aria-live",priority);region.setAttribute("aria-atomic","true");Object.assign(region.style,{position:"absolute",left:"-10000px",width:"1px",height:"1px",overflow:"hidden"});document.body.appendChild(region);setTimeout(()=>region.textContent=message,100);setTimeout(()=>region.remove(),3e3)};const processDropdownBar=dropdownBar=>{const clearButton=dropdownBar?.querySelector(Selectors.clearButton);const counter=dropdownBar?.querySelector(Selectors.counter);if(!clearButton||!counter)return;if(dropdownBar.dataset.so1065419==="true")return;dropdownBar.dataset.so1065419="true";let totalItems=null,hasActiveFilters=false,previousCount=null;const updateClearButtonState=()=>{const match=counter.textContent?.trim().match(/^(\d+)/);if(!match)return;const currentCount=parseInt(match[1],10);if(currentCount===0&&totalItems===null)return;if(totalItems===null||currentCount>totalItems)totalItems=currentCount;const filtersApplied=currentCount<totalItems;if(filtersApplied){clearButton.removeAttribute("disabled");hasActiveFilters=true;if(previousCount!==null&&previousCount!==0&&currentCount!==previousCount){announce(currentCount===0?"No items match the selected filters":`Showing ${currentCount} of ${totalItems} items`)}}else{clearButton.setAttribute("disabled","");hasActiveFilters=false}previousCount=currentCount};clearButton.removeEventListener("click",clearButton._clickListener);clearButton._clickListener=()=>{if(hasActiveFilters)setTimeout(()=>announce("Cleared the applied filters","assertive"),100)};clearButton.addEventListener("click",clearButton._clickListener,true);const observer=new MutationObserver(updateClearButtonState);observer.observe(counter,{childList:true,characterData:true,subtree:true});dropdownBar._observer=observer;window.addEventListener("beforeunload",()=>observer.disconnect(),{once:true});updateClearButtonState()};function run(){document.addEventListener("onOcrClientPricingRenderComplete",()=>{setTimeout(()=>{const filteredSearchComponents=document.querySelectorAll(Selectors.filteredSearch);filteredSearchComponents.forEach(filteredSearch=>{if(!filteredSearch.shadowRoot)return;const container=filteredSearch.shadowRoot.querySelector(Selectors.container);const tabs=container?.querySelector(Selectors.tabs);const tabPanels=tabs?.querySelectorAll(Selectors.tabPanel);if(!tabPanels?.length)return;tabPanels.forEach(tabPanel=>{const dropdownBars=tabPanel.querySelectorAll(Selectors.dropdownBar);dropdownBars.forEach(processDropdownBar)})})},500)})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();
/*! 1096727 - Pricing cards accessibility fixes */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/microsoft-365-products"],markets:["en-us"]},previews:true};const getTextContent=(element,fallback="")=>{return element?.textContent?.trim()||fallback};const setAriaLabel=(element,label)=>{if(!element||!label)return false;element.setAttribute("aria-label",label);return true};const getParentCard=element=>{return element?.closest("reimagine-card-product-pricing")};const getProductTitle=reimagineSkuEl=>{if(reimagineSkuEl){const skuNameEl=reimagineSkuEl.querySelector('[slot="title"]');const productTitle=getTextContent(skuNameEl);if(productTitle)return productTitle}};const applyCardAccessibilityFixes=card=>{const skuElement=card.querySelector("reimagine-sku");if(skuElement){const productTitle=getProductTitle(skuElement);associateCompareCheckboxesWithCardName(card,productTitle);requestAnimationFrame(()=>{const pricingContainer=skuElement.shadowRoot?.querySelector(".pricing-values");if(pricingContainer){pricingContainer.removeAttribute("aria-hidden")}});const noteSlot=skuElement.querySelector('[slot="note"]');if(noteSlot){var seeTermsLink=noteSlot.querySelector("a");if(seeTermsLink){const noteText=getTextContent(seeTermsLink).toLowerCase();const ariaLabel=seeTermsLink.getAttribute("aria-label");const href=seeTermsLink.getAttribute("href");if(href&&href.includes("linkid=2265909")&&noteText.includes("terms")&&(!ariaLabel||ariaLabel.toLowerCase()==="see terms")){seeTermsLink.setAttribute("aria-label",`See Microsoft Store Terms of Sale`)}}}const buttonGroup=skuElement.querySelector("reimagine-button-group");const reimagineBtns=buttonGroup?buttonGroup.querySelectorAll("reimagine-button"):[];reimagineBtns.forEach(reimagineBtn=>{const anchorElem=reimagineBtn.shadowRoot?.querySelector("a");const btnTextSpan=reimagineBtn.querySelector('span[slot="button__text"]');const anchorText=getTextContent(btnTextSpan);if(anchorText){const descriptiveLabel=`${anchorText} ${productTitle}`;setAriaLabel(anchorElem,descriptiveLabel)}})}};const associateCompareCheckboxesWithCardName=(card,productTitle)=>{const checkbox=card.shadowRoot?.querySelector(".checkbox__label .checkbox__input");if(checkbox&&!checkbox.dataset.so1096727){checkbox.dataset.so1096727="true";setAriaLabel(checkbox,`${productTitle} Compare`)}};const handleBackToTab=filteredSearchElemShadowRoot=>{filteredSearchElemShadowRoot.querySelectorAll("reimagine-tab-panel").forEach(tabPanel=>{const reimagineBtn=tabPanel.shadowRoot?.querySelector('reimagine-button[part="tab-panel__sr-button"]');const backBtn=reimagineBtn?.shadowRoot?.querySelector("button");if(!backBtn||backBtn.dataset.so1096727)return;backBtn.dataset.so1096727="true";backBtn.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();const activeTab=filteredSearchElemShadowRoot.querySelector("reimagine-tab[active]");activeTab?.focus()})})};const handleClearButton=filteredSearchElemShadowRoot=>{const clearButtonParent=filteredSearchElemShadowRoot.querySelector('reimagine-link[slot="clear-all"]');if(!clearButtonParent||clearButtonParent.dataset.so1096727)return;clearButtonParent.dataset.so1096727="true";clearButtonParent.addEventListener("keydown",e=>{if(e.key!=="Enter"&&e.key!==" ")return;e.preventDefault();clearButtonParent.click()})};const applyAllFixes=filteredSearchElemShadowRoot=>{try{const pricingCards=filteredSearchElemShadowRoot.querySelectorAll("reimagine-card-product-pricing");pricingCards.forEach(card=>applyCardAccessibilityFixes(card));handleBackToTab(filteredSearchElemShadowRoot);handleClearButton(filteredSearchElemShadowRoot)}catch(e){console.error("SO 1096727 error:",e)}};function run(){document.addEventListener("onOcrClientPricingRenderComplete",()=>{setTimeout(()=>{const filteredSearchComponents=document.querySelectorAll("reimagine-filtered-search");filteredSearchComponents.forEach(filteredSearch=>{if(!filteredSearch.shadowRoot)return;if(filteredSearch.tabIndex===-1){filteredSearch.removeAttribute("tabindex")}applyAllFixes(filteredSearch.shadowRoot);const skuObserver=new MutationObserver(mutations=>{mutations.forEach(mutation=>{mutation.addedNodes.forEach(node=>{if(node.nodeName==="REIMAGINE-SKU"&&node.dataset.so1096727!=="true"){node.dataset.so1096727="true";const parentCard=getParentCard(node);if(parentCard)applyCardAccessibilityFixes(parentCard)}})})});skuObserver.observe(filteredSearch.shadowRoot,{childList:true,subtree:true})})},500)})}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();
/*! 1080341, 1080098 - Incorrect heading structure */
(()=>{const pageScope={"www.microsoft.com":{paths:["/events/category/microsoft-365-copilot-training","/events/search-catalog","/customers/search"]},previews:true};const selector={filterSearchResult:'[ocr-component-name="filter-search-results"]',filterPanelHeaderTitle:".search-results__filter-panel__header .block-feature__headings",filterPanelBodyItem:".search-results__filter-panel__body button.filter-panel-item__header",filterPanelBodyItemSubcategory:".filter-panel-item__subcategories .block-heading",mainPanelTitle:".search-results__main-panel__header .block-feature__headings",mainPanelDynamicContentEyebrow:".dynamic-content__content .card-grid--disable-card-promo .block-feature__eyebrow",mainPanelDynamicContentTitle:".dynamic-content__content .card-grid--disable-card-promo .block-feature__headings "};function replaceHeadingInElement(container,newTagName){const headings=Array.from(container.children).filter(child=>child instanceof HTMLHeadingElement);headings.forEach(heading=>{const currentTag=heading.tagName.toLowerCase();if(currentTag===newTagName)return;const newHeading=document.createElement(newTagName);const originalClassName=heading.className;const originalTag=currentTag;const useTagAsClass=newTagName!=="p"&&!originalClassName.includes(originalTag);newHeading.className=useTagAsClass?`${originalClassName} ${originalTag}`:originalClassName;newHeading.textContent=heading.textContent;container.replaceChild(newHeading,heading)})}function replaceHeading(targets,newTagName){if(!targets?.length)return;targets.forEach(target=>replaceHeadingInElement(target,newTagName))}function fixHeadingStructure(targetNode){replaceHeading(targetNode.querySelectorAll(selector.filterPanelHeaderTitle),"h2");replaceHeading(targetNode.querySelectorAll(selector.mainPanelTitle),"h2");replaceHeading(targetNode.querySelectorAll(selector.filterPanelBodyItem),"h3");replaceHeading(targetNode.querySelectorAll(selector.filterPanelBodyItemSubcategory),"h4")}function fixCardHeadingStructureInDynamicContent(targetNode){const eyebrows=targetNode.querySelectorAll(selector.mainPanelDynamicContentEyebrow);const titles=targetNode.querySelectorAll(selector.mainPanelDynamicContentTitle);replaceHeading(eyebrows,"p");replaceHeading(titles,"h3")}function run(){const filterSearchResult=document.querySelectorAll(selector.filterSearchResult);if(filterSearchResult.length>0){filterSearchResult.forEach(instance=>{instance.addEventListener("searchResultsCardsLoadedSO",e=>{fixCardHeadingStructureInDynamicContent(e.target)});fixHeadingStructure(instance)})}}if(window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(run)}})();
/*! 1097159 - Fix Narrator navigation by removing aria-hidden from table cells */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/business/with-copilot-plans-and-pricing"],markets:["en-us"]},previews:true};function removeAriaHiddenFromTableCells(){const tables=document.querySelectorAll("table.ocr-table__table");tables.forEach(table=>{const tdCells=table.querySelectorAll('td[aria-hidden="true"]');tdCells.forEach(td=>{td.removeAttribute("aria-hidden")})})}if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(removeAriaHiddenFromTableCells)}})();
/*! 1099829 - Fix stat footnote can't be clickable and link footnote item back */
(()=>{function updateFootnoteTagAndAttributes(){if(!document.querySelector("reimagine-data-tiles"))return;const selector='reimagine-data-tiles reimagine-card-stat reimagine-stat span[slot="stat__title-footnote"], reimagine-data-tiles reimagine-card-stat reimagine-stat span[slot="stat__label-footnote"], reimagine-data-tiles reimagine-card-stat reimagine-stat a[slot="stat__title-footnote"]';const results=document.querySelectorAll(selector);results.forEach(result=>{const newElem=document.createElement("a");for(const attr of result.attributes){newElem.setAttribute(attr.name,attr.value)}newElem.append(...result.childNodes);newElem.style.setProperty("color","var(--ds-stat-footnote-color, var(--ds-theme-foreground-base-strong))");const href=newElem.getAttribute("href");if(href&&href.startsWith("#footnote-")){const footnoteId=href.substring(1);const refIdBase=footnoteId.replace("footnote-","footnote-ref-");let refId=refIdBase;let counter=1;while(document.getElementById(refId)){refId=`${refIdBase}-${counter}`;counter++}if(!newElem.id){newElem.id=refId}const footnote=document.getElementById(footnoteId);if(footnote&&footnote.tagName.toLowerCase()==="a"){if(!footnote.getAttribute("href")){footnote.setAttribute("href","#"+refId)}newElem.addEventListener("click",()=>{footnote.setAttribute("href","#"+refId)})}}result.replaceWith(newElem)})}if(window.SOUtil){window.SOUtil.runOnPageLoad(updateFootnoteTagAndAttributes)}})();
/*! 1100751 - Update visibility if already defined */
(()=>{const TAGS=["reimagine-pricing-grid","reimagine-timeline","reimagine-story-telling","reimagine-hero-author","reimagine-editorial-agenda","reimagine-media-text-stacked","reimagine-banner-timer","reimagine-banner-search","reimagine-media-playlist-video-item","reimagine-media-playlist-video","reimagine-data-tiles","reimagine-immersive-scroll","reimagine-media-with-caption","reimagine-media-video","reimagine-jumplinks","reimagine-long-form-seo","reimagine-banner-heading","reimagine-cta-banner","reimagine-statement-banner","reimagine-section-with-media","reimagine-banner-news","reimagine-banner-featured","reimagine-data-with-icon","reimagine-data-with-caption","reimagine-featured","reimagine-featured-stack","reimagine-card-grid-staggered","reimagine-card-grid-product","reimagine-mixed-stack","reimagine-hero-impact","reimagine-hero-featured-slider","reimagine-hero-featured-slider-item","reimagine-hero-dynamic-text","reimagine-hero-article","reimagine-hero-ai-search","reimagine-hero-search","reimagine-hero-featured-xl-video","reimagine-hero-product","reimagine-hero-category","reimagine-logo-testimonials","reimagine-high-impact-product-accordion","reimagine-media-demo","reimagine-carousel-card-grid","reimagine-carousel-featured","reimagine-filtered-search","reimagine-high-impact-featured-accordion","reimagine-high-impact-accordion","reimagine-features-and-pricing-product-highlight","reimagine-features-and-pricng-3-col","reimagine-dynamic-search-results","reimagine-search-results","reimagine-story-grid","reimagine-editorial-article-takeaway","reimagine-editorial-article-summary","reimagine-story-summary","reimagine-article-list","reimagine-article-list-item","reimagine-editorial-article-chapter","reimagine-editorial-article-quote","reimagine-editorial-article-header","reimagine-editorial-featured","reimagine-secondary-nav","reimagine-scroll-spy","reimagine-announcement","reimagine-base-ui-shell"];const forceVisible=el=>{el.style.setProperty("visibility","visible","important");el.style.setProperty("opacity","1","important")};const isHiddenByCss=el=>{const cs=getComputedStyle(el);return cs.visibility==="hidden"||cs.opacity==="0"};const checkAndUpdateVisibility=()=>{const presentTags=TAGS.filter(t=>document.querySelector(t));if(!presentTags.length){console.info("[WC Visibility Fix] None of the target tags were found in the DOM.");return}for(const tag of presentTags){const els=Array.from(document.querySelectorAll(tag));const registryCtor=customElements.get(tag);for(const el of els){const isRegistered=!!registryCtor;if(isRegistered&&isHiddenByCss(el)){forceVisible(el)}}}};if(window.SOUtil){window.SOUtil.runOnPageLoad(checkAndUpdateVisibility)}})();
/*! 1092656 - Fix elements with ARIA role missing the required aria-level attribute */
(()=>{const pageScope={"www.microsoft.com":{paths:["/windows-365","/microsoft-teams/group-chat-software","/security","/customers","/education","/ai","/ai/microsoft-sales-copilot"],markets:["en-us"]},"azure.microsoft.com":{paths:[""],markets:["en-us"]},previews:true};function addAriaLevelToElementsWithAriaRole(){document.addEventListener("fetchAndRenderCarouselsFinished",e=>{const{carouselEl}=e.detail||{};const testimonialCards=carouselEl?carouselEl.querySelectorAll(".testimonial-card"):[];testimonialCards.forEach(card=>{const heading=card.querySelector('.testimonial-card__quote blockquote span[role="heading"]');if(heading){const classMath=heading.className.match(/h([1-6])/i);if(classMath){heading.setAttribute("aria-level",classMath[1])}else{heading.setAttribute("aria-level","2")}}})})}if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(addAriaLevelToElementsWithAriaRole)}})();
/*! 1102133 - Fix ump visibility when not autoplay */
(()=>{const waitForUmpReady=async(ump,maxRetries=50)=>{for(let i=0;i<maxRetries;i++){if(ump.options){return true}await new Promise(resolve=>setTimeout(resolve,100))}return false};window.SOUtil.runOnPageLoad(async()=>{const umps=document.querySelectorAll("reimagine-media universal-media-player");for(const ump of umps){const isReady=await waitForUmpReady(ump);if(isReady&&!ump.options.autoplay){ump.classList.add("ump-visible");ump.classList.remove("ump-hidden")}}})})();
/*! 1102396 Prevent CTA click bubbling in dynamic search results cards */
(()=>{const PROCESSED_CARD_ATTR="data-cta-processed";const pageScope={"azure.microsoft.com":{paths:["/resources/research"],markets:["en-us"]},previews:true};var isAcomAssetHubPreviewPageInScope=window.location.href.includes("https://golf-author.adobeprod.microsoft.com/content/launches/2026/01/21/1098091-dev-2026/content/azure/acom/en-us/resources/research.html");const processCard=card=>{if(card.hasAttribute(PROCESSED_CARD_ATTR)){return}const reimagineLink=card.querySelector("reimagine-link");if(!reimagineLink){return}const checkShadowRoot=setInterval(()=>{if(reimagineLink.shadowRoot){clearInterval(checkShadowRoot);const anchor=reimagineLink.shadowRoot.querySelector("a");if(anchor){anchor.addEventListener("click",event=>{event.stopPropagation()});card.setAttribute(PROCESSED_CARD_ATTR,"true")}}},100);setTimeout(()=>clearInterval(checkShadowRoot),5e3)};const processAllCards=blade=>{if(!blade||!blade.shadowRoot){return}const cards=blade.shadowRoot.querySelectorAll("reimagine-card-feature[clickable]");cards.forEach(processCard)};const setupObservers=blade=>{if(!blade||!blade.shadowRoot){return}const cardSection=blade.shadowRoot.querySelector(".card-section");if(cardSection){const cardObserver=new MutationObserver(mutations=>{mutations.forEach(mutation=>{mutation.addedNodes.forEach(node=>{if(node.nodeType===Node.ELEMENT_NODE){if(node.matches&&node.matches("reimagine-card-feature[clickable]")){processCard(node)}const cards=node.querySelectorAll&&node.querySelectorAll("reimagine-card-feature[clickable]");if(cards){cards.forEach(processCard)}}})})});cardObserver.observe(cardSection,{childList:true,subtree:true});processAllCards(blade)}};const waitForBlade=()=>{const intervalId=setInterval(()=>{const blade=document.querySelector("reimagine-dynamic-search-results");if(blade){clearInterval(intervalId);setTimeout(()=>{setupObservers(blade)},500)}},500);setTimeout(()=>clearInterval(intervalId),1e4)};window.SOUtil.runOnPageLoad(async()=>{if(window.SOUtil.pageIsInScope(pageScope)||isAcomAssetHubPreviewPageInScope){waitForBlade()}})})();
/*! 1103207: [AEM] Dynamic Search Results (RDS Blade) | Checkboxes in filter are inconsistently sized when filter values wrap to second line */
(()=>{const pageScope={"www.microsoft.com":{paths:["/trust-center/security/secure-future-initiative/patterns-and-practices"]},previews:true};function updateCheckboxControlStyle(){const dynamicSearchResultsElem=document.querySelector("reimagine-dynamic-search-results");const root=dynamicSearchResultsElem?.shadowRoot;if(!root)return;const checkboxes=root.querySelectorAll("reimagine-filter-list reimagine-checkbox");if(!checkboxes?.length)return;checkboxes.forEach(cb=>{const control=cb.shadowRoot?.querySelector(".checkbox__control");if(control){control.style.flexShrink="0";return}})}if(window.SOUtil.pageIsInScope(pageScope)){document.addEventListener("DOMContentLoaded",async()=>{await customElements.whenDefined("reimagine-dynamic-search-results");updateCheckboxControlStyle()});document.addEventListener("dynamicSearchResultsFiltersInitializedFromURL",()=>{updateCheckboxControlStyle()})}})();
/*! 1097342 List items should not get disappeared after resizing the page at 400% */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-fabric/features","/microsoft-copilot/organizations","/microsoft-365-copilot/ai-get-ready","/microsoft-365-copilot/business","/windows-server/blog/2021/03/02/announcing-windows-server-2022-now-in-preview"],markets:["en-us"]},"azure.microsoft.com":{paths:["/products/cosmos-db","/solutions/quantum-computing"],markets:["en-us"]},previews:true};const STICKY_SELECTOR='[data-mount="sticky"]';const DROPDOWN_MENU_SELECTOR=".dropdown-menu";const MOBILE_BREAKPOINT=860;const STICKY_Z_INDEX=1061;const updateDropdownHeight=stickyElement=>{const dropdownMenu=stickyElement.querySelector(DROPDOWN_MENU_SELECTOR);if(!dropdownMenu)return;const viewportHeight=window.innerHeight;const stickyHeight=stickyElement.offsetHeight;const availableHeight=viewportHeight-stickyHeight;const isMobileViewport=window.innerWidth<MOBILE_BREAKPOINT;const isMenuOverflowing=dropdownMenu.scrollHeight>availableHeight;if(isMobileViewport&&isMenuOverflowing&&availableHeight>0){dropdownMenu.style.height=`${availableHeight}px`;stickyElement.style.zIndex=STICKY_Z_INDEX}else{dropdownMenu.style.height="";stickyElement.style.zIndex=""}};if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(()=>{const stickyElements=document.querySelectorAll(STICKY_SELECTOR);stickyElements.forEach(stickyElement=>{stickyElement.addEventListener("onShow",()=>{requestAnimationFrame(()=>updateDropdownHeight(stickyElement))})})})}})();
/*! 1103672 - Legacy OCR authoring improvements */
(()=>{const pageScope={"azure.microsoft.com":{},"www.microsoft.com":{},previews:true,editorOnly:true};const overrideId="1103672";const cssStyles=`
		.aem-AuthorLayer-Edit .cq-placeholder,
		.aem-AuthorLayer-Edit .oc-author-placeholder,
		.aem-AuthorLayer-Edit [ocr-component-name="action"] center,
		.aem-AuthorLayer-Edit [ocr-component-name="action-group"] center {
			display: none;
		}

		.aem-AuthorLayer-Edit .secondary-nav a.w-100 {
			width: fit-content !important;
		}

		.aem-AuthorLayer-Edit [ocr-component-name="secondary-sticky-nav"] .scrollspy-container > center,
		.aem-AuthorLayer-Edit .secondary-nav a > center {
			font-weight: bold;
			font-size: small;
			color: black;
		}

		.aem-AuthorLayer-Edit .secondary-nav a > center {
			position: absolute;
		}

		.aem-AuthorLayer-Edit .accordion--vertical .ocr-accordion-item__top-content,
		.aem-AuthorLayer-Edit .accordion--vertical .button-group--stacked,
		.aem-AuthorLayer-Edit .accordion--vertical .ocr-accordion-item__body .cq-Editable-dom > [ocr-component-name="action"],
		.aem-AuthorLayer-Edit .accordion--vertical .ocr-accordion-item__body .cq-Editable-dom > .newpar,
		.aem-AuthorLayer-Edit .accordion--vertical .ocr-accordion-item__body .cq-Editable-dom > [ocr-component-name="media"] {
			width: 50%;
		}

		.aem-AuthorLayer-Edit .accordion--vertical .ocr-accordion-item__body .cq-Editable-dom > [ocr-component-name="media"] {
			justify-self: end;
		}

		.aem-AuthorLayer-Edit [ocr-component-name="badge"] {
			width: var(--badge-width);
			height: var(--badge-height);
		}

		.aem-AuthorLayer-Edit [ocr-component-name="icon"] {
			width: calc(var(--badge-width) - 10px);
			height: calc(var(--badge-width) - 10px);
		}

		.aem-AuthorLayer-Edit [ocr-component-name="icon"] > [ocr-component-name="image"] {
			width: calc(var(--badge-width) - 20px);
			height: calc(var(--badge-width) - 20px);
		}

		.aem-AuthorLayer-Edit [ocr-component-name="card-plan-detail"] .card-plan-detail__style-div {
			z-index: -1;
		}
	`;const cqOverlayStyles=`
		.cq-Overlay--placeholder[data-text="Block Slim (OneCloud Reimagine Atomic)"]::before,
		.cq-Overlay--placeholder[data-text="Action Group (OneCloud Reimagine Foundation)"]::before,
		.cq-Overlay--placeholder[data-text="SKU (OneCloud Reimagine Foundation)"]::before,
		.cq-Overlay--placeholder[data-text="Tabs V2 (OneCloud Reimagine Atomic)"]::before,
		.cq-Overlay--placeholder[data-text="Carousel (OneCloud Reimagine Atomic)"]::before {
			content: none !important;
		}

		.cq-Overlay--placeholder[data-text="Block Slim (OneCloud Reimagine Atomic)"].is-hover>.cq-Overlay--component-name,
		.cq-Overlay--placeholder[data-text="Action Group (OneCloud Reimagine Foundation)"].is-hover>.cq-Overlay--component-name,
		.cq-Overlay--placeholder[data-text="SKU (OneCloud Reimagine Foundation)"].is-hover>.cq-Overlay--component-name,
		.cq-Overlay--placeholder[data-text="Tabs V2 (OneCloud Reimagine Atomic)"].is-hover>.cq-Overlay--component-name,
		.cq-Overlay--placeholder[data-text="Carousel (OneCloud Reimagine Atomic)"].is-hover>.cq-Overlay--component-name {
			display: block !important;
		}
	`;if(!window.SOUtil||!window.SOUtil.pageIsInScope(pageScope)){return}window.SOUtil.addStylesheet(cssStyles,overrideId);const editorDoc=window.frameElement?.ownerDocument;if(editorDoc&&editorDoc.head&&!editorDoc.getElementById("static-override-"+overrideId+"-cq-overlay")){const style=editorDoc.createElement("style");style.id="static-override-"+overrideId+"-cq-overlay";style.textContent=cqOverlayStyles;editorDoc.head.appendChild(style)}})();
/*! 1106991 - Fix for UMP overflow when the container is too small */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365-copilot/maximize-impact"]},previews:true};const UMP_SELECTOR=".cascade-media-player universal-media-player";if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(()=>{const umpElements=document.querySelectorAll(UMP_SELECTOR);umpElements.forEach(umpElement=>{umpElement.style.setProperty("min-width","0","important");umpElement.style.setProperty("min-height","0","important")})})}})();(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365-copilot/business","/microsoft-365-copilot/chat","/microsoft-365-copilot/enterprise","/microsoft-365-copilot/test/prompt-media","/microsoft-365/explore-microsoft-365-for-individuals","/microsoft-365/outlook/outlook-for-business","/microsoft-copilot/organizations"]},previews:false};if(!window.SOUtil||!window.SOUtil.pageIsInScope(pageScope)){return}const riveMediaEls=document.querySelectorAll('[data-component-id="9b002e252846bf14b532f40bd58c2fca"]:has(cascade-rive-animation)');if(riveMediaEls.length===0){return}const overrideId="1112681";const cssStyles=`
		cascade-rive-animation.rive-container {
			width: 100%;
			height: auto;
			position: relative;
			display: block;
		}

		cascade-rive-animation.rive-container canvas {
			width: 100%;
			height: 100%;
			display: block;
			border-radius: 1rem;
		}

		cascade-rive-animation reimagine-button {
			position: absolute;
			z-index: 1;
			margin: 1rem;
		}

		/* Play/Pause Button Position Classes */
		cascade-rive-animation.reimagine-button-bottom-right reimagine-button {
			bottom: 0;
			right: 0;
		}

		cascade-rive-animation.reimagine-button-bottom-left reimagine-button {
			bottom: 0;
			left: 0;
		}

		cascade-rive-animation.reimagine-button-top-right reimagine-button {
			top: 0;
			right: 0;
		}

		cascade-rive-animation.reimagine-button-top-left reimagine-button {
			top: 0;
			left: 0;
		}
	`;window.SOUtil.addStylesheet(cssStyles,overrideId);(()=>{function isValidRiveController(controller){return!!controller&&typeof controller.setupAnimationFromElement==="function"&&typeof controller.getAnimation==="function"&&typeof controller.getAllAnimations==="function"}if(!window.ocrRiveControllerReady){window.ocrRiveControllerReady={}}if(!window.ocrRiveControllerReady.promise){window.ocrRiveControllerReady.promise=new Promise((resolve,reject)=>{window.ocrRiveControllerReady.resolve=resolve;window.ocrRiveControllerReady.reject=reject})}function addRiveController(){class RiveController{static isRtlPage=document.documentElement.getAttribute("dir")==="rtl";static fontAssetCache={};static DEFAULT_FONT="segoeui.ttf";static LOCALE_FONT_MAP={"am-et":"ebrima.ttf","ti-et":"ebrima.ttf","as-in":"nirmala.ttf","bn-bd":"nirmala.ttf","bn-in":"nirmala.ttf","gu-in":"nirmala.ttf","hi-in":"nirmala.ttf","kn-in":"nirmala.ttf","kok-in":"nirmala.ttf","ml-in":"nirmala.ttf","mr-in":"nirmala.ttf","ne-np":"nirmala.ttf","or-in":"nirmala.ttf","pa-in":"nirmala.ttf","si-lk":"nirmala.ttf","ta-in":"nirmala.ttf","te-in":"nirmala.ttf","chr-cher-us":"gadugi.ttf","zh-hans":"msyh.ttc","zh-hant":"msjh.ttc","zh-cn":"msyh.ttc","zh-hk":"msjh.ttc","zh-tw":"msjh.ttc","ja-jp":"yugothm.ttc","km-kh":"leelawui.ttf","th-th":"leelawui.ttf","ko-kr":"malgun.ttf"};constructor(){this.animations=new Map;this.canvasObservers=new WeakMap;this.resizeObserver=null;this.setupResizeObserver()}getAnimation(id){return this.animations.get(id)}getAllAnimations(){return Array.from(this.animations.values())}setupAnimationFromElement(el,config){if(!el){console.warn("RiveController: No element provided");return null}if(el._riveAnimation){return el._riveAnimation}if(el.hasAttribute("data-rive-initialized")){return this.animations.get(el.getAttribute("data-rive-initialized"))}const animation=new RiveAnimation(config,this,el);if(!animation.canvas){console.warn("RiveController: No canvas found in element",el);return null}this.animations.set(animation.config.id,animation);this.addIntersectionObserver(animation);this.observeCanvasResize(animation.canvas);animation.createPlayPauseControl();el.setAttribute("data-rive-initialized",animation.config.id);return animation}removeAnimation(id){const animation=this.animations.get(id);if(animation){const canvas=document.querySelector(document,`#${animation.config.id}`);if(canvas){this.unobserveCanvasResize(canvas)}animation.destroy();this.animations.delete(id)}}createRiveInstance(config,canvasEl){if(!config||!canvasEl){console.warn("RiveController: Invalid config or canvas element for Rive instance creation");return null}const riveInstance=new rive.Rive({src:RiveController.buildAssetUrl(config.file),canvas:canvasEl,autoplay:config.autoplay,autoBind:true,fit:rive.Fit.cover,stateMachines:config.stateMachine,assetLoader:(asset,bytes)=>{const hasProvidedAsset=Boolean(asset?.cdnUuid?.length)||Boolean(bytes?.length);if(asset?.isFont){RiveController.loadFont(asset);return true}if(hasProvidedAsset){return false}return false},onLoad:()=>{riveInstance.resizeDrawingSurfaceToCanvas();const vmi=riveInstance.viewModelInstance;if(vmi&&config.rivContent){this.bindViewModel(vmi,config.rivContent)}},onError:err=>{console.error("Rive load error:",err)}});return riveInstance}bindViewModel(vmi,rivContent){if(!vmi||!(vmi instanceof window.rive.ViewModelInstance)){console.warn("RiveController: Invalid ViewModelInstance provided to bindViewModel");return}if(!rivContent||typeof rivContent!=="object"){return}const isLocObject=rivContent.loc&&typeof rivContent.loc==="object"&&!Array.isArray(rivContent.loc);const isConfigObject=rivContent.config&&typeof rivContent.config==="object"&&!Array.isArray(rivContent.config);const loc=isLocObject?rivContent.loc:{};const config=isConfigObject?rivContent.config:{};const hasLocConfig=isLocObject||isConfigObject;const propertiesToBind=hasLocConfig?{...loc,...config}:rivContent;Object.entries(propertiesToBind).forEach(([key,value])=>{let property;if(value!==null&&typeof value==="object"&&value.type){switch(value.type){case"color":if(typeof value.value!=="number"){console.warn(`Color property "${key}" requires a numeric value (e.g., 0xFFFFFFFF).`);return}if(!Number.isInteger(value.value)||value.value<0||value.value>4294967295){console.warn(`Color property "${key}" must be an integer in the ARGB range (0x00000000 to 0xFFFFFFFF). Received: ${value.value}`);return}property=vmi.color(key);if(property){property.value=value.value}break;case"trigger":if(typeof value.fire!=="boolean"){console.warn(`Trigger property "${key}" requires a boolean 'fire' value.`);return}property=vmi.trigger(key);if(property&&value.fire){property.trigger()}break;case"enum":property=vmi.enum(key);if(property){property.value=value.value}break;case"image":property=vmi.image(key);if(property){const imageUrl=RiveController.buildImageAssetUrl(value.src);if(!imageUrl){console.warn(`Image property "${key}" has an invalid or empty src. Skipping fetch.`);break}this.fetchImageAsset(property,imageUrl).catch(err=>{console.error(`Failed to load image asset for property "${key}" from source "${value.src}":`,err)})}break;default:console.warn(`Unsupported object type "${value.type}" for property "${key}"`);return}if(!property){console.warn(`Property "${key}" not found in Rive file.`)}return}switch(typeof value){case"string":property=vmi.string(key);break;case"number":property=vmi.number(key);break;case"boolean":property=vmi.boolean(key);break;default:console.warn(`Unsupported type "${typeof value}" for property "${key}"`);return}if(property){property.value=value}else{console.warn(`Property "${key}" not found in Rive file.`)}})}static buildImageAssetUrl(src){if(!src||typeof src!=="string"||!src.trim()){console.warn("buildImageAssetUrl: invalid or empty src provided.");return""}const trimmedSrc=src.trim();const hostname=window.location.hostname;const isPreviewEnv=hostname.includes("adobeprod")||hostname.includes("adobeppe")||hostname.includes("localhost");const baseUrl=isPreviewEnv?window.location.origin:"https://cdn-dynmedia-1.microsoft.com";try{const url=new URL(trimmedSrc,baseUrl);const allowedOrigins=new Set([window.location.origin,"https://cdn-dynmedia-1.microsoft.com"]);if(url.protocol!=="http:"&&url.protocol!=="https:"||!allowedOrigins.has(url.origin)){console.warn("buildImageAssetUrl: URL not allowed. Must be http/https and same-origin or from the Dynamic Media CDN.");return""}return url.href}catch(e){console.warn("buildImageAssetUrl: malformed URL provided.",src);return""}}async fetchImageAsset(imageProperty,filePath){const res=await fetch(filePath);if(!res.ok){throw new Error(`Image fetch failed with status ${res.status} for URL: ${filePath}`)}const image=await rive.decodeImage(new Uint8Array(await res.arrayBuffer()));imageProperty.value=image;image.unref()}addIntersectionObserver(animation){if(this.canvasObservers.has(animation.canvas)){return this.canvasObservers.get(animation.canvas)}const intersectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){animation.create()}else{animation.destroy()}})},{threshold:.1,rootMargin:"50px"});intersectionObserver.observe(animation.canvas);this.canvasObservers.set(animation.canvas,intersectionObserver);return intersectionObserver}removeIntersectionObserver(canvas){const observer=this.canvasObservers.get(canvas);if(observer){observer.disconnect();this.canvasObservers.delete(canvas)}}debounce(func,delay){let timeoutId;return(...args)=>{clearTimeout(timeoutId);timeoutId=setTimeout(()=>func.apply(this,args),delay)}}setupResizeObserver(){if(!window.ResizeObserver){console.warn("ResizeObserver not supported in this browser");return}const debouncedResize=this.debounce(entries=>{entries.forEach(entry=>{const canvas=entry.target;const canvasId=canvas.id;if(canvas.offsetWidth===0||canvas.offsetHeight===0){return}const animation=this.animations.get(canvasId);if(animation&&animation.riveInstance){animation.riveInstance.resizeDrawingSurfaceToCanvas()}})},150);this.resizeObserver=new ResizeObserver(debouncedResize)}observeCanvasResize(canvas){if(this.resizeObserver&&canvas){this.resizeObserver.observe(canvas)}}unobserveCanvasResize(canvas){if(this.resizeObserver&&canvas){this.resizeObserver.unobserve(canvas)}}destroy(){this.animations.forEach((animation,id)=>{this.removeAnimation(id)});if(this.resizeObserver){this.resizeObserver.disconnect();this.resizeObserver=null}this.animations.clear()}static determineFontUrl(){const locale=document.documentElement.lang?document.documentElement.lang.toLowerCase():null;if(!locale){return RiveController.buildAssetUrl(RiveController.DEFAULT_FONT)}let range=locale;while(range){if(RiveController.LOCALE_FONT_MAP[range]){return RiveController.buildAssetUrl(RiveController.LOCALE_FONT_MAP[range])}const pos=range.lastIndexOf("-");if(pos<0){break}range=range.substring(0,pos);if(range.length>0&&range.lastIndexOf("-")===range.length-2){range=range.substring(0,range.length-2)}}return RiveController.buildAssetUrl(RiveController.DEFAULT_FONT)}static async loadFont(asset){const fontUrl=RiveController.determineFontUrl();if(RiveController.fontAssetCache[fontUrl]){asset.setFont(RiveController.fontAssetCache[fontUrl]);return}try{const res=await fetch(fontUrl);if(!res.ok){throw new Error(`Font fetch failed: ${res.status}`)}const font=await rive.decodeFont(new Uint8Array(await res.arrayBuffer()));RiveController.fontAssetCache[fontUrl]=font;asset.setFont(font)}catch(err){console.error("RiveController: Failed to load font",err)}}static buildAssetUrl(assetFilename){const basePath=`/msonecloudapi/assets/${assetFilename}`;const baseUrl="https://www.microsoft.com";const ockParam="?ock=782163515ae76ede931d40f765e4000a";if(window.location.hostname.includes("adobeppe")||window.location.hostname.includes("localhost")){return`https://wwwppe.microsoft.com${basePath}${ockParam}`}else if(window.location.hostname.includes("adobeprod")){return`https://www.microsoft.com${basePath}${ockParam}`}return`${baseUrl}${basePath}`}}class RiveAnimation{constructor(config,controller,el){this.config=config;this.controller=controller;this.el=el;this.canvas=this.el.querySelector("canvas");this.reimagineButtonEl=this.el.querySelector("reimagine-button");this.playPauseButton=this._findPlayPauseButton();this.riveInstance=null;this.playPauseControl=null;this.isActive=false;if(this.canvas&&!this.canvas.id){this.canvas.id=`rive-canvas-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}if(this.canvas){this.config.id=this.canvas.id}}_findPlayPauseButton(){if(this.reimagineButtonEl&&this.reimagineButtonEl.shadowRoot){return this.reimagineButtonEl.shadowRoot.querySelector("button")}return null}create(){if(this.riveInstance)return;this.riveInstance=this.controller.createRiveInstance(this.config,this.canvas);this.isActive=true;if(this.playPauseControl){if(this.playPauseControl.isPlaying()){this.riveInstance.play()}else{this.riveInstance.pause()}}}destroy(){if(this.riveInstance){this.riveInstance.cleanup();this.riveInstance=null;this.isActive=false}}isCreated(){return this.riveInstance!==null}createPlayPauseControl(){let isPlaying=this.config.autoplay;const button=this.reimagineButtonEl;if(!button){return}const buttonIcon=document.querySelector("reimagine-icon");if(buttonIcon&&buttonIcon.getAttribute("size")!=="small"){buttonIcon.setAttribute("size","small")}const updateButton=()=>{if(buttonIcon){buttonIcon.setAttribute("icon",isPlaying?"pause":"play")}button.setAttribute("aria-label",isPlaying?this.config.playingAriaLabel:this.config.pausedAriaLabel);button.setAttribute("data-state",isPlaying?"play":"pause")};updateButton();button.addEventListener("click",()=>{isPlaying=!isPlaying;if(this.riveInstance){if(isPlaying){this.riveInstance.play()}else{this.riveInstance.pause()}}updateButton()});this.playPauseControl={toggle:()=>{isPlaying=!isPlaying;if(this.riveInstance){if(isPlaying){this.riveInstance.play()}else{this.riveInstance.pause()}}updateButton()},play:()=>{isPlaying=true;if(this.riveInstance){this.riveInstance.play()}updateButton()},pause:()=>{isPlaying=false;if(this.riveInstance){this.riveInstance.pause()}updateButton()},isPlaying:()=>isPlaying};return this.playPauseControl}}if(isValidRiveController(window.ocrRiveController)){if(window.ocrRiveControllerReady?.resolve){window.ocrRiveControllerReady.resolve(window.ocrRiveController)}return window.ocrRiveController}const controller=new RiveController;window.ocrRiveController=controller;if(window.ocrRiveControllerReady?.resolve){window.ocrRiveControllerReady.resolve(controller)}}if(!window.rive||!window.rive.Rive){var riveScript=document.createElement("script");riveScript.src="https://unpkg.com/@rive-app/webgl2@2.31.5/rive.js";riveScript.integrity="sha384-kUV/cLT/RnlWYUGc2mvw6QviRRrfmbHJzUu5vOesQm8wwkT3RHZRvJBeCNYfLUQv";riveScript.crossOrigin="anonymous";riveScript.onload=function(){try{addRiveController()}catch(error){if(window.ocrRiveControllerReady?.reject){window.ocrRiveControllerReady.reject(error)}console.error("Failed to initialize Rive controller after script load.",error);return}};riveScript.onerror=function(event){const error=new Error("Failed to load Rive runtime script.");if(window.ocrRiveControllerReady?.reject){window.ocrRiveControllerReady.reject(error)}console.error(error,event)};document.head.appendChild(riveScript);return}try{addRiveController()}catch(error){if(window.ocrRiveControllerReady?.reject){window.ocrRiveControllerReady.reject(error)}throw error}})();(function(){"use strict";function isValidRiveController(controller){return!!controller&&typeof controller.setupAnimationFromElement==="function"}function getRiveControllerReadyPromise(){if(!window.ocrRiveControllerReady){window.ocrRiveControllerReady={}}if(!window.ocrRiveControllerReady.promise){window.ocrRiveControllerReady.promise=new Promise((resolve,reject)=>{window.ocrRiveControllerReady.resolve=resolve;window.ocrRiveControllerReady.reject=reject})}if(isValidRiveController(window.ocrRiveController)&&window.ocrRiveControllerReady.resolve){window.ocrRiveControllerReady.resolve(window.ocrRiveController)}return window.ocrRiveControllerReady.promise}function waitForRiveController(timeoutMs=15e3){if(isValidRiveController(window.ocrRiveController)){return Promise.resolve(window.ocrRiveController)}let timeoutID;const readyPromise=getRiveControllerReadyPromise();const timeoutPromise=new Promise((_,reject)=>{timeoutID=setTimeout(()=>{reject(new Error("Timed out waiting for ocrRiveController readiness."))},timeoutMs)});return Promise.race([readyPromise,timeoutPromise]).finally(()=>clearTimeout(timeoutID))}async function initializeRiveAnimation(){let controller;try{controller=await waitForRiveController()}catch(error){console.warn("ocrRiveController not available. Make sure the Rive controller is loaded.",error);return}if(!isValidRiveController(controller)){console.warn("ocrRiveController is present but invalid. Skipping initialization.");return}const components=document.querySelectorAll("cascade-rive-animation");if(components.length===0){return}components.forEach((el,index)=>{try{if(el._riveAnimation||el.hasAttribute("data-rive-initialized")){return}const optionsAttr=el.getAttribute("options");let options={};if(optionsAttr){try{options=JSON.parse(optionsAttr)}catch(e){console.error(`Failed to parse options for component ${index+1}:`,e);return}}const animation=controller.setupAnimationFromElement(el,options);if(animation){el._riveAnimation=animation}}catch(error){console.error(`Error initializing Rive animation component ${index+1}:`,error)}})}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",initializeRiveAnimation)}else{initializeRiveAnimation()}})()})();
/*! 1113064 */
(()=>{function hasTheme(themeName){return!!document.querySelector(`link[rel="stylesheet"][href*="onecloud"][href*="themes/${themeName}"]`)}const baseWCTokens=`
		:root {
			--ds-app-type-action-button-font-size: .9375rem;
			--ds-app-type-action-button-font-weight: 600;
			--ds-app-type-action-button-letter-spacing: -0.02em;
			--ds-app-type-action-button-line-height: 1.375rem;
			--ds-app-type-action-superscript-button-font-size: .9375rem;
			--ds-app-type-action-superscript-button-font-weight: 600;
			--ds-app-type-action-superscript-button-letter-spacing: .02em;
			--ds-app-type-action-superscript-button-line-height: 1.375rem;
			--ds-app-type-body-l-font-size: 1.125rem;
			--ds-app-type-body-l-font-weight: 400;
			--ds-app-type-body-l-letter-spacing: -0.03em;
			--ds-app-type-body-l-line-height: 1.75rem;
			--ds-app-type-body-m-font-size: 1rem;
			--ds-app-type-body-m-font-weight: 400;
			--ds-app-type-body-m-letter-spacing: -0.03em;
			--ds-app-type-body-m-line-height: 1.5rem;
			--ds-app-type-body-s-font-size: .875rem;
			--ds-app-type-body-s-font-weight: 400;
			--ds-app-type-body-s-letter-spacing: -0.03em;
			--ds-app-type-body-s-line-height: 1.25rem;
			--ds-app-type-body-superscript-l-font-size: 1.125rem;
			--ds-app-type-body-superscript-l-font-weight: 600;
			--ds-app-type-body-superscript-l-letter-spacing: -0.03em;
			--ds-app-type-body-superscript-l-line-height: 1.75rem;
			--ds-app-type-body-superscript-m-font-size: 1rem;
			--ds-app-type-body-superscript-m-font-weight: 600;
			--ds-app-type-body-superscript-m-letter-spacing: -0.03em;
			--ds-app-type-body-superscript-m-line-height: 1.5rem;
			--ds-app-type-body-superscript-s-font-size: .875rem;
			--ds-app-type-body-superscript-s-font-weight: 600;
			--ds-app-type-body-superscript-s-letter-spacing: -0.03em;
			--ds-app-type-body-superscript-s-line-height: 1.25rem;
			--ds-app-type-body-superscript-xs-font-size: .75rem;
			--ds-app-type-body-superscript-xs-font-weight: 600;
			--ds-app-type-body-superscript-xs-letter-spacing: -0.03em;
			--ds-app-type-body-superscript-xs-line-height: 1rem;
			--ds-app-type-body-xs-font-size: .75rem;
			--ds-app-type-body-xs-font-weight: 400;
			--ds-app-type-body-xs-letter-spacing: -0.03em;
			--ds-app-type-body-xs-line-height: 1rem;
			--ds-app-type-heading-2xl-font-size: 3.5rem;
			--ds-app-type-heading-2xl-font-weight: 400;
			--ds-app-type-heading-2xl-letter-spacing: -0.025em;
			--ds-app-type-heading-2xl-line-height: 3.875rem;
			--ds-app-type-heading-2xs-font-size: 1.125rem;
			--ds-app-type-heading-2xs-font-weight: 600;
			--ds-app-type-heading-2xs-letter-spacing: normal;
			--ds-app-type-heading-2xs-line-height: 1.5rem;
			--ds-app-type-heading-3xl-font-size: 4.75rem;
			--ds-app-type-heading-3xl-font-weight: 400;
			--ds-app-type-heading-3xl-letter-spacing: -0.025em;
			--ds-app-type-heading-3xl-line-height: 5.125rem;
			--ds-app-type-heading-3xs-font-size: 1rem;
			--ds-app-type-heading-3xs-font-weight: 600;
			--ds-app-type-heading-3xs-letter-spacing: normal;
			--ds-app-type-heading-3xs-line-height: 1.5rem;
			--ds-app-type-heading-l-font-size: 2.5rem;
			--ds-app-type-heading-l-font-weight: 500;
			--ds-app-type-heading-l-letter-spacing: -0.025em;
			--ds-app-type-heading-l-line-height: 3rem;
			--ds-app-type-heading-m-font-size: 2rem;
			--ds-app-type-heading-m-font-weight: 500;
			--ds-app-type-heading-m-letter-spacing: -0.025em;
			--ds-app-type-heading-m-line-height: 2.5rem;
			--ds-app-type-heading-s-font-size: 1.5rem;
			--ds-app-type-heading-s-font-weight: 500;
			--ds-app-type-heading-s-letter-spacing: -0.015em;
			--ds-app-type-heading-s-line-height: 2rem;
			--ds-app-type-heading-superscript-2xs-font-size: 1.125rem;
			--ds-app-type-heading-superscript-2xs-font-weight: 600;
			--ds-app-type-heading-superscript-2xs-letter-spacing: 0;
			--ds-app-type-heading-superscript-2xs-line-height: 1.625rem;
			--ds-app-type-heading-superscript-3xl-font-size: 3.5rem;
			--ds-app-type-heading-superscript-3xl-font-weight: 400;
			--ds-app-type-heading-superscript-3xl-letter-spacing: -0.02em;
			--ds-app-type-heading-superscript-3xl-line-height: 3.875rem;
			--ds-app-type-heading-superscript-3xs-font-size: 1rem;
			--ds-app-type-heading-superscript-3xs-font-weight: 600;
			--ds-app-type-heading-superscript-3xs-letter-spacing: 0;
			--ds-app-type-heading-superscript-3xs-line-height: 1.5rem;
			--ds-app-type-heading-superscript-m-font-size: 1.75rem;
			--ds-app-type-heading-superscript-m-font-weight: 400;
			--ds-app-type-heading-superscript-m-letter-spacing: 0;
			--ds-app-type-heading-superscript-m-line-height: 2.25rem;
			--ds-app-type-heading-superscript-s-font-size: 1.5rem;
			--ds-app-type-heading-superscript-s-font-weight: 500;
			--ds-app-type-heading-superscript-s-letter-spacing: -0.015em;
			--ds-app-type-heading-superscript-s-line-height: 2rem;
			--ds-app-type-heading-superscript-xl-font-size: 2.875rem;
			--ds-app-type-heading-superscript-xl-font-weight: 400;
			--ds-app-type-heading-superscript-xl-letter-spacing: -0.02em;
			--ds-app-type-heading-superscript-xl-line-height: 3.375rem;
			--ds-app-type-heading-superscript-xs-font-size: 1.25rem;
			--ds-app-type-heading-superscript-xs-font-weight: 500;
			--ds-app-type-heading-superscript-xs-letter-spacing: -0.01em;
			--ds-app-type-heading-superscript-xs-line-height: 1.75rem;
			--ds-app-type-heading-xl-font-size: 3rem;
			--ds-app-type-heading-xl-font-weight: 500;
			--ds-app-type-heading-xl-letter-spacing: -0.025em;
			--ds-app-type-heading-xl-line-height: 3.5rem;
			--ds-app-type-heading-xs-font-size: 1.25rem;
			--ds-app-type-heading-xs-font-weight: 500;
			--ds-app-type-heading-xs-letter-spacing: -0.01em;
			--ds-app-type-heading-xs-line-height: 1.75rem;
			--ds-app-type-label-eyebrow-font-size: .75rem;
			--ds-app-type-label-eyebrow-font-weight: 600;
			--ds-app-type-label-eyebrow-letter-spacing: .08em;
			--ds-app-type-label-eyebrow-line-height: 1rem;
			--ds-app-type-label-l-font-size: 1rem;
			--ds-app-type-label-l-font-weight: 600;
			--ds-app-type-label-l-letter-spacing: normal;
			--ds-app-type-label-l-line-height: 1.5rem;
			--ds-app-type-label-m-font-size: .875rem;
			--ds-app-type-label-m-font-weight: 600;
			--ds-app-type-label-m-letter-spacing: normal;
			--ds-app-type-label-m-line-height: 1.25rem;
			--ds-app-type-label-s-font-size: .75rem;
			--ds-app-type-label-s-font-weight: 600;
			--ds-app-type-label-s-letter-spacing: normal;
			--ds-app-type-label-s-line-height: 1rem;
			--ds-app-type-label-superscript-eyebrow-font-size: .75rem;
			--ds-app-type-label-superscript-eyebrow-font-weight: 600;
			--ds-app-type-label-superscript-eyebrow-letter-spacing: .08em;
			--ds-app-type-label-superscript-eyebrow-line-height: 1rem;
			--ds-app-type-label-superscript-l-font-size: 1rem;
			--ds-app-type-label-superscript-l-font-weight: 600;
			--ds-app-type-label-superscript-l-line-height: 1.5rem;
			--ds-app-type-label-superscript-m-font-size: .875rem;
			--ds-app-type-label-superscript-m-font-weight: 600;
			--ds-app-type-label-superscript-m-line-height: 1.25rem;
			--ds-app-type-label-superscript-s-font-size: .75rem;
			--ds-app-type-label-superscript-s-font-weight: 600;
			--ds-app-type-label-superscript-s-line-height: 1rem
		}

		@media(min-width: 860px) {
			:root {
				--ds-app-type-heading-2xl-font-size:4.75rem;
				--ds-app-type-heading-2xl-line-height: 5.125rem;
				--ds-app-type-heading-3xl-font-size: 6.25rem;
				--ds-app-type-heading-3xl-line-height: 6.625rem;
				--ds-app-type-heading-l-font-size: 2.75rem;
				--ds-app-type-heading-l-line-height: 3.5rem;
				--ds-app-type-heading-m-font-size: 2.5rem;
				--ds-app-type-heading-m-line-height: 3rem;
				--ds-app-type-heading-superscript-3xl-font-size: 4.75rem;
				--ds-app-type-heading-superscript-3xl-line-height: 5.125rem;
				--ds-app-type-heading-superscript-m-font-size: 1.875rem;
				--ds-app-type-heading-xl-font-size: 3.75rem;
				--ds-app-type-heading-xl-line-height: 4.5rem;
				--ds-app-type-heading-xs-font-size: 1.375rem
			}
		}

		@media(min-width: 1440px) {
			:root {
				--ds-app-type-body-l-font-size:1.25rem;
				--ds-app-type-body-l-line-height: 2rem;
				--ds-app-type-body-superscript-l-font-size: 1.25rem;
				--ds-app-type-body-superscript-l-line-height: 2rem;
				--ds-app-type-heading-2xl-font-size: 6.25rem;
				--ds-app-type-heading-2xl-line-height: 6.625rem;
				--ds-app-type-heading-2xs-font-size: 1.25rem;
				--ds-app-type-heading-2xs-line-height: 1.75rem;
				--ds-app-type-heading-3xl-font-size: 7.75rem;
				--ds-app-type-heading-3xl-line-height: 8.125rem;
				--ds-app-type-heading-l-font-size: 3.875rem;
				--ds-app-type-heading-l-line-height: 4.5rem;
				--ds-app-type-heading-m-font-size: 3rem;
				--ds-app-type-heading-m-line-height: 3.5rem;
				--ds-app-type-heading-s-font-size: 2rem;
				--ds-app-type-heading-s-line-height: 2.5rem;
				--ds-app-type-heading-superscript-2xs-font-size: 1.25rem;
				--ds-app-type-heading-superscript-2xs-line-height: 1.75rem;
				--ds-app-type-heading-superscript-3xl-font-size: 6.25rem;
				--ds-app-type-heading-superscript-3xl-line-height: 6.625rem;
				--ds-app-type-heading-superscript-m-font-size: 2.5rem;
				--ds-app-type-heading-superscript-m-line-height: 3rem;
				--ds-app-type-heading-superscript-xl-font-size: 6.25rem;
				--ds-app-type-heading-superscript-xl-line-height: 6.625rem;
				--ds-app-type-heading-xl-font-size: 4.75rem;
				--ds-app-type-heading-xl-line-height: 5.5rem;
				--ds-app-type-heading-xs-font-size: 1.5rem;
				--ds-app-type-heading-xs-line-height: 2rem
			}
		}

		:root {
			--ds-app-radii-circle: var(--ds-radii-circle,12.5rem);
			--ds-app-radii-l: var(--ds-radii-l,1rem);
			--ds-app-radii-m: var(--ds-radii-m,0.75rem);
			--ds-app-radii-s: var(--ds-radii-s,0.5rem);
			--ds-app-radii-xs: var(--ds-radii-xs,0.25rem)
		}

		@media(min-width: 860px) {
			:root {
				--ds-app-radii-l:var(--ds-radii-xl,1.5rem);
				--ds-app-radii-m: var(--ds-radii-l,1rem)
			}
		}

		:root {
			--ds-app-space-grid-default: var(--ds-space-s,0.75rem);
			--ds-app-space-layout-inset-vertical-comfortable: var(--ds-space-3xl,3.5rem);
			--ds-app-space-layout-inset-vertical-compact: var(--ds-space-xl,2rem);
			--ds-app-space-layout-inset-vertical-cozy: var(--ds-space-2xl,3rem);
			--ds-app-space-layout-stack-comfortable: var(--ds-space-xl,2rem);
			--ds-app-space-layout-stack-cozy: var(--ds-space-l,1.5rem);
			--ds-app-space-layout-stack-roomy: var(--ds-space-2xl,3rem);
			--ds-app-space-micro-2xl: var(--ds-space-xl,2rem);
			--ds-app-space-micro-2xs: var(--ds-space-2xs,0.25rem);
			--ds-app-space-micro-3xl: var(--ds-space-2xl,3rem);
			--ds-app-space-micro-3xs: var(--ds-space-3xs,0.125rem);
			--ds-app-space-micro-4xl: var(--ds-space-3xl,3.5rem);
			--ds-app-space-micro-l: var(--ds-space-m,1rem);
			--ds-app-space-micro-m: var(--ds-space-s,0.75rem);
			--ds-app-space-micro-s: var(--ds-space-s,0.75rem);
			--ds-app-space-micro-xl: var(--ds-space-l,1.5rem);
			--ds-app-space-micro-xs: var(--ds-space-xs,0.5rem);
			--ds-app-space-surface-comfortable: var(--ds-space-m,1rem);
			--ds-app-space-surface-relaxed: var(--ds-space-xl,2rem);
			--ds-app-space-surface-roomy: var(--ds-space-l,1.5rem)
		}

		@media(min-width: 860px) {
			:root {
				--ds-app-space-grid-default:var(--ds-space-m,1rem);
				--ds-app-space-layout-inset-vertical-comfortable: var(--ds-space-5xl,6rem);
				--ds-app-space-layout-inset-vertical-compact: var(--ds-space-2xl,3rem);
				--ds-app-space-layout-inset-vertical-cozy: var(--ds-space-4xl,4.5rem);
				--ds-app-space-layout-stack-comfortable: var(--ds-space-2xl,3rem);
				--ds-app-space-layout-stack-cozy: var(--ds-space-xl,2rem);
				--ds-app-space-layout-stack-roomy: var(--ds-space-4xl,4.5rem);
				--ds-app-space-micro-2xl: var(--ds-space-2xl,3rem);
				--ds-app-space-micro-3xl: var(--ds-space-4xl,4.5rem);
				--ds-app-space-micro-4xl: var(--ds-space-5xl,6rem);
				--ds-app-space-micro-l: var(--ds-space-l,1.5rem);
				--ds-app-space-micro-m: var(--ds-space-m,1rem);
				--ds-app-space-micro-xl: var(--ds-space-xl,2rem);
				--ds-app-space-surface-comfortable: var(--ds-space-l,1.5rem);
				--ds-app-space-surface-relaxed: var(--ds-space-4xl,4.5rem);
				--ds-app-space-surface-roomy: var(--ds-space-2xl,3rem)
			}
		}
	`;if(window.SOUtil){window.SOUtil.runOnPageLoad(()=>{if(hasTheme("m365")||hasTheme("default")||hasTheme("event")){window.SOUtil.addStylesheet(baseWCTokens,"base-tokens")}})}})();
/*! 1113064  */
(()=>{const pageScope={"www.microsoft.com":{paths:["/microsoft-365/roadmap"]},previews:true};const TIMELINE_SELECTOR="reimagine-timeline";if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(()=>{const timelineBlade=document.querySelectorAll(TIMELINE_SELECTOR);timelineBlade.forEach(timelineElement=>{const timelineCards=timelineElement.querySelectorAll("reimagine-card-badge, reimagine-card-summary");timelineCards.forEach(card=>{if(card.shadowRoot){const slotName=card.tagName.toLowerCase()==="reimagine-card-summary"?"card-summary-link":"card-badge__footer-bottom";const footerSlot=card.shadowRoot.querySelector(`slot[name="${slotName}"]`);if(footerSlot){const slottedElements=footerSlot.assignedElements();const reimagineLink=slottedElements.find(el=>el.tagName.toLowerCase()==="reimagine-link");if(reimagineLink&&reimagineLink.shadowRoot){reimagineLink.style.setProperty("--ds-link-color","var(--theme-foreground-accent-subtle-normal)");const reimagineButton=reimagineLink.shadowRoot.querySelector("reimagine-button");if(reimagineButton){reimagineButton.style.setProperty("--ds-button-background-color","var(--theme-foreground-accent-subtle-normal)")}}}}})})})}})();
/*! 1113064  */
(()=>{const pageScope={"www.microsoft.com":{paths:["/events/launch-events/migrate-and-modernize-summit"]},previews:true};const TABS_SELECTOR="reimagine-tabs";if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(()=>{const tabsBlade=document.querySelectorAll(TABS_SELECTOR);tabsBlade.forEach(tabsElement=>{tabsElement.style.setProperty("--ds-pill-color","var(--theme-foreground-accent-subtle-normal)");tabsElement.style.setProperty("--ds-pill-active-color","var(--theme-foreground-accent-subtle-selected)");tabsElement.style.setProperty("--ds-pill-background-color","var(--theme-background-accent-subtle-normal)");tabsElement.style.setProperty("--ds-pill-active-background-color","var(--theme-background-accent-subtle-selected)")});const mediaTextStacked=document.querySelectorAll("reimagine-media-text-stacked");mediaTextStacked.forEach(element=>{const mediaTextStackElements=element.querySelectorAll("reimagine-media-text-stack");mediaTextStackElements.forEach(mediaTextStack=>{mediaTextStack.style.setProperty("--ds-media-text-stack-eyebrow-color","var(--theme-foreground-base-highlight)");const reimagineLink=mediaTextStack.querySelector("reimagine-link");if(reimagineLink&&reimagineLink.shadowRoot){reimagineLink.style.setProperty("--ds-link-color","var(--theme-foreground-accent-subtle-normal)");const reimagineButton=reimagineLink.shadowRoot.querySelector("reimagine-button");if(reimagineButton){reimagineButton.style.setProperty("--ds-button-background-color","var(--theme-background-accent-strong-normal)")}}})})})}})();
/*! 1113064  */
(()=>{const pageScope={"www.microsoft.com":{paths:["/events/launch-events/migrate-and-modernize-summit","/microsoft-teams/teams-free"]},previews:true};const defaultWcClientlib=`
		@font-face {
		font-family: "SegoeUI Fallback";
		src: local('Arial'),local('Helvetica Neue'),local('Helvetica'),local('sans-serif');
		size-adjust:100.9%;ascent-override:105%;descent-override:35%;line-gap-override:0}

		@font-face {
			font-family: "Segoe UI Variable Small";
			src: local("Segoe UI Variable Small"),url("../../../../../../etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-reimagine/resources/fonts/segoe-sans/west-european/latest.woff2") format("woff2");
			font-variation-settings:"opsz" 1;font-weight: 300 700;
			font-style: normal;
			font-display: swap
		}

		@font-face {
			font-family: "Segoe UI Variable Text";
			src: local("Segoe UI Variable Text"),url("../../../../../../etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-reimagine/resources/fonts/segoe-sans/west-european/latest.woff2") format("woff2");
			font-variation-settings:"opsz" 10.5;font-weight: 300 700;
			font-style: normal;
			font-display: swap
		}

		@font-face {
			font-family: "Segoe UI Variable Display";
			src: local("Segoe UI Variable Display"),url("../../../../../../etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-reimagine/resources/fonts/segoe-sans/west-european/latest.woff2") format("woff2");
			font-variation-settings:"opsz" 36;font-weight: 300 700;
			font-style: normal;
			font-display: swap
		}

		*,*::before,*::after {
			box-sizing: border-box
		}

		html {
			font-family: var(--ds-font-family-text,"Segoe UI Variable Text","SegoeUI Fallback",-apple-system,BlinkMacSystemFont,sans-serif);
			line-height: 1.5rem;
			-webkit-text-size-adjust: 100%;
			-webkit-tap-highlight-color: rgba(0,0,0,0)
		}

		article,aside,figcaption,figure,footer,header,hgroup,main,nav,section {
			display: block
		}

		body {
			margin: 0;
			font-family: var(--ds-font-family-text,"Segoe UI Variable Text","SegoeUI Fallback",-apple-system,BlinkMacSystemFont,sans-serif);
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5rem;
			letter-spacing: -0.03em;
			color: var(--ds-app-color-base-default-fg-body,#3a4c56)
		}

		html:not([dir="rtl"]) body {
			text-align: left
		}

		html[dir="rtl"] body {
			text-align: right
		}

		a[href]:focus,area[href]:focus,input:focus,select:focus,textarea:focus,button:focus,iframe:focus,[tabindex]:focus,[contentEditable="true"]:focus {
			outline: .1875rem dotted currentColor
		}

		[tabindex="-1"]:focus {
			outline: 0 !important
		}

		hr {
			box-sizing: content-box;
			height: 0
		}

		h1,h2,h3,h4,h5,h6 {
			margin-top: 0;
			margin-bottom: 0
		}

		p {
			margin-top: 0;
			margin-bottom: 0
		}

		abbr[title] {
			text-decoration: underline dotted;
			cursor: help;
			text-decoration-skip-ink: none
		}

		address {
			margin-bottom: 1rem;
			font-style: normal;
			line-height: inherit
		}

		ol,ul,dl {
			margin-top: 0;
			margin-bottom: 1rem
		}

		ol ol,ul ul,ol ul,ul ol {
			margin-bottom: 0
		}

		dt {
			font-weight: 700
		}

		dd {
			margin-bottom: .5rem
		}

		html:not([dir="rtl"]) dd {
			margin-left: 0
		}

		html[dir="rtl"] dd {
			margin-right: 0
		}

		blockquote {
			margin: 0 0 1rem
		}

		b,strong {
			font-weight: bolder
		}

		small {
			font-size: 80%
		}

		sub,sup {
			position: relative;
			font-size: 75%;
			line-height: 0;
			vertical-align: baseline
		}

		sub {
			bottom: -0.25em
		}

		sup {
			top: -0.5em
		}

		a {
			color: var(--ds-app-color-interactive-secondary-fg-default,#2a446f)
		}

		pre,code,kbd,samp {
			font-family: SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace;
			font-size: 1em
		}

		pre {
			margin-top: 0;
			margin-bottom: 1rem;
			overflow: auto
		}

		figure {
			margin: 0 0 1rem
		}

		img,svg {
			vertical-align: middle
		}

		table {
			border-collapse: collapse
		}

		caption {
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;
			color: var(--ds-app-color-base-default-fg-body,#3a4c56);
			caption-side: bottom
		}

		html:not([dir="rtl"]) caption {
			text-align: left
		}

		html[dir="rtl"] caption {
			text-align: right
		}

		th {
			text-align: inherit
		}

		label {
			display: inline-block
		}

		button {
			border-radius: 0
		}

		input,button,select,optgroup,textarea {
			margin: 0;
			font-family: inherit;
			font-size: inherit;
			line-height: inherit
		}

		button,select {
			text-transform: none
		}

		select {
			word-wrap: normal
		}

		button,[type="button"],[type="reset"],[type="submit"] {
			-webkit-appearance: button
		}

		button:not(:disabled),[type="button"]:not(:disabled),[type="reset"]:not(:disabled),[type="submit"]:not(:disabled) {
			cursor: pointer
		}

		button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {
			padding: 0;
			border-style: none
		}

		input[type="date"],input[type="time"],input[type="datetime-local"],input[type="month"] {
			-webkit-appearance: listbox
		}

		textarea {
			resize: vertical
		}

		fieldset {
			min-width: 0;
			padding: 0;
			margin: 0;
			border: 0
		}

		legend {
			display: block;
			width: 100%;
			padding: 0;
			font-size: inherit;
			line-height: inherit
		}

		progress {
			vertical-align: baseline
		}

		[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {
			height: auto
		}

		[type="search"] {
			outline-offset: -2px;
			-webkit-appearance: none
		}

		[type="search"]::-webkit-search-decoration {
			-webkit-appearance: none
		}

		::-webkit-file-upload-button {
			font: inherit;
			-webkit-appearance: button
		}

		output {
			display: inline-block
		}

		summary {
			display: list-item;
			cursor: pointer
		}

		template {
			display: none
		}

		[hidden] {
			display: none !important
		}

		.universalheader,.uhf {
			line-height: normal !important;
			letter-spacing: normal !important
		}

		:root {
			--ds-font-family-base: "Segoe UI Variable Text","SegoeUI Fallback",-apple-system,BlinkMacSystemFont,sans-serif;
			--ds-font-family-small: "Segoe UI Variable Small","SegoeUI Fallback",-apple-system,BlinkMacSystemFont,sans-serif;
			--ds-font-family-text: "Segoe UI Variable Text","SegoeUI Fallback",-apple-system,BlinkMacSystemFont,sans-serif;
			--ds-font-family-display: "Segoe UI Variable Display","SegoeUI Fallback",-apple-system,BlinkMacSystemFont,sans-serif
		}

		:root {
			--ds-blur-s: blur(0.5rem);
			--ds-blur-m: blur(1.5rem);
			--ds-blur-l: blur(2.5rem);
			--ds-blur-glass: blur(5rem)
		}

		:root {
			--ds-border-xs: .0625rem;
			--ds-border-s: .125rem;
			--ds-border-m: .25rem;
			--ds-border-l: .5rem
		}

		:root {
			--ds-color-brilliant-blue-50: #e6f2fb;
			--ds-color-brilliant-blue-100: #b0d5f2;
			--ds-color-brilliant-blue-200: #8ac1eb;
			--ds-color-brilliant-blue-300: #54a5e2;
			--ds-color-brilliant-blue-400: #3393dd;
			--ds-color-brilliant-blue-500: #0078d4;
			--ds-color-brilliant-blue-600: #006dc1;
			--ds-color-brilliant-blue-700: #005597;
			--ds-color-brilliant-blue-800: #004275;
			--ds-color-brilliant-blue-900: #002948;
			--ds-color-blue-black-50: #e6e9ea;
			--ds-color-blue-black-100: #b3babe;
			--ds-color-blue-black-200: #8e989e;
			--ds-color-blue-black-300: #5a6972;
			--ds-color-blue-black-400: #3a4c56;
			--ds-color-blue-black-500: #091f2c;
			--ds-color-blue-black-600: #081c28;
			--ds-color-blue-black-700: #06161f;
			--ds-color-blue-black-800: #051118;
			--ds-color-blue-black-900: #040d12;
			--ds-color-sea-salt-50: #fdfdfc;
			--ds-color-sea-salt-100: #f8f7f5;
			--ds-color-sea-salt-200: #f4f4f0;
			--ds-color-sea-salt-300: #f0eeea;
			--ds-color-sea-salt-400: #edebe5;
			--ds-color-sea-salt-500: #e8e6df;
			--ds-color-sea-salt-600: #d3d1cb;
			--ds-color-sea-salt-700: #a5a39e;
			--ds-color-sea-salt-800: #807f7b;
			--ds-color-sea-salt-900: #61615e;
			--ds-color-sky-blue-50: #f4fafd;
			--ds-color-sky-blue-100: #dceef8;
			--ds-color-sky-blue-200: #cbe6f4;
			--ds-color-sky-blue-300: #b3daf0;
			--ds-color-sky-blue-400: #a4d3ed;
			--ds-color-sky-blue-500: #8dc8e8;
			--ds-color-sky-blue-600: #80b6d3;
			--ds-color-sky-blue-700: #648ea5;
			--ds-color-sky-blue-800: #4e6e80;
			--ds-color-sky-blue-900: #3b5461;
			--ds-color-dark-blue-50: #eaecf1;
			--ds-color-dark-blue-100: #bdc5d2;
			--ds-color-dark-blue-200: #9da9bd;
			--ds-color-dark-blue-300: #70829f;
			--ds-color-dark-blue-400: #55698c;
			--ds-color-dark-blue-500: #2a446f;
			--ds-color-dark-blue-600: #263e65;
			--ds-color-dark-blue-700: #1e304f;
			--ds-color-dark-blue-800: #17253d;
			--ds-color-dark-blue-900: #0e1726;
			--ds-color-aqua-foam-50: #f8fcfb;
			--ds-color-aqua-foam-100: #eaf4f1;
			--ds-color-aqua-foam-200: #dfefea;
			--ds-color-aqua-foam-300: #d1e8e1;
			--ds-color-aqua-foam-400: #c8e3db;
			--ds-color-aqua-foam-500: #badcd2;
			--ds-color-aqua-foam-600: #a9c8bf;
			--ds-color-aqua-foam-700: #849c95;
			--ds-color-aqua-foam-800: #667974;
			--ds-color-aqua-foam-900: #4e5c58;
			--ds-color-pale-lime-50: #fbfdf4;
			--ds-color-pale-lime-100: #f2f9dc;
			--ds-color-pale-lime-200: #ebf6cb;
			--ds-color-pale-lime-300: #e2f2b3;
			--ds-color-pale-lime-400: #ddf0a5;
			--ds-color-pale-lime-500: #d4ec8e;
			--ds-color-pale-lime-600: #c1d781;
			--ds-color-pale-lime-700: #97a865;
			--ds-color-pale-lime-800: #75824e;
			--ds-color-pale-lime-900: #59633c;
			--ds-color-deep-teal-50: #e9efef;
			--ds-color-deep-teal-100: #baccce;
			--ds-color-deep-teal-200: #99b4b7;
			--ds-color-deep-teal-300: #6b9196;
			--ds-color-deep-teal-400: #4e7c81;
			--ds-color-deep-teal-500: #225b62;
			--ds-color-deep-teal-600: #1f5359;
			--ds-color-deep-teal-700: #184146;
			--ds-color-deep-teal-800: #133236;
			--ds-color-deep-teal-900: #0e2629;
			--ds-color-lavender-50: #f9f8fc;
			--ds-color-lavender-100: #ede8f6;
			--ds-color-lavender-200: #e4ddf2;
			--ds-color-lavender-300: #d8cdec;
			--ds-color-lavender-400: #d1c3e9;
			--ds-color-lavender-500: #c5b4e3;
			--ds-color-lavender-600: #b3a4cf;
			--ds-color-lavender-700: #8c80a1;
			--ds-color-lavender-800: #6c637d;
			--ds-color-lavender-900: #534c5f;
			--ds-color-violet-50: #f1e9f1;
			--ds-color-violet-100: #d3bbd4;
			--ds-color-violet-200: #bd9bbf;
			--ds-color-violet-300: #9f6da1;
			--ds-color-violet-400: #8d518f;
			--ds-color-violet-500: #702573;
			--ds-color-violet-600: #662269;
			--ds-color-violet-700: #501a52;
			--ds-color-violet-800: #3e143f;
			--ds-color-violet-900: #260d27;
			--ds-color-twilight-purple-50: #edebf0;
			--ds-color-twilight-purple-100: #c6c1d0;
			--ds-color-twilight-purple-200: #aaa3ba;
			--ds-color-twilight-purple-300: #83789a;
			--ds-color-twilight-purple-400: #6b5e86;
			--ds-color-twilight-purple-500: #463668;
			--ds-color-twilight-purple-600: #40315f;
			--ds-color-twilight-purple-700: #32264a;
			--ds-color-twilight-purple-800: #271e39;
			--ds-color-twilight-purple-900: #181223;
			--ds-color-biscay-green-50: #edf9f7;
			--ds-color-biscay-green-100: #c7ede7;
			--ds-color-biscay-green-200: #abe4db;
			--ds-color-biscay-green-300: #85d8cb;
			--ds-color-biscay-green-400: #6dd1c1;
			--ds-color-biscay-green-500: #49c5b1;
			--ds-color-biscay-green-600: #42b3a1;
			--ds-color-biscay-green-700: #348c7e;
			--ds-color-biscay-green-800: #286c61;
			--ds-color-biscay-green-900: #1f534a;
			--ds-color-pink-50: #fff7f8;
			--ds-color-pink-100: #ffe7ea;
			--ds-color-pink-200: #ffdce0;
			--ds-color-pink-300: #ffccd1;
			--ds-color-pink-400: #ffc2c9;
			--ds-color-pink-500: #ffb3bb;
			--ds-color-pink-600: #e8a3aa;
			--ds-color-pink-700: #b57f85;
			--ds-color-pink-800: #8c6267;
			--ds-color-pink-900: #6b4b4f;
			--ds-color-orange-coral-50: #fff6f3;
			--ds-color-orange-coral-100: #ffe2db;
			--ds-color-orange-coral-200: #ffd5ca;
			--ds-color-orange-coral-300: #ffc1b1;
			--ds-color-orange-coral-400: #ffb5a2;
			--ds-color-orange-coral-500: #ffa38b;
			--ds-color-orange-coral-600: #e8947e;
			--ds-color-orange-coral-700: #b57463;
			--ds-color-orange-coral-800: #8c5a4c;
			--ds-color-orange-coral-900: #6b443a;
			--ds-color-maroon-50: #f1e9ea;
			--ds-color-maroon-100: #d4bcbf;
			--ds-color-maroon-200: #bf9b9f;
			--ds-color-maroon-300: #a16e74;
			--ds-color-maroon-400: #8f5159;
			--ds-color-maroon-500: #73262f;
			--ds-color-maroon-600: #69232b;
			--ds-color-maroon-700: #521b21;
			--ds-color-maroon-800: #3f151a;
			--ds-color-maroon-900: #301014;
			--ds-color-custard-yellow-50: #fffcf5;
			--ds-color-custard-yellow-100: #fff6df;
			--ds-color-custard-yellow-200: #fff2d0;
			--ds-color-custard-yellow-300: #ffecbb;
			--ds-color-custard-yellow-400: #ffe9ad;
			--ds-color-custard-yellow-500: #ffe399;
			--ds-color-custard-yellow-600: #e8cf8b;
			--ds-color-custard-yellow-700: #b5a16d;
			--ds-color-custard-yellow-800: #8c7d54;
			--ds-color-custard-yellow-900: #6b5f40;
			--ds-color-golden-yellow-50: #fff8e6;
			--ds-color-golden-yellow-100: #ffe9b0;
			--ds-color-golden-yellow-200: #ffdf8a;
			--ds-color-golden-yellow-300: #ffd054;
			--ds-color-golden-yellow-400: #ffc733;
			--ds-color-golden-yellow-500: #ffb900;
			--ds-color-golden-yellow-600: #e8a800;
			--ds-color-golden-yellow-700: #b58300;
			--ds-color-golden-yellow-800: #8c6600;
			--ds-color-golden-yellow-900: #6b4e00;
			--ds-color-dark-brown-50: #efedeb;
			--ds-color-dark-brown-100: #ccc6c1;
			--ds-color-dark-brown-200: #b4aaa3;
			--ds-color-dark-brown-300: #92847a;
			--ds-color-dark-brown-400: #7d6c60;
			--ds-color-dark-brown-500: #5c4738;
			--ds-color-dark-brown-600: #544133;
			--ds-color-dark-brown-700: #413228;
			--ds-color-dark-brown-800: #33271f;
			--ds-color-dark-brown-900: #271e18;
			--ds-color-green-black-50: #e7e9e9;
			--ds-color-green-black-100: #b4babb;
			--ds-color-green-black-200: #90999a;
			--ds-color-green-black-300: #5d6a6c;
			--ds-color-green-black-400: #3d4d50;
			--ds-color-green-black-500: #0d2124;
			--ds-color-green-black-600: #0c1e21;
			--ds-color-green-black-700: #09171a;
			--ds-color-green-black-800: #071214;
			--ds-color-green-black-900: #050e0f;
			--ds-color-purple-black-50: #e8e7ea;
			--ds-color-purple-black-100: #b7b4bd;
			--ds-color-purple-black-200: #94909d;
			--ds-color-purple-black-300: #645d71;
			--ds-color-purple-black-400: #453d55;
			--ds-color-purple-black-500: #170d2b;
			--ds-color-purple-black-600: #150c27;
			--ds-color-purple-black-700: #10091f;
			--ds-color-purple-black-800: #0d0718;
			--ds-color-purple-black-900: #0a0512;
			--ds-color-red-black-50: #eae7e7;
			--ds-color-red-black-100: #bdb4b6;
			--ds-color-red-black-200: #9d9092;
			--ds-color-red-black-300: #715d60;
			--ds-color-red-black-400: #553d41;
			--ds-color-red-black-500: #2b0d12;
			--ds-color-red-black-600: #270c10;
			--ds-color-red-black-700: #1f090d;
			--ds-color-red-black-800: #18070a;
			--ds-color-red-black-900: #120508;
			--ds-color-brown-black-50: #eae8e8;
			--ds-color-brown-black-100: #bdb7b7;
			--ds-color-brown-black-200: #9d9594;
			--ds-color-brown-black-300: #706464;
			--ds-color-brown-black-400: #544645;
			--ds-color-brown-black-500: #291817;
			--ds-color-brown-black-600: #251615;
			--ds-color-brown-black-700: #1d1110;
			--ds-color-brown-black-800: #170d0d;
			--ds-color-brown-black-900: #110a0a;
			--ds-color-off-white-50: #fefefe;
			--ds-color-off-white-100: #fcfbfc;
			--ds-color-off-white-200: #faf9fa;
			--ds-color-off-white-300: #f8f7f8;
			--ds-color-off-white-400: #f6f5f7;
			--ds-color-off-white-500: #f4f3f5;
			--ds-color-off-white-600: #dedddf;
			--ds-color-off-white-700: #adadae;
			--ds-color-off-white-800: #868687;
			--ds-color-off-white-900: #666667;
			--ds-color-warm-white-50: #fffefe;
			--ds-color-warm-white-100: #fffdfb;
			--ds-color-warm-white-200: #fffcf9;
			--ds-color-warm-white-300: #fffaf7;
			--ds-color-warm-white-400: #fff9f5;
			--ds-color-warm-white-500: #fff8f3;
			--ds-color-warm-white-600: #e8e2dd;
			--ds-color-warm-white-700: #b5b0ad;
			--ds-color-warm-white-800: #8c8886;
			--ds-color-warm-white-900: #6b6866;
			--ds-color-pale-gray-50: #fbfbfb;
			--ds-color-pale-gray-100: #f3f3f2;
			--ds-color-pale-gray-200: #eeeeec;
			--ds-color-pale-gray-300: #e6e6e4;
			--ds-color-pale-gray-400: #e1e1de;
			--ds-color-pale-gray-500: #d9d9d6;
			--ds-color-pale-gray-600: #c5c5c3;
			--ds-color-pale-gray-700: #9a9a98;
			--ds-color-pale-gray-800: #777776;
			--ds-color-pale-gray-900: #5b5b5a;
			--ds-color-vapor-gray-50: #f7f7f7;
			--ds-color-vapor-gray-100: #e7e7e7;
			--ds-color-vapor-gray-200: #dbdcdc;
			--ds-color-vapor-gray-300: #cbcccc;
			--ds-color-vapor-gray-400: #c1c2c2;
			--ds-color-vapor-gray-500: #b1b3b3;
			--ds-color-vapor-gray-600: #a1a3a3;
			--ds-color-vapor-gray-700: #7e7f7f;
			--ds-color-vapor-gray-800: #616262;
			--ds-color-vapor-gray-900: #4a4b4b;
			--ds-color-dark-slate-50: #ececec;
			--ds-color-dark-slate-100: #c5c4c4;
			--ds-color-dark-slate-200: #a9a8a8;
			--ds-color-dark-slate-300: #828080;
			--ds-color-dark-slate-400: #6a6768;
			--ds-color-dark-slate-500: #454142;
			--ds-color-dark-slate-600: #3f3b3c;
			--ds-color-dark-slate-700: #312e2f;
			--ds-color-dark-slate-800: #262424;
			--ds-color-dark-slate-900: #1d1b1c;
			--ds-color-morganite-50: #fcfbf9;
			--ds-color-morganite-100: #f6f1ee;
			--ds-color-morganite-200: #f1ebe5;
			--ds-color-morganite-300: #ebe2d9;
			--ds-color-morganite-400: #e7dcd2;
			--ds-color-morganite-500: #e1d3c7;
			--ds-color-morganite-600: #cdc0b5;
			--ds-color-morganite-700: #a0968d;
			--ds-color-morganite-800: #7c746d;
			--ds-color-morganite-900: #5f5954;
			--ds-color-brown-50: #f9f4f1;
			--ds-color-brown-100: #ebded4;
			--ds-color-brown-200: #e2cebf;
			--ds-color-brown-300: #d4b7a2;
			--ds-color-brown-400: #cca990;
			--ds-color-brown-500: #bf9474;
			--ds-color-brown-600: #ae876a;
			--ds-color-brown-700: #886952;
			--ds-color-brown-800: #695140;
			--ds-color-brown-900: #503e31;
			--ds-color-breen-50: #f2efe8;
			--ds-color-breen-100: #d7ccb8;
			--ds-color-breen-200: #c4b396;
			--ds-color-breen-300: #a99066;
			--ds-color-breen-400: #997b48;
			--ds-color-breen-500: #7f5a1a;
			--ds-color-breen-600: #745218;
			--ds-color-breen-700: #5a4012;
			--ds-color-breen-800: #46320e;
			--ds-color-breen-900: #35260b;
			--ds-color-bright-orange-50: #ffefeb;
			--ds-color-bright-orange-100: #ffccc2;
			--ds-color-bright-orange-200: #ffb4a4;
			--ds-color-bright-orange-300: #ff927a;
			--ds-color-bright-orange-400: #ff7d61;
			--ds-color-bright-orange-500: #ff5c39;
			--ds-color-bright-orange-600: #e85434;
			--ds-color-bright-orange-700: #b54128;
			--ds-color-bright-orange-800: #8c331f;
			--ds-color-bright-orange-900: #6b2718;
			--ds-color-ginger-bread-50: #f1ebe8;
			--ds-color-ginger-bread-100: #d4c2b9;
			--ds-color-ginger-bread-200: #bfa497;
			--ds-color-ginger-bread-300: #a17a68;
			--ds-color-ginger-bread-400: #8f614a;
			--ds-color-ginger-bread-500: #73391d;
			--ds-color-ginger-bread-600: #69341a;
			--ds-color-ginger-bread-700: #522815;
			--ds-color-ginger-bread-800: #3f1f10;
			--ds-color-ginger-bread-900: #30180c;
			--ds-color-red-50: #feebed;
			--ds-color-red-100: #fcc1c8;
			--ds-color-red-200: #faa3ad;
			--ds-color-red-300: #f87887;
			--ds-color-red-400: #f65e70;
			--ds-color-red-500: #f4364c;
			--ds-color-red-600: #de3145;
			--ds-color-red-700: #ad2636;
			--ds-color-red-800: #861e2a;
			--ds-color-red-900: #661720;
			--ds-color-lilac-50: #fbf5fb;
			--ds-color-lilac-100: #f2e1f3;
			--ds-color-lilac-200: #ecd2ed;
			--ds-color-lilac-300: #e3bee4;
			--ds-color-lilac-400: #ddb1df;
			--ds-color-lilac-500: #d59ed7;
			--ds-color-lilac-600: #c290c4;
			--ds-color-lilac-700: #977099;
			--ds-color-lilac-800: #755776;
			--ds-color-lilac-900: #59425a;
			--ds-color-red-violet-50: #f9ebf9;
			--ds-color-red-violet-100: #ebc2ed;
			--ds-color-red-violet-200: #e2a5e4;
			--ds-color-red-violet-300: #d57cd7;
			--ds-color-red-violet-400: #cd62d0;
			--ds-color-red-violet-500: #c03bc4;
			--ds-color-red-violet-600: #af36b2;
			--ds-color-red-violet-700: #882a8b;
			--ds-color-red-violet-800: #6a206c;
			--ds-color-red-violet-900: #511952;
			--ds-color-purple-50: #f3eff9;
			--ds-color-purple-100: #d9ceed;
			--ds-color-purple-200: #c7b6e4;
			--ds-color-purple-300: #ae95d8;
			--ds-color-purple-400: #9e81d1;
			--ds-color-purple-500: #8661c5;
			--ds-color-purple-600: #7a58b3;
			--ds-color-purple-700: #5f458c;
			--ds-color-purple-800: #4a356c;
			--ds-color-purple-900: #382953;
			--ds-color-mint-green-50: #f4fdf1;
			--ds-color-mint-green-100: #dcf8d3;
			--ds-color-mint-green-200: #cbf5be;
			--ds-color-mint-green-300: #b3f0a0;
			--ds-color-mint-green-400: #a4ed8d;
			--ds-color-mint-green-500: #8de971;
			--ds-color-mint-green-600: #80d467;
			--ds-color-mint-green-700: #64a550;
			--ds-color-mint-green-800: #4e803e;
			--ds-color-mint-green-900: #3b622f;
			--ds-color-grass-green-50: #e6f0e8;
			--ds-color-grass-green-100: #b2cfb9;
			--ds-color-grass-green-200: #8db897;
			--ds-color-grass-green-300: #599768;
			--ds-color-grass-green-400: #39834a;
			--ds-color-grass-green-500: #07641d;
			--ds-color-grass-green-600: #065b1a;
			--ds-color-grass-green-700: #054715;
			--ds-color-grass-green-800: #043710;
			--ds-color-grass-green-900: #032a0c;
			--ds-color-oyster-gray-50: #fbfbfa;
			--ds-color-oyster-gray-100: #f3f1ef;
			--ds-color-oyster-gray-200: #edeae7;
			--ds-color-oyster-gray-300: #e4e1dc;
			--ds-color-oyster-gray-400: #dfdbd5;
			--ds-color-oyster-gray-500: #d7d2cb;
			--ds-color-oyster-gray-600: #c4bfb9;
			--ds-color-oyster-gray-700: #999590;
			--ds-color-oyster-gray-800: #767470;
			--ds-color-oyster-gray-900: #5a5855;
			--ds-color-warm-gray-50: #f4f3f2;
			--ds-color-warm-gray-100: #dbd8d5;
			--ds-color-warm-gray-200: #cac6c1;
			--ds-color-warm-gray-300: #b2aba5;
			--ds-color-warm-gray-400: #a39b94;
			--ds-color-warm-gray-500: #8c8279;
			--ds-color-warm-gray-600: #7f766e;
			--ds-color-warm-gray-700: #635c56;
			--ds-color-warm-gray-800: #4d4843;
			--ds-color-warm-gray-900: #3b3733;
			--ds-color-teams-50: #efeffb;
			--ds-color-teams-100: #cdccf2;
			--ds-color-teams-200: #b4b4eb;
			--ds-color-teams-300: #9291e2;
			--ds-color-teams-400: #7d7cdd;
			--ds-color-teams-500: #5d5bd4;
			--ds-color-teams-600: #5553c1;
			--ds-color-teams-700: #424197;
			--ds-color-teams-800: #333275;
			--ds-color-teams-900: #201f48;
			--ds-color-xbox-green-50: #e7f2e7;
			--ds-color-xbox-green-100: #bfdabf;
			--ds-color-xbox-green-200: #90c190;
			--ds-color-xbox-green-300: #61a861;
			--ds-color-xbox-green-400: #3f953f;
			--ds-color-xbox-green-500: #107c10;
			--ds-color-xbox-green-600: #0d630d;
			--ds-color-xbox-green-700: #054b16;
			--ds-color-xbox-green-800: #062b06;
			--ds-color-xbox-green-900: #020e02;
			--ds-color-xbox-light-green-50: #fafef3;
			--ds-color-xbox-light-green-100: #f5fee7;
			--ds-color-xbox-light-green-200: #effdd8;
			--ds-color-xbox-light-green-300: #ddfaac;
			--ds-color-xbox-light-green-400: #c9f77b;
			--ds-color-xbox-light-green-500: #9bf00b;
			--ds-color-xbox-light-green-600: #8cd80a;
			--ds-color-xbox-light-green-700: #74b408;
			--ds-color-xbox-light-green-800: #5d9007;
			--ds-color-xbox-light-green-900: #466c05;
			--ds-color-xbox-gray-50: #f1f1f1;
			--ds-color-xbox-gray-100: #e6e6e6;
			--ds-color-xbox-gray-200: #d4d4d4;
			--ds-color-xbox-gray-300: silver;
			--ds-color-xbox-gray-400: #a4a4a4;
			--ds-color-xbox-gray-500: #737373;
			--ds-color-xbox-gray-600: #686868;
			--ds-color-xbox-gray-700: #505050;
			--ds-color-xbox-gray-800: #2f2f2f;
			--ds-color-xbox-gray-900: #1d1d1d;
			--ds-color-acom-electric-blue-50: #e9e6fb;
			--ds-color-acom-electric-blue-100: #c1b0f2;
			--ds-color-acom-electric-blue-200: #a08aeb;
			--ds-color-acom-electric-blue-300: #7a54e2;
			--ds-color-acom-electric-blue-400: #5b33dd;
			--ds-color-acom-electric-blue-500: #1a00e2;
			--ds-color-acom-electric-blue-600: #1700cb;
			--ds-color-acom-electric-blue-700: #12009e;
			--ds-color-acom-electric-blue-800: #0e007a;
			--ds-color-acom-electric-blue-900: #08004d;
			--ds-color-acom-deep-blue-50: #e6e8f5;
			--ds-color-acom-deep-blue-100: #b0b4e6;
			--ds-color-acom-deep-blue-200: #8a93db;
			--ds-color-acom-deep-blue-300: #5467cc;
			--ds-color-acom-deep-blue-400: #3356c2;
			--ds-color-acom-deep-blue-500: #000085;
			--ds-color-acom-deep-blue-600: #000078;
			--ds-color-acom-deep-blue-700: #00005d;
			--ds-color-acom-deep-blue-800: #000047;
			--ds-color-acom-deep-blue-900: #00002d;
			--ds-color-acom-navy-blue-50: #e9e6f5;
			--ds-color-acom-navy-blue-100: #beb0e6;
			--ds-color-acom-navy-blue-200: #9e8adb;
			--ds-color-acom-navy-blue-300: #7a54cc;
			--ds-color-acom-navy-blue-400: #5f33c2;
			--ds-color-acom-navy-blue-500: #0d0061;
			--ds-color-acom-navy-blue-600: #0b0057;
			--ds-color-acom-navy-blue-700: #090043;
			--ds-color-acom-navy-blue-800: #070033;
			--ds-color-acom-navy-blue-900: #04001f;
			--ds-color-acom-turquoise-50: #e6fafb;
			--ds-color-acom-turquoise-100: #b0f0f2;
			--ds-color-acom-turquoise-200: #8ae9eb;
			--ds-color-acom-turquoise-300: #54dee2;
			--ds-color-acom-turquoise-400: #33d8dd;
			--ds-color-acom-turquoise-500: #00bbc3;
			--ds-color-acom-turquoise-600: #00aab1;
			--ds-color-acom-turquoise-700: #00858a;
			--ds-color-acom-turquoise-800: #00686b;
			--ds-color-acom-turquoise-900: #004043;
			--ds-color-success-50: #e7f3ea;
			--ds-color-success-100: #b4dabc;
			--ds-color-success-200: #90c89c;
			--ds-color-success-300: #5eaf6f;
			--ds-color-success-400: #3e9f53;
			--ds-color-success-500: #0e8728;
			--ds-color-success-600: #0d7b24;
			--ds-color-success-700: #0a601c;
			--ds-color-success-800: #084a16;
			--ds-color-success-900: #063911;
			--ds-color-error-50: #fceaec;
			--ds-color-error-100: #f5bfc5;
			--ds-color-error-200: #f0a0a9;
			--ds-color-error-300: #e97582;
			--ds-color-error-400: #e55a6a;
			--ds-color-error-500: #de3145;
			--ds-color-error-600: #ca2d3f;
			--ds-color-error-700: #9e2331;
			--ds-color-error-800: #7a1b26;
			--ds-color-error-900: #5d151d;
			--ds-color-warning-50: #fffbe9;
			--ds-color-warning-100: #fdf4bb;
			--ds-color-warning-200: #fdee9a;
			--ds-color-warning-300: #fce66c;
			--ds-color-warning-400: #fbe14f;
			--ds-color-warning-500: #fada23;
			--ds-color-warning-600: #e4c620;
			--ds-color-warning-700: #b29b19;
			--ds-color-warning-800: #8a7813;
			--ds-color-warning-900: #695c0f;
			--ds-color-info-50: #e6effd;
			--ds-color-info-100: #b0ccf8;
			--ds-color-info-200: #8ab4f4;
			--ds-color-info-300: #5492f0;
			--ds-color-info-400: #337ded;
			--ds-color-info-500: #005ce8;
			--ds-color-info-600: #0054d3;
			--ds-color-info-700: #0041a5;
			--ds-color-info-800: #003380;
			--ds-color-info-900: #002761;
			--ds-color-pure-white: #fff;
			--ds-color-pure-black: #000;
			--ds-color-alpha-white-50: #ffffff0d;
			--ds-color-alpha-white-100: #ffffff1a;
			--ds-color-alpha-white-200: #fff3;
			--ds-color-alpha-white-300: #ffffff4d;
			--ds-color-alpha-white-400: #fff6;
			--ds-color-alpha-white-500: #ffffff80;
			--ds-color-alpha-white-600: #fff9;
			--ds-color-alpha-white-700: #ffffffb3;
			--ds-color-alpha-white-800: #fffc;
			--ds-color-alpha-white-900: #ffffffe6;
			--ds-color-alpha-black-50: #0000000d;
			--ds-color-alpha-black-100: #0000001a;
			--ds-color-alpha-black-200: #0003;
			--ds-color-alpha-black-300: #0000004d;
			--ds-color-alpha-black-400: #0006;
			--ds-color-alpha-black-500: #00000080;
			--ds-color-alpha-black-600: #0009;
			--ds-color-alpha-black-700: #000000b3;
			--ds-color-alpha-black-800: #000c;
			--ds-color-alpha-black-900: #000000e6
		}

		:root {
			--ds-elevation-color-1: rgba(0,0,0,0.12);
			--ds-elevation-color-2: rgba(0,0,0,0.14);
			--ds-elevation-level-1: 0 0 .125rem var(--ds-elevation-color-1,rgba(0,0,0,0.12)),0 .063rem .125rem var(--ds-elevation-color-2,rgba(0,0,0,0.14));
			--ds-elevation-level-2: 0 0 .125rem var(--ds-elevation-color-1,rgba(0,0,0,0.12)),0 .125rem .25rem var(--ds-elevation-color-2,rgba(0,0,0,0.14));
			--ds-elevation-level-3: 0 0 .125rem var(--ds-elevation-color-1,rgba(0,0,0,0.12)),0 .25rem .5rem var(--ds-elevation-color-2,rgba(0,0,0,0.14));
			--ds-elevation-level-4: 0 0 .125rem var(--ds-elevation-color-1,rgba(0,0,0,0.12)),0 .5rem 1rem var(--ds-elevation-color-2,rgba(0,0,0,0.14));
			--ds-elevation-level-5: 0 0 .5rem var(--ds-elevation-color-1,rgba(0,0,0,0.12)),0 .875rem 1.75rem var(--ds-elevation-color-2,rgba(0,0,0,0.14));
			--ds-elevation-level-6: 0 0 .5rem var(--ds-elevation-color-1,rgba(0,0,0,0.12)),0 2rem 4rem var(--ds-elevation-color-2,rgba(0,0,0,0.14))
		}

		:root {
			--ds-space-3xs: .125rem;
			--ds-space-2xs: .25rem;
			--ds-space-xs: .5rem;
			--ds-space-s: .75rem;
			--ds-space-m: 1rem;
			--ds-space-l: 1.5rem;
			--ds-space-xl: 2rem;
			--ds-space-2xl: 3rem;
			--ds-space-3xl: 3.5rem;
			--ds-space-4xl: 4.5rem;
			--ds-space-5xl: 6rem
		}

		:root {
			--ds-grid-columns: 6;
			--ds-grid-container: 100%;
			--ds-grid-gutter: .5rem;
			--ds-grid-margin: 1rem
		}

		@media(min-width: 540px) {
			:root {
				--ds-grid-margin:4rem
			}
		}

		@media(min-width: 860px) {
			:root {
				--ds-grid-columns:12;
				--ds-grid-gutter: 1rem;
				--ds-grid-margin: 3.5rem
			}
		}

		@media(min-width: 1440px) {
			:root {
				--ds-grid-columns:24;
				--ds-grid-container: 1328px;
				--ds-grid-margin: auto
			}
		}

		:root {
			--ds-motion-easing-enter: cubic-bezier(0.48,0.04,0.16,1);
			--ds-motion-easing-exit: cubic-bezier(0.85,0,0.8,0.8);
			--ds-motion-easing-hover: cubic-bezier(0.2,0.2,0.15,1);
			--ds-motion-duration-short1: 50ms;
			--ds-motion-duration-short2: 170ms;
			--ds-motion-duration-medium1: 500ms;
			--ds-motion-duration-medium2: 670ms;
			--ds-motion-duration-long1: 830ms;
			--ds-motion-duration-long2: 1000ms;
			--ds-motion-delay-0: 0;
			--ds-motion-delay-1: 50ms;
			--ds-motion-delay-2: 80ms;
			--ds-motion-delay-3: 100ms;
			--ds-motion-delay-4: 170ms;
			--ds-motion-delay-5: 330ms;
			--ds-motion-iteration-1: 1;
			--ds-motion-iteration-infinite: infinite
		}

		:root {
			--ds-z-index-0: 0;
			--ds-z-index-10: 10;
			--ds-z-index-20: 20;
			--ds-z-index-30: 30;
			--ds-z-index-40: 40;
			--ds-z-index-50: 50;
			--ds-z-index-1000: 1000;
			--ds-z-index-1010: 1010;
			--ds-z-index-1020: 1020;
			--ds-z-index-1030: 1030;
			--ds-z-index-1040: 1040;
			--ds-z-index-1050: 1050;
			--ds-z-index-1060: 1060;
			--ds-z-index-n1: -1;
			--ds-z-index-auto: auto;
			--ds-z-index-override: 9999
		}

		:root {
			--ds-app-type-action-button-font-size: .9375rem;
			--ds-app-type-action-button-font-weight: 600;
			--ds-app-type-action-button-letter-spacing: -0.02em;
			--ds-app-type-action-button-line-height: 1.375rem;
			--ds-app-type-action-superscript-button-font-size: .9375rem;
			--ds-app-type-action-superscript-button-font-weight: 600;
			--ds-app-type-action-superscript-button-letter-spacing: .02em;
			--ds-app-type-action-superscript-button-line-height: 1.375rem;
			--ds-app-type-body-l-font-size: 1.125rem;
			--ds-app-type-body-l-font-weight: 400;
			--ds-app-type-body-l-letter-spacing: -0.03em;
			--ds-app-type-body-l-line-height: 1.75rem;
			--ds-app-type-body-m-font-size: 1rem;
			--ds-app-type-body-m-font-weight: 400;
			--ds-app-type-body-m-letter-spacing: -0.03em;
			--ds-app-type-body-m-line-height: 1.5rem;
			--ds-app-type-body-s-font-size: .875rem;
			--ds-app-type-body-s-font-weight: 400;
			--ds-app-type-body-s-letter-spacing: -0.03em;
			--ds-app-type-body-s-line-height: 1.25rem;
			--ds-app-type-body-superscript-l-font-size: 1.125rem;
			--ds-app-type-body-superscript-l-font-weight: 600;
			--ds-app-type-body-superscript-l-letter-spacing: -0.03em;
			--ds-app-type-body-superscript-l-line-height: 1.75rem;
			--ds-app-type-body-superscript-m-font-size: 1rem;
			--ds-app-type-body-superscript-m-font-weight: 600;
			--ds-app-type-body-superscript-m-letter-spacing: -0.03em;
			--ds-app-type-body-superscript-m-line-height: 1.5rem;
			--ds-app-type-body-superscript-s-font-size: .875rem;
			--ds-app-type-body-superscript-s-font-weight: 600;
			--ds-app-type-body-superscript-s-letter-spacing: -0.03em;
			--ds-app-type-body-superscript-s-line-height: 1.25rem;
			--ds-app-type-body-superscript-xs-font-size: .75rem;
			--ds-app-type-body-superscript-xs-font-weight: 600;
			--ds-app-type-body-superscript-xs-letter-spacing: -0.03em;
			--ds-app-type-body-superscript-xs-line-height: 1rem;
			--ds-app-type-body-xs-font-size: .75rem;
			--ds-app-type-body-xs-font-weight: 400;
			--ds-app-type-body-xs-letter-spacing: -0.03em;
			--ds-app-type-body-xs-line-height: 1rem;
			--ds-app-type-heading-2xl-font-size: 3.5rem;
			--ds-app-type-heading-2xl-font-weight: 400;
			--ds-app-type-heading-2xl-letter-spacing: -0.025em;
			--ds-app-type-heading-2xl-line-height: 3.875rem;
			--ds-app-type-heading-2xs-font-size: 1.125rem;
			--ds-app-type-heading-2xs-font-weight: 600;
			--ds-app-type-heading-2xs-letter-spacing: normal;
			--ds-app-type-heading-2xs-line-height: 1.5rem;
			--ds-app-type-heading-3xl-font-size: 4.75rem;
			--ds-app-type-heading-3xl-font-weight: 400;
			--ds-app-type-heading-3xl-letter-spacing: -0.025em;
			--ds-app-type-heading-3xl-line-height: 5.125rem;
			--ds-app-type-heading-3xs-font-size: 1rem;
			--ds-app-type-heading-3xs-font-weight: 600;
			--ds-app-type-heading-3xs-letter-spacing: normal;
			--ds-app-type-heading-3xs-line-height: 1.5rem;
			--ds-app-type-heading-l-font-size: 2.5rem;
			--ds-app-type-heading-l-font-weight: 500;
			--ds-app-type-heading-l-letter-spacing: -0.025em;
			--ds-app-type-heading-l-line-height: 3rem;
			--ds-app-type-heading-m-font-size: 2rem;
			--ds-app-type-heading-m-font-weight: 500;
			--ds-app-type-heading-m-letter-spacing: -0.025em;
			--ds-app-type-heading-m-line-height: 2.5rem;
			--ds-app-type-heading-s-font-size: 1.5rem;
			--ds-app-type-heading-s-font-weight: 500;
			--ds-app-type-heading-s-letter-spacing: -0.015em;
			--ds-app-type-heading-s-line-height: 2rem;
			--ds-app-type-heading-superscript-2xs-font-size: 1.125rem;
			--ds-app-type-heading-superscript-2xs-font-weight: 600;
			--ds-app-type-heading-superscript-2xs-letter-spacing: 0;
			--ds-app-type-heading-superscript-2xs-line-height: 1.625rem;
			--ds-app-type-heading-superscript-3xl-font-size: 3.5rem;
			--ds-app-type-heading-superscript-3xl-font-weight: 400;
			--ds-app-type-heading-superscript-3xl-letter-spacing: -0.02em;
			--ds-app-type-heading-superscript-3xl-line-height: 3.875rem;
			--ds-app-type-heading-superscript-3xs-font-size: 1rem;
			--ds-app-type-heading-superscript-3xs-font-weight: 600;
			--ds-app-type-heading-superscript-3xs-letter-spacing: 0;
			--ds-app-type-heading-superscript-3xs-line-height: 1.5rem;
			--ds-app-type-heading-superscript-m-font-size: 1.75rem;
			--ds-app-type-heading-superscript-m-font-weight: 400;
			--ds-app-type-heading-superscript-m-letter-spacing: 0;
			--ds-app-type-heading-superscript-m-line-height: 2.25rem;
			--ds-app-type-heading-superscript-s-font-size: 1.5rem;
			--ds-app-type-heading-superscript-s-font-weight: 500;
			--ds-app-type-heading-superscript-s-letter-spacing: -0.015em;
			--ds-app-type-heading-superscript-s-line-height: 2rem;
			--ds-app-type-heading-superscript-xl-font-size: 2.875rem;
			--ds-app-type-heading-superscript-xl-font-weight: 400;
			--ds-app-type-heading-superscript-xl-letter-spacing: -0.02em;
			--ds-app-type-heading-superscript-xl-line-height: 3.375rem;
			--ds-app-type-heading-superscript-xs-font-size: 1.25rem;
			--ds-app-type-heading-superscript-xs-font-weight: 500;
			--ds-app-type-heading-superscript-xs-letter-spacing: -0.01em;
			--ds-app-type-heading-superscript-xs-line-height: 1.75rem;
			--ds-app-type-heading-xl-font-size: 3rem;
			--ds-app-type-heading-xl-font-weight: 500;
			--ds-app-type-heading-xl-letter-spacing: -0.025em;
			--ds-app-type-heading-xl-line-height: 3.5rem;
			--ds-app-type-heading-xs-font-size: 1.25rem;
			--ds-app-type-heading-xs-font-weight: 500;
			--ds-app-type-heading-xs-letter-spacing: -0.01em;
			--ds-app-type-heading-xs-line-height: 1.75rem;
			--ds-app-type-label-eyebrow-font-size: .75rem;
			--ds-app-type-label-eyebrow-font-weight: 600;
			--ds-app-type-label-eyebrow-letter-spacing: .08em;
			--ds-app-type-label-eyebrow-line-height: 1rem;
			--ds-app-type-label-l-font-size: 1rem;
			--ds-app-type-label-l-font-weight: 600;
			--ds-app-type-label-l-letter-spacing: normal;
			--ds-app-type-label-l-line-height: 1.5rem;
			--ds-app-type-label-m-font-size: .875rem;
			--ds-app-type-label-m-font-weight: 600;
			--ds-app-type-label-m-letter-spacing: normal;
			--ds-app-type-label-m-line-height: 1.25rem;
			--ds-app-type-label-s-font-size: .75rem;
			--ds-app-type-label-s-font-weight: 600;
			--ds-app-type-label-s-letter-spacing: normal;
			--ds-app-type-label-s-line-height: 1rem;
			--ds-app-type-label-superscript-eyebrow-font-size: .75rem;
			--ds-app-type-label-superscript-eyebrow-font-weight: 600;
			--ds-app-type-label-superscript-eyebrow-letter-spacing: .08em;
			--ds-app-type-label-superscript-eyebrow-line-height: 1rem;
			--ds-app-type-label-superscript-l-font-size: 1rem;
			--ds-app-type-label-superscript-l-font-weight: 600;
			--ds-app-type-label-superscript-l-line-height: 1.5rem;
			--ds-app-type-label-superscript-m-font-size: .875rem;
			--ds-app-type-label-superscript-m-font-weight: 600;
			--ds-app-type-label-superscript-m-line-height: 1.25rem;
			--ds-app-type-label-superscript-s-font-size: .75rem;
			--ds-app-type-label-superscript-s-font-weight: 600;
			--ds-app-type-label-superscript-s-line-height: 1rem
		}

		@media(min-width: 860px) {
			:root {
				--ds-app-type-heading-2xl-font-size:4.75rem;
				--ds-app-type-heading-2xl-line-height: 5.125rem;
				--ds-app-type-heading-3xl-font-size: 6.25rem;
				--ds-app-type-heading-3xl-line-height: 6.625rem;
				--ds-app-type-heading-l-font-size: 2.75rem;
				--ds-app-type-heading-l-line-height: 3.5rem;
				--ds-app-type-heading-m-font-size: 2.5rem;
				--ds-app-type-heading-m-line-height: 3rem;
				--ds-app-type-heading-superscript-3xl-font-size: 4.75rem;
				--ds-app-type-heading-superscript-3xl-line-height: 5.125rem;
				--ds-app-type-heading-superscript-m-font-size: 1.875rem;
				--ds-app-type-heading-xl-font-size: 3.75rem;
				--ds-app-type-heading-xl-line-height: 4.5rem;
				--ds-app-type-heading-xs-font-size: 1.375rem
			}
		}

		@media(min-width: 1440px) {
			:root {
				--ds-app-type-body-l-font-size:1.25rem;
				--ds-app-type-body-l-line-height: 2rem;
				--ds-app-type-body-superscript-l-font-size: 1.25rem;
				--ds-app-type-body-superscript-l-line-height: 2rem;
				--ds-app-type-heading-2xl-font-size: 6.25rem;
				--ds-app-type-heading-2xl-line-height: 6.625rem;
				--ds-app-type-heading-2xs-font-size: 1.25rem;
				--ds-app-type-heading-2xs-line-height: 1.75rem;
				--ds-app-type-heading-3xl-font-size: 7.75rem;
				--ds-app-type-heading-3xl-line-height: 8.125rem;
				--ds-app-type-heading-l-font-size: 3.875rem;
				--ds-app-type-heading-l-line-height: 4.5rem;
				--ds-app-type-heading-m-font-size: 3rem;
				--ds-app-type-heading-m-line-height: 3.5rem;
				--ds-app-type-heading-s-font-size: 2rem;
				--ds-app-type-heading-s-line-height: 2.5rem;
				--ds-app-type-heading-superscript-2xs-font-size: 1.25rem;
				--ds-app-type-heading-superscript-2xs-line-height: 1.75rem;
				--ds-app-type-heading-superscript-3xl-font-size: 6.25rem;
				--ds-app-type-heading-superscript-3xl-line-height: 6.625rem;
				--ds-app-type-heading-superscript-m-font-size: 2.5rem;
				--ds-app-type-heading-superscript-m-line-height: 3rem;
				--ds-app-type-heading-superscript-xl-font-size: 6.25rem;
				--ds-app-type-heading-superscript-xl-line-height: 6.625rem;
				--ds-app-type-heading-xl-font-size: 4.75rem;
				--ds-app-type-heading-xl-line-height: 5.5rem;
				--ds-app-type-heading-xs-font-size: 1.5rem;
				--ds-app-type-heading-xs-line-height: 2rem
			}
		}

		:root {
			--ds-app-radii-circle: var(--ds-radii-circle,12.5rem);
			--ds-app-radii-l: var(--ds-radii-l,1rem);
			--ds-app-radii-m: var(--ds-radii-m,0.75rem);
			--ds-app-radii-s: var(--ds-radii-s,0.5rem);
			--ds-app-radii-xs: var(--ds-radii-xs,0.25rem)
		}

		@media(min-width: 860px) {
			:root {
				--ds-app-radii-l:var(--ds-radii-xl,1.5rem);
				--ds-app-radii-m: var(--ds-radii-l,1rem)
			}
		}

		:root {
			--ds-app-space-grid-default: var(--ds-space-s,0.75rem);
			--ds-app-space-layout-inset-vertical-comfortable: var(--ds-space-3xl,3.5rem);
			--ds-app-space-layout-inset-vertical-compact: var(--ds-space-xl,2rem);
			--ds-app-space-layout-inset-vertical-cozy: var(--ds-space-2xl,3rem);
			--ds-app-space-layout-stack-comfortable: var(--ds-space-xl,2rem);
			--ds-app-space-layout-stack-cozy: var(--ds-space-l,1.5rem);
			--ds-app-space-layout-stack-roomy: var(--ds-space-2xl,3rem);
			--ds-app-space-micro-2xl: var(--ds-space-xl,2rem);
			--ds-app-space-micro-2xs: var(--ds-space-2xs,0.25rem);
			--ds-app-space-micro-3xl: var(--ds-space-2xl,3rem);
			--ds-app-space-micro-3xs: var(--ds-space-3xs,0.125rem);
			--ds-app-space-micro-4xl: var(--ds-space-3xl,3.5rem);
			--ds-app-space-micro-l: var(--ds-space-m,1rem);
			--ds-app-space-micro-m: var(--ds-space-s,0.75rem);
			--ds-app-space-micro-s: var(--ds-space-s,0.75rem);
			--ds-app-space-micro-xl: var(--ds-space-l,1.5rem);
			--ds-app-space-micro-xs: var(--ds-space-xs,0.5rem);
			--ds-app-space-surface-comfortable: var(--ds-space-m,1rem);
			--ds-app-space-surface-relaxed: var(--ds-space-xl,2rem);
			--ds-app-space-surface-roomy: var(--ds-space-l,1.5rem)
		}

		@media(min-width: 860px) {
			:root {
				--ds-app-space-grid-default:var(--ds-space-m,1rem);
				--ds-app-space-layout-inset-vertical-comfortable: var(--ds-space-5xl,6rem);
				--ds-app-space-layout-inset-vertical-compact: var(--ds-space-2xl,3rem);
				--ds-app-space-layout-inset-vertical-cozy: var(--ds-space-4xl,4.5rem);
				--ds-app-space-layout-stack-comfortable: var(--ds-space-2xl,3rem);
				--ds-app-space-layout-stack-cozy: var(--ds-space-xl,2rem);
				--ds-app-space-layout-stack-roomy: var(--ds-space-4xl,4.5rem);
				--ds-app-space-micro-2xl: var(--ds-space-2xl,3rem);
				--ds-app-space-micro-3xl: var(--ds-space-4xl,4.5rem);
				--ds-app-space-micro-4xl: var(--ds-space-5xl,6rem);
				--ds-app-space-micro-l: var(--ds-space-l,1.5rem);
				--ds-app-space-micro-m: var(--ds-space-m,1rem);
				--ds-app-space-micro-xl: var(--ds-space-xl,2rem);
				--ds-app-space-surface-comfortable: var(--ds-space-l,1.5rem);
				--ds-app-space-surface-relaxed: var(--ds-space-4xl,4.5rem);
				--ds-app-space-surface-roomy: var(--ds-space-2xl,3rem)
			}
		}

		:root,[theme="light"] {
			--ds-app-color-base-default-fg-heading: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-base-default-fg-body: var(--ds-color-blue-black-400,#3a4c56);
			--ds-app-color-base-default-fg-highlight: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-base-default-fg-accent: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-base-default-bg-opt1: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-default-bg-opt2: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-base-default-bg-opt3: var(--ds-color-pure-white,#fff);
			--ds-app-color-base-default-bg-opt4: #00ff26;
			--ds-app-color-base-default-border-subtle: var(--ds-color-sky-blue-200,#cbe6f4);
			--ds-app-color-base-default-border-strong: var(--ds-color-brilliant-blue-900,#002948);
			--ds-app-color-base-alt1-fg-heading: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-base-alt1-fg-body: var(--ds-color-dark-blue-800,#17253d);
			--ds-app-color-base-alt1-fg-highlight: var(--ds-color-dark-blue-800,#17253d);
			--ds-app-color-base-alt1-fg-accent: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-base-alt1-bg-opt1: var(--ds-color-vapor-gray-50,#f7f7f7);
			--ds-app-color-base-alt1-bg-opt2: var(--ds-color-vapor-gray-100,#e7e7e7);
			--ds-app-color-base-alt1-bg-opt3: #00ff26;
			--ds-app-color-base-alt1-bg-opt4: #00ff26;
			--ds-app-color-base-alt1-border-subtle: var(--ds-color-dark-blue-100,#bdc5d2);
			--ds-app-color-base-alt1-border-strong: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-base-alt2-fg-heading: var(--ds-color-violet-900,#260d27);
			--ds-app-color-base-alt2-fg-body: var(--ds-color-violet-800,#3e143f);
			--ds-app-color-base-alt2-fg-highlight: var(--ds-color-violet-800,#3e143f);
			--ds-app-color-base-alt2-fg-accent: var(--ds-color-violet-500,#702573);
			--ds-app-color-base-alt2-bg-opt1: var(--ds-color-pink-50,#fff7f8);
			--ds-app-color-base-alt2-bg-opt2: var(--ds-color-pink-300,#ffccd1);
			--ds-app-color-base-alt2-bg-opt3: #00ff26;
			--ds-app-color-base-alt2-bg-opt4: #00ff26;
			--ds-app-color-base-alt2-border-subtle: var(--ds-color-pink-100,#ffe7ea);
			--ds-app-color-base-alt2-border-strong: var(--ds-color-violet-900,#260d27);
			--ds-app-color-base-special-fg-heading: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-base-special-fg-body: var(--ds-color-dark-blue-800,#17253d);
			--ds-app-color-base-special-fg-highlight: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-base-special-fg-accent: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-base-special-bg-opt1-stop1: var(--ds-color-lavender-100,#ede8f6);
			--ds-app-color-base-special-bg-opt1-stop2: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-special-bg-opt1-stop3: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-base-special-bg-opt1-left: linear-gradient(90deg,var(--ds-app-color-base-special-bg-opt1-stop1,#ede8f6) 0,var(--ds-app-color-base-special-bg-opt1-stop2,#f4fafd) 50%,var(--ds-app-color-base-special-bg-opt1-stop3,#dceef8) 100%);
			--ds-app-color-base-special-bg-opt2-stop1: var(--ds-color-sky-blue-200,#cbe6f4);
			--ds-app-color-base-special-bg-opt2-stop2: var(--ds-color-sky-blue-500,#8dc8e8);
			--ds-app-color-base-special-bg-opt2-stop3: var(--ds-color-lavender-500,#c5b4e3);
			--ds-app-color-base-special-bg-opt2-left: linear-gradient(90deg,var(--ds-app-color-base-special-bg-opt2-stop1,#cbe6f4) 0,var(--ds-app-color-base-special-bg-opt2-stop2,#8dc8e8) 50%,var(--ds-app-color-base-special-bg-opt2-stop3,#c5b4e3) 100%);
			--ds-app-color-base-special-bg-opt3-stop1: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-special-bg-opt3-stop2: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-special-bg-opt3-stop3: var(--ds-color-brilliant-blue-50,#e6f2fb);
			--ds-app-color-base-special-bg-opt3-left: linear-gradient(90deg,var(--ds-app-color-base-special-bg-opt3-stop1,#f4fafd) 0,var(--ds-app-color-base-special-bg-opt3-stop2,#f4fafd) 50%,var(--ds-app-color-base-special-bg-opt3-stop3,#e6f2fb) 100%);
			--ds-app-color-base-special-bg-opt4-stop1: var(--ds-color-sky-blue-200,#cbe6f4);
			--ds-app-color-base-special-bg-opt4-stop2: var(--ds-color-sky-blue-200,#cbe6f4);
			--ds-app-color-base-special-bg-opt4-stop3: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-special-bg-opt4-left: linear-gradient(90deg,var(--ds-app-color-base-special-bg-opt4-stop1,#cbe6f4) 0,var(--ds-app-color-base-special-bg-opt4-stop2,#cbe6f4) 50%,var(--ds-app-color-base-special-bg-opt4-stop3,#f4fafd) 100%);
			--ds-app-color-base-special-border-subtle: var(--ds-color-sky-blue-200,#cbe6f4);
			--ds-app-color-base-special-border-strong: var(--ds-color-brilliant-blue-900,#002948);
			--ds-app-color-gradient-opt1-stop1: var(--ds-color-red-violet-700,#882a8b);
			--ds-app-color-gradient-opt1-stop2: var(--ds-color-error-500,#de3145);
			--ds-app-color-gradient-opt1-stop3: var(--ds-color-bright-orange-600,#e85434);
			--ds-app-color-gradient-opt1-left: linear-gradient(90deg,var(--ds-app-color-gradient-opt1-stop1,#882a8b) 0,var(--ds-app-color-gradient-opt1-stop2,#de3145) 50%,var(--ds-app-color-gradient-opt1-stop3,#e85434) 100%);
			--ds-app-color-gradient-opt2-stop1: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt2-stop2: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt2-stop3: var(--ds-color-biscay-green-400,#6dd1c1);
			--ds-app-color-gradient-opt2-left: linear-gradient(90deg,var(--ds-app-color-gradient-opt2-stop1,#0078d4) 0,var(--ds-app-color-gradient-opt2-stop2,#0078d4) 50%,var(--ds-app-color-gradient-opt2-stop3,#6dd1c1) 100%);
			--ds-app-color-gradient-opt3-stop1: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt3-stop2: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt3-stop3: var(--ds-color-purple-500,#8661c5);
			--ds-app-color-gradient-opt3-left: linear-gradient(90deg,var(--ds-app-color-gradient-opt3-stop1,#0078d4) 0,var(--ds-app-color-gradient-opt3-stop2,#0078d4) 50%,var(--ds-app-color-gradient-opt3-stop3,#8661c5) 100%);
			--ds-app-color-highlight-fg: #00ff26;
			--ds-app-color-highlight-bg: #00ff26;
			--ds-app-color-interactive-primary-fg-default: var(--ds-color-pure-white,#fff);
			--ds-app-color-interactive-primary-fg-hover: var(--ds-color-pure-white,#fff);
			--ds-app-color-interactive-primary-fg-active: var(--ds-color-pure-white,#fff);
			--ds-app-color-interactive-primary-fg-selected: var(--ds-color-pure-white,#fff);
			--ds-app-color-interactive-primary-fg-inactive: var(--ds-color-brilliant-blue-50,#e6f2fb);
			--ds-app-color-interactive-primary-bg-default: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-interactive-primary-bg-hover: var(--ds-color-brilliant-blue-600,#006dc1);
			--ds-app-color-interactive-primary-bg-active: var(--ds-color-brilliant-blue-800,#004275);
			--ds-app-color-interactive-primary-bg-selected: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-interactive-primary-bg-inactive: var(--ds-color-brilliant-blue-100,#b0d5f2);
			--ds-app-color-interactive-primary-border-default: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-interactive-primary-border-hover: var(--ds-color-brilliant-blue-600,#006dc1);
			--ds-app-color-interactive-primary-border-active: var(--ds-color-brilliant-blue-800,#004275);
			--ds-app-color-interactive-primary-border-selected: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-interactive-primary-border-inactive: var(--ds-color-brilliant-blue-100,#b0d5f2);
			--ds-app-color-interactive-secondary-fg-default: var(--ds-color-dark-blue-500,#2a446f);
			--ds-app-color-interactive-secondary-fg-hover: var(--ds-color-dark-blue-600,#263e65);
			--ds-app-color-interactive-secondary-fg-active: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-interactive-secondary-fg-selected: var(--ds-color-pure-white,#fff);
			--ds-app-color-interactive-secondary-fg-inactive: var(--ds-color-dark-blue-200,#9da9bd);
			--ds-app-color-interactive-secondary-bg-default: var(--ds-color-brilliant-blue-50,#e6f2fb);
			--ds-app-color-interactive-secondary-bg-hover: var(--ds-color-brilliant-blue-200,#8ac1eb);
			--ds-app-color-interactive-secondary-bg-active: var(--ds-color-brilliant-blue-300,#54a5e2);
			--ds-app-color-interactive-secondary-bg-selected: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-interactive-secondary-bg-inactive: var(--ds-color-brilliant-blue-50,#e6f2fb);
			--ds-app-color-interactive-secondary-border-default: var(--ds-color-dark-blue-500,#2a446f);
			--ds-app-color-interactive-secondary-border-hover: var(--ds-color-dark-blue-600,#263e65);
			--ds-app-color-interactive-secondary-border-active: var(--ds-color-dark-blue-800,#17253d);
			--ds-app-color-interactive-secondary-border-selected: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-interactive-secondary-border-inactive: var(--ds-color-dark-blue-100,#bdc5d2);
			--ds-app-color-overlay-fill: var(--ds-color-alpha-white-600,#fff9);
			--ds-app-color-overlay-opt1-stop1: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-overlay-opt1-stop2: #fff0;
			--ds-app-color-overlay-opt1-left: linear-gradient(90deg,var(--ds-app-color-overlay-opt1-stop1,#f4fafd) 0,var(--ds-app-color-overlay-opt1-stop2,#fff0) 100%);
			--ds-app-color-overlay-opt2-stop1: var(--ds-color-red-violet-500,#c03bc4);
			--ds-app-color-overlay-opt2-stop2: #fff0;
			--ds-app-color-overlay-opt2-left: linear-gradient(90deg,var(--ds-app-color-overlay-opt2-stop1,#c03bc4) 0,var(--ds-app-color-overlay-opt2-stop2,#fff0) 100%);
			--ds-app-color-surface-solid-bg-nonclickable: var(--ds-color-off-white-50,#fefefe);
			--ds-app-color-surface-solid-bg-default: var(--ds-color-off-white-50,#fefefe);
			--ds-app-color-surface-solid-bg-hover: var(--ds-color-off-white-300,#f8f7f8);
			--ds-app-color-surface-solid-bg-pressed: var(--ds-color-off-white-400,#f6f5f7);
			--ds-app-color-surface-solid-bg-selected: var(--ds-color-off-white-50,#fefefe);
			--ds-app-color-surface-glass-bg-nonclickable: var(--ds-color-alpha-white-400,#fff6);
			--ds-app-color-surface-glass-bg-default: var(--ds-color-alpha-white-400,#fff6);
			--ds-app-color-surface-glass-bg-hover: var(--ds-color-alpha-white-500,#ffffff80);
			--ds-app-color-surface-glass-bg-pressed: var(--ds-color-alpha-white-600,#fff9);
			--ds-app-color-surface-glass-bg-selected: var(--ds-color-alpha-white-700,#ffffffb3);
			--ds-app-color-surface-contrast-bg-nonclickable: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-surface-contrast-bg-default: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-surface-contrast-bg-hover: var(--ds-color-sky-blue-200,#cbe6f4);
			--ds-app-color-surface-contrast-bg-pressed: var(--ds-color-sky-blue-400,#a4d3ed);
			--ds-app-color-surface-contrast-bg-selected: var(--ds-color-sky-blue-300,#b3daf0)
		}

		[theme="dark"] {
			--ds-app-color-base-default-fg-heading: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-default-fg-body: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-base-default-fg-highlight: var(--ds-color-sky-blue-300,#b3daf0);
			--ds-app-color-base-default-fg-accent: var(--ds-color-brilliant-blue-300,#54a5e2);
			--ds-app-color-base-default-bg-opt1: var(--ds-color-brilliant-blue-900,#002948);
			--ds-app-color-base-default-bg-opt2: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-base-default-bg-opt3: var(--ds-color-pure-black,#000);
			--ds-app-color-base-default-bg-opt4: #00ff26;
			--ds-app-color-base-default-border-subtle: var(--ds-color-sky-blue-900,#3b5461);
			--ds-app-color-base-default-border-strong: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-alt1-fg-heading: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-alt1-fg-body: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-base-alt1-fg-highlight: var(--ds-color-sky-blue-300,#b3daf0);
			--ds-app-color-base-alt1-fg-accent: var(--ds-color-brilliant-blue-300,#54a5e2);
			--ds-app-color-base-alt1-bg-opt1: var(--ds-color-blue-black-500,#091f2c);
			--ds-app-color-base-alt1-bg-opt2: var(--ds-color-blue-black-700,#06161f);
			--ds-app-color-base-alt1-bg-opt3: #00ff26;
			--ds-app-color-base-alt1-bg-opt4: #00ff26;
			--ds-app-color-base-alt1-border-subtle: #312e2f;
			--ds-app-color-base-alt1-border-strong: var(--ds-color-pure-white,#fff);
			--ds-app-color-base-alt2-fg-heading: var(--ds-color-twilight-purple-50,#edebf0);
			--ds-app-color-base-alt2-fg-body: var(--ds-color-twilight-purple-100,#c6c1d0);
			--ds-app-color-base-alt2-fg-highlight: var(--ds-color-twilight-purple-500,#463668);
			--ds-app-color-base-alt2-fg-accent: var(--ds-color-violet-300,#9f6da1);
			--ds-app-color-base-alt2-bg-opt1: #1d172c;
			--ds-app-color-base-alt2-bg-opt2: var(--ds-color-twilight-purple-700,#32264a);
			--ds-app-color-base-alt2-bg-opt3: #00ff26;
			--ds-app-color-base-alt2-bg-opt4: #00ff26;
			--ds-app-color-base-alt2-border-subtle: var(--ds-color-twilight-purple-800,#271e39);
			--ds-app-color-base-alt2-border-strong: var(--ds-color-twilight-purple-50,#edebf0);
			--ds-app-color-base-special-fg-heading: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-base-special-fg-body: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-base-special-fg-highlight: var(--ds-color-sky-blue-300,#b3daf0);
			--ds-app-color-base-special-fg-accent: var(--ds-color-brilliant-blue-300,#54a5e2);
			--ds-app-color-base-special-bg-opt1-stop1: var(--ds-color-blue-black-700,#06161f);
			--ds-app-color-base-special-bg-opt1-stop2: var(--ds-color-blue-black-500,#091f2c);
			--ds-app-color-base-special-bg-opt1-stop3: var(--ds-color-dark-blue-700,#1e304f);
			--ds-app-color-base-special-bg-opt1-left: linear-gradient(90deg,var(--ds-app-color-base-special-bg-opt1-stop1,#06161f) 0,var(--ds-app-color-base-special-bg-opt1-stop2,#091f2c) 50%,var(--ds-app-color-base-special-bg-opt1-stop3,#1e304f) 100%);
			--ds-app-color-base-special-bg-opt2-stop1: var(--ds-color-brilliant-blue-900,#002948);
			--ds-app-color-base-special-bg-opt2-stop2: var(--ds-color-blue-black-500,#091f2c);
			--ds-app-color-base-special-bg-opt2-stop3: var(--ds-color-brilliant-blue-800,#004275);
			--ds-app-color-base-special-bg-opt2-left: linear-gradient(90deg,var(--ds-app-color-base-special-bg-opt2-stop1,#002948) 0,var(--ds-app-color-base-special-bg-opt2-stop2,#091f2c) 50%,var(--ds-app-color-base-special-bg-opt2-stop3,#004275) 100%);
			--ds-app-color-base-special-bg-opt3-stop1: var(--ds-color-brilliant-blue-900,#002948);
			--ds-app-color-base-special-bg-opt3-stop2: var(--ds-color-brilliant-blue-900,#002948);
			--ds-app-color-base-special-bg-opt3-stop3: var(--ds-color-brilliant-blue-800,#004275);
			--ds-app-color-base-special-bg-opt3-left: linear-gradient(90deg,var(--ds-app-color-base-special-bg-opt3-stop1,#002948) 0,var(--ds-app-color-base-special-bg-opt3-stop2,#002948) 50%,var(--ds-app-color-base-special-bg-opt3-stop3,#004275) 100%);
			--ds-app-color-base-special-bg-opt4-stop1: var(--ds-color-brilliant-blue-600,#006dc1);
			--ds-app-color-base-special-bg-opt4-stop2: var(--ds-color-brilliant-blue-600,#006dc1);
			--ds-app-color-base-special-bg-opt4-stop3: var(--ds-color-twilight-purple-600,#40315f);
			--ds-app-color-base-special-bg-opt4-left: linear-gradient(90deg,var(--ds-app-color-base-special-bg-opt4-stop1,#006dc1) 0,var(--ds-app-color-base-special-bg-opt4-stop2,#006dc1) 50%,var(--ds-app-color-base-special-bg-opt4-stop3,#40315f) 100%);
			--ds-app-color-base-special-border-subtle: var(--ds-color-sky-blue-900,#3b5461);
			--ds-app-color-base-special-border-strong: var(--ds-color-pure-white,#fff);
			--ds-app-color-gradient-opt1-stop1: var(--ds-color-pale-lime-400,#ddf0a5);
			--ds-app-color-gradient-opt1-stop2: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt1-left: linear-gradient(90deg,var(--ds-app-color-gradient-opt1-stop1,#ddf0a5) 0,var(--ds-app-color-gradient-opt1-stop2,#0078d4) 100%);
			--ds-app-color-gradient-opt2-stop1: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt2-stop2: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt2-stop3: var(--ds-color-biscay-green-400,#6dd1c1);
			--ds-app-color-gradient-opt2-left: linear-gradient(90deg,var(--ds-app-color-gradient-opt2-stop1,#0078d4) 0,var(--ds-app-color-gradient-opt2-stop2,#0078d4) 50%,var(--ds-app-color-gradient-opt2-stop3,#6dd1c1) 100%);
			--ds-app-color-gradient-opt3-stop1: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt3-stop2: var(--ds-color-brilliant-blue-500,#0078d4);
			--ds-app-color-gradient-opt3-stop3: var(--ds-color-purple-500,#8661c5);
			--ds-app-color-gradient-opt3-left: linear-gradient(90deg,var(--ds-app-color-gradient-opt3-stop1,#0078d4) 0,var(--ds-app-color-gradient-opt3-stop2,#0078d4) 50%,var(--ds-app-color-gradient-opt3-stop3,#8661c5) 100%);
			--ds-app-color-highlight-fg: var(--ds-color-brilliant-blue-300,#54a5e2);
			--ds-app-color-highlight-bg: var(--ds-color-sky-blue-800,#4e6e80);
			--ds-app-color-interactive-primary-fg-default: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-interactive-primary-fg-hover: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-interactive-primary-fg-active: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-interactive-primary-fg-selected: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-interactive-primary-fg-inactive: var(--ds-color-dark-blue-800,#17253d);
			--ds-app-color-interactive-primary-bg-default: var(--ds-color-sky-blue-300,#b3daf0);
			--ds-app-color-interactive-primary-bg-hover: var(--ds-color-sky-blue-200,#cbe6f4);
			--ds-app-color-interactive-primary-bg-active: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-interactive-primary-bg-selected: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-interactive-primary-bg-inactive: var(--ds-color-sky-blue-900,#3b5461);
			--ds-app-color-interactive-primary-border-default: var(--ds-color-sky-blue-300,#b3daf0);
			--ds-app-color-interactive-primary-border-hover: var(--ds-color-sky-blue-200,#cbe6f4);
			--ds-app-color-interactive-primary-border-active: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-interactive-primary-border-selected: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-interactive-primary-border-inactive: var(--ds-color-sky-blue-900,#3b5461);
			--ds-app-color-interactive-secondary-fg-default: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-interactive-secondary-fg-hover: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-interactive-secondary-fg-active: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-interactive-secondary-fg-selected: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-interactive-secondary-fg-inactive: var(--ds-color-dark-blue-500,#2a446f);
			--ds-app-color-interactive-secondary-bg-default: var(--ds-color-brilliant-blue-800,#004275);
			--ds-app-color-interactive-secondary-bg-hover: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-interactive-secondary-bg-active: var(--ds-color-brilliant-blue-600,#006dc1);
			--ds-app-color-interactive-secondary-bg-selected: var(--ds-color-sky-blue-500,#8dc8e8);
			--ds-app-color-interactive-secondary-bg-inactive: var(--ds-color-dark-blue-700,#1e304f);
			--ds-app-color-interactive-secondary-border-default: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-interactive-secondary-border-hover: var(--ds-color-sky-blue-100,#dceef8);
			--ds-app-color-interactive-secondary-border-active: var(--ds-color-sky-blue-50,#f4fafd);
			--ds-app-color-interactive-secondary-border-selected: var(--ds-color-sky-blue-500,#8dc8e8);
			--ds-app-color-interactive-secondary-border-inactive: var(--ds-color-dark-blue-600,#263e65);
			--ds-app-color-overlay-fill: var(--ds-color-alpha-black-500,#00000080);
			--ds-app-color-overlay-opt1-stop1: var(--ds-color-brilliant-blue-900,#002948);
			--ds-app-color-overlay-opt1-stop2: #00294800;
			--ds-app-color-overlay-opt1-left: linear-gradient(90deg,var(--ds-app-color-overlay-opt1-stop1,#002948) 0,var(--ds-app-color-overlay-opt1-stop2,#00294800) 100%);
			--ds-app-color-overlay-opt2-stop1: #1d172c;
			--ds-app-color-overlay-opt2-stop2: #1D172C00;
			--ds-app-color-overlay-opt2-left: linear-gradient(90deg,var(--ds-app-color-overlay-opt2-stop1,#1d172c) 0,var(--ds-app-color-overlay-opt2-stop2,#1D172C00) 100%);
			--ds-app-color-surface-solid-bg-nonclickable: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-surface-solid-bg-default: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-surface-solid-bg-hover: var(--ds-color-dark-blue-800,#17253d);
			--ds-app-color-surface-solid-bg-pressed: var(--ds-color-dark-blue-700,#1e304f);
			--ds-app-color-surface-solid-bg-selected: var(--ds-color-dark-blue-900,#0e1726);
			--ds-app-color-surface-glass-bg-nonclickable: var(--ds-color-alpha-black-200,#0003);
			--ds-app-color-surface-glass-bg-default: var(--ds-color-alpha-black-200,#0003);
			--ds-app-color-surface-glass-bg-hover: var(--ds-color-alpha-black-300,#0000004d);
			--ds-app-color-surface-glass-bg-pressed: var(--ds-color-alpha-black-400,#0006);
			--ds-app-color-surface-glass-bg-selected: var(--ds-color-alpha-black-500,#00000080);
			--ds-app-color-surface-contrast-bg-nonclickable: var(--ds-color-brilliant-blue-600,#006dc1);
			--ds-app-color-surface-contrast-bg-default: var(--ds-color-brilliant-blue-600,#006dc1);
			--ds-app-color-surface-contrast-bg-hover: var(--ds-color-brilliant-blue-700,#005597);
			--ds-app-color-surface-contrast-bg-pressed: var(--ds-color-brilliant-blue-800,#004275);
			--ds-app-color-surface-contrast-bg-selected: var(--ds-color-brilliant-blue-500,#0078d4)
		}

		:root {
			--ds-comp-card-pricing-banner-bg: var(--ds-app-color-base-default-fg-highlight,#005597);
			--ds-comp-card-pricing-banner-fg: var(--ds-app-color-base-default-bg-opt1,#f4fafd)
		}

		:root {
			--ds-comp-sku-text-strikethrough: #61615e
		}
	`;if(window.SOUtil&&window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(()=>{globalThis.SOUtil.addStylesheet(defaultWcClientlib,"default-wc-clientlib")})}})();
/*! 1114382, 1114841 - Fix stat cards, update theme attribute */
(()=>{const STAT_CARD_SELECTOR="reimagine-card-stat";const STAT_SELECTOR="reimagine-stat";const CONFIGURATION_ATTR="configuration";const STAT_TYPE_ATTR="type";window.SOUtil.runOnPageLoad(async()=>{await customElements.whenDefined(STAT_CARD_SELECTOR);await customElements.whenDefined(STAT_SELECTOR);function fixStatCards(){const statCards=document.querySelectorAll(STAT_CARD_SELECTOR);statCards.forEach(card=>{const stat=card.querySelector(STAT_SELECTOR);const isSizeMissing=stat&&!stat.hasAttribute("size");const isTypeMissing=stat&&!stat.hasAttribute(STAT_TYPE_ATTR);if(stat&&isSizeMissing&&isTypeMissing){const config=card.getAttribute(CONFIGURATION_ATTR);if(config==="vertical"){stat.setAttribute(STAT_TYPE_ATTR,"large--stacked")}else if(config==="banner"){stat.setAttribute(STAT_TYPE_ATTR,"large")}}if(stat&&stat.getAttribute("theme")==="night"){stat.setAttribute("theme","dark")}})}fixStatCards()})})();
/*! 1114812 Update secondary nav v2 indicators style */
(()=>{const SECONDARY_NAV_SELECTOR=".secondary-sticky-nav .sticky--stuck-contained";const OCR_SLIDER_SELECTOR=".ocr-slider";function isHidden(el){const style=window.getComputedStyle(el);return style.display==="none"||style.visibility==="hidden"||Number(style.opacity)===0}function updateSecondaryNavV2Indicators(){const secondaryNavs=document.querySelectorAll(SECONDARY_NAV_SELECTOR);secondaryNavs.forEach(secondaryNav=>{const indicator=secondaryNav.querySelector(".secondary-nav > .indicator");const slider=secondaryNav.querySelector(OCR_SLIDER_SELECTOR);if(!indicator||!slider){secondaryNav.querySelectorAll(".secondary-nav .menu-list__item-link .indicator.indicator--shape-pill").forEach(el=>{if(isHidden(el)){el.style.display="block"}})}})}if(window.SOUtil){window.SOUtil.runOnPageLoad(updateSecondaryNavV2Indicators)}})();
/*! 1114812 Fix secondary nav scrollspy offset calculation */
(()=>{const STICKY_NAV_CONTAINER_SELECTOR='[ocr-component-name="secondary-sticky-nav"]';const STICKY_NAV_SELECTOR='[data-mount="sticky"].sticky--stuck-contained';const NAV_LINK_SELECTOR=`a[href^="#"].menu-list__item-link`;const V3_DATA_COMPONENT_ID='[data-component-id="83e50c71372fe9edec320caf70f0e996"]';const pageScope={"www.microsoft.com":{paths:["/microsoft-365-copilot"]},previews:true};const BOTTOM_OFFSET=10;function isV3SecondaryNav(stickyNav){if(!stickyNav){return false}return stickyNav.closest(V3_DATA_COMPONENT_ID)!==null}function getStickyNavHeight(){const stickyNav=document.querySelector(`${STICKY_NAV_CONTAINER_SELECTOR} ${STICKY_NAV_SELECTOR}`);if(!stickyNav){return BOTTOM_OFFSET}const height=stickyNav.offsetHeight;const topOffset=globalThis.getComputedStyle(stickyNav).top;return height+(parseInt(topOffset)||0)+BOTTOM_OFFSET}function getSectionMasterOffsets(el){if(!el){return null}const scrollY=window.scrollY||window.pageYOffset;const rect=el.getBoundingClientRect();return rect.top+scrollY-getStickyNavHeight()}function navLinkClickHandler(event){const currentLink=event.currentTarget;const href=currentLink.getAttribute("href");const stickyNav=document.querySelector(`${STICKY_NAV_CONTAINER_SELECTOR} ${STICKY_NAV_SELECTOR}`);if(!stickyNav){return}const itemLinks=stickyNav.querySelectorAll(".menu-list__item-link");if(href&&href.startsWith("#")){event.preventDefault();const targetSection=document.querySelector(href);if(!targetSection){return}let offset=getSectionMasterOffsets(targetSection);if(offset===null){return}if(!stickyNav.classList.contains("stuck")){offset-=stickyNav.offsetHeight}setTimeout(()=>{window.scrollTo({top:offset,behavior:"smooth"})},500);setTimeout(function(){itemLinks.forEach(itemLink=>{const selectedElem=stickyNav.querySelector(".selected");if(selectedElem){selectedElem.classList.remove("selected")}});currentLink.classList.add("selected")},1200)}}function bindNavLinkClicks(){const stickyNav=document.querySelector(`${STICKY_NAV_CONTAINER_SELECTOR} ${STICKY_NAV_SELECTOR}`);const navLinks=document.querySelectorAll(`${STICKY_NAV_CONTAINER_SELECTOR} ${STICKY_NAV_SELECTOR} ${NAV_LINK_SELECTOR}`);if(isV3SecondaryNav(stickyNav)){const navIndicator=stickyNav.querySelector(".secondary-nav  > .indicator.indicator--horizontal");if(navIndicator){navIndicator.style.display="none"}navLinks.forEach(link=>{const linkIndicator=link.querySelector(".indicator.indicator--shape-pill");if(linkIndicator){linkIndicator.style.display="block"}})}navLinks.forEach(link=>{link.addEventListener("click",navLinkClickHandler)})}if(window.SOUtil&&!window.SOUtil.pageIsInScope(pageScope)){window.SOUtil.runOnPageLoad(bindNavLinkClicks)}})();