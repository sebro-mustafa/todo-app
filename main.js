

document.getElementById('btn-add').addEventListener('click',()=>{
    let note=document.getElementById("todo").value
    if(note){
        let note_item=document.createElement('li')
        note_item.classList.add('py-3','px-5','d-flex','justify-content-between','fs-4','list-item')
        note_item.innerHTML=`<p style="color:#9C69B6;">${note}</p>
        <div class="d-flex ">
        <input type="checkbox" id="check" class="ms-4 form-check-input my-2" >
        <button id='btn_remove' class="btn_remove btn  ms-2 p-2 text-white fs-4" style="background-color:#A30132; ">Delete</button>
        </div>`
        list.appendChild(note_item)
     
       document.getElementById("todo").value=""
    }
    
})
document.getElementsByClassName('btn_remove').addEventListener('click',()=>{
    

})
