import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import createRouter from './routes';
import SignIn from './pages/Auth/SignIn';
import NavigationService from './services/navigation';

// import { Container } from './styles';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const Routes = createRouter(signed);

  function registerService(ref) {
    NavigationService.setTopLevelNavigator(ref);
  }

  return <Routes ref={registerService} />;
}
