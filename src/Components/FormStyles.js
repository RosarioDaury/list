import styled from "styled-components";

export const FormStyles = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 2rem;
    background: linear-gradient(rgb(28, 29, 37, 0.8), rgb(28, 29, 37, 0.8)), url(https://res.cloudinary.com/practicaldev/image/fetch/s--dZda9Apl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/ih809fphbnslllg4rfnh.JPG);

    input[type="submit"] {
        margin-top: 1rem;
        width: 15%;
        border-radius: 15px;
        border: 1px solid #C13584;
        padding: .8rem;
        color: white;
        background-color: rgb(47, 47, 47);


        :hover{
            cursor: pointer;
            animation: pulsate 3s ease-in-out;
        }

        @keyframes pulsate{
            0%{
                box-shadow: 0 0 25px #C13584;
            }
        }

        
    }


    div{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: auto;
        padding: .6rem;

        span{
            width: 30%;
            font-size: 1rem;
            color: white; 
            margin-bottom: .5rem;
        }

        input{
            width: 100%;
            border-radius: 5px;
            padding: .3rem;
            border: none;
        }
    }
    
`