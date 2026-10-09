// // Ejercicio A — Function

// // Crea una función:

// // calculateTestTimeout

// // Debe recibir:

// // baseTimeout: number

// // y devolver:

// // baseTimeout + 5000

// // Ejemplo:

// // calculateTestTimeout(30000)
// // → 35000

// // El retorno debe estar tipado.

// function calculateTestTimeout(baseTimeout: number): number {
//     return baseTimeout + 5000
// }
 
// // Ejercicio B — Parámetro opcional

// // Crea una función:

// // getBrowserName

// // Debe recibir un parámetro opcional:

// // browser

// // de tipo Browser.

// // Recuerda que ya tienes:

// // type Browser = "chromium" | "firefox" | "webkit";

// // La función debe devolver:

// // "Browser: chromium"

// // cuando reciba:

// // "chromium"

// // Y cuando no reciba nada:

// // "Browser: chromium"

// // Es decir, chromium será el valor por defecto.

// // Aquí quiero que combines:

// // optional/default parameter
// // +
// // Browser type

// function getBrowserName(browser: Browser = "chromium"): string {
//     return `Browser: ${browser}`;
// }

// // Ejercicio C — Arrow Function

// // Crea una Arrow Function:

// // isSuccessfulResponse

// // que reciba:

// // statusCode: number

// // y devuelva true únicamente cuando sea 200.

// // Hazla utilizando Arrow Function, no function.

// const isSuccesfulResponse = (statusCode: number): boolean => {
//     return statusCode === 200
// };

// // Ejercicio D — Arrow Function + Array

// // Tenemos:

// // const browsers: Browser[] = [
// //     "chromium",
// //     "firefox",
// //     "webkit"
// // ];

// // Crea una nueva variable:

// // uppercaseBrowsers

// // que contenga:

// // CHROMIUM
// // FIREFOX
// // WEBKIT

// // Utiliza:

// // map()

// // y una Arrow Function.

// // Este ejercicio es importante porque map() aparecerá muchísimo en código TypeScript.

// const browsers: Browser[] = [
//     "chromium",
//     "firefox",
//     "webkit"
// ]

// const uppercaseBrowsers = browsers.map(browser => browser.toUpperCase());

// // 🔥 Ejercicio E — Async/Await

// // Crea esta función:

// // getApiStatus

// // Debe ser:

// // async

// // y devolver:

// // 200

// // El tipo de retorno debe ser:

// // Promise<number>

// // Luego crea otra función:

// // validateApi

// // que sea también async y utilice:

// // await getApiStatus()

// // para obtener el status.

// // Después debe imprimir:

// // API is available

// // si el status es 200.

// async function getApiStatus(): Promise<number> {
//     return 200
// }

// async function validateApi(): Promise<void> {
//     const apiStatus = await getApiStatus()

//     if (apiStatus === 200){
//         console.log("API is available")
//     }else {
//          console.log("API is not available")
//     }
// }

// // 🏆 Bonus — Mentalidad Playwright

// // Sin usar Playwright todavía, intenta crear:

// // const login = async (username: string, password: string): Promise<boolean> => {
// //     // ...
// // };

// // La función debe devolver:

// // true

// // cuando:

// // username === "qa_masuel"

// // y:

// // password === "Password123"

// // En cualquier otro caso:

// // false

// const login = async (username: string, password: string): Promise<boolean> => {
//     return username === "qa_masuel" && password === "Password123"
// }