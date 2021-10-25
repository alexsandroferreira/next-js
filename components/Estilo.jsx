export default function Estilo(props){
const valor = props.numero >= 0 ? "azul": "vermelho"
    return(
    <div style={{
        backgroundColor: props.numero >= 0 ? "#2D2": "#D22",
        textAlign: props.direita ? "right" : "left",
        color: props.color
        }}>
        <h1>Componente do estilo</h1>
        <h2 className={valor}>Texto 2#</h2>
    </div>
    
)
}