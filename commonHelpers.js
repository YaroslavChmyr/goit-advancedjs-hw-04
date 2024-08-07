import{a as h,S as b,i as d}from"./assets/vendor-bbeb4f15.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=l(r);fetch(r.href,s)}})();let p=1;const a=document.querySelector(".loader"),n=document.querySelector(".loader-wrapper");async function L(o){const l=`https://pixabay.com/api/?${new URLSearchParams({key:"45176737-eefebace9d6de0f5929b63080",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:15})}`;a.style.display="inline-block",document.querySelector(".gallery").style.display="none",document.querySelector(".load-more").style.display="none";try{return(await h.get(l)).data}catch(t){console.log(t)}finally{a.style.display="none",document.querySelector(".gallery").style.display="flex",p=2}}async function S(o){const l=`https://pixabay.com/api/?${new URLSearchParams({key:"45176737-eefebace9d6de0f5929b63080",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:p,per_page:15})}`;a.style.display="inline-block",a&&n&&(a.style.display="inline-block",n.classList.add("top-center")),document.querySelector(".load-more").style.display="none";try{return(await h.get(l)).data}catch(t){console.log(t)}finally{a&&n&&(a.style.display="none",n.classList.remove("top-center")),document.querySelector(".load-more").style.display="block",p+=1}}function g(o){const e=document.querySelector(".gallery"),l=o.map(t=>`<li class="gallery-item">
              <a class="gallery-link" href="${t.largeImageURL}">
              <img
                  class="gallery-image"
                  src="${t.previewURL}"
                  data-source="${t.largeImageURL}"
                  alt="${t.tags}"
              />
              <div class="image-details">
            <div class="details-element">
              <p class="details-title">Likes</p>
              <p class="details-value">${t.likes}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Views</p>
              <p class="details-value">${t.views}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Comments</p>
              <p class="details-value">${t.comments}</p>
            </div>
            <div class="details-element">
              <p class="details-title">Downloads</p>
              <p class="details-value">${t.downloads}</p>
            </div>
          </div>
              </a>
              </li>`).join("");e.insertAdjacentHTML("beforeend",l),f.refresh()}let f=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});f.on("show.simplelightbox");const q=document.querySelector(".search-form"),m=document.querySelector(".gallery"),y=document.querySelector(".load-more");let i="",u=0,v=0;q.addEventListener("submit",o=>{o.preventDefault(),i=document.querySelector(".search-input").value.trim(),i===""?(d.error({id:"error",message:"The search field cannot be empty",position:"topRight",transitionIn:"fadeInDown"}),m.innerHTML=""):L(i).then(e=>{console.log(e),e.hits.length===0?d.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}):(m.innerHTML="",g(e.hits),y.style.display="block",v=e.totalHits,u=e.hits.length)}).catch(e=>{console.error("Error:",e)})});y.addEventListener("click",o=>{o.preventDefault(),u>v?(d.error({id:"error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",transitionIn:"fadeInDown"}),y.style.display="none"):S(i).then(e=>{g(e.hits),u+=e.hits.length;const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy(0,2*t.height)}).catch(e=>{console.error("Error:",e)})});
//# sourceMappingURL=commonHelpers.js.map
