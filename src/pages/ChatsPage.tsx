import styled from '@emotion/styled';
import { FormContainer } from '../components/auth/FormContainer';
import { FormInput } from '../components/auth/FormInput';
import { FormInputIcon } from '../components/auth/FormInputIcon';
import { ChatCard } from '../components/chat/ChatCard';

interface Props {
  online?: boolean;
  notifications?: number;
}

const Content = styled.div`
  color: var(--indigo-900);
  min-height: 100vh;
  padding: 2rem 1.5rem 4rem 1.5rem;
  @media (prefers-color-scheme: dark) {
    color: var(--gray-50);
  }
`;

const ChatsPage = (props: Props) => {
  return (
    <Content>
      <h2 className="animate__animated animate__fadeIn">Chats</h2>
      <form
        className="animate__animated animate__fadeIn"
        style={{
          margin: '2rem 0',
        }}
      >
        <FormContainer>
          <FormInputIcon className="fas fa-search" />
          <FormInput type="text" name="" placeholder="Buscar..." />
        </FormContainer>
      </form>
      <ChatCard user="user1" online />
      <ChatCard user="user2" online />
      <ChatCard user="user3" />
      <ChatCard user="user4" />
      <ChatCard user="user5" />
      <ChatCard user="user6" />
      <ChatCard user="user7" />
    </Content>
  );
};

export default ChatsPage;
