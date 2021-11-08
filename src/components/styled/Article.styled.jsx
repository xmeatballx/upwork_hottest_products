import styled from "styled-components";

const StyledProductTitle = styled.h2`
  width: calc(100%-0.5em);
  color: white;
  background: #333333;
  margin: 0;
  padding: 0.5em 0.25em;
`;

const StyledProductImageContainer = styled.figure`
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  margin: 0;

  img {
    /* max-width: 75%;
    min-width: 45%; */
    width: 100%;
    height: 450px;
    object-fit: cover;
    flex-basis: auto;
    flex-grow: 1;
    /* object-position: 100% 80%; */
    overflow: hidden;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledProductHeroHeading = styled.h3`
  font-size: 33.18px;
`;

const StyledProductHeroBody = styled.div`
  margin-bottom: 50px;
`;

const StyledProductDetailsContainer = styled.div`
  background: #f3f3f3;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledProductDetailsTextContainer = styled.div`
  width: 50%;
  padding: 0.5em;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`;

const StyledProductDetailsTitle = styled.h4`
  font-size: 23.04px;
  margin-left: 0.75em;
  margin-bottom: 0;
  @media (max-width: 900px) {
    margin-left: 0.5em;
  }
`;

const StyledProductDetailsBody = styled.ul`
  list-style: none;
  padding-left: 0.5em;

  li {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;

    svg {
      margin: 0.25em 1em;
    }

    p {
      margin: 0;
    }
  }
  @media (max-width: 900px) {
    padding: 0;
  }
`;

const StyledProductDealContainer = styled.div`
  align-self: flex-start;
  margin: 2em auto;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fef4e2;
  border: solid 2px #e07b03;
  padding: 0;

  svg {
    margin-right: 0.5em;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const StyledProductDealTitle = styled.h5`
  width: 101%;
  text-align: center;
  padding: 1em 0;
  background: #343a40;
  color: white;
  margin: 0;
  transform: translateY(-3px);
`;
const StyledProductDealBody = styled.p`
  font-weight: 800;
  color: #d20000;
  padding: 2em 0;
`;

const StyledProductDealButton = styled.a`
  text-decoration: none;
  color: white;
  background: #d20000;
  padding: 1em 0;
  width: 80%;
  text-align: center;
  font-weight: 800;
  border-radius: 10px;
  margin-bottom: 1em;
`;

export {
  StyledProductTitle,
  StyledProductImageContainer,
  StyledProductHeroHeading,
  StyledProductHeroBody,
  StyledProductDetailsContainer,
  StyledProductDetailsTextContainer,
  StyledProductDetailsTitle,
  StyledProductDetailsBody,
  StyledProductDealContainer,
  StyledProductDealTitle,
  StyledProductDealBody,
  StyledProductDealButton,
};
