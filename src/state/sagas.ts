import {
    fork,
  } from 'redux-saga/effects';
  
  import type { ISaga } from './interfaces';
  
  const sagas: ISaga[] = [];
  
  export default function * root() {
    for (const saga of sagas) {
      yield fork(saga);
    }
  }
  