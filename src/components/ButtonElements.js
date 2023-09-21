import styled from 'styled-components'

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const DisplayButton = styled.button`
    position: relative;
    width: 50%;
    height: 48px;
    border: 1px solid beige;
    outline: 0;
    padding-bottom: 6px;
    color: #111;
    background: #F4E2D8;
    font-size: 30px;
    text-align: right;
    cursor: pointer;
    .active {
        background: #ba537060, #f4e2d8;
    }
`

export const ResetButton = styled.button`
    :hover {}
`

const Button = styled.button`
    width: 25%;
    height: 36px;
    border: 0;
    outline: 0;
    font-size: 24px;
    line-height: 1;
    text-align: center;
    cursor: pointer
`

export const NumberButton = styled(Button)``
export const OperatorButton = styled(Button)``

export default {
    Row,
    DisplayButton,
    ResetButton,
    NumberButton,
    OperatorButton
}