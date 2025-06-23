import Container from '@/Container';
import { Letter } from './Letter';

export default {
  title: 'Games/PlaceTheLetters/Letter',
  component: Letter,
};

export const DraggableA = () => (
  <Container>
    <Letter value="A" draggable={{ position: { x: 100, y: 100 } }} />
  </Container>
);

export const NonDraggableA = () => (
  <Container>
    <Letter value="A" />
  </Container>
);
