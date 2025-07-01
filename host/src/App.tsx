import { lazy, Suspense } from 'react';

const Header = lazy(() => import('remoteHeader/Header'));

function App() {
  return (
    <>
      <Suspense fallback={<p>Carregando...</p>}>
        <Header />
      </Suspense>
    </>
  );
}

export default App;
