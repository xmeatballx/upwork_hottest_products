import {
  StyledShareContainer,
  StyledShareTitle,
  StyledShareButton,
  StyledDisclosureText,
  StyledShareBrand,
  StyledFooterLinksContainer,
  StyledFooterLinksTitle,
  StyledFooterLinksList,
  StyledFooterCopyright,
  StyledShareSection,
} from "./styled/Footer.styled";

import {
  faFacebookSquare,
  faLinkedin,
  faLinkedinIn,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <StyledShareSection>
        <StyledShareTitle>Share This</StyledShareTitle>
        <StyledShareContainer>
          <StyledShareButton color="#3B5998">
            <FontAwesomeIcon icon={faFacebookSquare} color="white" />
            <StyledShareBrand>FACEBOOK</StyledShareBrand>
          </StyledShareButton>
          <StyledShareButton color="#1DA1F2">
            <FontAwesomeIcon icon={faTwitter} color="white" />
            <StyledShareBrand>TWITTER</StyledShareBrand>
          </StyledShareButton>
          <StyledShareButton color="#BD081C">
            <FontAwesomeIcon icon={faPinterest} color="white" />
            <StyledShareBrand>PINTEREST</StyledShareBrand>
          </StyledShareButton>
          <StyledShareButton color="#0077B5">
            <FontAwesomeIcon icon={faLinkedinIn} color="white" />
            <StyledShareBrand>LINKEDIN</StyledShareBrand>
          </StyledShareButton>
        </StyledShareContainer>
        <StyledDisclosureText>
          Advertising Disclosure: This web page is formatted as an advertorial.
          Our site is supported by advertising. This page is an advertisement
          that includes products for sale, and is not a news article. We receive
          paid compensation for clicks or sales produced from the content found
          on this page. This compensation may affect which companies and
          products are displayed, the placement of advertisements, and their
          order of appearance. These statements have not been evaluated by the
          Food and Drug Administration. Products featured are not intended to
          treat, cure, or prevent any disease.
        </StyledDisclosureText>
      </StyledShareSection>
      <StyledFooterLinksContainer>
        <div>
          <StyledFooterLinksList>
            <StyledFooterLinksTitle>EXPLORE</StyledFooterLinksTitle>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </StyledFooterLinksList>
        </div>
        <div>
          <StyledFooterLinksList>
            <StyledFooterLinksTitle>CONNECT</StyledFooterLinksTitle>
            <li>Facebook</li>
            <li>Instagram</li>
          </StyledFooterLinksList>
        </div>
        <div>
          <StyledFooterLinksList>
            <StyledFooterLinksTitle>CONTACT</StyledFooterLinksTitle>
            <li>support@modernlifestyleshop.com</li>
            <li>Facebook Message</li>
          </StyledFooterLinksList>
        </div>
      </StyledFooterLinksContainer>
      <StyledFooterCopyright>
        © 2021 - Sample Copyright Here with modernlifestyleshop.com | Privacy
        Policy | Terms
      </StyledFooterCopyright>
    </>
  );
};

export { Footer };
