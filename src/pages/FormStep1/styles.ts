import styled from "styled-components";

export const Container = styled.div`
     p {
        font-size: 13px;
        color: #000000;
    }
    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #000000;
        margin: 30px 0;
    }
    label {
        font-size: 13px;
        input {
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #000000;
            border-radius: 10px;
            color: #000000;
            outline: 0;
            font-size: 15px;
            background-color: #ffffff;
        }
    }
    button {
        background-color: #000000;
        color: #ffff;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
`;