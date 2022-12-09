



import styled from "styled-components"

// #A94DF3 cor roxa
// background-color: #EAEAEA; - CINZA

export const Card = styled.div`


    border: 1px solid #EAEAEA;
    border-radius: 8px;
    height: 400px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
        border-radius: 8px 8px 0 0;
        background-color: white;

        img{
            height: 180px;
            width: auto;
            max-width: 100%;

        }

    }

    div:last-child{
        height: 40%;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: white;



        span{
            font-size: 12px;
            width: 90%;
            text-align: center;
        }

        h3{
            font-size: 20px;
            color: blue;
        }

        button{
            background-color: #A94DF3;
            border-radius: 8px;
            color: white;
            width: 200px;
            height: 40px;
            border: none;
            font-weight: bold;
            transition: transform .3s;
        }

        button:hover{
            cursor: pointer;
            background-color: #AA7DFC;
            font-weight: light;
            transform: scale(1.1)
        }
    }

    /* :hover{
        border: #A94DF3 2px solid;
    } */
`
export const BoxCard = styled.div`
    display: flex;
    /* width: 100%; */
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 100px;

    /* background-color:  rgba(142, 89, 89, 0.292); */
    flex-wrap: wrap;
    `
export const Container = styled.div`
    width: 1145px;
    display: flex;
    background-color: rgba(255, 255, 255, 0);
    font-size: 1.3rem;
    flex-direction: row;
    justify-content: flex-end;
`
export const BoxLateral = styled.div`

    padding-left: 10px;
    display:flex;
    width: 17%;
    gap: 15px;
    font-size: 1.1rem;

    flex-direction: column;
    padding-top: 103px;
    margin: 10px;

    h2{
        color: white;
    }h3{
        color: white;
    }

    input{
        border: 1px gray solid;
        border-radius: 4px;
        height: 40px;
        padding-left: 8px;
        background-color: white;
    }

    input:active{
        border: 1px #A94DF3 solid; 
    }

`

export const Div = styled.div`
display:flex;
background: #ab47b6;
    height: 100vh;
    width: 100vw;
    border: 8px solid white;
    /* width: 100vh;  */
flex-direction: column;
align-items: center;
justify-content: space-between;           


`


export const BoxLateralCarrinho = styled.div`
    padding-left: 1138px;
    display:flex;
        width: 800px; 




    h2{
        color: blue;
    }

    button{
        background-color: #A94DF3;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        width: 100%;
        height: 40px;
        border: none;
        transition: transform .3s;
    }

    button:hover{
        /* cursor: pointer; */
        background-color: #AA7DFC;
        transform: scale(1.1);
    }

    div:hover{
        /* cursor: pointer; */
        color: orange;
    }

    span{
        font-size: 1.2rem;
        
        color: blue;
        display:flex;
    }
    h4{
        background-color: #AA7DFC;
    }

`

export const BoxCentral = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-center: center;
    justify-content: center;
    gap: 10px;
    padding: 0px 80px;
    flex-wrap: wrap;
    /* height: 100vw; */


    .boxcentral-topo{
        display: flex;
        align-items: flex-start;
        flex-direction: column-reverse;
        justify-content: space-between;
    }

    .boxcentral-topo-select{
        border-radius: 8px;
        margin-top: 30px;
    }

`