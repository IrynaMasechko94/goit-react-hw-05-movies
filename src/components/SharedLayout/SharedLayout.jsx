import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'components/Loader/Loader';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: blue;
  }
`;

export default function SharedLayout() {
  return (
    <div className="css.container">
      <header className="css.header">
        <nav>
          <StyledLink className={css.link} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.link} to="/movies">
            Movies
          </StyledLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
