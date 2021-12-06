let nameInput = document.getElementById('nameInput')
let ageInput = document.getElementById('ageInput')
let cityInput = document.getElementById('city')
let form = document.getElementById('registerForm')






nameInput.addEventListener('focus',function(){
    console.log("basla name-i yazmaga!")
})

nameInput.addEventListener('blur',function(){
    console.log(`${this.value}  yazdin -- blur`)
})

nameInput.addEventListener('change',function(){
    console.log(`${this.value}  deyisildi -- change`)
})

cityInput.addEventListener('change',function(){
    console.log(`city: ${this.value}`)
})


form.addEventListener('submit',function(event){
    event.preventDefault();
    if(!nameInputChecker(nameInput.value))
    {
        nameInput.parentElement.lastElementChild.classList.remove('d-none')
        nameInput.parentElement.lastElementChild.innerText='Name mecburidir!'
    }

    if(ageInput.value == ''){
        ageInput.parentElement.lastElementChild.classList.remove('d-none')
        ageInput.parentElement.lastElementChild.innerText='Yas mecburidir!'
    }
    else if(ageInput.value<0){
        ageInput.parentElement.lastElementChild.classList.remove('d-none')
        ageInput.parentElement.lastElementChild.innerText='Yas 0-dan asagi ola bilmez!'
    }
})

nameInput.addEventListener('keyup',function(event){
    console.log(nameInput.offsetTop)
    console.log(nameInput.offsetLeft)

    if(nameInputChecker(this.value)){
        nameInput.parentElement.lastElementChild.classList.add('d-none')
    }
    else{
        nameInput.parentElement.lastElementChild.classList.remove('d-none')
    }
})


ageInput.addEventListener('keyup',function(event){
    if(this.value<0){
        this.parentElement.lastElementChild.classList.remove('d-none')
        ageInput.parentElement.lastElementChild.innerText= 'Yas 0-dan asagi ola bilmez!'
    }
    else if(this.value == ''){
        ageInput.parentElement.lastElementChild.classList.remove('d-none')
        ageInput.parentElement.lastElementChild.innerText='Yas mecburidir!'
    }
    else{
        this.parentElement.lastElementChild.classList.add('d-none')
    }
})

function nameInputChecker(nameValue){
    if( nameInput.value.trim()=='') return false
    else return true
}



window.addEventListener('keydown',function(event){

    if(event.keyCode==40){
        console.log("asagi")
    }
    else if(event.keyCode==38){
        console.log("yuxari")
    }
    else if(event.keyCode==39){
        console.log("saga")
    }
    else if(event.keyCode==37){
        console.log("sola")
    }
})

