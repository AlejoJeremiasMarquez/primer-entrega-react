import "./CardWidget.css";

function CardWidget({amount}) {
    return (
        <a className="nav-link">
            <i className="fa fa-shopping-cart"></i>
            <span className="badge text-bg-success">{amount}</span>
        </a>
    )
}

export default CardWidget