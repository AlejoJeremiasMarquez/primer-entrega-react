import "./ItemListContainer.css";

export default function ItemListContainer(props) {
    return (
        <>
            <h2 style={{display: "flex", justifyContent: 'center'}}>
                {props.greeting}
            </h2>
        </>
    )
}
