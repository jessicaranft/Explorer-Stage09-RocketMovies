import { Link } from 'react-router-dom';

import { Container, Brand, Profile } from './styles';
import { Input } from '../Input';

export function Header() {
  return(
    <Container>
      <Link to="/">
        <Brand to="/">RocketMovies</Brand>
      </Link>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>Jessica Ranft</strong>
          
          <a href="/">sair</a>
        </div>

        <img src="https://github.com/jessicaranft.png" alt="Foto do usuário" />
      </Profile>

    </Container>
  );
}