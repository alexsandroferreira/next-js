import Titulo from "../../components/Titulo"
export default function UsingTitle() {
    return (
        <div>
            <Titulo principal="Faça seu login"
                secundario="senha do user" 
            />
            <Titulo principal="Atualizando cadastro"
                secundario="digite a nova senha" 
                pequeno
            />
            <Titulo
            secundario="nova senha"
            />

        </div>
    )
}