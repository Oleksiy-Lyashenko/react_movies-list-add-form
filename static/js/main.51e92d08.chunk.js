(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(t){t.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},17:function(t,e,i){},18:function(t,e,i){},19:function(t,e,i){},21:function(t,e,i){"use strict";i.r(e);var a=i(8),n=i.n(a),s=(i(16),i(11)),r=i(2),l=i(3),c=i(6),d=i(5),o=i(1),m=i.n(o),b=(i(17),i(9)),h=(i(18),i(19),i(0)),j=function(t){var e=t.title,i=t.description,a=t.imgUrl,n=t.imdbUrl;return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"card-image",children:Object(h.jsx)("figure",{className:"image is-4by3",children:Object(h.jsx)("img",{src:a,alt:"Film logo"})})}),Object(h.jsxs)("div",{className:"card-content",children:[Object(h.jsxs)("div",{className:"media",children:[Object(h.jsx)("div",{className:"media-left",children:Object(h.jsx)("figure",{className:"image is-48x48",children:Object(h.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(h.jsx)("div",{className:"media-content",children:Object(h.jsx)("p",{className:"title is-8",children:e})})]}),Object(h.jsxs)("div",{className:"content",children:[i,Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:n,children:"IMDB"})]})]})]})},p=function(t){var e=t.movies;return Object(h.jsx)("div",{className:"movies",children:e.map((function(t){return Object(h.jsx)(j,Object(b.a)({},t),t.imdbId)}))})},g=i(4),u=function(t){Object(c.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},t.handleInputChange=function(e){t.setState(Object(g.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var i=t.state,a=i.title,n=i.description,s=i.imgUrl,r=i.imdbUrl,l=i.imdbId;t.props.add({title:a,description:n,imgUrl:s,imdbUrl:r,imdbId:l}),t.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},t}return Object(l.a)(i,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{htmlFor:"title",children:[Object(h.jsx)("h3",{children:"Title:"}),Object(h.jsx)("input",{name:"title",id:"title",type:"text",placeholder:"Enter title",value:this.state.title,onChange:this.handleInputChange})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"description",children:[Object(h.jsx)("h3",{children:"Description:"}),Object(h.jsx)("textarea",{name:"description",id:"description",placeholder:"Enter description",value:this.state.description,onChange:function(e){t.setState({description:e.target.value})}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"imgUrl",children:[Object(h.jsx)("h3",{children:"ImgUrl:"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter title",name:"imgUrl",id:"imgUrl",value:this.state.imgUrl,onChange:function(e){t.setState({imgUrl:e.target.value})}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"imdbUrl",children:[Object(h.jsx)("h3",{children:"ImdbUrl:"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter title",name:"imdbUrl",id:"imdbUrl",value:this.state.imdbUrl,onChange:function(e){t.setState({imdbUrl:e.target.value})}})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{htmlFor:"imdbId",children:[Object(h.jsx)("h3",{children:"ImdbId:"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter title",name:"imdbId",id:"imdbId",value:this.state.imdbId,onChange:function(e){t.setState({imdbId:e.target.value})}})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"Add"})})]})}}]),i}(o.Component),O=i(10),v=function(t){Object(c.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))).state={movies:O},t.addMovie=function(e){t.setState((function(t){var i={title:e.title,description:e.description,imgUrl:e.imgUrl,imdbUrl:e.imdbUrl,imdbId:e.imdbId};return{movies:[].concat(Object(s.a)(t.movies),[i])}}))},t}return Object(l.a)(i,[{key:"render",value:function(){var t=this.state.movies;return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("div",{className:"page-content",children:Object(h.jsx)(p,{movies:t})}),Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)(u,{add:this.addMovie})})]})}}]),i}(m.a.Component);n.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.51e92d08.chunk.js.map