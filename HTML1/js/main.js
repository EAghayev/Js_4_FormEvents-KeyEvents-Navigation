
// Task 1
// document.querySelectorAll('#menu li').forEach(elem=>{
//     elem.addEventListener('click',function(){
//         document.querySelector('#menu .active').classList.remove('active')
//         this.classList.add('active')
//     })
// })


//js navigation
// let li = document.getElementById("thirdLi")
// let lastSpan = li.firstElementChild.lastElementChild;


// console.log(li.innerHTML)
// console.log(li.parentElement)
// console.log(li.nextElementSibling.nextElementSibling.innerHTML)
// console.log(li.previousElementSibling.previousElementSibling.previousElementSibling)
// console.log(li.children[0].children[0].children)
// console.log(li.lastElementChild.lastElementChild)

// console.log(li.parentElement.nextElementSibling.firstElementChild.innerText)

// console.log(lastSpan.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.innerText)



document.querySelectorAll('li').forEach(elem=>{
    elem.addEventListener('click',function(){
        document.querySelector('#menu .active').classList.remove('active')
        this.classList.add('active')

        let id = this.getAttribute('data-id')

        let contentLi = document.getElementById(id)

        let items = document.querySelectorAll('.content-item');
        let noneItems = [...items].filter(x=>!x.classList.contains('d-none'))
        noneItems[0].classList.add('d-none')
        
        contentLi.classList.remove('d-none')
    })
})