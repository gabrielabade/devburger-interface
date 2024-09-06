import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

import { api } from '../../services/api';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      setCategories(data);
      console.log(data);
    }
    loadCategories();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breackpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    Desktop: {
      breackpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breackpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breackpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  return (
    <Container>
      <Title>Categorias</Title>
      <Carousel>
        <ContainerItems></ContainerItems>
      </Carousel>
    </Container>
  );
}
