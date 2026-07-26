function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="❀";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.opacity=Math.random();

petal.style.fontSize=(12+Math.random()*18)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,700);
