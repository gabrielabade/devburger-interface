import { useNavigate, useResolvedPath } from 'react-router-dom';

import { UserCircle, ShoppingCart } from '@phosphor-icons/react';

import {
  Container,
  HeaderLink,
  LinkContainer,
  Navigation,
  Options,
  Profile,
  Logout,
  Content,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();

  return (
    <div>
      <Container>
        <Content>
          <Navigation>
            <div>
              <HeaderLink to="/" $isActive={pathname === '/'}>
                Home
              </HeaderLink>
              <hr></hr>
              <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
                Cardápio
              </HeaderLink>
            </div>
          </Navigation>
          <Options>
            <Profile>
              <UserCircle color="#fff" size={24} />
              <div>
                <p>
                  Olá, <span>Birubs</span>
                </p>
                <Logout>Sair</Logout>
              </div>
            </Profile>
            <LinkContainer>
              <ShoppingCart color="#fff" size={24} />
              <HeaderLink>Carrinho</HeaderLink>
            </LinkContainer>
          </Options>
        </Content>
      </Container>
    </div>
  );
}
