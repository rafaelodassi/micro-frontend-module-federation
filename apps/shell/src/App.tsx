import { lazy, Suspense } from 'react';

import { StoreProvider } from 'context';
import { Banner } from './components/Banner';
import { Category } from './components/Category';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Products } from './components/Products';

const Header = lazy(() => import('remoteHeader/Header'));
const Footer = lazy(() => import('remoteFooter/Footer'));

function App() {
  return (
    <StoreProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <Header />
      </Suspense>
      <Banner />
      <Category />
      <FeaturedProducts />
      <Products />
      <Suspense fallback={<p>Carregando...</p>}>
        <Footer />
      </Suspense>
    </StoreProvider>
  );
}

export default App;
