import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    setCount,
    setStep,
    stackPrevious,
    unstackPrevious,
    incrementValue,
    decrementValue,
    incrementStep,
    decrementStep,
    selectCount,
    selectPrevious,
    selectStep
} from './counterSlice'
import {
    Row,
    DisplayButton,
    ResetButton,
    NumberButton,
    OperatorButton
} from '../ButtonElements'

const display = { Count: 'count', Step: 'step' }

function CountingCalculator() { 
    const count = useSelector(selectCount)
    const prev = useSelector(selectPrevious)
    const step = useSelector(selectStep)
    const dispatch = useDispatch()

    const [focus, setFocus] = useState(display.Count)
    const [countValue, setCountValue] = useState(0);
    const updateCount = () => setCountValue(count)
    const [stepValue, setStepValue] = useState(1);
    const updateStep = () => setStepValue(step)

    const changeDisplay = (num) => {
        switch (focus) {
            case display.Count:
                const addValue = [count, num].join('')
                dispatch(setCount(Number(addValue) || 0))
                updateCount()
                break
            case display.Step:
                const addStep = [step, num].join('')
                dispatch(setStep(Number(addStep) || 0))
                updateStep()
                break
            default:
                console.log('Change display: No focus selected')
        }
    }

    const increment = () => {
        switch (focus) {
            case display.Count:
                dispatch(stackPrevious(count))
                dispatch(incrementValue())
                updateCount()
                break
            case display.Step:
                dispatch(incrementStep())
                updateStep()
                break
            default:
                console.log('Increment: No focus selected')
        }
    }

    const decrement = () => {
        switch (focus) {
            case display.Count:
                dispatch(stackPrevious(count))
                dispatch(decrementValue())
                updateCount()
                break
            case display.Step:
                dispatch(decrementStep())
                updateStep()
                break
            default:
                console.log('Decrement: No focus selected')
        }
    }

    const remove = () => {
        const num = prev.length ? prev[prev.length - 1] : 0
        dispatch(setCount(Number(num)))
        dispatch(unstackPrevious())
        updateCount()
    }

    return <section>
        <nav>
            <Row>
                <DisplayButton
                    className={focus === display.Count ? 'active' : ''}
                    aria-label={`Current count: ${countValue}. Select count.`}
                    onClick={() => setFocus(display.Count)}>
                    {count}
                </DisplayButton>
                <DisplayButton
                    className={focus === display.Step ? 'active' : ''}
                    aria-label={`Current step: ${stepValue}. Select step.`}
                    onClick={() => setFocus(display.Step)}>
                    {step}
                </DisplayButton>
            </Row>
            <Row>
                <ResetButton aria-label='Reset count to last value' onClick={remove}>Previous Count</ResetButton>
                <ResetButton aria-label='Reset count to zero' onClick={() => dispatch(setCount(0))}>Reset Count</ResetButton>
                <ResetButton aria-label='Set step to zero' onClick={() => dispatch(setStep(0))}>Reset Step</ResetButton>
            </Row>
            <Row>
                <NumberButton aria-label='One' onClick={() => changeDisplay(1)}>1</NumberButton>
                <NumberButton aria-label='Two' onClick={() => changeDisplay(2)}>2</NumberButton>
                <NumberButton aria-label='Three' onClick={() => changeDisplay(3)}>3</NumberButton>
                <OperatorButton aria-label='Plus' onClick={increment}>+</OperatorButton>
            </Row>
            <Row>
                <NumberButton aria-label='Four' onClick={() => changeDisplay(4)}>4</NumberButton>
                <NumberButton aria-label='Five' onClick={() => changeDisplay(5)}>5</NumberButton>
                <NumberButton aria-label='Six' onClick={() => changeDisplay(6)}>6</NumberButton>
                <OperatorButton aria-label='' onClick={decrement}>-</OperatorButton>
            </Row>
            <Row>
                <NumberButton aria-label='Seven' onClick={() => changeDisplay(7)}>7</NumberButton>
                <NumberButton aria-label='Eight' onClick={() => changeDisplay(8)}>8</NumberButton>
                <NumberButton aria-label='Nine' onClick={() => changeDisplay(9)}>9</NumberButton>
                <NumberButton aria-label='Zero' onClick={() => changeDisplay(0)}>0</NumberButton>
            </Row>
        </nav>
    </section>
}

export default CountingCalculator