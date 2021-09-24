export default function Estilo(props){
return(
    <div style={{
        backgroundColor: props.numero >= 0 ? "#2D2": "#D22",
        textAlign: props.direita ? "right" : "left",
        color: props.color
        }}>
        <h1>Componente do estilo</h1>
    </div>
)
}