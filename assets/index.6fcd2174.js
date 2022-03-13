import{g as f,j as a,u as p,R as m,a as l,A as g,I as y,b,B as v,c as A,d as I}from"./vendor.6e5966be.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};x();const R=f`
  query GetSketchDocument($shortId: String!) {
    share(shortId: $shortId) {
      shortId
      identifier
      version {
        document {
          name
          artboards {
            entries {
              id
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`,t=a.exports.jsx,h=a.exports.jsxs,u=()=>{var c,e,r,o;const{loading:d,error:s,data:i}=p(R,{variables:{shortId:"26343997-bb48-43ff-a2f7-bd6bc7ef976c"}});return h("div",{children:[t("h2",{children:"ArtWorks"}),d?t("p",{children:"Loading..."}):s?t("p",{children:"Error:("}):(o=(r=(e=(c=i==null?void 0:i.share.version)==null?void 0:c.document)==null?void 0:e.artboards)==null?void 0:r.entries)==null?void 0:o.map(n=>t("h2",{children:n==null?void 0:n.name},n==null?void 0:n.id))]})},j=()=>h(m,{children:[t(l,{path:"/",element:t(u,{})}),t(l,{path:"/:id",element:t(u,{})})]}),w=new g({uri:"https://graphql.sketch.cloud/api",cache:new y});function L(){return t(b,{client:w,children:t(v,{children:t(j,{})})})}A.render(t(I.StrictMode,{children:t(L,{})}),document.getElementById("root"));
