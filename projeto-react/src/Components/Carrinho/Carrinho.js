import { BoxLateralCarrinho, Div } from "../styles";

function Carrinho(props) {
  let totalCarrinho = 0;

  const somaCarrinho = () => {
    for (let i = 0; i < props.cesta.length; i++) {
      totalCarrinho += props.cesta[i].precototal;
    }
    return;
  };
  

  const removeItem = (produto) => {
    const buscaItem = props.cesta.filter((item) => item !== produto);
    props.setCesta(buscaItem);
  };

  somaCarrinho();

  return (
    <BoxLateralCarrinho>
      <Div>
        <h2>Minha sacola</h2>

        {props.cesta.map((produto, index) => {
          return (
            <div key={index} >
              <p>
                <span onDoubleClick={() => removeItem(produto)}>Quantidade: {produto.quantidade} </span>
                <span onDoubleClick={() => removeItem(produto)}>{produto.nome} </span>
                <span>
                  {" "}
                  <b>{produto.precototal.toFixed(2)}</b>
                </span>
              </p>
            </div>
          );
        })}

        <h4>
          <span>
            <b>Valor total: R$ {totalCarrinho.toFixed(2)}</b>
          </span>
        </h4>
      </Div>
    </BoxLateralCarrinho>
  );
}

export default Carrinho;
