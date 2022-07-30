import styled from "styled-components";

export const CartListContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid var(--line);
  border-radius: 2.5rem;
  padding: 1.25rem 2.5rem;

  margin-bottom: 1.25rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-img {
    width: 50px;
  }

  p {
    font-size: 1rem;
    color: var(--text-body);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 130px;
    text-align: center;
    padding: 0 5px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;;
    padding: 1rem 0rem;
    div {
      margin-top: .5rem;
    }
  }
`;
