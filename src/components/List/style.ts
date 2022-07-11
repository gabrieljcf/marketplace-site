import styled from "styled-components"

export const Listcontainer = styled.ul`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-body);
    cursor: pointer;

  }

  .active:after {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: var(--pink);
    margin: 0 auto;
    border-radius: 2.5rem;
  }

  // reponsive tablet
  @media(max-width: 1300px) {
    overflow-x: scroll;
    li {
      white-space: nowrap;
      margin: 0 10px;
    }
  }
`;