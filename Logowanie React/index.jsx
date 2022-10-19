class User{
    constructor(name,pass,email,mark){
        this.name = name,
        this.pass = pass,
        this.email = email,
        this.mark = mark
    }
}

const users = new Array()

function newUser(){
    let name = document.getElementById("name").value
    let pass = document.getElementById("pass").value
    let email = document.getElementById("email").value
    let mark = document.getElementById("mark").checked

    if(name.length < 5 || pass == "" || email == "") return alert("Wypełnij wszystkie pola")
    if(!email.includes("@")) return alert("zły email")
    let kontoIstnieje = false
    users.forEach((user) => {
        if (user.name == name || user.email == email) return kontoIstnieje = true;
    })
    if(kontoIstnieje) return alert("Konto istnieje")
    let user = new User(name,pass,email,mark)
    users.push(user)
    console.log(users)
}

function logIn(){
    let name = document.getElementById("name").value
    let pass = document.getElementById("pass").value
    let zalogowano = false
    users.forEach((user) => {
        if (user.name == name){
            if(user.pass == pass) return zalogowano = true;
        }
    })
    return (zalogowano) ? alert(`Zalogowano, witaj ${name}`) : alert("Błędna nazwa lub hasło")
}

function Logowanie(){
    return (
        <form>
            <h1>Logowanie</h1>
            <input id="name" type="text" placeholder="Nazwa"/><br/>
            <input id="pass" type="password" placeholder="Hasło"/><br/>
            <input type="button" onClick={logIn} value="Login"/>
        </form>
    )
}

function Rejestracja(){
    return (
    <form>
        <h1>Rejestracja</h1>
        <input id="name" type="text" placeholder="Nazwa"/><br/>
        <input id="pass" type="password" placeholder="Hasło"/><br/>
        <input id="email" type="text" placeholder="E-Mail"/><br/>
        <input id="mark" type="checkbox"/> "Zgoda marketingowa"<br/>
        <input type="button" onClick={newUser} value="Signup"/>
    </form>
    )
}

function Form(prop){

    let form = (prop.login) ? <Logowanie/> : <Rejestracja/>
    
    return (
        <>
            <div class="header">
                <div class="headerTitle">Logowanie</div>
                <div class="headerRight" onClick={logowanie}>Signin</div>
                <div class="headerRight" onClick={rejestracja}>Signup</div>
            </div>
            <div class="middle">
                {form}
            </div>
        </>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<Form login={true}/>);

function logowanie(){
    console.log("logowanie")
    root.render(<Form login={true}/>);
}
function rejestracja(){
    console.log("rejestracja")
    root.render(<Form login={false}/>);
}
