import styled from "styled-components";

export const Container = styled.footer`
  background: var(--pink-medium);
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 300px;
  
  
  div {
    position: relative;

    &:not(.links):before {
      content: '';
      width: 2px;
      height: 100%;
      
      position: absolute;
      top: 0;
      right: -150px;
      
      background: var(--text-light);
    }

    span {
      display: block;
      color: var(--text-light);
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    ul li, a {
      color: var(--text-body);
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: .75rem;
      text-transform: uppercase;
    }
  }
`;