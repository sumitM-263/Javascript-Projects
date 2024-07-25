const form=document.getElementById('form');
const password=document.getElementById('password');
const Name=document.getElementById('name');
const errorEl=document.getElementById('error');

form.addEventListener('submit',(e)=>{
    let messages=[]

    if(password.value.length<=6){
        messages.push('Password must be longer than 6 characters');
    }

    if(password.value.length>=20){
        messages.push('Password must be less than 20 characters');
    }

    if(password.value==='password'){
        messages.push("'password' can't used as password");;
    }

    if(messages.length>0){
        e.preventDefault()
        errorEl.innerText=messages.join(',')
    }
})