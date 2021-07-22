import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import { MessageReceived } from '../components/chat/MessageReceived';
import { MessageSend } from '../components/chat/MessageSend';

interface Props {}

interface Params {
  user: string;
}

const ChatContainer = styled.div`
  height: 100vh;
`;

const AppBar = styled.div`
  background-color: var(--gray-900);
  color: var(--gray-50);
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  position: fixed;
  width: 100%;
  padding: 0 2rem;
  z-index: 10;
`;

const AppBarLink = styled(Link)`
  color: var(--gray-50);
`;

const AppBarUser = styled.div`
  text-align: center;
  p {
    color: var(--green-500);
    font-size: 0.8rem;
  }
`;

const AppBarMenu = styled.button`
  background-color: transparent;
  border: none;
  color: var(--gray-50);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 0;
`;

const InputContainer = styled.div`
  background: var(--indigo-200);
  bottom: 0;
  height: 4.5rem;
  position: fixed;
  width: 100%;
`;

const FormMessage = styled.form`
  align-items: center;
  background: var(--indigo-50);
  padding: 0 1rem;
  color: var(--gray-400);
  border-radius: 20rem;
  display: flex;
  justify-content: space-between;
  margin: 0 0.5rem 0.5rem 0.5rem;
  width: calc(100% - 1rem);
  height: 4rem;
`;

const TextareaMessage = styled.textarea`
  background: var(--indigo-50);
  width: calc(100% - 5rem);
  border: none;
  padding: 0.5rem;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  background: var(--indigo-500);
  border: none;
  border-radius: 50%;
  color: var(--gray-50);
  cursor: pointer;
  height: 3rem;
  width: 3rem;
`;

const ChooseFileButton = styled.button`
  background: transparent;
  border: none;
  color: var(--gray-500);
  cursor: pointer;
  width: 2rem;
`;

const DirectChatPage: React.FC = (props: Props) => {
  const { user }: Params = useParams();
  const online = true;

  return (
    <ChatContainer>
      <AppBar>
        <AppBarLink to="/chats">
          <i className="fas fa-angle-left fa-2x" />
        </AppBarLink>
        <AppBarUser>
          <h3>{user}</h3>
          {online && <p>Conectado</p>}
        </AppBarUser>
        <AppBarMenu>
          <i className="fas fa-ellipsis-v fa-2x" />
        </AppBarMenu>
      </AppBar>
      <Container className="animate__animated animate__zoomInDown animate__faster">
        <MessageSend />
        <MessageSend />
        <MessageReceived />
        <MessageSend />
        <MessageReceived />
        <MessageReceived />
      </Container>
      <InputContainer>
        <FormMessage
          onSubmit={(e: any) => {
            e.preventDefault();
          }}
        >
          <ChooseFileButton>
            <i className="fas fa-paperclip" />
          </ChooseFileButton>
          <TextareaMessage
            rows={1}
            maxLength={10}
            name=""
            placeholder="Escribe tu mensaje..."
          />
          <SendButton type="submit">
            <i className="fas fa-paper-plane" />
          </SendButton>
        </FormMessage>
      </InputContainer>
    </ChatContainer>
  );
};

export default DirectChatPage;
