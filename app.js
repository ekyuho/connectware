document.getElementById('year').textContent = new Date().getFullYear();
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let color = '#173a2c', drawing = false, last;
function sizeCanvas(){const box=canvas.getBoundingClientRect();const dpr=window.devicePixelRatio||1; const saved=document.createElement('canvas');saved.width=canvas.width;saved.height=canvas.height;saved.getContext('2d').drawImage(canvas,0,0);canvas.width=Math.round(box.width*dpr);canvas.height=Math.round(box.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);if(saved.width)ctx.drawImage(saved,0,0,saved.width,saved.height,0,0,box.width,box.height);ctx.lineCap='round';ctx.lineJoin='round';}
sizeCanvas();
function initialArt(){const w=canvas.clientWidth,h=canvas.clientHeight;ctx.strokeStyle='#e46d4b';ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(w*.18,h*.58);ctx.bezierCurveTo(w*.28,h*.13,w*.35,h*.82,w*.46,h*.44);ctx.bezierCurveTo(w*.58,h*.08,w*.61,h*.8,w*.79,h*.4);ctx.stroke();ctx.strokeStyle='#7274c7';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(w*.5,h*.47,w*.24,h*.14,-.35,0,Math.PI*2);ctx.stroke();ctx.fillStyle='#173a2c';ctx.font='italic 20px Georgia';ctx.fillText('Make your mark.',w*.29,h*.77);}
initialArt();
new ResizeObserver(()=>{drawing=false;sizeCanvas();}).observe(canvas);
function point(e){const r=canvas.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top};}
canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;drawing=true;last=point(e);canvas.setPointerCapture(e.pointerId);ctx.fillStyle=color;ctx.beginPath();ctx.arc(last.x,last.y,2,0,Math.PI*2);ctx.fill();});
canvas.addEventListener('pointermove',e=>{if(!drawing)return;const next=point(e);ctx.strokeStyle=color;ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(next.x,next.y);ctx.stroke();last=next;});
for(const name of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(name,()=>drawing=false);
document.querySelectorAll('.swatch').forEach(button=>button.addEventListener('click',()=>{color=button.dataset.color;document.querySelectorAll('.swatch').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});}));
document.getElementById('clear').addEventListener('click',()=>ctx.clearRect(0,0,canvas.width,canvas.height));
