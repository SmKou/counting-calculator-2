import CountingCalculator from './components/Counter/CountingCalculator'
import './App.css'

function App() {
    return <>
        <header>
            <h1>Counting Calculator</h1>
        </header>
        <main>
            <aside>
                <h3>How to Use:</h3>
                <p>Select either the display for the count (left) or step (right) to affect change. Count is the current total, while step is the difference to be added or subtracted. By default, the display for count is selected.</p>
                <p>When you press the + (increment) or - (decrement) keys, the count will be added to or subtracted from by the step, while the step would be added to or subtracted from by 1. Decrementing is not possible when either is 0.</p>
                <p>The values of either the count or step can be changed using the number keys. However, if you want to change the step, you will first need to zero it, otherwise you will be appending to the value rather than replacing.</p>
            </aside>
            <CountingCalculator />
        </main>
    </>
}

export default App
