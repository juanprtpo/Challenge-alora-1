//funcion validar texto
function validarTexto(entradaTexto) {
    //Creamos variable y marcamos como expresion regular los valores que no ocuparemos
    const regex =  /^[a-z\s]+$/;

    // Verificamos texto no tiene tildes y no esté vacío
    if (!regex.test(entradaTexto)) {
        alert("El texto a encriptar no es válido.");
        return false;
    }

    return true;
}

//funcion encriptar texto
function encriptarTexto() {
    const entradaTexto = document.getElementById('textarea-encriptar').value;
    if (validarTexto(entradaTexto)) {
        /*La letra "e" es convertida para "enter"
        La letra "i" es convertida para "imes"
        La letra "a" es convertida para "ai"
        La letra "o" es convertida para "ober"
        La letra "u" es convertida para "ufat"*/
        const txtResultado = document.getElementById('txt-resultado');
        const resultado = entradaTexto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        txtResultado.textContent = resultado; 
        document.getElementById('copiar').style.display = 'block';
        document.getElementById('txt-complementario').style.display = 'none'
        document.getElementById('muneco-resultado').style.display = 'none';

        //El botón copiar no se habilitará hasta después
        document.getElementById('copiar').style.display = 'block';
    }
}

//Funcion desencriptar
function desencriptarTexto() {
    const entradaTextoEncriptado = document.getElementById('textarea-encriptar').value;
    if (validarTexto(entradaTextoEncriptado)) {
        const txtResultado = document.getElementById('txt-resultado');
        let resultadoDesencriptado = entradaTextoEncriptado;
        const palabrasClave = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
        };

        for (const clave in palabrasClave) {
            const reemplazo = palabrasClave[clave];
            resultadoDesencriptado = resultadoDesencriptado.split(clave).join(reemplazo);
        }

        txtResultado.textContent = resultadoDesencriptado;
        document.getElementById('copiar').style.display = 'block';
        document.getElementById('txt-complementario').style.display = 'none'
        document.getElementById('muneco-resultado').style.display = 'none';
    }
}

//funcion para copiar al portapapeles
function copy(){    
    const txtResultado = document.getElementById('txt-resultado');
    const entradaTextoEncriptado = document.getElementById('textarea-encriptar');
    navigator.clipboard.writeText(txtResultado.value);
    alert("Texto copiado al portapapeles");
    location.reload();

    //El botón copiar no se habilitará hasta después
    document.getElementById('copiar').style.display = 'none';
}
