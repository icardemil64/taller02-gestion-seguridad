const moduloEncriptador = (() => {
    /**
     * Establece las variables y constantes que se utilizarán en el cifrador
     */
    //Alfabeto base
    const alfBase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    //Largo del alfabeto
    const largoAlf = alfBase.length;
    //Variables que obtendrán las entradas del usuario
    let textoCifrado, textoClaro, secuencia,k1,k2;
    //Botones de la interfaz
    const btnDescifrado = document.getElementById("btnDescifrado");
    const btnCifrado = document.getElementById("btnCifrado");


    //Inicializa la entrada cuando el usuario ingresa a la aplicación
    const limpiarEncriptador = () =>{
        textoCifrado = "";
        textoClaro = "";
        secuencia = 0;
        k1 = 0;
        k2 = 0;
    }

    /**
     * Función encargada de obtener y validar los datos que ingresa el usuario por la interfaz
     */
    const obtenerEntradas = () => {
        k1 = document.getElementById('inputClave1').value;       
        k2 = document.getElementById('inputClave2').value;
        secuencia = document.getElementById('inputSecuencia').value; 
        if( k1 == "" || secuencia == ""|| k2 == ""){
            alert("Rellene los campos K1, K2 y secuencia");
            return false;
        }
        else{
            if( (k1>=1 && k1<=26) && (k2>=1 && k2<=26) && (secuencia.length>=2 && secuencia.length<=6)){
                textoCifrado = document.getElementById('inputTextoCifrado');
                textoClaro = document.getElementById('inputTextoClaro');
                return true;
            }
            else{
                    alert("K1 y K2 deben ser un numero entre 1 y 26 \n y secuencia debe tener un largo entre 2 y 6" )
                }
        }
        
    }

    /**
     * Función que se encarga de descifrar texto, donde en primer lugar, se realiza una evaluación caracter por caracter.
     * @param {*} str Cadena que entra por el input de texto cifrado
     */

    const descifrarTexto = (str) => {
        let textoTempDes = str.toLowerCase()
        let textoResult = ""
        let secIndexDes = 0;
        for(let i=0; i < textoTempDes.length; i++) {
            textoResult += encontrarCaracter(textoTempDes[i],secuencia[secIndexDes] === '1'? k1:k2, false)
            secIndexDes++;
            if(secIndexDes=== secuencia.length){
                secIndexDes = 0;
            }
        }
        return textoResult.split("x").join(" ").toUpperCase()
    }

    /**
     * Función que se encarga de cifrar texto, donde en primer lugar, se realiza una evaluación caracter por caracter.
     * @param {*} str Cadena que entra por el input de texto claro
     */
    const cifrarTexto = (str) => {
        let textoTemp = str.toLowerCase().split(" ").join("x"); //HOLA MUNDO -> holaxmundo
        let textoRes = ""
        let secIndex = 0;
        for(let i = 0; i < textoTemp.length; i++){
            /**
             *  Se envía el cartacter de textoTemp, la clave y la operación a realizar
             */
            textoRes += encontrarCaracter(textoTemp[i],secuencia[secIndex] === '1'? k1:k2, true);
            secIndex++;
            if(secIndex === secuencia.length){
                secIndex = 0;
            }
        }
        return textoRes.toUpperCase()
    }

    /**
     * Función encargada de cifrar o descrifrar el caracter. Retorna el caracter dependiendo de la acción requerida.
     * @param {*} letra Un caracter del string que se quiere cifrar o descrifrar.
     * @param {*} clave La clave asociada a la secuencia del cifrado o descrifrado. 
     * @param {*} accion Booleano. True == Cifrado. False == Descifrado
     */
    const encontrarCaracter = (letra,clave, accion) => {
        letraIndex=0;
        if(accion){
            letraIndex = parseInt(alfBase.indexOf(letra)) + parseInt(clave);
            if(letraIndex >= largoAlf){
                // Letraindex = 32 Largoalf = 27 -> Letraindex = 5 -> F
                letraIndex  = (letraIndex - largoAlf)
            }
        }
        else{

            letraIndex = parseInt(alfBase.indexOf(letra)) - parseInt(clave)
            if(letraIndex < 0){
                letraIndex = (largoAlf + letraIndex)
            }
        }
        return(alfBase[letraIndex]);
    }

    /**
     * Añade un evento al botón para descifrar.
     */
    btnDescifrado.addEventListener('click', () => {
        if(obtenerEntradas()){
            if(textoCifrado.value != ""){
                textoClaro.value = descifrarTexto(textoCifrado.value);
            }
            else{
                alert("Ingrese el texto cifrado a Descifrar");
            }
        }
        
    })

    /**
     * Añade un evento al botón para cifrar.
     */
    btnCifrado.addEventListener('click', () => { 
        if(obtenerEntradas()){        
            if(textoClaro.value != ""){
                textoCifrado.value = cifrarTexto(textoClaro.value);
            }
            else{
                alert("Ingrese el texto claro a cifrar");
            }
        }      
    })

    /**
     * Retorna la función para inicializar la aplicación.
     */
    return{
        nuevoEncriptador : limpiarEncriptador,
    }
})();



/*
Palabras de prueba de otros grupos
===========================
ORSDFOCPLR
k1 8 k2 3
c1c2c1c2

===========================
IYTYBWJGTFWEÑAWÑVXWZPL
23
7
12112

===========================
*/
