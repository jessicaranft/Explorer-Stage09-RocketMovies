import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Form, Avatar } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/jessicaranft.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input type="text "placeholder="Seu nome" icon={FiUser} />

        <Input type="email "placeholder="Seu email" icon={FiMail} />

        <Input type="password "placeholder="Senha atual" icon={FiLock} />

        <Input type="password "placeholder="Nova senha" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}