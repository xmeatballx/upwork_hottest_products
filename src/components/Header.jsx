import {
  StyledAuthorImage,
  StyledAuthorSection,
  StyledAuthorText,
  StyledHeader,
  StyledHeaderDetails,
  StyledHeaderImageContainer,
  StyledHeading,
} from "./styled/Header.styled";

import Hero1 from "../assets/Hero1.png";
import Hero2 from "../assets/Hero2.png";
import Hero3 from "../assets/Hero3.png";
import Hero4 from "../assets/Hero4.png";
import Hero5 from "../assets/Hero5.png";
import Hero6 from "../assets/Hero6.png";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();
const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();
date = months[month] + " " + day + ", " + year;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeading>
        27 Viral Stocking Stuffers That Are Selling Out Fast For The Holidays
      </StyledHeading>
      <hr />
      <StyledAuthorSection>
        <StyledAuthorImage></StyledAuthorImage>
        <StyledAuthorText>By Jason Stone || {date}</StyledAuthorText>
      </StyledAuthorSection>
      <StyledHeaderImageContainer>
        <img src={Hero1} alt="" />
        <img src={Hero2} alt="" />
        <img src={Hero3} alt="" />
        <img src={Hero4} alt="" />
        <img src={Hero5} alt="" />
        <img src={Hero6} alt="" />
      </StyledHeaderImageContainer>
      <StyledHeaderDetails>
        We’re always impressed by how innovative some gadgets are that solve
        common problems in a whole new way. In time for the holiday rush, here’s
        our list of the Top 21 Best Products of 2021 so you can quickly grab
        those year-end deals before they sell out!
      </StyledHeaderDetails>
    </StyledHeader>
  );
};

export { Header };
