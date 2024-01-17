import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgb(174, 124, 61);
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
`;

const CopyrightText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        &copy; All rights reserved to Miri Harush, Michal Shlezinger, Tammar Grossman, Shani Pories
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
