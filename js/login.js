function enviar(){
let username=document.getElementById('Usuario').Value;
let password=document.getElementById('contraseña').Value;

if(username=='adm' && password=='12345'){
    
    window.location.href = '../index.html';

}else if(username=='' && password==''){
    alert('llena todos los campos');
    

}else if(username=='' && password!=''){
    alert('llena el campo usaurio');
}else if(username!='' && password==''){
    alert('llena el campo contraseña');
}else {
    alert('usuario y contraseña incorrecto');
}
}
