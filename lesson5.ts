// // Utiliza este dataset:

// type Role = "admin" | "tester" | "viewer";

// interface TestUser {
//     id: number;
//     username: string;
//     role: Role;
//     active: boolean;
//     profile?: {
//         email?: string;
//     };
// }

// const user: TestUser = {
//     id: 1,
//     username: "carlo",
//     role: "tester",
//     active: true,
//     profile: {
//         email: "carlo@gmail.com"
//     }
// };
// // Ejercicio A — Object Destructuring

// // Extrae mediante destructuring:

// // username
// // role
// // active

// // desde user.

// // Después imprime:

// // Username: carlo
// // Role: tester
// // Active: true

// const { username, role, active } = user;

// console.log(`Username: ${username}`)
// console.log(`Role: ${role}`)
// console.log(`Active: ${active}`)

// // Ejercicio B — Array Destructuring

// type Browser = "chromium" | "firefox" | "webkit"

// // Crea:

// const browsers: Browser[] = [
//     "chromium",
//     "firefox",
//     "webkit"
// ];

// // Utiliza destructuring para obtener:

// // firstBrowser
// // secondBrowser

// // Los valores deben ser:

// // chromium
// // firefox

// const [ firstBrowser, secondBrowser ] = browsers;

// console.log(firstBrowser)
// console.log(secondBrowser)

// // Ejercicio C — Spread Operator

// // Crea:

// // inactiveUser

// // a partir de user, utilizando ...user.

// // El resultado debe tener:

// // username → carlo
// // role     → tester
// // active   → false

// // El objeto original user debe permanecer con:

// // active → true

// const inactiveUser = {
//     ...user,
//     active: false
// };

// console.log(`Username: ${inactiveUser.username}`)
// console.log(`Role: ${inactiveUser.role}`)
// console.log(`Active: ${inactiveUser.active}`)

// // Ejercicio D — Rest Parameters

// // Crea una función:

// // logBrowsers

// // que reciba cualquier cantidad de valores Browser.

// // Ejemplo:

// // logBrowsers("chromium", "firefox", "webkit");

// // Debe imprimir:

// // Browser: chromium
// // Browser: firefox
// // Browser: webkit

// // Utiliza:

// // ...browsers

// // como Rest Parameter.

// function logBrowsers(...browsers: Browser[]): void {
//     browsers.forEach(browser => {console.log(`Browser: ${browser}`)})
// } 

// logBrowsers("chromium", "firefox", "webkit");

// // Ejercicio E — Optional Chaining

// // Crea:

// // userWithoutProfile

// // utilizando TestUser, pero sin profile.

// // Después intenta obtener:

// // email

// // utilizando:

// // ?.

// // El resultado debería ser:

// // undefined

// // No debe producir un error.

// const userWithoutProfile: TestUser = {
//     id: 2,
//     username: "carlo",
//     role: "tester",
//     active: true
// }

// console.log(`Email: ${userWithoutProfile.profile?.email}`)

// // Ejercicio F — ??

// // Utilizando userWithoutProfile, crea:

// // displayEmail

// // que produzca:

// // "No email available"

// // cuando el email no exista.

// // Debes combinar:

// // ?.
// // +
// // ??

// const displayEmail = userWithoutProfile.profile?.email ?? "No email available"

// console.log(`Email: ${displayEmail}`)

// // 🔥 Ejercicio G — QA Automation

// // Ahora uno más cercano a lo que haremos en WorkforceQA.

// // Tenemos:

// const defaultUser: TestUser = {
//     id: 1,
//     username: "qa_user",
//     role: "tester",
//     active: true,
//     profile: {
//         email: "qa_user@test.com"
//     }
// };

// // Crea mediante Spread Operator:

// // adminUser
// // inactiveUser
// // viewerUser

// // Partiendo de defaultUser.

// // Deben producir:

// // adminUser
// // → role: "admin"
// // → active: true

// // inactiveUser
// // → role: "tester"
// // → active: false

// // viewerUser
// // → role: "viewer"
// // → active: true

// // No copies el objeto completo tres veces.

// // La idea es:

// // defaultUser
// //      ↓
// //     ... 
// //      ↓
// // variaciones de test data

// const adminUser = {
//     ...defaultUser,
//     role: "admin",
// }

// const inctiveUser = {
//     ...defaultUser,
//     active: false
// }

// const viewerUser = {
//     ...defaultUser,
//     role: "viewer",
// }

// // 🧠 Bonus — empieza a pensar como framework developer

// // Supón que tienes:

// const apiResponse = {
//     status: 200,
//     data: {
//         user: {
//             username: "qa_masuel",
//             email: "qa@test.com"
//         }
//     }
// };

// // Quiero que extraigas mediante nested destructuring:

// // status
// // username
// // email

// // y luego crees:

// // userData

// // utilizando Spread Operator, agregándole:

// // role: "tester"

// // Aquí tendrás que combinar:

// // nested destructuring
// // +
// // spread

// const {
//     status,
//     data: {
//         user: {
//             username,
//             email
//         }
//     }
// } = apiResponse;

// const userData = {
//     ...apiResponse.data.user,
//     role: "tester"
// };

// console.log(status)
// console.log(username)
// console.log(email)
// console.log(userData)