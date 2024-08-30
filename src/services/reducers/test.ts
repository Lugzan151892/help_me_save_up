const initialState = {
  user: null,
  testData: 'test'
}

export const testReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'user':
      return { ...state, user: 'Denis' }
    case 'test':
      return { ...state, testData: 'changed test' }
    default:
      return state;
  }
}