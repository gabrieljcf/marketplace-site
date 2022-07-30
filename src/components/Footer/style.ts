import styled from "styled-components";

export const Container = styled.footer`
  background: var(--pink-medium);
  width: 100%;
`;

export const ContentDesktop = styled.div`
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

export const ContentMobile = styled.div`
  margin-top: 8rem;
  position: relative;
  ul {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    width: 100%;
    background-color: var(--background);
    z-index: 1;
    box-shadow: 0 -10px 20px -5px rgb(115 115 115 / 75%);
    li {
      transition: 200ms ease-out;
      img {
        width: 25px;
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--text-dark);
        font-size: 12px;
      }
    }
    .active {
      transition: 200ms ease-out;
      &:after {
        content: "";
        width: 100%;
        height: 5px;
        background-color: var(--pink);
        border-radius: 8px;
      }
    }
  }
`