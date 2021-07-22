import styled from '@emotion/styled';

interface Props {}

const ContainerFlex = styled.div`
  display: flex;
  max-width: 70%;
  justify-content: flex-end;
  overflow-y: hidden;
  margin: 1rem 1rem 0 auto;
  img {
    align-self: flex-end;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    position: relative;
    margin: 0 0.5rem;
  }
`;

const TextReceived = styled.p`
  border-radius: 8px 8px 0 8px;
  background-color: var(--indigo-500);
  color: var(--gray-50);
  font-size: 0.95rem;
  padding: 1rem;
`;

const TimeStamps = styled.div`
  display: flex;
  color: var(--gray-500);
  font-size: 0.8rem;
  padding: 0.5rem 0;
  justify-content: flex-end;
`;

export const MessageSend = (props: Props) => {
  return (
    <ContainerFlex>
      <div>
        <TextReceived>
          Hey, Marshall! How are you? Can you please change the color theme of
          the website to pink and purple?
        </TextReceived>
        <TimeStamps>
          11:01 AM - <span>June 9</span>
        </TimeStamps>
      </div>
    </ContainerFlex>
  );
};
