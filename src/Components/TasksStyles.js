import styled from "styled-components";

export const BigDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2{
      color: white;
  }
`

export const Div = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 90%;
    box-sizing: border-box;
    padding: .2rem 4rem;
    color: #C13584;
    border: .5px solid white;

    div > button{
        padding: .4rem;
        border-radius: .5rem;
        border: none;
        margin-top: .7rem;
        width: 100%;
        background-color: #C13584;
        color: white;

        :hover{
            background: rgb(193, 53, 132, .6);
            cursor: pointer;
        }
    }

    p{
        color: white;
    }

    div > input[type="checkbox"]{
        width: 1.3em;
        height: 1.3em;
        background-color: white;
        border-radius: 50%;
        vertical-align: middle;
        border: .2px solid #ddd;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;

        :checked{
            background-color: #C13584;
        }
    }
`