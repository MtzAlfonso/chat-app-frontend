import styled from '@emotion/styled';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FormContainer } from '../components/auth/FormContainer';
import { FormInput } from '../components/auth/FormInput';
import { FormInputIcon } from '../components/auth/FormInputIcon';

interface Props {}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 4rem);
  padding: 1rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProfileInfo = styled.div`
  align-items: center;
  background-color: var(--indigo-50);
  border-radius: 0.5rem;
  box-shadow: 0 3px 5px -2px var(--gray-300);
  display: flex;
  flex-direction: column;
  position: relative;
  svg {
    border-radius: 0.5rem;
  }
  h4 {
    color: var(--indigo-900);
    margin-top: 2rem;
  }
`;

const ProfileImg = styled.img`
  background: var(--indigo-50);
  border: 0.2rem solid var(--gray-50);
  border-radius: 50%;
  height: auto;
  position: absolute;
  top: 15%;
  width: 20%;
`;

const ProfileCard = styled.form`
  background: var(--gray-50);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1rem;
  hr {
    margin: 1rem 0;
  }
  button {
    align-items: center;
    background-color: var(--indigo-500);
    border: none;
    border-radius: 0.5rem;
    color: var(--gray-50);
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    padding: 0.5rem 0;
    &:hover {
      background-color: var(--indigo-600);
    }
    &:active {
      background-color: var(--indigo-700);
    }
  }
`;

const LogoutButton = styled.button`
  align-items: flex-end;
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  color: var(--red-500);
  display: flex;
  font-weight: 700;
  justify-content: center;
  margin: 0.5rem 0;
  padding: 0.8rem;
  i {
    margin-right: 0.2rem;
  }
  &:hover {
    background-color: var(--gray-200);
  }
  &:active {
    background-color: var(--gray-300);
  }
`;

const ProfilePage = (props: Props) => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <ProfileContainer className="animate__animated animate__fadeIn">
      <ProfileInfo>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#4f46e5"
            fillOpacity="0.8"
            d="M0,160L120,181.3C240,203,480,245,720,240C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <ProfileImg
          src="https://image.flaticon.com/icons/png/512/168/168724.png"
          alt="sunil"
        />
        <h4>{auth.name}</h4>
        <LogoutButton onClick={logout}>
          <i className="fas fa-sign-out-alt" />
          Cerrar sesión
        </LogoutButton>
      </ProfileInfo>
      <ProfileCard>
        <h5>Datos de la cuenta</h5>
        <FormContainer>
          <FormInputIcon className="fas fa-user" />
          <FormInput required type="text" />
        </FormContainer>

        <FormContainer>
          <FormInputIcon className="fas fa-envelope" />
          <FormInput required type="email" />
        </FormContainer>

        <FormContainer>
          <FormInputIcon className="fas fa-key" />
          <FormInput required type="password" />
        </FormContainer>
        <button type="submit">Actualizar datos</button>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePage;
