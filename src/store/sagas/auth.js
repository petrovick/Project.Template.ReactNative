import { call, put, select } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '../../services/api';
import AuthActions from '../ducks/auth';
// import TeamsActions from '../ducks/teams';
import NavigationService from '../../services/navigation';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@Oficina5:token');
  console.tron.log(token);
  if (token) yield put(AuthActions.signInSuccess(token));

  // if (team) {
  //  yield put(TeamsActions.selectTeam(JSON.parse(team)));
  // }
  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({ email, password }) {
  try {
    console.tron.log('Entrou aqui');
    console.tron.log(email);

    const { data } = yield call(api.post, 'sessions', { email, password });
    console.tron.log('response aqui');

    const { token } = data;

    yield call([AsyncStorage, 'setItem'], '@Oficina5:token', token);
    yield put(AuthActions.signInSuccess(token));

    NavigationService.navigate('App');
  } catch (err) {
    console.tron.error(`Erro, ${err}`);
    yield put(ToastActionsCreators.displayError('Credenciais invalidas.'));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);

  // yield put(push("/signin"));
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, 'users', { name, email, password });
    yield call([AsyncStorage, 'setItem'], '@Omni:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    // yield put(push("/"));
  } catch (err) {
    console.tron.log(`Erro, ${err}`);
  }
}
