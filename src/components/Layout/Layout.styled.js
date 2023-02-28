import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  color: #6c5ce7;
  font-weight: bold;
  background-color: #ffeaa7;

  & a {
    text-decoration: none;
    display: flex;
    gap: 30px;
  }

  & a:hover,
  & a:focus {
    text-decoration: underline;
  }

  & a.active {
    text-decoration: overline;
    color: #d63031;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  color: #6c5ce7;
  font-weight: bold;
`;


