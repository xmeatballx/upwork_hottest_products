import styled from "styled-components";

const StyledShareSection = styled.section`
  width: 60vw;
  margin: auto;

  @media (max-width: 900px) {
    width: 90vw;
  }
`;

const StyledShareTitle = styled.h2`
  font-size: 16px;
  text-align: center;
`;

const StyledShareContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  margin-bottom: 100px;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
  }
`;

const StyledShareButton = styled.a`
  padding: 0.75em 2.5em;
  border-radius: 10px;
  background: ${({ color }) => color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    width: 50px;
  }
`;

const StyledShareBrand = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 800;
  margin: 0;
  padding-left: 0.5em;
`;

const StyledDisclosureText = styled.p`
  color: gray;
  margin-bottom: 100px;
`;

const StyledFooterLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  background: #fbfbfb;

  @media (max-width: 900px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
`;

const StyledFooterLinksTitle = styled.h3`
  color: grey;
  font-size: 16px;
`;

const StyledFooterLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  li {
    font-size: 12px;
  }

  @media (max-width: 900px) {
    align-items: center;
    padding: 0;
    margin: 1em;
  }
`;

const StyledFooterCopyright = styled.div`
  background: #393939;
  text-align: center;
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 12px;
  * {
    margin: 1em;
  }
`;

export {
  StyledShareSection,
  StyledShareTitle,
  StyledShareContainer,
  StyledShareButton,
  StyledShareBrand,
  StyledDisclosureText,
  StyledFooterLinksContainer,
  StyledFooterLinksTitle,
  StyledFooterLinksList,
  StyledFooterCopyright,
};
