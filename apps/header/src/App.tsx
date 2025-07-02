import { StoreProvider } from 'context';
import Header from './components/Header';

const App = () => {
  return (
    <StoreProvider>
      <Header />
    </StoreProvider>
  );
};

export default App;
