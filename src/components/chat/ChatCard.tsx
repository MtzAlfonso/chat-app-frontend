import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface Props {
  user?: string;
  online?: boolean;
  notifications?: number;
}

interface StyledProps {
  online?: Props['online'];
  notifications?: Props['notifications'];
}

const ChatResume = styled(Link)`
  background: var(--indigo-50);
  border-radius: 10px;
  box-shadow: 0 3px 5px -2px var(--gray-400);
  color: var(--indigo-900);
  cursor: pointer;
  display: flex;
  padding: 1rem 0.7rem;
  margin: 1rem 0;
  text-decoration: none;
  &:hover {
    background-color: var(--indigo-100);
  }
  &:active {
    background-color: var(--white);
  }
  @media (prefers-color-scheme: dark) {
    background: var(--gray-900);
    box-shadow: 0 3px 5px -2px var(--gray-900);
    color: var(--gray-50);
    &:hover {
      background-color: var(--gray-700);
    }
    &:active {
      background-color: var(--gray-600);
    }
  }
`;

const ImgContainer = styled.div`
  display: inline-block;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    right: 15px;
    border: 2px solid var(--indigo-100);
    border-radius: 50%;
    background: ${(props: StyledProps) => {
      return props.online ? 'var(--green-500)' : 'var(--red-500)';
    }};
    @media (prefers-color-scheme: dark) {
      border-color: var(--gray-900);
    }
  }
  img {
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
`;

export const ChatCard = (props: Props) => {
  return (
    <ChatResume
      to={`/chats/${props.user}`}
      className="animate__animated animate__fadeIn"
    >
      <ImgContainer online={props.online}>
        <img
          src="https://image.flaticon.com/icons/png/512/168/168724.png"
          alt="Avatar"
        />
      </ImgContainer>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
        }}
      >
        <h4
          style={{
            gridColumn: '1 / 4',
          }}
        >
          Ollie Chandler
        </h4>

        <small
          style={{
            fontSize: '0.7rem',
            color: 'var(--gray-500)',
          }}
        >
          12:45 PM
        </small>

        <p
          style={{
            gridColumn: '1 / 4',
            fontSize: '0.8rem',
            width: '93%',
            color: 'var(--gray-500)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          doloremque nesciunt expedita cupiditate. Blanditiis nobis earum
          voluptatum distinctio ratione officiis!
        </p>

        <div>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--gray-50)',
              justifyContent: 'center',
              backgroundColor: 'var(--indigo-500)',
              height: '1.5rem',
              width: '1.5rem',
              fontSize: '0.8rem',
              borderRadius: '50%',
            }}
          >
            3
          </span>
        </div>
      </div>
    </ChatResume>
  );
};
