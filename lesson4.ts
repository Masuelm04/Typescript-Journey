// // Utiliza este dataset:

// type Rol = "admin" | "tester" | "viewer";

// interface TestUser {
//     id: number;
//     username: string;
//     role: Rol;
//     active: boolean;
// }

// const users: TestUser[] = [
//     {
//         id: 1,
//         username: "carlo",
//         role: "tester",
//         active: true
//     },
//     {
//         id: 2,
//         username: "alicia",
//         role: "admin",
//         active: true
//     },
//     {
//         id: 3,
//         username: "kiara",
//         role: "viewer",
//         active: false
//     },
//     {
//         id: 4,
//         username: "luka",
//         role: "tester",
//         active: true
//     }
// ];
// // Ejercicio A — forEach()

// // Recorre users utilizando forEach() e imprime:

// // User: carlo
// // User: alicia
// // User: kiara
// // User: luka

// const usuario = users.forEach(user => {console.log(`User: ${user.username}`)});

// // Ejercicio B — map()

// // Crea:

// // usernames

// // que contenga:

// // ["carlo", "alicia", "kiara", "luka"]

// const usernames = users.map(user => user.username)

// // Utiliza map().

// // Ejercicio C — filter()

// // Crea:

// // activeUsers

// // que contenga únicamente los usuarios activos.

// // ¿Cuántos deberían quedar?

// // 3

// const activeUsers = users.filter(user => user.active)

// // Ejercicio D — find()

// // Busca:

// // alicia

// // utilizando find().

// // Guarda el resultado en:

// // adminUser

// // Luego imprime su username.

// // Recuerda que find() puede devolver undefined.

// const adminUser = users.find(user => user.username === "alicia")

// console.log(adminUser?.username)

// // Ejercicio E — some()

// // Crea:

// // hasViewer

// // que indique si existe al menos un usuario con role:

// // viewer

// // Debe devolver:

// // true

// const hasViewer = users.some(user => user.role === "viewer")
// console.log(hasViewer)

// // Ejercicio F — every()

// // Crea:

// // allUsersActive

// // que indique si todos los usuarios están activos.

// // Debe devolver:

// // false

// const allUsersActive = users.every(user => user.active)
// console.log(allUsersActive)

// // 🔥 Ejercicio G — QA Automation

// // Ahora una situación más realista.

// // Queremos obtener los usernames de todos los testers activos.

// // El resultado debe ser:

// // ["carlo", "luka"]

// // Pero quiero que lo hagas utilizando:

// // filter()
// // +
// // map()

// // Es decir:

// // users
// //  ↓
// // ¿active?
// //  ↓
// // ¿tester?
// //  ↓
// // username

// const activeTesterUsernames  = users.filter(user => user.active && user.role === "tester").map(user => user.username)
// console.log(activeTesterUsernames )

// // 🧠 Bonus — API Testing

// // Imagina que esta variable representa una respuesta de una API:

// const apiUsers = users;

// // Queremos validar:

// // "La respuesta contiene al menos un usuario administrador activo."

// // Crea:

// // hasActiveAdmin

// // utilizando una combinación de some() y una condición.

// // Debe devolver:

// // true

// const hasActiveAdmin = apiUsers.some(user => user.role === "admin" && user.active)
// console.log(hasActiveAdmin)