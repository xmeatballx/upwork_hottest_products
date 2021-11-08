import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  StyledProductTitle,
  StyledProductImageContainer,
  StyledProductHeroHeading,
  StyledProductHeroBody,
  StyledProductDetailsContainer,
  StyledProductDetailsTitle,
  StyledProductDetailsBody,
  StyledProductDealTitle,
  StyledProductDealBody,
  StyledProductDealButton,
  StyledProductDetailsTextContainer,
  StyledProductDealContainer,
} from "./styled/Article.styled";

import { faCheck, faFireAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Article = ({ items, index }) => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  function getImageUrl(item) {
    fetch(
      "https://cdn.contentful.com/spaces/o6cj1t1pbl2q/environments/master/assets/" +
        item.fields.image1.sys.id +
        "?access_token=6yymc6OcB1VaebTGOmRRmY4rcgh9McCzh0Ut8Ea4icQ"
    )
      .then((response) => response.json())
      .then((ref) => {
        setImage1(ref.fields.file.url);
      });
    if (items.fields.image2) {
      fetch(
        "https://cdn.contentful.com/spaces/o6cj1t1pbl2q/environments/master/assets/" +
          item.fields.image2.sys.id +
          "?access_token=6yymc6OcB1VaebTGOmRRmY4rcgh9McCzh0Ut8Ea4icQ"
      )
        .then((response) => response.json())
        .then((ref) => {
          setImage2(ref.fields.file.url);
        });
    }
  }
  getImageUrl(items);
  return (
    <>
      {/* {items && image1 && image2 ? ( */}
      <article>
        <StyledProductTitle>
          {index + 1}. {items.fields.title}
        </StyledProductTitle>
        <StyledProductImageContainer>
          <img src={image1} alt="" />
          {image2 ? <img src={image2} alt="" /> : ""}
        </StyledProductImageContainer>
        <StyledProductHeroHeading>
          {items.fields.subtitle}
        </StyledProductHeroHeading>
        <StyledProductHeroBody>
          {documentToReactComponents(items.fields.body)}
        </StyledProductHeroBody>
        <StyledProductDetailsContainer>
          <StyledProductDetailsTextContainer>
            <StyledProductDetailsTitle>
              {items.fields.detailsTitle}
            </StyledProductDetailsTitle>
            <StyledProductDetailsBody>
              <li>
                <FontAwesomeIcon icon={faCheck} color="green" />
                {documentToReactComponents(items.fields.details1)}
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color="green" />
                {documentToReactComponents(items.fields.details2)}
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} color="green" />
                {documentToReactComponents(items.fields.details3)}
              </li>
            </StyledProductDetailsBody>
          </StyledProductDetailsTextContainer>
          <StyledProductDealContainer>
            <StyledProductDealTitle>TODAY'S DEAL</StyledProductDealTitle>
            <StyledProductDealBody>
              <FontAwesomeIcon icon={faFireAlt} color="#d20000" />
              Get {items.fields.discount} OFF
            </StyledProductDealBody>
            <StyledProductDealButton href={items.fields.buyUrl}>
              SAVE NOW >>
            </StyledProductDealButton>
          </StyledProductDealContainer>
        </StyledProductDetailsContainer>
      </article>
      {/* ) : ( "" */}
      {/* )} */}
    </>
  );
};

export { Article };
