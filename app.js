const moduloEncriptador = (() => {
   
    const alfBase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let textoCifrado, textoClaro, secuencia,k1,k2;
    const btnDescifrado = document.getElementById("btnDescifrado");
    const btnCifrado = document.getElementById("btnCifrado");

    const limpiarEncriptador = () =>{
        textoCifrado = "";
        textoClaro = "";
        secuencia = 0;
        k1 = 0;
        k2 = 0;
    }

    const obtenerEntradas = () => {
        k1 = document.getElementById('inputClave1').value,
        k2 = document.getElementById('inputClave2').value,
        secuencia = document.getElementById('inputSecuencia').value,
        textoCifrado = document.getElementById('inputTextoCifrado');
        textoClaro = document.getElementById('inputTextoClaro');
    }

    const descifrarTexto = () => {
        
    }

    const cifrarTexto = (str) => {
        let textoTemp = str.toLowerCase().split(" ").join("x");
        let textoRes = ""
        let secIndex = 0;
        for(let i = 0; i < textoTemp.length; i++){
            textoRes += encontrarCaracter(textoTemp[i],secuencia[secIndex] === '1'? k1:k2);
            secIndex++;
            if(secIndex === secuencia.length){
                secIndex = 0;
            }
        }
        return textoRes
    }

    const encontrarCaracter = (letra,clave) => {
        let letraIndex = parseInt(alfBase.indexOf(letra)) + parseInt(clave);
        let largoAlf = alfBase.length;
        if(letraIndex > largoAlf){
            letraIndex = (largoAlf - letraIndex)*(-1)
        }
        return(alfBase[letraIndex]);
    }

    btnDescifrado.addEventListener('click', () => {
        obtenerEntradas();
    })

    btnCifrado.addEventListener('click', () => {
        obtenerEntradas();
        textoCifrado.value = cifrarTexto(textoClaro.value);
    })

    return{
        nuevoEncriptador : limpiarEncriptador,
    }
})();