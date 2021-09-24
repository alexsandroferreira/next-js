import Estilo from "../../components/Estilo";

export default function usandoEstilo() {
    return  <div>
        <Estilo numero={2} color="#FFF"/>
        <Estilo direita/>
        <Estilo numero={-1}/>
    </div>
}