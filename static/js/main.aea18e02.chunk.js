(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{157:function(e,t,a){e.exports=a(453)},161:function(e,t,a){},162:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(16),r=a.n(l),o=(a(161),a(24)),i=a(131),s=a.n(i),m=Object(n.createContext)(),u=function(e){var t=e.reducer,a=e.initialState,l=e.children;return c.a.createElement(m.Provider,{value:Object(n.useReducer)(t,a)},l)},E=function(){return Object(n.useContext)(m)},p=a(139),y=a.n(p),d=a(137),f=a.n(d),_=a(140),v=a.n(_),g=a(132),T=a.n(g),b=a(141),S=a.n(b),h=a(143),N=a.n(h),O=a(138),k=a.n(O),I=a(142),j=a.n(I),P=(a(162),a(465)),w=a(466);var L=function(e){var t=e.spotify,a=E(),l=Object(o.a)(a,2),r=l[0],i=(r.token,r.item),s=r.playing,m=l[1];Object(n.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),m({type:"SET_PLAYING",playing:e.is_playing}),m({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){s?(t.pause(),m({type:"SET_PLAYING",playing:!1})):(t.play(),m({type:"SET_PLAYING",playing:!0}))};return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer__left"},c.a.createElement("img",{className:"footer__albumLogo",src:null===i||void 0===i?void 0:i.album.images[0].url,alt:null===i||void 0===i?void 0:i.name}),i?c.a.createElement("div",{className:"footer__songInfo"},c.a.createElement("h4",null,i.name),c.a.createElement("p",null,i.artists.map((function(e){return e.name})).join(", "))):c.a.createElement("div",{className:"footer__songInfo"},c.a.createElement("h4",null,"No song is playing"),c.a.createElement("p",null,"..."))),c.a.createElement("div",{className:"footer__center"},c.a.createElement(T.a,{className:"footer__green"}),c.a.createElement(f.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),s?c.a.createElement(k.a,{onClick:u,fontSize:"large",className:"footer__icon"}):c.a.createElement(y.a,{onClick:u,fontSize:"large",className:"footer__icon"}),c.a.createElement(v.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),c.a.createElement(S.a,{className:"footer__green"})),c.a.createElement("div",{className:"footer__right"},c.a.createElement(P.a,{container:!0,spacing:2},c.a.createElement(P.a,{item:!0},c.a.createElement(j.a,null)),c.a.createElement(P.a,{item:!0},c.a.createElement(N.a,null)),c.a.createElement(P.a,{item:!0,xs:!0},c.a.createElement(w.a,{"aria-labelledby":"continuous-slider"})))))};a(168),a(169),a(170);var Y=function(e){var t=e.option,a=void 0===t?"test":t,n=e.Icon;return c.a.createElement("div",{className:"sidebarOption"},n&&c.a.createElement(n,{className:"sidebarOption__icon"}),n?c.a.createElement("h4",null,a):c.a.createElement("p",null,a))},A=a(144),C=a.n(A),M=a(58),R=a.n(M),x=a(145),G=a.n(x),W="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("b12b71c0e29b43849acb612370384d5c","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true");var U=function(){var e,t=E(),a=Object(o.a)(t,2),n=a[0].playlists;return a[1],console.log(n),c.a.createElement("div",{className:"sidebar"},c.a.createElement("img",{className:"sidebar__logo",src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),c.a.createElement(Y,{Icon:C.a,option:"Home"}),c.a.createElement(Y,{Icon:R.a,option:"Search"}),c.a.createElement(Y,{Icon:G.a,option:"Your Library"}),c.a.createElement("br",null),c.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),c.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return c.a.createElement(Y,{option:e.name})})))},z=(a(171),a(172),a(467));var F=function(e){e.spotify;var t=E(),a=Object(o.a)(t,2),n=a[0].user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(R.a,null),c.a.createElement("input",{placeholder:"Search for Artists, Songs, or Podcasts ",type:"text"})),c.a.createElement("div",{className:"header__right"},c.a.createElement(z.a,{alt:null===n||void 0===n?void 0:n.display_name,src:null===n||void 0===n?void 0:n.images[0].url}),c.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))};a(173);var K=function(e){var t=e.track,a=e.playSong;return console.log(t),c.a.createElement("div",{className:"songRow",onClick:function(){return a(t.id)}},c.a.createElement("img",{className:"songRow__album",src:t.album.images[0].url,alt:""}),c.a.createElement("div",{className:"songRow__info"},c.a.createElement("h1",null,t.name),c.a.createElement("p",null,t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name)))},V=a(146),D=a.n(V),J=a(147),Q=a.n(J),Z=a(148),B=a.n(Z);var X=function(e){var t=e.spotify,a=E(),n=Object(o.a)(a,2),l=n[0].discover_weekly,r=n[1],i=function(e){t.play({uris:["spotify:track:".concat(e)]}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){r({type:"SET_ITEM",item:e.item}),r({type:"SET_PLAYING",playing:!0})}))}))};return c.a.createElement("div",{className:"body"},c.a.createElement(F,{spotify:t}),c.a.createElement("div",{className:"body__info"},c.a.createElement("img",{src:null===l||void 0===l?void 0:l.images[0].url,alt:""}),c.a.createElement("div",{className:"body__infoText"},c.a.createElement("strong",null,"PLAYLIST"),c.a.createElement("h2",null,"Discover Weekly"),c.a.createElement("p",null,null===l||void 0===l?void 0:l.description))),c.a.createElement("div",{className:"body__songs"},c.a.createElement("div",{className:"body__icons"},c.a.createElement(D.a,{className:"body__shuffle",onClick:function(e){t.play({context_uri:"spotify:playlist:37i9dQZEVXcJZyENOWUFo7"}).then((function(e){t.getMyCurrentPlayingTrack().then((function(e){r({type:"SET_ITEM",item:e.item}),r({type:"SET_PLAYING",playing:!0})}))}))}}),c.a.createElement(Q.a,{fontSize:"large"}),c.a.createElement(B.a,null)),null===l||void 0===l?void 0:l.tracks.items.map((function(e){return c.a.createElement(K,{playSong:i,track:e.track})}))))};var H=function(e){var t=e.spotify;return c.a.createElement("div",{className:"player"},c.a.createElement("div",{className:"player__body"},c.a.createElement(U,null),c.a.createElement(X,{spotify:t})),c.a.createElement(L,{spotify:t}))};a(174),a(175);var $=function(){return c.a.createElement("div",{className:"login"},c.a.createElement("img",{src:"https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg",alt:""}),c.a.createElement("a",{href:W},"LOGIN TO SPOTIFY"))},q=new s.a;var ee=function(){var e=E(),t=Object(o.a)(e,2),a=t[0].token,l=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(q.setAccessToken(t),l({type:"SET_TOKEN",token:t}),q.getPlaylist("37i9dQZEVXcTt12QCr5E2o").then((function(e){return l({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),q.getMyTopArtists().then((function(e){return l({type:"SET_TOP_ARTISTS",top_artists:e})})),l({type:"SET_SPOTIFY",spotify:q}),q.getMe().then((function(e){l({type:"SET_USER",user:e})})),q.getUserPlaylists().then((function(e){l({type:"SET_PLAYLISTS",playlists:e})})))}),[a,l]),c.a.createElement("div",{className:"app"},!a&&c.a.createElement($,null),a&&c.a.createElement(H,{spotify:q}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(6),ae=(a(176),function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(te.a)(Object(te.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(te.a)(Object(te.a)({},e),{},{item:t.item});case"SET_DISCOVER_WEEKLY":return Object(te.a)(Object(te.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_TOP_ARTISTS":return Object(te.a)(Object(te.a)({},e),{},{top_artists:t.top_artists});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object(te.a)(Object(te.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:t.playlists});default:return e}});r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null},reducer:ae},c.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.aea18e02.chunk.js.map