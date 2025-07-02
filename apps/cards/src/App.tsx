import { StoreProvider } from 'context';
import Cards from './components/Cards';

const App = () => {
  return (
    <StoreProvider>
      <Cards data={[]} />
    </StoreProvider>
  );
};

export default App;
