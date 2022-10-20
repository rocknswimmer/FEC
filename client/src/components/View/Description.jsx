import React, { useState, useEffect } from 'react';
import { FaTwitter, FaFacebook, FaPinterest } from 'react-icons/fa';
import { DescriptionDiv, SocialDiv, Twitter, Fb, Pinterest } from './Styled/PricingAndDescription.styled.jsx';

const Description = ({ productInfo, currentDisplayedStyle }) => {
  const [socialPhrase, setSocialPhrase] = useState('');

  const socialPrompt = () => {
    let name = productInfo.name.trim();
    let style = currentDisplayedStyle.name.trim();
    let string = encodeURIComponent(`Check out this cool ${name}. I love it in the style ${style}`);
    console.log(string, 'uriEncoded');
    return string;
  };

  useEffect(() => {
    if (productInfo.name) {
      setSocialPhrase(socialPrompt());
    }
  }, [currentDisplayedStyle]);

  return (
    <DescriptionDiv>
      <h3>{productInfo.slogan}</h3>
      <p>{productInfo.description}</p>
      <SocialDiv>
        <Fb> <FaFacebook/> </Fb>
        <Twitter className='twitter-share-button' href={`https://twitter.com/intent/tweet?text=Hello%20world`} ><FaTwitter /></Twitter>
        <Pinterest> <FaPinterest /> </Pinterest>
      </SocialDiv>
    </DescriptionDiv>
  );
};

export default Description;