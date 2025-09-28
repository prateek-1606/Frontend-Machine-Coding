const inputContainer = document.getElementById('input-container')

inputContainer.addEventListener('input',(e) => {
    let val = e.target.value;

    if(parseInt(val)>9){
        e.target.value = Math.floor(e.target.value/10);
    }

    if(val!=""){
        let nextElement = e.target.nextElementSibling;
        if(nextElement){
            nextElement.disabled = false;
            nextElement.focus();
        }
    }
})


inputContainer.addEventListener('keyup',(e) => {
    let key = e.key.toLowerCase();
    if(key==="backspace" || key==="delete"){
        e.target.value = "";
        let prevElement = e.target.previousElementSibling;
        if(prevElement){
            prevElement.focus();
        }
    }
})