import { lazy, Suspense, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StoreProvider } from 'context';
import { Banner } from './components/Banner';
import { Category } from './components/Category';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Products } from './components/Products';
import { LoadingHeader } from './components/LoadingHeader';
import { LoadingFooter } from './components/LoadingFooter';
import { useFetchData } from './hooks/useFetchData';
import type { ResponseProducts } from './services/types';

const Header = lazy(() => import('remoteHeader/Header'));
const Footer = lazy(() => import('remoteFooter/Footer'));

function App() {
  const { data, error, loading } = useFetchData<ResponseProducts>({
    url: 'products',
  });

  const products = useMemo(() => data.products ?? [], [data]);

  const categories = Array.from(
    new Map(
      products.map((item) => [
        item.category,
        { id: uuidv4(), name: item.category, thumbnail: item.thumbnail },
      ])
    ).values()
  );

  return (
    <StoreProvider>
      <Suspense fallback={<LoadingHeader />}>
        <Header />
      </Suspense>
      <Banner />
      <Category data={categories} error={error} loading={loading} />
      <FeaturedProducts />
      <Products data={products} error={error} loading={loading} />
      <Suspense fallback={<LoadingFooter />}>
        <Footer />
      </Suspense>
    </StoreProvider>
  );
}

export default App;
