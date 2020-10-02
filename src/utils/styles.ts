import styled from 'styled-components';

export const Section = styled.section`
  min-height: 80vh;
  width: 100%;
  font-size: 1.2em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20vw 2em 20vw;
  width: 100%;
  line-height: 1.6;

  h1 {
    font-size: 2.5em;
    font-weight: 900;
    color: ${(props) => props.theme.emphasisColor};
  }

  @media (min-width: 499px) {
    padding: 1em 1em 0 1em;
    flex-direction: row;
    line-height: 2;
  }

  @media (min-width: 768px) {
    padding: 2em 2em 0 2em;
  }

  .content {
    @media (min-width: 768px) {
      width: 25em;
    }

    @media (min-width: 1200px) {
      width: 40em;
    }
  }
`;
