import styled from '@emotion/styled';

interface Props {}

const ContainerFlex = styled.div`
  display: flex;
  max-width: 80%;
  justify-content: flex-start;
  overflow-y: hidden;
  margin: 1rem 0 0 0;
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
  border-radius: 8px 8px 8px 0;
  background-color: var(--gray-50);
  color: var(--gray-600);
  font-size: 0.95rem;
  padding: 1rem;
`;

const TimeStamps = styled.div`
  color: var(--gray-500);
  font-size: 0.8rem;
  padding: 0.5rem 0;
`;

export const MessageReceived = (props: Props) => {
  return (
    <ContainerFlex>
      <img
        src="https://image.flaticon.com/icons/png/512/168/168724.png"
        alt="sunil"
      />
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
