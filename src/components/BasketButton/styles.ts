import styled from "styled-components";

export const BasketContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    width: 22px;
    height: 22px;
    background: var(--text-light);
    left: -5px;

    border-radius: 50%;

    text-align: center;
    color: var(--pink-dark);
    font-size: 12px;

    @media screen and (max-width: 768px) {
      background: var(--pink-dark);
      color: var(--text-light);
      width: 18px;
      height: 18px;
    }
  }
`;
