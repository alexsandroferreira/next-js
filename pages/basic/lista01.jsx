/**
 * gerar uma lista de numeros até 10
 */
function geraLista(final = 10) {
    const lista = []
    for (let i = 1; i <= final; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista;
}
export default function lista() {
    return (
        <div>
            {geraLista(15)}
        </div>
    )
}