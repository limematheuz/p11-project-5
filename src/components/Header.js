import "./Header.css"
import Logo from "./Logo";

function Header() {
    return (
        <header>
            <div>
            <Logo/>
            <input className="inputHeader" placeholder="Busca producto, deporte..."></input>
            </div>
            <nav className="navigatorBar">
                <a>Deportes</a>
                <a>Hombre</a>
                <a>Mujer</a>
                <a>Infantil</a>
                <a>Equipamiento</a>
                <a>Nutrición</a>
                <a>Descuentos</a>
            </nav>
        </header>
    )
}


export default Header;