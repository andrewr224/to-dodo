!function(t){var e={};function a(o){if(e[o])return e[o].exports;var d=e[o]={i:o,l:!1,exports:{}};return t[o].call(d.exports,d,d.exports,a),d.l=!0,d.exports}a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);var o,d=(()=>{document.querySelector("section");const t=document.querySelector(".lists"),e=document.querySelector(".todos"),a=[];let d=()=>{let t=document.querySelector(".active");t&&t.classList.remove("active")};function n(){d();let t=this.getAttribute("data-value");p(a[t])}function i(){let t=document.querySelector(".active").getAttribute("data-value"),e=a[t],o=this.parentNode.getAttribute("data-todo");e.markDone(o),p(e)}function r(){let t=document.querySelector(".active").getAttribute("data-value"),e=a[t],o=this.parentNode.getAttribute("data-todo");e.todos[o].toggleStar(),p(e)}function l(){if(!confirm("Delete Item?"))return;let t=document.querySelector(".active").getAttribute("data-value"),e=a[t],o=this.parentNode.getAttribute("data-todo");e.destroy(o),p(e)}let s=t=>{e.appendChild((t=>{let e=document.querySelector(".active").getAttribute("data-value"),o=a[e],d=document.createElement("div");d.dataset.todo=o.todos.indexOf(t),d.classList.add("todo");let n=document.createElement("input");n.addEventListener("click",i),n.type="checkbox";let s=document.createElement("p");s.textContent=t.title;let c=document.createElement("span");c.addEventListener("click",l),c.innerHTML="&#128465;";let u=document.createElement("span");return u.addEventListener("click",r),u.innerHTML=t.star?"&#9733;":"&#9734;",d.appendChild(n),d.appendChild(s),d.appendChild(c),d.appendChild(u),d})(t))},c=t=>{e.appendChild((t=>{let e=document.querySelector(".active").getAttribute("data-value"),o=(a[e],document.createElement("div"));o.classList.add("done");let d=document.createElement("input");d.checked=!0,d.disabled=!0,d.type="checkbox";let n=document.createElement("p");n.textContent=t.title;let i=document.createElement("span");return i.innerHTML=t.star?"&#9733;":"&#9734;",o.appendChild(d),o.appendChild(n),o.appendChild(i),o})(t))};function u(t){if(13==event.keyCode){let t=this.value;if(!t)return;let e=document.querySelector(".active").getAttribute("data-value"),o=document.querySelector(".star").checked,d=a[e];d.addToDo({title:t,star:o}),p(d)}}let p=t=>{if(e.textContent="",(t=>{let a=document.createElement("header"),o=document.createElement("h3");o.textContent=t,a.appendChild(o),e.appendChild(a)})(t.title),(()=>{let t="Enter your task",a=document.createElement("div");a.classList.add("input-group");let o=document.createElement("input");o.addEventListener("keydown",u),o.type="text",o.value=t,o.addEventListener("focus",()=>{o.value==t&&(o.value="")}),o.addEventListener("focusout",()=>{o.value||(o.value=t)});let d=document.createElement("input");d.classList.add("star"),d.type="checkbox",a.appendChild(o),a.appendChild(d),e.appendChild(a)})(),o=a.indexOf(t),document.querySelector(`[data-value='${o}']`).classList.add("active"),t.todos.forEach(t=>{s(t)}),0==t.dones.length)return;let d=document.createElement("p");d.classList.add("completed"),d.textContent="Completed Todos",e.appendChild(d),t.dones.forEach(t=>{c(t)})};return{addList:e=>{a.push(e),t.appendChild((t=>{let e=document.createElement("div");return e.classList.add("list"),e.textContent=t.title,e.dataset.value=a.indexOf(t),e.addEventListener("click",n),e})(e))},showList:p}})();var n=class{constructor(t){this.title=t.title,this.star=t.star,this.done=!1}static new(t){return new this(t)}toggleStar(){this.star=!this.star}markDone(){this.done=!0}removeDueDate(){this.dueDate=""}};var i=class{constructor(t){this.title=t.title,this.todos=[],this.dones=[]}static new(t){return new this(t)}addToDo(t){this.todos.push(n.new(t))}destroy(t){this.todos.splice(t,1)}markDone(t){let e=this.todos[t];e.markDone(),this.dones.push(e),this.destroy(t)}};document.querySelectorAll(".list"),document.querySelector(".todo-field");let r=i.new({title:"Inbox"});r.addToDo({title:"Type your task in the field above to add it",star:!1}),r.addToDo({title:"Click on a list to see it's tasks",star:!0}),r.addToDo({title:"Click on a task to see it's description",star:!0}),r.addToDo({title:"Update your tasks in real time by simply clicking checkbox to mark task as complete, or by clicking on a star to make it a priority",star:!0});let l=i.new({title:"FlashMap"});l.addToDo({title:"Get AWS credentials",star:!0}),l.addToDo({title:"Deploy to AWS",star:!0});let s=i.new({title:"ToDo Project"});s.addToDo({title:"Pick a nice name",star:!0}),s.addToDo({title:"Create some dummy markup",star:!0}),s.addToDo({title:"Add basic styles",star:!0}),s.addToDo({title:"Add js to rule them all",star:!0}),d.addList(r),d.addList(l),d.addList(s),d.showList(r)}]);