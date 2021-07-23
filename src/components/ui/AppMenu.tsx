import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

interface Props {}

const Menu = styled.div`
  align-items: center;
  border-top: 1px solid var(--gray-700);
  background-color: var(--gray-900);
  bottom: 0;
  display: flex;
  height: 4rem;
  justify-content: space-around;
  position: fixed;
  width: 100%;
`;

const MenuItem = styled(NavLink)`
  color: var(--gray-100);
  position: relative;
  &.active {
    color: var(--indigo-500);
  }
  &:hover {
    color: var(--indigo-400);
  }
  &:active {
    color: var(--indigo-300);
  }
`;

const MenuIcon = styled.i`
  &.fas {
    font-size: 1.5rem;
  }
`;

const ProfileImg = styled.img`
  height: 2rem;
  border-radius: 50%;
`;

export const AppMenu = (props: Props) => {
  return (
    <>
      <Menu>
        <MenuItem to="/amigos" exact activeClassName="active">
          <MenuIcon className="fas fa-user-friends" title="Amigos" />
        </MenuItem>
        <MenuItem to="/chats" activeClassName="active" title="Chats">
          <MenuIcon className="fas fa-comments" />
        </MenuItem>
        <MenuItem to="/perfil" title="Perfil">
          <ProfileImg
            src="https://image.flaticon.com/icons/png/512/168/168724.png"
            alt="sunil"
          />
        </MenuItem>
      </Menu>
    </>
  );
};
