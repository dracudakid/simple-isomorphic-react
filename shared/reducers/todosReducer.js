// reducer (state, action) => state

export default function todos(state=[], action){
  console.log(state, action);
  switch(action.type){
  case 'ADD_TODO':
    return [...state, { id: Date.now(), text: action.text }];
  default:
    return state;
  }
}