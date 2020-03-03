import produce from 'immer';

export default function loading(state = { state: false, index: 0 }, action) {
  switch (action.type) {
    case '@loading/SET':
      return produce(state, draft => {
        draft.state = action.state;
        draft.index = action.index;
        return draft;
      });
    default:
      return state;
  }
}
