import { Link } from 'react-router-dom';

import { Container, Navigation, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { TagItem } from '../../components/TagItem';

export function CreateMovie() {
  return(
    <Container>
      <Header />

      <Navigation>
        <Link to="/">
          <ButtonText title="Voltar" />
        </Link>
      </Navigation>

      <main>
        <Form>
          <header>
            <h1>Novo filme</h1>
          </header>

          <div className="col-2">
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <h2>Marcadores</h2>
          <div className="tags">
            <TagItem value="Ficção" />
            <TagItem placeholder="Novo marcador" isNew />
          </div>

          <div className="col-2">
            <Button title="Excluir filme" inverted />
            <Button title="Salvar alterações" />
          </div>


        </Form>
      </main>
    </Container>
  );
}