(this["webpackJsonpjob-listings"]=this["webpackJsonpjob-listings"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/icon-remove.ae67c678.svg"},function(e,t,a){e.exports=a.p+"static/media/account.9f72c13b.svg"},function(e,t,a){e.exports=a.p+"static/media/eyecam-co.39eaebdf.svg"},function(e,t,a){e.exports=a.p+"static/media/faceit.76faa79f.svg"},function(e,t,a){e.exports=a.p+"static/media/insure.52b85a50.svg"},function(e,t,a){e.exports=a.p+"static/media/loop-studios.6c50fd74.svg"},function(e,t,a){e.exports=a.p+"static/media/manage.fbe431a9.svg"},function(e,t,a){e.exports=a.p+"static/media/myhome.e0ad9358.svg"},function(e,t,a){e.exports=a.p+"static/media/photosnap.3f34b49c.svg"},function(e,t,a){e.exports=a.p+"static/media/shortly.45f63772.svg"},function(e,t,a){e.exports=a.p+"static/media/the-air-filter-company.23b515f9.svg"},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(6),i=a.n(l),r=(a(23),a(1)),c=a(4),s=(a(24),[{id:1,company:"Photosnap",logo:"LogoPhotosnap",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"LogoManage",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"LogoAccount",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"LogoMyHome",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"LogoLoopStudios",new:!1,featured:!1,position:"Software Engineer",role:"FullStack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"LogoFaceIt",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"LogoShortly",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"LogoInsure",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"LogoEyeCam",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"LogoAirFilter",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}]),m=(a(25),a(26),a(7)),u=a.n(m),g=function(e){return n.a.createElement("div",{className:"filter"},n.a.createElement("p",{className:"filter__text"},e.filter),n.a.createElement("div",{className:"filter__delete__container"},n.a.createElement("img",{src:u.a,"data-filter":e.filter,alt:"remove button",className:"filter__delete",onClick:e.handleFilterDeleteClick})))},d=function(e){return n.a.createElement("div",{className:"bg-image"},n.a.createElement("div",{className:"filters ".concat(0===e.filters.length?"":"active")},n.a.createElement("div",{className:"filters__container"},e.filters.map((function(t,a){return n.a.createElement(g,{key:a,filter:t,handleFilterDeleteClick:e.handleFilterDeleteClick})}))),n.a.createElement("p",{className:"filters__clear",onClick:e.handleFilterClearClick},"Clear")))},p=(a(27),a(28),a(8)),f=a.n(p),v=a(9),_=a.n(v),y=a(10),h=a.n(y),E=a(11),F=a.n(E),S=a(12),w=a.n(S),N=a(13),b=a.n(N),k=a(14),A=a.n(k),C=a(15),L=a.n(C),J=a(16),x=a.n(J),O=a(17),D=a.n(O),T=[[f.a,"LogoAccount"],[D.a,"LogoAirFilter"],[_.a,"LogoEyeCam"],[h.a,"LogoFaceIt"],[F.a,"LogoInsure"],[w.a,"LogoLoopStudios"],[b.a,"LogoManage"],[A.a,"LogoMyHome"],[L.a,"LogoPhotosnap"],[x.a,"LogoShortly"]],M=function(e){var t=T.filter((function(t){return t.includes(e.logo)}));return n.a.createElement("div",{className:"listing"},n.a.createElement("div",{className:"listing__container"},n.a.createElement("img",{src:t[0][0],alt:"company logo",className:"listing__image"}),n.a.createElement("div",{className:"listing__info"},n.a.createElement("div",{className:"listing__info__header"},n.a.createElement("h2",{className:"listing__company"},e.company),e.new&&n.a.createElement("p",{className:"listing__type listing__type--new"},"New!"),e.featured&&n.a.createElement("p",{className:"listing__type listing__type--featured"},"Featured")),n.a.createElement("h3",{className:"listing__info__role"},e.position),n.a.createElement("div",{className:"listing__info__footer"},n.a.createElement("p",{className:"listing__stats"},e.postedAt),n.a.createElement("p",{className:"listing__stats"},e.contract),n.a.createElement("p",{className:"listing__stats"},e.location)))),n.a.createElement("div",{className:"listing__tags"},[e.role,e.level].concat(Object(r.a)(e.languages),Object(r.a)(e.tools)).map((function(t,a){return n.a.createElement("p",{className:"listing__tag",key:a,name:t,onClick:e.handleClick},t)}))))},j=function(e){return n.a.createElement("main",{className:"main"},n.a.createElement("div",{className:"listings"},e.listings.map((function(t){return n.a.createElement(M,Object.assign({key:t.id},t,{handleClick:e.handleClick}))}))))},P=(a(29),function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"attribution"},"Challenge by"," ",n.a.createElement("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noopener noreferrer"},"Frontend Mentor"),". Coded by"," ",n.a.createElement("a",{href:"https://github.com/Asylcreek"},"Boro Omokugbo Joseph"),"."))});var R=function(){var e=n.a.useState(s),t=Object(c.a)(e,2),a=t[0],o=t[1],l=n.a.useState([]),i=Object(c.a)(l,2),m=i[0],u=i[1];return n.a.createElement("div",{className:"App"},n.a.createElement(d,{filters:m,handleFilterDeleteClick:function(e){var t=e.target.dataset.filter,a=m.filter((function(e){return e!==t}));u(a)},handleFilterClearClick:function(){u([]),o(s)}}),n.a.createElement(j,{listings:a,handleClick:function(e){var t=e.target.innerText;m.includes(t)||u((function(e){return[].concat(Object(r.a)(e),[t])}));var n=a.filter((function(e){var a=Object.values(e);return a.forEach((function(e){Array.isArray(e)&&a.push.apply(a,Object(r.a)(e))})),a.includes(t)}));o(n)}}),n.a.createElement(P,null))};i.a.render(n.a.createElement(R,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.ea8d697e.chunk.js.map