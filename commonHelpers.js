import{a as u,S as g,i as d}from"./assets/vendor-bbeb4f15.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();let p=1;const l=document.querySelector(".loader"),n=document.querySelector(".loader-wrapper");async function v(a){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"45176737-eefebace9d6de0f5929b63080",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:15})}`;l.style.display="inline-block",document.querySelector(".gallery").style.display="none",document.querySelector(".load-more").style.display="none";try{return(await u.get(o)).data.hits}catch(t){console.log(t)}finally{l.style.display="none",document.querySelector(".gallery").style.display="flex",p=2}}async function b(a){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"45176737-eefebace9d6de0f5929b63080",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:p,per_page:15})}`;l.style.display="inline-block",l&&n&&(l.style.display="inline-block",n.classList.add("top-center")),document.querySelector(".load-more").style.display="none";try{return(await u.get(o)).data.hits}catch(t){console.log(t)}finally{l&&n&&(l.style.display="none",n.classList.remove("top-center")),document.querySelector(".load-more").style.display="block",p+=1}}function m(a){const e=document.querySelector(".gallery"),o=a.map(t=>`<li class="gallery-item">
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
              </li>`).join("");e.insertAdjacentHTML("beforeend",o),f.refresh()}let f=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});f.on("show.simplelightbox");const L=document.querySelector(".search-form"),y=document.querySelector(".gallery"),h=document.querySelector(".load-more");let i="";L.addEventListener("submit",a=>{a.preventDefault(),i=document.querySelector(".search-input").value.trim(),i===""?(d.error({id:"error",message:"The search field cannot be empty",position:"topRight",transitionIn:"fadeInDown"}),y.innerHTML=""):v(i).then(e=>{console.log(e),e.length===0?d.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}):(y.innerHTML="",m(e),h.style.display="block")}).catch(e=>{console.error("Error:",e)})});h.addEventListener("click",a=>{a.preventDefault(),b(i).then(e=>{console.log(e),e.length===0?d.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"}):m(e)}).catch(e=>{console.error("Error:",e)})});
//# sourceMappingURL=commonHelpers.js.map
