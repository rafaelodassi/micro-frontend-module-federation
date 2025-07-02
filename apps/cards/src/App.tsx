import { StoreProvider } from 'context';
import Cards from './components/Cards';

const App = () => {
  return (
    <StoreProvider>
      <Cards />
    </StoreProvider>
  );
};

export default App;
