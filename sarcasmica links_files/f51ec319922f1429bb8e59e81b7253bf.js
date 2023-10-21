class BaseComponent{opts={}
constructor(options){$.extend(this.opts,options);this.run();}
listen(events){let _this=this;for(let i=0;i<events.length;i++){let[$selector,action,callback]=events[i];if(typeof $selector==='object'&&$selector.constructor.name==='jQuery'){$selector.on(action,function(){return callback.apply(_this,[$(this),...arguments]);});}
else{$(document).on(action,$selector,function(){return callback.apply(_this,[$(this),...arguments]);});}}
$(document).ready(function(){return _this.ready.apply(_this,[...arguments]);});}
ready(){}
run(){}}
class Dialog extends BaseComponent{async open(settings){show_modal($.extend({html:this.html},settings||{}));await this.waitForEl('.modal-body');}
click(selector,callback){this.bind(selector,'click',callback);}
change(selector,callback){this.bind(selector,'change',callback);}
keyup(selector,callback){this.bind(selector,'keyup',callback);}
keyupChange(selector,callback){this.bind(selector,'keyup change',callback);}
submit(selector,callback){this.bind(selector,'submit',callback);}
beforeSubmit(selector,callback){this.bind(selector,'beforeSubmit',callback);}
bind(selector,method,callback){let _this=this;$(document).on(method,selector,function(event){if(method==='click'){event.preventDefault();}
return callback.apply(_this,[$(this),...arguments]);});}
waitForEl(selector){return new Promise(resolve=>{if(document.querySelector(selector)){return resolve(document.querySelector(selector));}
const observer=new MutationObserver(mutations=>{if(document.querySelector(selector)){resolve(document.querySelector(selector));observer.disconnect();}});observer.observe(document.body,{childList:true,subtree:true});});}
trigger($el,settings){$el.click(async(e)=>{e.preventDefault();await this.open(settings||{});});}
get(url,data,callback,opts){this._ajax('get',url,data,callback,opts||{});}
post(url,data,callback,opts){this._ajax('post',url,data,callback,opts||{});}
_ajax(type,url,data,callback,opts){$.ajax($.extend({type:type,url:url,data:data,dataType:'json',timeout:10000,success:(response)=>{if(response.error){let $alert=$('.alert-danger');if(!$alert.length){$alert=$('<div>',{class:'alert alert-danger'});}
$alert.html(response.error).appendTo('.modal-body');}
else{callback.call(this,response);}},error:(response)=>show_modal({html:`<div class="alert alert-danger">${response.error}</div>`,closeBtn:true,class:'alert',timeout:10000})},opts));}}
class Form{init(){}
getInput(attr){}
showError(attr){}};