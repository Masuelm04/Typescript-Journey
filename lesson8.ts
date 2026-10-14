// 🧪 Ejercicio A — Generic Function

// Objetivo: crear una función genérica que trabaje con distintos tipos de datos sin utilizar any.

// Crea una función llamada wrapInArray que reciba un valor de cualquier tipo y devuelva un array que contenga ese valor.

// Resultados esperados:

// wrapInArray(25);
// // [25]

// wrapInArray("qa_masuel");
// // ["qa_masuel"]

// wrapInArray(true);
// // [true]

// Requisitos:

// - Utiliza Generics (<T>).
// - No utilices any.
// - Permite que TypeScript infiera el tipo en las llamadas.

function wrapInArray<T>(value: T): T[] {
    return [value]
}

console.log(wrapInArray(25))
console.log(wrapInArray("qa_masuel"))
console.log(wrapInArray(true))

// 🧪 Ejercicio B — Generic Interface

// Objetivo: reutilizar una estructura para representar diferentes respuestas de API.

// Define esta interfaz genérica:

// interface ApiResponse<T> {
//     statusCode: number;
//     data: T;
// }

// Crea también una interfaz ApiUser con estas propiedades:

//  Propiedad	Tipo
//  id	        number
//  username	string
//  active	    boolean

// Después crea dos objetos:

// 1. userResponse

// Debe representar una respuesta que contiene un único usuario.

// 2. usersResponse

// Debe representar una respuesta que contiene un array de usuarios.

// Ambos deben tener:

// statusCode: 200

// Utiliza ApiResponse<T> para tipar las dos respuestas.

interface ApiResponse<T> {
    statusCode: number;
    data: T;
}

interface ApiUser {
    id: number,
    username: string,
    active: boolean
}

const userResponse: ApiResponse<ApiUser> = {
    statusCode: 200,
    data: {
        id: 1,
        username: "marco",
        active: true
    }
}

const usersResponse: ApiResponse<ApiUser[]> = {
    statusCode: 200,
    data: [
        { id: 2, username: "paula", active: false},
        { id: 3, username: "frank", active: true }
    ]
}

// 🧪 Ejercicio C — Enum

// Objetivo: representar los estados de ejecución de una prueba.

// Crea un Enum llamado TestStatus con estos miembros:

//  Miembro	    Valor
//  Passed	    "passed"
//  Failed	    "failed"
//  Skipped	    "skipped"

// Después crea una función llamada:

// getStatusMessage

// Debe recibir un TestStatus y devolver un string.

// Comportamiento esperado:

// - Passed → "Test passed successfully"
// - Failed → "Test failed"
// - Skipped → "Test was skipped"

// Utiliza switch para resolverlo y prueba la función con al menos dos estados diferentes.

enum TestStatus {
    Passed = "passed",
    Failed = "failed",
    Skipped = "skipped"
}

function getStatusMessage(value: TestStatus): string {
    switch (value) {
        case TestStatus.Passed:
            return "Test passed successfully"
        case TestStatus.Failed:
            return "Test failed"
        case TestStatus.Skipped:
            return "Test was skipped"
        default:
            throw new Error(`Unsupported test status: ${value}`)
    }
}

console.log(getStatusMessage(TestStatus.Passed))
console.log(getStatusMessage(TestStatus.Skipped))

// 🧪 Ejercicio D — Partial<T>

// Objetivo: crear actualizaciones parciales de usuarios sin tener que proporcionar todas sus propiedades.

// Utiliza esta interfaz:

// interface TestUser {
//     id: number;
//     username: string;
//     email: string;
//     active: boolean;
// }

// Crea un tipo llamado TestUserUpdate utilizando:

// Partial<TestUser>

// Después crea tres objetos de actualización:

// Actualización 1: cambiar únicamente active a false.
// Actualización 2: cambiar únicamente username.
// Actualización 3: cambiar email y active.

// No repitas todas las propiedades de TestUser en cada objeto.

interface TestUser {
    id: number;
    username: string;
    email: string;
    active: boolean;
}

type TestUserUpdate = Partial<TestUser>;

const update1: TestUserUpdate = {
    active: false
}

const update2: TestUserUpdate = {
    username: "martin"
}

const update3: TestUserUpdate = {
    email: "lora@gmail.com",
    active: true
}

console.log(update1)
console.log(update2)
console.log(update3)

// 🧪 Ejercicio E — Pick<T> y Omit<T>

// Utiliza la misma interfaz TestUser del ejercicio anterior.

// Parte 1 — Pick

// Crea un tipo llamado UserSummary que incluya únicamente:

// id
// username

// Después crea un objeto válido de ese tipo.

// Parte 2 — Omit

// Crea un tipo llamado PublicUser que incluya todas las propiedades de TestUser, excepto:

// email

// Después crea un objeto válido de tipo PublicUser.

// Recuerda:

// - Pick selecciona las propiedades que quieres conservar.
// - Omit excluye las propiedades que no quieres incluir en el tipo resultante.

type UserSummary = Pick<TestUser, "id" | "username">;

const userSummaryUpdated: UserSummary = {
    id: 5,
    username: "robert"
}

type PublicUser = Omit<TestUser, "email">;

const publicUserUpdated: PublicUser = {
    id: 6,
    username: "donda",
    active: true
}

console.log(userSummaryUpdated)
console.log(publicUserUpdated)

// 🧪 Ejercicio F — Record<K, V>

// Objetivo: crear una configuración tipada para distintos navegadores de Playwright.

// Define el siguiente tipo:

// type Browser = "chromium" | "firefox" | "webkit";

// Crea un objeto llamado browserTimeouts utilizando:

// Record<Browser, number>

// Asigna estos valores:

//  Navegador	Timeout
//  chromium	30000
//  firefox	    40000
//  webkit	    35000

// Finalmente, imprime el timeout correspondiente a firefox.
// Asegúrate de que TypeScript pueda detectar si falta alguno de los navegadores o si uno tiene un valor que no sea numérico.

type Browser = "chromium" | "firefox" | "webkit"

const browserTimeouts: Record<Browser, number> = {
    chromium: 30000,
    firefox: 40000,
    webkit: 35000
}

console.log(browserTimeouts.firefox)

// 🔥 Bonus — findById para QA Automation

// Este ejercicio combina Generics con el método find() que aprendiste en la Lección 4.

// Crea una función genérica llamada:

// findById

// Debe recibir:

// - Un array de objetos que tengan una propiedad id de tipo number.
// - Un identificador numérico que deseas buscar.

// Debe devolver el objeto encontrado o undefined si no existe.

// Requisitos:

// 1. Utiliza un Generic con una restricción que garantice que cada elemento tenga id: number.
// 2. Utiliza el método find().
// 3. Conserva el tipo específico de los objetos encontrados.
// 4. Prueba la función con los usuarios del ejercicio B.

// Por ejemplo, al buscar el identificador 2, debe devolver el usuario correspondiente. Al buscar un identificador inexistente, debe devolver undefined.

// Pista: necesitarás algo parecido conceptualmente a T extends { id: number }, pero completa tú la implementación.

function findById<T extends { id: number }>(items: T[], id: number): T | undefined {
    return items.find(item => item.id === id)
}

const user = findById(usersResponse.data, 2)
const nonExistentUser = findById(usersResponse.data, 10)

console.log(user)
console.log(nonExistentUser)