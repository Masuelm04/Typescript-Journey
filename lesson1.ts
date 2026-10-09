// // Ejercicio A — Variables

// // Declara:

// // username → "qa_masuel"
// // age → 25
// // isQaEngineer → true

// const username: string = "qa_masuel"; 
// const age: number = 25; 
// const isQaEngineer: boolean = true;

// // Usa const cuando corresponda.

// // Ejercicio B — Automatización

// // Crea estas variables:

// // browser
// // environment
// // timeout
// // testPassed

// // Con valores:

// // chromium
// // QA
// // 30000
// // true

// const browser: string = "chromium";
// const environment: string = "QA"; 
// const timeout: number = 30000; 
// const testPassed: boolean = true;

// // Declara los tipos explícitamente.

// // Ejercicio C — Array

// // Crea un array llamado:

// // supportedBrowsers

// // que contenga:

// // chromium
// // firefox
// // webkit

// const supportedBrowsers: string[] = [ 
//     "chromium", 
//     "firefox", 
//     "webkit" 
// ];

// // El array debe aceptar únicamente strings.

// // Ejercicio D — Function

// // Crea una función:

// // calculateRetries

// // que reciba:

// // maxRetries

// // como number y devuelva ese número multiplicado por 2.

// // Ejemplo:

// // calculateRetries(3)
// // → 6

// function calculateRetries(maxRetries: number): number { 
//     return maxRetries * 2; 
// }


// // El retorno debe estar tipado.

// // Ejercicio E — QA

// // Crea una función:

// // isSuccessfulResponse

// // que reciba un:

// // statusCode: number

// // y devuelva:

// // true

// function isSuccessfulResponse(statusCode: number): boolean { 
//     return statusCode === 200; 
// }

// // cuando el código sea 200, y false en cualquier otro caso.