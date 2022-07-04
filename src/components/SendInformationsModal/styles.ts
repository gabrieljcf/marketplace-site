import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: var(--text-body);
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

export const ModalContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  p {
    color: var(--text-body);
    font-weight: 500;
    font-size: 1rem;
    margin: 0.5rem 0 1.25rem 0;
  }

  button {
    align-self: flex-end;
  }
`;
