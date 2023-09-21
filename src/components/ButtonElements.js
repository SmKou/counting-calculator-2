import styled from 'styled-components'

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const DisplayButton = styled.button`
    position: relative;
    width: 50%;
    border: 1px solid beige;
    outline: 0;
    padding: 12px 0;
    padding-right: 12px;
    color: white;
    background: transparent;
    font-size: 30px;
    text-align: right;
    cursor: pointer;
    &.active {
        background: linear-gradient(45deg, #3494E6, #EC6EAD);
    }
`

export const ResetButton = styled.button`
    width: 100%;
    padding: 12px 0;
    outline: 0;
    border: 1px solid beige;
    background: darkred;
    color: white;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    &:hover {
        background: linear-gradient(45deg, #F3904F, #3B4371);
    }
`

const Button = styled.button`
    width: 25%;
    padding: 12px 0;
    border: 1px solid beige;
    outline: 0;
    color: white;
    background: transparent;
    font-size: 24px;
    line-height: 1;
    text-align: center;
    cursor: pointer
`

export const NumberButton = styled(Button)`
    &:hover {
        background: linear-gradient(45deg, #4ca1af, #c4e0e5);
    }
`
export const OperatorButton = styled(Button)`
    &:hover {
        background: linear-gradient(45deg, #f96, #ff5ed2);
    }
`

export default {
    Row,
    DisplayButton,
    ResetButton,
    NumberButton,
    OperatorButton
}