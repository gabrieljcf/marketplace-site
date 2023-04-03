import styled from "styled-components";

export const Aside = styled.aside`
  grid-area: category;
`;

export const RadioGroup = styled.div`
  border: 2px solid var(--line);
  border-radius: 1.5rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  div {
    padding: 1rem;

    &:after {
      content: "";
      display: block;
      margin-top: 0.5rem;
      width: 100%;
      height: 1px;
      background: var(--line);
      border-radius: 2.5rem;
    }

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
          padding: 0.25rem;
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

      &:after {
        content: "";
        display: none;
      }
    }
  }
`;
