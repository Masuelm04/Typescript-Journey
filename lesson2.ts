// // Ejercicio A — User

// // Crea una interface llamada:

// // User

// // Debe tener:

// // id        → number
// // username  → string
// // email     → string
// // active    → boolean

// // Después crea dos usuarios utilizando esa interface.

// interface User {
//     id: number,
//     username: string,
//     email: string,
//     active: boolean
// }

// const user1: User = {
//     id: 1,
//     username: "Carlo",
//     email: "carlo1@gmail.com",
//     active: true
// }

// const user2: User = {
//     id: 2,
//     username: "Alicia",
//     email: "alicias32@gmail.com",
//     active: false
// }

// // Ejercicio B — Optional Property

// // Modifica tu User para agregar:

// // phone

// // pero hazlo opcional.

// // Crea un usuario con teléfono y otro sin teléfono.

// interface User2 {
//     id: number,
//     username: string,
//     email: string,
//     active: boolean,
//     phone?: string
// }

// const user3: User2 = {
//     id: 3,
//     username: "Kiara",
//     email: "kiara1@gmail.com",
//     active: true
// }

// const user4: User2 = {
//     id: 4,
//     username: "Luka",
//     email: "luka891@gmail.com",
//     active: false,
//     phone: "809-937-0930"
// }

// // Ejercicio C — Browser Type

// // Crea un type:

// // Browser

// // que solamente permita:

// // chromium
// // firefox
// // webkit

// // Luego crea:

// // browser1
// // browser2

// // utilizando ese tipo.

// // Uno debe ser "chromium" y otro "firefox".

// type Browser = "chromium" | "firefox" | "webkit"

// const browser1: Browser = "chromium";
// const browser2: Browser = "firefox"

// // Ejercicio D — Environment

// // Crea un type:

// // Environment

// // que permita únicamente:

// // QA
// // UAT
// // PROD

// // Después crea:

// // environment

// // con valor:

// // QA

// type Environment = "QA" | "UAT" | "PROD"

// const environment1: Environment = "QA";
// // Ejercicio E — TestConfig

// // Ahora vamos a combinar todo.

// // Crea:

// // interface TestConfig {
// //     // ...
// // }

// // Debe tener:

// // browser
// // environment
// // timeout
// // headless

// // Usa los tipos que consideres apropiados.

// // Luego crea:

// // config

// // con valores razonables para una ejecución de Playwright.

// interface TestConfig {
//     browser: Browser,
//     environment: Environment,
//     timeout: number,
//     headless: boolean
// }

// const config: TestConfig = {
//     browser: "chromium",
//     environment: "QA",
//     timeout: 3000,
//     headless: false
// }

// // 🔥 Bonus — empieza a pensar como QA Automation Engineer

// // Crea esta estructura:

// // TestUser
// // │
// // ├── id
// // ├── username
// // ├── password
// // ├── role
// // └── active

// // Pero quiero que role solo permita:

// // admin
// // tester
// // viewer

// // Aquí tendrás que combinar:

// // interface
// // +
// // type

// type Role = "admin" | "tester" | "viewer"

// // interface TestUser {
// //     id: number,
// //     username: string,
// //     password: string,
// //     role: Role,
// //     active: boolean
// // }