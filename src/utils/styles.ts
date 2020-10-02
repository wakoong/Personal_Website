import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  font-size: 1.2em;
  padding: 4em 2em;

  h1 {
    text-align: center;
    font-size: 2.5em;
    font-weight: 900;
    color: ${(props) => props.theme.emphasisColor};
  }

  @media (min-width: 768px) {
    font-size: 1em;
    padding: 2em 5em;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  line-height: 1.6;

  @media (min-width: 499px) {
    flex-direction: row;
    line-height: 2;
  }

  .content {
    @media (min-width: 768px) {
      width: auto;
      max-width: 20em;
    }

    @media (min-width: 1200px) {
      width: 40em;
    }
  }
`;
