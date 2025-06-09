import type { IReduxAction } from '../../../state/interfaces';

import type { IState } from './interfaces';

const initialState: IState = {};

export const reducer = (state: IState = initialState, action: IReduxAction): IState => {
  switch (action.type) {
    default:
      return state;
  }
}
