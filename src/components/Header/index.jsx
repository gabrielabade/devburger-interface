import { UserCircle, ShoppingCard } from 'phosphor-icons/react ';

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
  return (
    <div>
      <Container>
        <Content>
          <Navigation>
            <div>
              <HeaderLink>Home</HeaderLink>
              <HeaderLink>Cardápio</HeaderLink>
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
              <ShoppingCard color="#fff" size={24} />
              <HeaderLink>Carrinho</HeaderLink>
            </LinkContainer>
          </Options>
        </Content>
      </Container>
    </div>
  );
}
