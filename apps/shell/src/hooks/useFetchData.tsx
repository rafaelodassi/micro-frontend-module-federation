import { useEffect, useState } from 'react';

import { api } from '../services/config';

interface UseFetchData {
  url: string;
}

function useFetchData<T>({ url }: UseFetchData) {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await api.get<T>(url);
        setData(response);
      } catch (error) {
        setError(!!error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export { useFetchData };
