import styled from 'styled-components'

export const DisplayButton = styled.button`
    .active {}
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
    DisplayButton,
    ResetButton,
    NumberButton,
    OperatorButton
}