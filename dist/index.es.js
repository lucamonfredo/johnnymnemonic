function ___$insertStyle(n){if(n&&"undefined"!=typeof window){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}import{createElement,Fragment,Component}from"react";var extendStatics=function(n,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)};function __extends(n,e){function t(){this.constructor=n}extendStatics(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}function __awaiter(n,e,t,a){return new(t||(t=Promise))(function(o,i){function l(n){try{r(a.next(n))}catch(n){i(n)}}function s(n){try{r(a.throw(n))}catch(n){i(n)}}function r(n){n.done?o(n.value):new t(function(e){e(n.value)}).then(l,s)}r((a=a.apply(n,e||[])).next())})}function __generator(n,e){var t,a,o,i,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,a&&(o=2&i[0]?a.return:i[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;switch(a=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,a=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){l=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){l.label=i[1];break}if(6===i[0]&&l.label<o[1]){l.label=o[1],o=i;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(i);break}o[2]&&l.ops.pop(),l.trys.pop();continue}i=e.call(n,l)}catch(n){i=[6,n],a=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}___$insertStyle(".johnnymnemonic.input {\n  position: relative;\n  width: 100%;\n}\n.johnnymnemonic.la-ball-scale {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  right: 1.5rem;\n}\n.johnnymnemonic.suggestion-list {\n  list-style: none;\n  display: block;\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  width: 91%;\n  font-size: 90%;\n  border: 1px solid #eee;\n  background: #fff;\n  z-index: 10;\n}\n.johnnymnemonic.suggestion-list li {\n  padding: 0.25rem 0.5rem;\n}\n.johnnymnemonic.suggestion-list li:not(:last-child) {\n  border-bottom: 1px solid #eee;\n}\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */\n.la-ball-scale,\n.la-ball-scale > div {\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.la-ball-scale {\n  display: block;\n  font-size: 0;\n  color: #ccc;\n}\n\n.la-ball-scale.la-dark {\n  color: #333;\n}\n\n.la-ball-scale > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor;\n}\n\n.la-ball-scale {\n  width: 32px;\n  height: 32px;\n}\n\n.la-ball-scale > div {\n  width: 32px;\n  height: 32px;\n  border-radius: 100%;\n  opacity: 0;\n  -webkit-animation: ball-scale 1s 0s ease-in-out infinite;\n  -moz-animation: ball-scale 1s 0s ease-in-out infinite;\n  -o-animation: ball-scale 1s 0s ease-in-out infinite;\n  animation: ball-scale 1s 0s ease-in-out infinite;\n}\n\n.la-ball-scale.la-sm {\n  width: 16px;\n  height: 16px;\n}\n\n.la-ball-scale.la-sm > div {\n  width: 16px;\n  height: 16px;\n}\n\n.la-ball-scale.la-2x {\n  width: 64px;\n  height: 64px;\n}\n\n.la-ball-scale.la-2x > div {\n  width: 64px;\n  height: 64px;\n}\n\n.la-ball-scale.la-3x {\n  width: 96px;\n  height: 96px;\n}\n\n.la-ball-scale.la-3x > div {\n  width: 96px;\n  height: 96px;\n}\n\n/*\n * Animation\n */\n@-webkit-keyframes ball-scale {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-moz-keyframes ball-scale {\n  0% {\n    opacity: 1;\n    -moz-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    -moz-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-o-keyframes ball-scale {\n  0% {\n    opacity: 1;\n    -o-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    -o-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes ball-scale {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(0);\n    -moz-transform: scale(0);\n    -o-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1);\n    -moz-transform: scale(1);\n    -o-transform: scale(1);\n    transform: scale(1);\n  }\n}");var JohnnyMnemonic=function(n){function e(e){var t=n.call(this,e)||this;return t.state={value:"",suggestions:[],loading:!1,lastCall:Date.now(),debounceTimeout:e.debounceTimeout||250,lastOnChangeEvent:null},t.onChange=t.onChange.bind(t),t.onSuggestionClick=t.onSuggestionClick.bind(t),t}return __extends(e,n),e.prototype.onChange=function(n){return __awaiter(this,void 0,void 0,function(){var e,t,a,o;return __generator(this,function(i){switch(i.label){case 0:if(n.persist(),e=n.target.value,this.setState({value:e,lastOnChangeEvent:n}),this.props.onChange(n),t=Date.now(),!(e&&t-this.state.lastCall>this.state.debounceTimeout))return[3,4];this.setState({lastCall:Date.now(),loading:!0}),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.props.suggestionFunction(e)];case 2:return a=i.sent(),this.setState({suggestions:a,loading:!1}),[3,4];case 3:return o=i.sent(),console.error(o),[3,4];case 4:return this.state.value||this.setState({suggestions:[]}),[2]}})})},e.prototype.onSuggestionClick=function(n){n.persist();var e=n.currentTarget.dataset.value;this.setState({value:e,suggestions:[]});var t=this.state.lastOnChangeEvent;t.target.value=e,this.props.onChange(t)},e.prototype.render=function(){var n=this;return createElement(Fragment,null,createElement("input",{type:"text",className:"johnnymnemonic input "+(this.props.className||""),value:this.state.value,onChange:this.onChange,placeholder:this.props.placeholder||void 0,required:this.props.required||void 0}),this.state.loading?createElement("div",{className:"johnnymnemonic la-ball-scale la-sm"},createElement("div",null)):null,this.state.suggestions.length>0?createElement("ul",{className:"johnnymnemonic suggestion-list"},this.state.suggestions.map(function(e){return createElement("li",{onClick:n.onSuggestionClick,"data-value":e},e)})):null)},e}(Component);export default JohnnyMnemonic;
