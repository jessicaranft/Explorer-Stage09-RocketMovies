import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { Container } from './styles';
import { Tag } from '../Tag';

export function Card() {
  return(
    <Container>
      <h2>Interestellar</h2>
      <div className='rate'>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
      </div>
      <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. 
        Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, 
        acredita que seu quarto está assombrado por um fantasma que tenta se...</p>
      <div>
        <Tag title="Ficção Científica" color={({ theme }) => theme.COLORS.BACKGROUND_700} />
        <Tag title="Drama" color={({ theme }) => theme.COLORS.BACKGROUND_700}/>
        <Tag title="Família" color={({ theme }) => theme.COLORS.BACKGROUND_700} />
      </div>
    </Container>
  );
}