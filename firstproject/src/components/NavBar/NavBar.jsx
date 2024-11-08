import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Verduras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Frutas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"><CardWidget amount={2}/></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}