## how it all works : 

1. First is the mapStateToProps. when you want to access the redux state in your component, you define this function.
> It get's the Redux-state as a param which can be used to retrieve the appropriate state properties.

> in our case we map the state.numOfCakes to a prop called numOfCakes which will then render in the JSX a props.numOfCakes

2. similarly for dispatching actions, we used mapDispatchToProps functn. 
> It get's the dispatch method as a param and allows us to map action-creator to props in our component

> in our case we mapped dispatching-buyCake to a prop called buyCake which will allow us to call props.buyCake in the JSX button

3. we need to connect both of these function with a `connect-function` which is used to connect a react-component to the redux-store

## react-hooks :
they gives a functional component the ability to use local-component-state, execute side-effects and more 
> so the react offers a set of Hook APIs as an alternative to the existing connect-higher-order component. They allows us to Subscribe to the store and dispatch actions without having to wrap your component in connect()

### `useSelector Hook`
useSelector is a hook that react-redux library provides which acts as a close equivalent to the map state to props function. 
So to get hold of any state that is maintained in the redux-store, we use this hook

### `useDispatch Hook`
useDispatch hook is used to dispatch an action with react-redux