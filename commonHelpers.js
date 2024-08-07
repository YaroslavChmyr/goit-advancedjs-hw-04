import{S as c,i}from"./assets/vendor-8c59ed88.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function d(o){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"45176737-eefebace9d6de0f5929b63080",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return document.querySelector(".loader").style.display="inline-block",document.querySelector(".gallery").style.display="none",fetch(r).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits).catch(e=>{console.log(e)}).finally(()=>{document.querySelector(".loader").style.display="none",document.querySelector(".gallery").style.display="flex"})}function u(o){const l=document.querySelector(".gallery");l.innerHTML="";const r=o.map(e=>`<li class="gallery-item">
              <a class="gallery-link" href="${e.largeImageURL}">
              <img
                  class="gallery-image"
                  src="${e.previewURL}"
                  data-source="${e.largeImageURL}"
                  alt="${e.tags}"
              />
              <div class="image-details">
            <div class="details-element">
              <p class="details-title">Likes</p>
              <p class="details-value">${e.likes}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Views</p>
              <p class="details-value">${e.views}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Comments</p>
              <p class="details-value">${e.comments}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Downloads</p>
              <p class="details-value">${e.downloads}</p>
            </div>
          </div>
              </a>
              </li>`).join("");l.insertAdjacentHTML("beforeend",r),n.refresh()}let n=new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});n.on("show.simplelightbox");const p=document.querySelector(".search-form"),m=document.querySelector(".gallery");p.addEventListener("submit",o=>{o.preventDefault();const l=document.querySelector(".search-input").value.trim();l===""?(i.error({id:"error",message:"The search field cannot be empty",position:"topRight",transitionIn:"fadeInDown"}),m.innerHTML=""):d(l).then(r=>{console.log(r),r.length===0?i.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}):u(r)}).catch(r=>{console.error("Error:",r)})});
//# sourceMappingURL=commonHelpers.js.map
