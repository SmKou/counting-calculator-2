import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import counter from './counterSlice'
import styles from './ButtonElements'
import { NumberButton, ResetButton } from '../ButtonElements'

const display = { Count: 'count', Step: 'step' }

function CountingCalculator() { 
    const count = useSelector(counter.selectCount)
    const prev = useSelector(counter.selectPrevious)
    const step = useSelector(counter.selectStep)
    const dispatch = useDispatch()

    const [focus, setFocus] = useState(display.Count)
    const changeDisplay = (num) => {
        switch (focus) {
            case display.Count:
                const addValue = [count, num].join('')
                dispatch(counter.setCount(Number(addValue) || 0))
                break
            case display.Step:
                const addStep = [step, num].join('')
                dispatch(counter.setStep(Number(addStep) || 0))
                break
            default:
                console.log('Change display: No focus selected')
        }
    }

    const increment = () => {
        switch (focus) {
            case display.Count:
                dispatch(counter.stackPrevious(count))
                dispatch(counterincrementValue())
                break
            case display.Step:
                dispatch(counter.incrementStep())
                break
            default:
                console.log('Increment: No focus selected')
        }
    }

    const decrement = () => {
        switch (focus) {
            case display.Count:
                dispatch(counter.stackPrevious(count))
                dispatch(counter.decrementValue())
                break
            case display.Step:
                dispatch(counter.decrementStep())
                break
            default:
                console.log('Decrement: No focus selected')
        }
    }

    const remove = () => {
        const num = prev.length ? prev[prev.length - 1] : 0
        dispatch(counter.setCount(Number(num)))
        dispatch(unstackPrevious())
    }

    return <section>
        <nav>
            <Row>
                <DisplayButton aria-label='Select count' onClick={() => setFocus(display.Count)}>{count}</DisplayButton>
                <DisplayButton aria-label='Select step' onClick={() => setFocus(display.Step)}>{step}</DisplayButton>
            </Row>
            <Row>
                <ResetButton aria-label='Reset count to last value' onClick={remove}>Previous Count</ResetButton>
                <ResetButton aria-label='Reset count to zero' onClick={() => dispatch(counter.setCount(0))}>Reset Count</ResetButton>
                <ResetButton aria-label='Set step to zero' onClick={() => dispatch(counter.setStep(0))}>Reset Step</ResetButton>
            </Row>
            <Row>
                <NumberButton aria-label='One' onClick={() => changeDisplay(1)}>1</NumberButton>
                <NumberButton aria-label='Two' onClick={() => changeDisplay(2)}>2</NumberButton>
                <NumberButton aria-label='Three' onClick={() => changeDisplay(3)}>3</NumberButton>
                <NumberButton aria-label='Plus' onClick={increment}>+</NumberButton>
            </Row>
            <Row>
                <NumberButton aria-label='Four' onClick={() => changeDisplay(4)}></NumberButton>
                <NumberButton aria-label='Five' onClick={() => changeDisplay(5)}></NumberButton>
                <NumberButton aria-label='Six' onClick={() => changeDisplay(6)}></NumberButton>
                <NumberButton aria-label='' onClick={decrement}></NumberButton>
            </Row>
            <Row>
                <NumberButton aria-label='Seven' onClick={() => changeDisplay(7)}></NumberButton>
                <NumberButton aria-label='Eight' onClick={() => changeDisplay(8)}></NumberButton>
                <NumberButton aria-label='Nine' onClick={() => changeDisplay(9)}></NumberButton>
                <NumberButton aria-label='Zero' onClick={() => changeDisplay(0)}></NumberButton>
            </Row>
        </nav>
    </section>
}

export default CountingCalculator