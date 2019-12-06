import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      transforms: [immutableTransform()],
      key: 'officina5',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
      stateReconciler: hardSet,
    },
    reducers
  );

  return persistedReducer;
};
