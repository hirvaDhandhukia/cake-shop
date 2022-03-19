// here in the jsx, we need 2 things: a tag that indicates num-of-cakes and a button to dispatch the `buyCake` action
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    // here we have accessed the numOfCakes in the redux-state and stored it in a var called numOfCakes that belongs to our react component
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer