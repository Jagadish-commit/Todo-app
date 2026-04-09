let inputBox = document.querySelector('#text-box')
let listContainer = document.querySelector('#list-container')
let btn = document.querySelector('button')

function addTask(){
    if(inputBox.value === ''){
        alert('You must write Something!!')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData();
}

btn.addEventListener('click',function(){
    addTask();
})

listContainer.addEventListener('click',function(e){
   
    if(e.target.tagName === 'LI'){ 
         e.target.classList.toggle("checked"); 
         saveData();
    }
    else{
        e.target.tagName === 'span'
        console.dir(e.target.parentElement)
        e.target.parentElement.remove()
        saveData();
    }
})

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask();