import Container from '@/Container';
import { Breadcrumbs } from './index';

export default {
  title: 'components/GameListing/Breadcrumbs',
  component: Breadcrumbs,
};

export const Index = () => (
  <Container>
    <Breadcrumbs
      breadcrumbs={[
        { title: 'Home', path: '/' },
        { title: 'Game', path: '/game' },
      ]}
    />
  </Container>
);
