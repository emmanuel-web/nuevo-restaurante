var  informacion=[];


function addinformcion(pNOMBRE,pApellido,ppais,pedad,psexo,pnaci,pcivil,pdireccionemail,ptelefono,pcelular,pestrato,pIdentidad,pDireccion,preligion,psagre){

    var newregistro={
        nombre: pNOMBRE,
        apellido: pApellido,
        nacionalidad: ppais,
        edades:pedad,
        sexos: psexo,
        fecha_naci: pnaci,
        estado_civil: pcivil,
        email: pdireccionemail,
        telefono_fijo: ptelefono,
        celulares: pcelular,
        estatos: pestrato,
        No_ID: pIdentidad,
        direcciones: pDireccion,
        reliones:preligion,
        tipo_sangre: psagre,

    };
    console.log(newregistro);
    informacion.push(newregistro);
    localStorageinfor(informacion)
}

function obtenertabla2(){
    var stora=localStorage.getItem('localStorageinfor');
    if(stora==null){
        informacion=[];
    }else{
        informacion=JSON.parse(stora);
    }
    return informacion;
   

}
function localStorageinfor(plist){
    localStorage.setItem('localStorageinfor',JSON.stringify(plist));

}



