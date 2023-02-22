import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, HomeHeader } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';

export function Home() {
  return(
    <Container>
      <Header />

      <HomeHeader>
        <h1>Meus filmes</h1>
        
        <Link to="/create-movie">
          <Button title="Adicionar filme" icon={FiPlus} />
        </Link>
      </HomeHeader>

      <main>
        <Link to="/movie-preview/1">
          <Card />
        </Link>

        <Link to="/movie-preview/2">
          <Card />
        </Link>

        <Link to="/movie-preview/3">
          <Card />
        </Link>
      </main>
    </Container>
  );
}