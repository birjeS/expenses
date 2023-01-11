import './Card.css'

function Card() {
    const classes = 'card' + props.className
    return (
        <div className="card">{props.children}</div>
    )
}
export default Card