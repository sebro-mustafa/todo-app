

document.getElementById('btn-add').addEventListener('click',()=>{
    let note=document.getElementById("todo").value
    if(note){
        let note_item=document.createElement('li')
        note_item.classList.add('py-3','px-5','d-flex','justify-content-between','fs-4','list-item')
        note_item.innerHTML=`<p class="note-of-todo" style="color:#9C69B6;">${note}</p>
        <div class="d-flex ">
        <input type="checkbox"  class="check ms-4 form-check-input my-2" >
        <button  class="btn_remove btn  ms-2 p-2 text-white fs-4" style="background-color:#A30132; ">Delete</button>
        </div>`
        list.appendChild(note_item)
     
       document.getElementById("todo").value=""
    }
    
})
document.getElementById('list').addEventListener('click',()=>{
    if(event.target.classList.contains('btn_remove')){
       if(confirm('Are you sure you want to delete this note?')){
        event.target.closest('li').remove()
       }
    }
  
})
document.getElementById('list').addEventListener('change',()=>{
    if(event.target.type==='checkbox'){
       let check=event.target.closest('li').querySelector('.note-of-todo')
         if(event.target.checked){
              check.style.textDecoration='line-through'
              check.style.textDecorationColor='#A30132'
         }
         else{
              check.style.textDecoration='none'
         }
    }
  
})