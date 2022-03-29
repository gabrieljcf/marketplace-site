import styled from "styled-components";

export const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    margin-top: 4rem;
    text-align: center;
    font-size: 2rem;
    color: var(--text-body);

    span {
      color: var(--pink-dark)
    }
  }

  ul {
    margin-top: 2rem;
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
  }
`