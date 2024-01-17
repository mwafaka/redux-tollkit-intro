import React from 'react'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount} from './counterSlice'
import { toggleDarkMode} from './darkModeSlice'

export function Counter() {
    const isDarkMode = useSelector((state:RootState) => state.darkMode.isDarkMode);
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{backgroundColor:isDarkMode ? 'lightblue' : 'lightgreen'}}>
         <button
          aria-label="Increment value"
          onClick={() => dispatch(toggleDarkMode())}
        >
           {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  )
}