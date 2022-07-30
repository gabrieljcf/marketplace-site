import styled from "styled-components";

export const Aside = styled.aside`
  grid-area: category;
`;

export const RadioGroup = styled.div`
  border: 2px solid var(--line);
  border-radius: 1.5rem;
  max-width: 240px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  div {
    padding: 1rem;
    border-bottom: 1px solid var(--line);

    label {
      cursor: pointer;
      input {
        margin-right: 1rem;
        cursor: pointer;

        & {
          -webkit-appearance: none;
          border: 1px solid var(--pink);
          border-radius: 50%;
          width: 1rem;
          height: 1rem;
          padding: 5px;
        }

        &:checked {
          background-color: var(--pink);
        }
      }

      span {
        color: var(--text-body);
        font-weight: 700;
        font-size: 1rem;
      }
    }

    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    padding: 0 0.8rem;

    div {
      padding: 1rem 0;
    }
  }
`;
