//1
function example (a,b,c){
    return a+b+c
}

let exampleExpr = function (a,b,c){
    return a+b+c
}
//2
let sumaTra = function(a,b){
    return a+b 
}

let sumaArrow = (a,b) => a + b;

/*
const ele = document.getElementById("ele1")

function pintar (){
    ele.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", function(){
    pintar(ele, 'yellow');
}) 
*/

// 3.2
const ele = document.getElementById("ele1") 
function pintar (color='green'){
    ele.style.backgroundColor = color
}
ele.addEventListener('click',function(){pintar('yellow')});

//4

let color = 'red';
document.addEventListener('keydown', function(e){
   
    switch (e.key.toLowerCase()){
        case 'a':
            
            color = "lightgreen"
            break;
        case 's':
            
                color = "pink"
                break;
        case 'd':
            
            color = "blue"
            break;
       
    }
}
)

const c1 = document.getElementById('caja1')
const c2 = document.getElementById('caja2')
const c3 = document.getElementById('caja3')
const c4 = document.getElementById('caja4')

c1.addEventListener("click", () => c1.style.backgroundColor = color)
c2.addEventListener("click", () => c2.style.backgroundColor = color)
c3.addEventListener("click", () => c3.style.backgroundColor = color)
c4.addEventListener("click", () => c4.style.backgroundColor = color)


