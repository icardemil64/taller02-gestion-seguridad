const moduloEncriptador = (() => {
   
    const alfBase = ['a','b','c','d','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let alfC1 = ['a','b','c','d','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let alfC2 = ['a','b','c','d','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let textoCifrado, secuencia;
    let k1,k2;
    const btnDescifrado = document.getElementById("btnDescifrado");

    const inicializarEncriptador = () =>{
        textoCifrado = "";
        secuencia = "";
        k1 = 0;
        k2 = 0;
    }
    const obtenerEntradas = () => {
        k1 = document.getElementById('inputClave1').value,
        k2 = document.getElementById('inputClave2').value,
        secuencia = document.getElementById('inputSecuencia').value,
        textoCifrado = document.getElementById('inputTextoCifrado').value;
    }


    btnDescifrado.addEventListener('click', () => {
        obtenerEntradas();
        console.log(textoCifrado);
    })
    return{
        nuevoEncriptador : inicializarEncriptador,
    }
})();