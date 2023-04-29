import { Outlet } from 'react-router-dom';
import { AppContainer, Header, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <AppContainer>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </AppContainer>
  );
};

export default Layout;
