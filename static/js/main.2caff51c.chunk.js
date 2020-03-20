(this["webpackJsonprubicon-app"]=this["webpackJsonprubicon-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/calendar.f1592feb.svg"},21:function(e,t,a){e.exports=a.p+"static/media/heart-outlined.d26a9e38.svg"},22:function(e,t,a){e.exports=a.p+"static/media/area-graph.91516110.svg"},47:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(17),r=a.n(o),i=(a(52),a(11)),s=a(12),l=a(19),u=a(37),m=a(38),d=a(45),p=a(39),h=a(46),v=a(2),_=a(8),E=a.n(_),f="d55732fb698562c55d93de5b2f3d2413",y=function(){return function(e){e({type:"LOADING_MOVIES"}),E.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(f),{validateStatus:function(e){return!0}}).then((function(t){e({type:"SET_MOVIES",payload:t.data.results.slice(0,11)})})).catch((function(t){e({type:"SET_ERRORS",payload:t})}))}},g=function(e,t){return function(a){a({type:"LOADING_MOVIES"}),E.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(f),{validateStatus:function(e){return!0}}).then((function(t){a({type:"SET_MOVIE",payload:t.data}),a(S(e)),localStorage.setItem("id",e)})).catch((function(e){a({type:"SET_ERRORS",payload:e})})),t.push("/movies/".concat(e))}},S=function(e){return function(t){E.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(f)).then((function(e){t({type:"SET_KEY",payload:e.data.results[0].key})})).catch((function(e){t({type:"SET_ERRORS",payload:e})}))}},O=function(){return function(e){e({type:"LOADING_SHOWS"}),E.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(f),{validateStatus:function(){return!0}}).then((function(t){e({type:"SET_SHOWS",payload:t.data.results.slice(0,11)})})).catch((function(t){e({type:"SET_ERRORS",payload:t})})),localStorage.removeItem("id")}},b=function(e,t){return function(a){a({type:"LOADING_SHOWS"}),E.a.get("https://api.themoviedb.org/3/tv/".concat(e,"?api_key=").concat(f),{validateStatus:function(){return!0}}).then((function(t){a({type:"SET_SHOW",payload:t.data}),a(w(e)),localStorage.setItem("id",e)})).catch((function(e){a({type:"SET_ERRORS",payload:e})})),t.push("/tv-shows/".concat(e))}},w=function(e){return function(t){E.a.get("https://api.themoviedb.org/3/tv/".concat(e,"/videos?api_key=").concat(f)).then((function(e){t({type:"SET_KEY",payload:e.data.results[0].key})})).catch((function(e){t({type:"SET_ERRORS",payload:e})}))}},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={query:""},a.handleChange=function(e){a.setState(Object(l.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;this.state.query.length>=3&&0!==this.state.query&&"/movies"===this.props.location.pathname?setTimeout((function(){e.props.onSearchMovies(e.state.query)}),1e3):this.state.query.length<3&&this.props.onGetMovies(),this.state.query.length>=3&&0!==this.state.query&&"/tv-shows"===this.props.location.pathname?setTimeout((function(){e.props.onSearchShows(e.state.query)}),1e3):this.state.query.length<3&&this.props.onGetShows()}},{key:"render",value:function(){return c.a.createElement("form",{className:"nav__form"},c.a.createElement("input",{className:"nav__search",name:"query",placeholder:"Search movies, tv-shows...",type:"search",onChange:this.handleChange}))}}]),t}(n.Component),k=Object(v.b)(null,(function(e){return{onSearchMovies:function(t){return e(function(e){return function(t){E.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(f,"&query=").concat(e)).then((function(e){t({type:"SET_MOVIES",payload:e.data.results.slice(0,12)})})).catch((function(e){t({type:"SET_ERRORS",payload:e})}))}}(t))},onSearchShows:function(t){return e(function(e){return function(t){E.a.get("https://api.themoviedb.org/3/search/tv?api_key=".concat(f,"&query=").concat(e)).then((function(e){t({type:"SET_SHOWS",payload:e.data.results.slice(0,12)})})).catch((function(e){t({type:"SET_ERRORS",payload:e})}))}}(t))},onGetMovies:function(){return e(y())},onGetShows:function(){return e(O())}}}))(Object(s.f)(N)),j=function(){var e=Object(v.d)(),t=Object(n.useRef)(null),a=localStorage.id;return Object(n.useEffect)((function(){setTimeout((function(){a||(t.current.focus(),t.current.click())}),500)}),[a]),c.a.createElement("nav",{className:"nav"},c.a.createElement("div",null,c.a.createElement(i.b,{to:"/movies"},c.a.createElement("button",{className:"btn nav__btn",onClick:function(){return e(y())}},"Movies")),c.a.createElement(i.b,{to:"/tv-shows"},c.a.createElement("button",{ref:t,className:"btn nav__btn",onClick:function(){return e(O())}},"Tv Shows"))),c.a.createElement(k,null))},R=function(e){var t=localStorage.url,a=localStorage.poster;if(!t||!a)throw new Error("Something went wrong \ud83d\udca5");return{imageUrl:"".concat(t).concat(a,"/").concat(e)}},T=a(13),I=a(20),C=a.n(I),G=a(21),M=a.n(G),D=a(22),q=a.n(D),A=Object(s.f)((function(e){var t=e.movie,a=t.popularity,n=t.poster_path,o=t.title,r=t.vote_average,i=t.release_date,s=t.id,l=Object(v.d)(),u=R(n).imageUrl;return c.a.createElement("article",{className:"card",id:s,onClick:function(){return l(g(s,e.history))}},c.a.createElement("img",{src:u,className:"card__image",alt:"movie"}),c.a.createElement("h1",{className:"card__title"},o),c.a.createElement("div",{className:"card__ratings"},c.a.createElement(T.a,{className:"card__ratings-date",src:C.a}),c.a.createElement("span",null,i),c.a.createElement(T.a,{className:"card__ratings-popularity",src:M.a}),c.a.createElement("span",null,a),c.a.createElement(T.a,{className:"card__ratings-vote",src:q.a}),c.a.createElement("span",null,r)))})),L=(a(76),function(){return c.a.createElement("div",{className:"sk-folding-cube"},c.a.createElement("div",{className:"sk-cube1 sk-cube"}),c.a.createElement("div",{className:"sk-cube2 sk-cube"}),c.a.createElement("div",{className:"sk-cube4 sk-cube"}),c.a.createElement("div",{className:"sk-cube3 sk-cube"}))}),W=function(e){var t=Object(v.e)((function(e){return{movies:e.movie.movies,loading:e.movie.loading}}),v.c),a=t.movies,n=t.loading,o=a&&!n?a.map((function(e){return c.a.createElement(A,{key:e.id,movie:e})})):c.a.createElement(L,null);return c.a.createElement("div",{className:"grid-container"},o)},V=Object(s.f)((function(e){var t=e.show,a=t.popularity,n=t.poster_path,o=t.name,r=t.vote_average,i=t.first_air_date,s=t.id,l=R(n).imageUrl,u=Object(v.d)();return c.a.createElement("article",{className:"card",id:s,onClick:function(){return u(b(s,e.history))}},c.a.createElement("img",{src:l,className:"card__image",alt:"show"}),c.a.createElement("h1",{className:"card__title"},o),c.a.createElement("div",{className:"card__ratings"},c.a.createElement(T.a,{className:"card__ratings-date",src:C.a}),c.a.createElement("span",null,i),c.a.createElement(T.a,{className:"card__ratings-popularity",src:M.a}),c.a.createElement("span",null,a),c.a.createElement(T.a,{className:"card__ratings-vote",src:q.a}),c.a.createElement("span",null,r)))})),x=function(){var e=Object(v.e)((function(e){return{shows:e.show.shows,loading:e.show.loading}}),v.c),t=e.shows,a=e.loading,n=t&&!a?t.map((function(e){return c.a.createElement(V,{key:e.id,show:e})})):c.a.createElement(L,null);return c.a.createElement("div",{className:"grid-container"},n)},H=function(e,t){return function(a){a({type:"CLEAR_KEY"});var n=t.split("/")[1];t.startsWith("/movies")&&e.push("/".concat(n)),t.startsWith("/tv-shows")&&e.push("/".concat(n)),localStorage.removeItem("id")}},U=function(e,t){localStorage.setItem("url",e),localStorage.setItem("poster",t)},F=function(e){var t=Object(v.e)((function(e){return{movie:e.movie.movie,loading:e.data.loading,key:e.data.key}}),v.c),a=t.movie,o=t.loading,r=t.key,i=Object(v.d)(),s=localStorage.id,l=a.overview,u=a.title,m=a.poster_path,d=R(m).imageUrl,p="https://www.youtube.com/embed/".concat(r,"?autoplay=1");return Object(n.useEffect)((function(){s&&i(g(s,e.history))}),[i,s,e.history]),o?c.a.createElement(L,null):c.a.createElement("div",{className:"details",id:s},c.a.createElement("button",{className:"btn details__btn",onClick:function(){return i(H(e.history,e.location.pathname))}},"\u2190"),r?c.a.createElement("div",null,c.a.createElement("iframe",{className:"details__video",src:p,frameBorder:"0",title:"trailer",allow:"accelerometer; \r autoplay; \r encrypted-media; \r gyroscope; \r picture-in-picture",allowFullScreen:!0})):c.a.createElement("img",{src:d,alt:"movie",className:"details__image"}),c.a.createElement("h1",{className:"details__title"},u),c.a.createElement("h1",{className:"details__overview"},"Movie Overview:"),c.a.createElement("p",{className:"details__overview-text"},l))},K=function(e){var t=Object(v.e)((function(e){return{show:e.show.show,loading:e.data.loading,key:e.data.key}}),v.c),a=t.show,o=t.loading,r=t.key,i=Object(v.d)(),s=localStorage.id,l=a.first_air_date,u=a.name,m=a.number_of_episodes,d=a.number_of_seasons,p=a.overview,h=a.poster_path,_=R(h).imageUrl,E="https://www.youtube.com/embed/".concat(r,"?autoplay=1");return Object(n.useEffect)((function(){s&&i(b(s,e.history))}),[i,s,e.history]),o?c.a.createElement(L,null):c.a.createElement("div",{className:"details",id:s},c.a.createElement("button",{className:"btn details__btn",onClick:function(){return i(H(e.history,e.location.pathname))}},"\u2190"),r?c.a.createElement("div",null,c.a.createElement("iframe",{className:"details__video",src:E,frameBorder:"0",title:"trailer",allow:"accelerometer; \r autoplay; \r encrypted-media; \r gyroscope; \r picture-in-picture",allowFullScreen:!0})):c.a.createElement("img",{src:_,alt:"show",className:"details__image"}),c.a.createElement("h1",{className:"details__title"},u),c.a.createElement("h1",{className:"details__overview"},"Show Overview:"),c.a.createElement("div",{className:"details__info"},c.a.createElement("span",{className:"details__aired"},"Aired: ",l),c.a.createElement("span",{className:"details__episodes"},"Episodes: ",m),c.a.createElement("span",{className:"details__seasons"},"Seasons: ",d)),c.a.createElement("p",{className:"details__overview-text"},p))};var Y=function(){return c.a.createElement(i.a,null,c.a.createElement(j,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/movies/:id",component:F}),c.a.createElement(s.a,{path:"/movies",component:W}),c.a.createElement(s.a,{exact:!0,path:"/tv-shows/:id",component:K}),c.a.createElement(s.a,{path:"/tv-shows",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=a(14),X=a(44),J=a(23),P=a(4),z={movies:[],movie:{},loading:!1,open:!1},$={shows:[],show:{},loading:!1},Q={config:{},errors:{},key:"",loading:!1},Z=Object(B.c)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_MOVIES":return Object(P.a)({},e,{loading:!0});case"SET_MOVIES":return Object(P.a)({},e,{loading:!1,movies:Object(J.a)(t.payload)});case"SET_MOVIE":return Object(P.a)({},e,{loading:!1,movie:Object(P.a)({},t.payload)});default:return e}},show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_SHOWS":return Object(P.a)({},e,{loading:!0});case"SET_SHOWS":return Object(P.a)({},e,{loading:!1,shows:Object(J.a)(t.payload)});case"SET_SHOW":return Object(P.a)({},e,{loading:!1,show:Object(P.a)({},t.payload)});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_CONFIG":return Object(P.a)({},e,{loading:!0});case"SET_CONFIG":return Object(P.a)({},e,{loading:!1,config:t.payload});case"SET_ERRORS":return Object(P.a)({},e,{loading:!1,errors:Object(P.a)({},t.payload)});case"SET_KEY":return Object(P.a)({},e,{key:t.payload});case"CLEAR_KEY":return Object(P.a)({},e,{key:null});default:return e}}}),ee=[X.a],te=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):B.d)(B.a.apply(void 0,ee)),ae=Object(B.e)(Z,te);ae.dispatch((function(e){e({type:"LOADING_CONFIG"}),E.a.get("https://api.themoviedb.org/3/configuration?api_key=".concat(f),{validateStatus:function(){return!0}}).then((function(t){e({type:"SET_CONFIG",payload:Object.assign({images:t.data.images})}),U(t.data.images.base_url,t.data.images.poster_sizes[3])})).catch((function(t){e({type:"SET_ERRORS",payload:t})}))}));var ne=c.a.createElement(v.a,{store:ae},c.a.createElement(Y,null));r.a.render(ne,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.2caff51c.chunk.js.map