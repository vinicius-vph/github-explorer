import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;
    margin-top: 20px;
`;

export const Paragraph = styled.p`
    font-size: 12px;
    font-style: oblique;
    color: #005cc5;
    line-height: 20px;
    margin-top: 15px;
    margin-bottom: 10px;
`;


export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input { 
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => props.hasError && css `
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s; 

        &:hover {
            background: ${shade(0.2,'#04d361')}
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%
`;

export const Repositories = styled.div`
    display: flex;
    align-items: center; 
    justify-content: left; 
    margin-top: 20px;
    max-width: 70%;

     a {
         width: 90%;   
         background: #fff;
         border-radius: 5px;
         padding: 24px;
         display: block;
         text-decoration: none;
         margin-right: 20px;

         display: flex;
         align-items: center;
         transition: transform 0.2s; 

         &:hover {
            transform: translateX(10px)
            }
        
        & + a {
            margin-top: 16px;
        }
        
            img {
                width: 12.5%;
                height: 64px;
                border-radius: 50px;
            }

            div {
                margin: 0 16px;
                flex: 1;
                width: 60%;

                strong {
                    font-size: 20px;
                    color: #3d3d4d;
                }

                p {
                    font-size: 18px;
                    color: #A8A8B3;
                    margin-top: 4px;
                }
            }
        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
        
        svg :first-child {
            &:hover {
                transform: translateX(10px)
                }
        }
        
     }
`;
