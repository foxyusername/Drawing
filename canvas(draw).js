let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');
let button=document.getElementById('button');
let button2=document.getElementById('button2');
let body=document.querySelector('body');
let label=document.getElementById('label');
canvas.width=window.innerWidth-40;
canvas.height=window.innerHeight -40;

let x=100;
let y=100;
let radius=15;


let draw=false;

function mousedown(){
draw=true;
}
function mouseup(){
    draw=false;
}

canvas.addEventListener('mousedown',mousedown);
canvas.addEventListener('mouseup', mouseup);

window.addEventListener('keypress',(e)=>{
    console.log(e.keyCode);
    if(e.keyCode===98){
        label.style.display='none';
        window.addEventListener('mousemove',(e)=>{
            if(!draw) return;
            ctx.beginPath();
        ctx.arc(e.clientX,e.clientY,radius,0,2 * Math.PI);
        ctx.strokeStyle='blue';
        ctx.stroke();
        })
        }
         if(e.keyCode===114){
            label.style.display='none';
                window.addEventListener('mousemove',(e)=>{
                    if(!draw) return;
                    ctx.beginPath();
                ctx.arc(e.clientX,e.clientY,radius,0,2 * Math.PI);
                ctx.strokeStyle='red';
                ctx.stroke();
                })
            }
        
    });


    button.addEventListener('click', function(){
       canvas.style.backgroundColor='white';
       body.style.backgroundColor='white';
    })
    button2.addEventListener('click', function(){
        canvas.style.backgroundColor='black';
        body.style.backgroundColor='black';
    })
           