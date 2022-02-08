
function Evento(){

    function meuEvento(){
        console.log("Opa, fui ativado!!")
    }

    return (
        <>
        <p> Clique para desparar um evento</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento