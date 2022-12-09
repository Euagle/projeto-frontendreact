import "../../App.css";
import { BoxCentral, Card, BoxCard } from "../styles";
import { useState, useEffect } from "react";
import Filtro from "./Filtro/Filtro";
import imagem1 from "../../assets/img1.jpg";
import imagem2 from "../../assets/img2.png";
import imagem3 from "../../assets/img3.jpg";
import imagem4 from "../../assets/img4.jpg";
import imagem5 from "../../assets/img5.jpg";
import imagem6 from "../../assets/img6.jpg";
import imagem7 from "../../assets/img7.jpg";
import imagem8 from "../../assets/img8.jpg";
import imagem9 from "../../assets/img9.jpg";

function Home() {
  const produtos = [
    {
      id: 1,
      nome: "CAMISA O DONO DA LUA",
      preco: 99.99,
      imagem: imagem1,
    },
    {
      id: 2,
      nome: "CAMISA  ET GOOD-VIBES",
      preco: 87,
      imagem: imagem2,
    },
    {
      id: 3,
      nome: "CAMISA AVENTURA ESPACIAL",
      preco: 90,
      imagem: imagem3,
    },
    {
      id: 4,
      nome: "CAMISA RAVE ESPACIAL",
      preco: 105,
      imagem: imagem4,
    },
    {
      id: 5,
      nome: "CAMISA SELFIE DE MILHÕES",
      preco: 99.99,
      imagem: imagem5,
    },
    {
      id: 6,
      nome: "CAMISA ASTRONAUTA MOCHILEIRO",
      preco: 87,
      imagem: imagem6,
    },
    {
      id: 7,
      nome: "CAMISA REI DA GRAVIDADE",
      preco: 119,
      imagem: imagem7,
    },
    {
      id: 8,
      nome: "CAMISA ASTRONAUTA O CRIADOR",
      preco: 108,
      imagem: imagem8,
    },
    {
      id: 9,
      nome: "CAMISA VAZA ESPACIAL",
      preco: 79.99,
      imagem: imagem9,
    },
  ];

  const [carrinho, setCarrinho] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [valorMinimo, setValorMinimo] = useState("");
  const [valorMaximo, setValorMaximo] = useState("");
  const [ordem, setOrdem] = useState("");

  const onChangeCarrinho = (event) => {
    setCarrinho(event.target.value);
  };

  const onChangeOrdem = (event) => {
    setOrdem(event.target.value);
  };

  const compraProduto = (produto) => {
    const novoCarrinho = [...carrinho];
    const produtoAdicionado = produto;

    const produtoExistente = novoCarrinho.find((produto) => {
      return produto.id === produtoAdicionado.id;
    });
    if (produtoExistente) {
      produtoExistente.quantidade++;
      produtoExistente.precototal =
        produtoExistente.quantidade * produtoExistente.preco;
    } else {
      novoCarrinho.push({
        ...produtoAdicionado,
        quantidade: 1,
        precototal: produtoAdicionado.preco,
      });
    }
    setCarrinho(novoCarrinho);
  };

  useEffect(() => {
    if (carrinho.length > 0) {
      const listaStringCarrinho = JSON.stringify(carrinho);
      localStorage.setItem("carrinho", listaStringCarrinho);
    }
  }, [carrinho]);

  useEffect(() => {
    const novoCarrinho = JSON.parse(localStorage.getItem("carrinho"));
    if (novoCarrinho !== null) {
      setCarrinho(novoCarrinho);
    }
  }, []);

  const somaTela = (produtos) => {
    produtos
      .filter((produto) => {
        return produto.nome.includes(pesquisa);
      })
      .filter((produto) => {
        return produto.preco >= valorMinimo;
      })
      .filter((produto) => {
        return valorMaximo ? produto.preco <= valorMaximo : produto;
      })
      .map((produto, index) => {
        return produto.length;
      });
  };

  return (
    <>
      <Filtro
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        minimo={valorMinimo}
        setMinimo={setValorMinimo}
        maximo={valorMaximo}
        setMaximo={setValorMaximo}
      />
      <BoxCentral className="Main">
        <div className="boxcentral-topo">
          <div>
            <h3>Resultado da busca:</h3>
            <p>{produtos.length} produtos</p>
          </div>
          <div>
            <select
              value={ordem}
              onChange={onChangeOrdem}
              className="boxcentral-topo-select"
            >
              <option value="">Ordenar por preço</option>
              <option value="Maior">Maior para o menor</option>
              <option value="Menor">Menor para o maior</option>
            </select>
          </div>
        </div>
        <BoxCard>
          {produtos
            .filter((produto) => {
              return produto.nome.includes(pesquisa);
            })
            .filter((produto) => {
              return produto.preco >= valorMinimo;
            })
            .filter((produto) => {
              return valorMaximo ? produto.preco <= valorMaximo : produto;
            })
            .sort((a, b) => {
              switch (ordem) {
                case "Maior":
                  if (a.preco < b.preco) {
                    return 1;
                  } else {
                    return -1;
                  }
                case "Menor":
                  if (a.preco < b.preco) {
                    return -1;
                  } else {
                    return 1;
                  }
              }
            })
            .map((produto, index) => {
              return (
                <Card key={index}>
                  <div>
                    <img src={produto.imagem} alt="Produto-Loja" />
                  </div>
                  <div>
                    <span>{produto.nome}</span>
                    <br />

                    <h3>R$ {produto.preco}</h3>
                    <br />
                    <button
                      onClick={() => compraProduto(produto)}
                      onChange={onChangeCarrinho}
                    >
                      Comprar
                    </button>
                  </div>
                </Card>
              );
            })}
        </BoxCard>
      </BoxCentral>
    </>
  );
}

export default Home;
