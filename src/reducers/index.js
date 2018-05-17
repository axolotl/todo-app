import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          todo: action.todo,
        }
      ]
    case 'REMOVE_TODO':
      const newState = [];
      state.map((todo) => {
        if (todo.id != action.id) {
          newState.push(todo);
        }
      })
      return newState
    default:
      return state
  }
}

const Store = combineReducers({
  todos,
  form: formReducer.plugin({
    input: (state, action) => {
      switch (action.type) {
        case 'ADD_TODO':
          return undefined;
        default:
          return state;
      }
    }
  }),
});

export default Store