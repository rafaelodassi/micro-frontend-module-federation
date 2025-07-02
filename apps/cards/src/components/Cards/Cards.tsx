import { useStore } from 'context';

const Cards = () => {
  const { viewMode } = useStore();

  return <div>Nome: {viewMode}</div>;
};

export default Cards;
