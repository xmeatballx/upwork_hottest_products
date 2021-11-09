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
      <StyledFooterCopyright>
        <a href="https://www.termsfeed.com/live/380ba3db-b957-4ac7-aa6c-c859a2c3e964">
          Privacy Policy
        </a>
        |
        <a href="https://www.termsfeed.com/live/bf1844b8-f394-46c9-907b-12c21f44ab2c">
          Terms
        </a>
      </StyledFooterCopyright>
    </>
  );
};

export { Footer };
