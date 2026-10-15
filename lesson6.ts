// Ejercicio A — null y undefined
//  Declara estas variables:
//  username
//  email
//  phone

const username: string = "Raul123";
const email: string | null = "raw@gmail.com";
const phone: string | undefined = "8092398490";

console.log(username);
console.log(email);
console.log(phone);

// Requisitos:
//  - username debe ser un string.
//  - email debe permitir un string o null.
//  - phone debe permitir un string o undefined.
//  Asigna valores iniciales razonables a las tres.

// Ejercicio B — Union Type
//  Crea un tipo llamado Identifier que permita:
//  string | number

//  Después crea una función:
//      formatIdentifier


//  Debe recibir un Identifier y devolver un string:
//  - Si recibe 123, devuelve "ID-123".
//  - Si recibe "usr-abc", devuelve "USR-ABC".
//  Utiliza typeof para distinguir ambos casos.

type Identifier = string | number ;

function formatIdentifier(value: Identifier): string {
    if (typeof value === "number") {
        return `ID-${value}`;
    }
    
    return value.toUpperCase();
}

console.log(formatIdentifier(123))
console.log(formatIdentifier("usr-abc"))

// Ejercicio C — Email seguro
//  Crea una interfaz:
//      interface User {
//          username: string;
//          email: string | null;
//      }


//  Crea un usuario cuyo email sea null.
//  Después, utiliza una condición para imprimir el email en mayúsculas solamente cuando no sea null. En caso contrario, imprime:
//  No email available

interface User {
    username: string;
    email: string | null;
}

const newUser: User = {
    username: "jadira12",
    email: null
}

const displayEmail = newUser.email?.toUpperCase() ?? "No email available";

console.log(displayEmail)

// 🧪 Ejercicio D — in y Union Types
// Objetivo: aprender a distinguir entre dos estructuras de objetos utilizando el operador in.

// 1. Define estas dos interfaces

//  Crea una interfaz llamada UserSuccess que contenga:
//      Propiedad	Tipo
//      username	string

//  Crea otra interfaz llamada UserFailure que contenga:
//      Propiedad	Tipo
//      error	string

// 2. Crea un tipo llamado UserResult

//  Este tipo debe permitir cualquiera de las dos interfaces:
//  - UserSuccess
//  - UserFailure

// 3. Crea una función llamada processUserResult

//  La función debe recibir un parámetro de tipo UserResult y devolver void.
//  Utiliza el operador in para identificar cuál de las dos estructuras recibiste.

// Comportamiento esperado:
//  Si recibes un resultado exitoso:
//  {
//      username: "qa_masuel"
//  }

// Debe imprimir:
//  User: qa_masuel

//  Si recibes un resultado fallido:
//  {
//      error: "User not found"
//  }

//  Debe imprimir:
//  Request failed: User not found

interface UserSuccess {
    username: string
}

interface UserFailure {
    error: string
}

type UserResult =  UserSuccess | UserFailure;

function processUserResult(value: UserResult): void {
    if ("username" in value) {
        console.log(`User: ${value.username}`)
    } else {
        console.log(`Request failed: ${value.error}`)
    }
}

const firstUser: UserResult = {
    username: "qa_masuel"
}

const secondUser: UserResult = {
    error: "Error"
}

processUserResult(firstUser)
processUserResult(secondUser)

// Tu reto: no utilices any ni crees una interfaz que combine ambas propiedades como obligatorias.

// 🧪 Ejercicio E — Discriminated Union

// Objetivo: distinguir diferentes resultados utilizando una propiedad discriminadora.

// 1. Define un tipo llamado ApiResult

//  Debe permitir dos variantes.

//  Variante de éxito:
//  Propiedad	Tipo
//  status	    El valor literal "success"
//  data	    Un objeto con id: number y username: string

//  Variante de error:
//  Propiedad	Tipo
//  status	    El valor literal "error"
//  message	    string

// 2. Crea dos objetos

//  Uno debe representar una respuesta exitosa:

//  status: success
//  id: 1
//  username: qa_masuel

//  El otro debe representar un error:

//  status: error
//  message: API request failed

//  Ambos deben utilizar el tipo ApiResult.

// 3. Crea la función processApiResult

//  La función debe recibir un ApiResult y devolver void.

//  Su comportamiento será:

//      Cuando el estado sea "success", debe imprimir:
//      User: qa_masuel

//  Cuando el estado sea "error", debe imprimir:
//      API request failed

type ApiResult = 
| {
    status: "success",
    data: {
        id: number,
        username: string
    }
}
| {
    status: "error",
    message: string
}

const successfulResponse: ApiResult = {
    status: "success",
    data: {
        id: 1,
        username: "qa_masuel"
    }
}

const errorResponse: ApiResult = {
    status: "error",
    message: "API request failed"
}

function processApiResult(value: ApiResult): void {
    if (value.status === "success") {
        console.log(`User: ${value.data.username}`)
    }else{
        console.log(value.message)
    }
}

processApiResult(successfulResponse)
processApiResult(errorResponse)

// Tu reto: utiliza la propiedad status para distinguir los resultados. TypeScript debe reconocer qué propiedades puedes utilizar en cada caso sin necesitar any ni conversiones mediante as.

// 🧪 Ejercicio F — QA Automation: validación de email

// Objetivo: combinar interfaces, propiedades opcionales, null, undefined y funciones con retorno tipado.
// Este es el ejercicio más importante de los tres porque se relaciona directamente con el manejo de datos de API en tu futuro framework WorkforceQA.

// 1. Define una interfaz ApiUser

//  Debe contener:
//  Propiedad	Tipo
//  id	        number
//  username	string
//  email	    Propiedad opcional que permita string o null

// Recuerda: cuando email es opcional, puede no estar presente y su acceso puede producir undefined.

// 2. Crea tres usuarios de prueba

//  Utiliza estos escenarios:

//  Usuario	    Email
//  carlo	    "carlo@test.com"
//  alicia	    null
//  kiara	    Propiedad email omitida

// Los tres objetos deben cumplir la interfaz ApiUser.

// 3. Crea la función getDisplayEmail

//  Requisitos:
//  - Debe recibir un parámetro de tipo ApiUser.
//  - Debe devolver string.
//  - Si el email contiene una dirección, debe devolverla en mayúsculas.
//  - Si el email es null o undefined, debe devolver "No email available".

// 4. Prueba tu función con los tres usuarios

//  Las salidas esperadas son:
//      CARLO@TEST.COM
//      No email available
//      No email available

interface ApiUser {
    id: number,
    username: string,
    email?: string | null
}

const normalUser: ApiUser = {
    id: 1,
    username: "carlo",
    email: "carlo@test.com"
}

const nullEmailUser: ApiUser = {
    id: 2,
    username: "alicia",
    email: null
}

const omittedEmailUser: ApiUser = {
    id: 3,
    username: "kiara"
}

function getDisplayEmail(value: ApiUser): string {
    if (value.email != null) {
        return value.email.toUpperCase()
    }

    return "No email available"
}

console.log(getDisplayEmail(normalUser))
console.log(getDisplayEmail(nullEmailUser))
console.log(getDisplayEmail(omittedEmailUser))