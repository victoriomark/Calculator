let screen  = document.querySelector('input');
const All_btn = document.querySelectorAll('button')
const equal = document.querySelector('.equal')
let result ;

const calculator = () => {
   
    All_btn.forEach(e =>{
        e.addEventListener('click',()=>{
          screen.value += e.value
        })
    })
}

equal.addEventListener("click",()=>{

    if(screen.value === ""){
  alert('inter Number')
    }
    else{
        result = eval(screen.value);
        screen.value = result
    }


})
const deletes = () =>{
const del = document.querySelector('.del');
del.addEventListener('click',()=>{
    screen.value = screen.value.slice(0,-1)
})
}
deletes()
calculator()

