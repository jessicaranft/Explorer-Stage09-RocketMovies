import { Container } from './styles';

export function Tag({ title, color, ...rest }) {
  return(
    <Container color={color} {...rest}>
      {title}
    </Container>
  );
}