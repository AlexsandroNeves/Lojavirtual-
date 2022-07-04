
import '../ordernarProduto/ordernarProduto.css'

const OrdenarProduto = () => {
    return (
        <>
            <div className="container--ordenar teste" >
                <span className='ordernar-option' >Ordenar por</span>
                <select className="div--select">
                    <option value="selecione-opcao"> Selecione opção</option>
                    <option value="maior-preco" > Maior Preço</option>
                    <option value="menor-preco">Menor Preco</option>
                </select>
            </div>
        </>
    )
}
export default OrdenarProduto;