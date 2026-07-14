const chats=document.querySelectorAll(".chat");

const main=document.querySelector(".main");

chats.forEach(chat=>{

chat.addEventListener("click",()=>{

const username=chat.querySelector(".name").innerText;

main.innerHTML=`

<div class="chatWindow">

<div class="chatHeader">

${username}

</div>

<div
class="messagesArea"
id="messages">

</div>

<div class="inputArea">

<input
id="msg"
placeholder="Message...">

<button
id="send">

Send

</button>

</div>

</div>

`;

document
.getElementById("send")
.onclick=send;

document
.getElementById("msg")
.addEventListener("keypress",e=>{

if(e.key==="Enter") send();

});

});

});

function send(){

const input=document.getElementById("msg");

const value=input.value.trim();

if(value==="") return;

document.getElementById("messages").innerHTML+=`

<div class="myMessage">

${value}

</div>

`;

input.value="";

}
