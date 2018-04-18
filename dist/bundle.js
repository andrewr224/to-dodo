!function(e){var t={};function n(d){if(t[d])return t[d].exports;var a=t[d]={i:d,l:!1,exports:{}};return e[d].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:d})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var d=class{constructor(e){this.title=e.title,this.star=e.star,this.done=!1}static new(e){return new this(e)}toggleStar(){this.star=!this.star}markDone(){this.done=!0}removeDueDate(){this.dueDate=""}};var a=class{constructor(e){this.title=e.title,this.todos=[],this.dones=[],this.protected=e.protected}static new(e){return new this(e)}addToDo(e){this.todos.push(d.new(e))}destroy(e){this.todos.splice(e,1)}markDone(e){let t=this.todos[e];t.markDone(),this.dones.push(t),this.destroy(e)}};var o,i=(()=>{document.querySelector("section");const e=document.querySelector(".lists"),t=document.querySelector(".todos"),n=a.new({title:"Inbox",protected:!0}),d=[n];let i=()=>{let e=document.querySelector(".active");e&&e.classList.remove("active")};function l(){i();let e=this.parentNode.getAttribute("data-value");y(d[e])}function r(){let e=document.querySelector(".active").getAttribute("data-value"),t=d[e],n=this.parentNode.getAttribute("data-todo");t.markDone(n),y(t)}function s(){let e=document.querySelector(".active").getAttribute("data-value"),t=d[e],n=this.parentNode.getAttribute("data-todo");t.todos[n].toggleStar(),y(t)}function c(){if(!confirm("Delete Item?"))return;let e=document.querySelector(".active").getAttribute("data-value"),t=d[e],n=this.parentNode.getAttribute("data-todo");t.destroy(n),y(t)}function u(){if(!confirm("Delete List? This will delete all todos in this list."))return;let e=this.parentNode.getAttribute("data-value");d.splice(e,1),m()}function p(){if(13==event.keyCode){let e=this.value;if(!e)return;let t=a.new({title:e});d.push(t),m({list:t})}}let m=(t={})=>{if(e.textContent="",(()=>{let t=document.createElement("header"),n=document.createElement("h1");n.textContent="To DoDo",t.appendChild(n),e.appendChild(t)})(),d.forEach(t=>{e.appendChild((e=>{let t=document.createElement("div");t.classList.add("list"),t.dataset.value=d.indexOf(e);let n=document.createElement("p");if(n.textContent=e.title,n.addEventListener("click",l),t.appendChild(n),!e.protected){let e=document.createElement("span");e.addEventListener("click",u),e.innerHTML="&#128465;",t.appendChild(e)}return t})(t))}),(()=>{let t=document.createElement("input"),n="Add new list";t.addEventListener("keydown",p),t.value=n,t.addEventListener("focus",()=>{t.value==n&&(t.value="")}),t.addEventListener("focusout",()=>{t.value||(t.value=n)}),e.appendChild(t)})(),0==d.lenght)return;let a=t.list?t.list:n;y(a)},h=e=>{t.appendChild((e=>{let t=document.querySelector(".active").getAttribute("data-value"),n=d[t],a=document.createElement("div");a.dataset.todo=n.todos.indexOf(e),a.classList.add("todo");let o=document.createElement("input");o.addEventListener("click",r),o.type="checkbox";let i=document.createElement("p");i.textContent=e.title;let l=document.createElement("span");l.addEventListener("click",c),l.innerHTML="&#128465;";let u=document.createElement("span");return u.addEventListener("click",s),u.innerHTML=e.star?"&#9733;":"&#9734;",a.appendChild(o),a.appendChild(i),a.appendChild(l),a.appendChild(u),a})(e))},v=e=>{t.appendChild((e=>{let t=document.querySelector(".active").getAttribute("data-value"),n=(d[t],document.createElement("div"));n.classList.add("done");let a=document.createElement("input");a.checked=!0,a.disabled=!0,a.type="checkbox";let o=document.createElement("p");o.textContent=e.title;let i=document.createElement("span");return i.innerHTML=e.star?"&#9733;":"&#9734;",n.appendChild(a),n.appendChild(o),n.appendChild(i),n})(e))};function f(e){if(13==event.keyCode){let e=this.value;if(!e)return;let t=document.querySelector(".active").getAttribute("data-value"),n=document.querySelector(".star").checked,a=d[t];a.addToDo({title:e,star:n}),y(a)}}let y=e=>{if(t.textContent="",(e=>{let n=document.createElement("header"),d=document.createElement("h3");d.textContent=e,n.appendChild(d),t.appendChild(n)})(e.title),(()=>{let e="Enter your task",n=document.createElement("div");n.classList.add("input-group");let d=document.createElement("input");d.addEventListener("keydown",f),d.type="text",d.value=e,d.addEventListener("focus",()=>{d.value==e&&(d.value="")}),d.addEventListener("focusout",()=>{d.value||(d.value=e)});let a=document.createElement("input");a.classList.add("star"),a.type="checkbox",n.appendChild(d),n.appendChild(a),t.appendChild(n)})(),o=d.indexOf(e),document.querySelector(`[data-value='${o}']`).classList.add("active"),e.todos.length>0&&e.todos.forEach(e=>{h(e)}),0==e.dones.length)return;let n=document.createElement("p");n.classList.add("completed"),n.textContent="Completed Todos",t.appendChild(n),e.dones.forEach(e=>{v(e)})};return{addList1:e=>{d.push(e),m()},renderLists:m}})();let l=a.new({title:"To DoDo"});l.addToDo({title:"Type your task in the field above to add it",star:!1}),l.addToDo({title:"Click on a list to see it's tasks",star:!0}),l.addToDo({title:"Click on a task to see it's description",star:!0}),l.addToDo({title:"Update your tasks in real time by simply clicking checkbox to mark task as complete, or by clicking on a star to make it a priority",star:!0});let r=a.new({title:"FlashMap"});r.addToDo({title:"Get AWS credentials",star:!0}),r.addToDo({title:"Deploy to AWS",star:!0});let s=a.new({title:"ToDo Project"});s.addToDo({title:"Pick a nice name",star:!0}),s.addToDo({title:"Create some dummy markup",star:!0}),s.addToDo({title:"Add basic styles",star:!0}),s.addToDo({title:"Add js to rule them all",star:!0}),i.addList1(l),i.addList1(r),i.addList1(s),i.renderLists()}]);