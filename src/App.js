import React from 'react';
import { useSelector } from 'react-redux';
import createRouter from './routes';
import NavigationService from './services/navigation';

// import { Container } from './styles';

export default function App() {
  const signed = useSelector(state => state.auth.signedIn);
  console.tron.log(`SIGNED: ${signed}`);
  const Routes = createRouter(signed);

  function registerService(ref) {
    NavigationService.setTopLevelNavigator(ref);
  }

  return <Routes ref={registerService} />;
}
