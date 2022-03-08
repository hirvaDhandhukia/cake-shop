// this is a react-functional-component that  displays the number of cakes 
// so this is part of redux-state (num of cakes remaining changes after dispatching the buy cake each time)
// we will dispatch the buycake action from the button
import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of Cakes: {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

// below the state from the redux door is mapped to our component props
// so, apart from whatever props the cakeContatiner was recieving, it will now recieve an additional number of prop called numOfCakes which reflects the num of cakes in the reudx store
const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}
// similarly, the below function will `map` our dispatch of an action creator to a prop in our component 
// so our component now reciees a second additional prop called buyCake which will dispatch the buyCake action
const mapDispatchToProps = dispatch => {
  return {
    // this object dispatches the action-creator from redux
    buyCake: () => dispatch(buyCake())
  }
}
// we're gonna connect these 2 functions with our react component
// we're using the connect-higher-order component (or the connect function) from react-redux library
export default connect(
  mapStateToProps, mapDispatchToProps)(CakeContainer)