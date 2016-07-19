import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';

const initialState = {
  todos: []
}

const store = createStore(rootReducer, initialState, compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
)

export default store;