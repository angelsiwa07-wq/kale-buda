
function createHeart(){
 const h=document.createElement("div");
 h.className="heart";
 h.innerHTML="💖";
 h.style.left=Math.random()*100+"vw";
 h.style.fontSize=(15+Math.random()*30)+"px";
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
}
setInterval(createHeart,500);
