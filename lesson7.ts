// Ejercicio A — Clase TestAccount

// Crea una clase llamada TestAccount con estas propiedades:

// Propiedad	Tipo	Requisito
// id	        number	readonly
// username	    string	public
// password	    string	private
// active	    boolean	public

// Requisitos:

// 1. Inicializa todas las propiedades mediante el constructor.
// 2. Crea un método getUsername() que devuelva el username.
// 3. Crea un método isActive() que devuelva un boolean.
// 4. Crea una instancia y prueba ambos métodos.
// 5. Comprueba conceptualmente qué sucedería si intentaras modificar id o acceder a password directamente desde fuera de la clase.

// No necesitas incluir en el programa las instrucciones que sabes que causan errores de compilación.

class TestAccount {
    public readonly id: number;
    public username: string;
    private password: string;
    public active: boolean;

    constructor(id: number, username: string, password: string, active: boolean){
        this.id = id;
        this.username = username;
        this.password = password;
        this.active = active;
    }

    getUsername(): string {
        return this.username;
    }

    isActive(): boolean {
        return this.active;
    }
}

let testAccount = new TestAccount(1, "laura", "laura123", false)
console.log(`Username: ${testAccount.getUsername()}`);
console.log(`Active: ${testAccount.isActive()}`);

// Ejercicio B — Clase TestUser con métodos

// Crea una clase llamada TestUser que reciba username y active a través de su constructor.

// Implementa estos métodos:

// getSummary(): string
// deactivate(): void

// getSummary() debe devolver un mensaje similar a:

// User: carlo, active: true

// deactivate() debe cambiar el estado de active a false.

// Crea una instancia activa, imprime su resumen, desactívala e imprime el resumen nuevamente.

class TestUser {
    public username: string;
    public active: boolean;

    constructor(username: string, active: boolean) {
        this.username = username;
        this.active = active;
    }

    getSummary(): string {
        return `User: ${this.username}, active: ${this.active}`;
    }

    deactivate(): void {
        this.active = false;
    }
}

const user = new TestUser("carlo", true);

console.log(user.getSummary());
user.deactivate();
console.log(user.getSummary());

// Ejercicio C — Herencia

// Crea una clase BasePage que tenga una propiedad protected readonly baseUrl: string, inicializada mediante su constructor.
// Después, crea una clase DashboardPage que extienda BasePage.

// Requisitos:

// 1. Utiliza super() en el constructor de DashboardPage.
// 2. Implementa un método getPath(): string.
// 3. El método debe devolver la URL base seguida de /dashboard.

// Ejemplo esperado:

// https://example.com/dashboard

// No utilices variables globales para almacenar la URL: debe proceder de la instancia creada.

class BasePage {
    constructor(
        protected readonly baseUrl: string
    ){}
}

class DashboardPage extends BasePage {
    constructor(baseUrl: string){
        super(baseUrl)
    }

    getPath(): string {
        return `${this.baseUrl}/dashboard`
    }
}

const dashboardPage = new DashboardPage("https://example.com")

console.log(`Dashboard Page Url: ${dashboardPage.getPath()}`)

// Ejercicio D — Interfaces e implements

// Define la siguiente interfaz:

// interface NavigablePage {
//     pageName: string;
//     getPath(): string;
// }

// Después crea una clase LoginPage que implemente NavigablePage.

// Debe tener:

// pageName → "Login"
// getPath() → devuelve la URL base seguida de /login

// Usa el constructor para recibir la URL base.

// El objetivo es que TypeScript compruebe que la clase cumple el contrato de la interfaz.

interface NavigablePage {
    pageName: string;
    getPath(): string;
}

class LoginPage extends BasePage implements NavigablePage {
    pageName: string = "Login";

    constructor(baseUrl: string){
        super(baseUrl);
    }

    getPath(): string {
        return `${this.baseUrl}/login`;
    }
}

const loginPage = new LoginPage("https://example.com");

console.log(`${loginPage.pageName} Page Url: ${loginPage.getPath()}`)

// 🔥 Bonus — Mentalidad de framework developer

// Integra tus conceptos en un diseño con estas tres clases:

// BasePage
// ├── LoginPage
// └── DashboardPage

// BasePage debe centralizar baseUrl, mientras que cada clase hija debe implementar su propia ruta.

// Crea una instancia de ambas páginas y muestra sus URLs. No dupliques la propiedad baseUrl ni el código para almacenarla en las clases hijas.

// RESPUESTA: Ya esto lo implementé en los ejemplos anteriores