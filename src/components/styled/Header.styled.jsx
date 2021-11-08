import styled from "styled-components";

const StyledHeader = styled.header`
  max-width: 1000px;
  width: 60vw;
  margin: auto;
  @media (max-width: 900px) {
    width: 90vw;
  }
`;

const StyledHeading = styled.h1`
  font-size: 39.81px;
`;

const StyledAuthorSection = styled.section``;

const StyledAuthorImage = styled.img`
  width: 10px;
`;

const StyledAuthorText = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const StyledHeaderImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;

  img {
    object-fit: fill;
    width: 33%;
    height: auto;
  }
`;

const StyledHeaderDetails = styled.p`
  margin: 50px 0 100px 0;
`;

export {
  StyledHeader,
  StyledHeading,
  StyledAuthorSection,
  StyledAuthorImage,
  StyledAuthorText,
  StyledHeaderImageContainer,
  StyledHeaderDetails,
};
