import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import List from './List';
import ListItem from './ListItem';
import Section from './Section';

const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SectionUnsplash = ({ photos, photosCount }) => (
  <Section
    linkText={`${photosCount} Photos`}
    linkUrl="https://unsplash.com/@cadejscroggins"
    title="Unsplash"
  >
    <List>
      {photos.map((photo, i) => (
        <ListItem key={i} backgroundImg={photo.node.urls.small} blur overlay>
          <StyledImgWrapper>
            <StyledImg src={photo.node.urls.small} />
          </StyledImgWrapper>
        </ListItem>
      ))}
    </List>
  </Section>
);

SectionUnsplash.propTypes = {
  photos: PropTypes.array,
  photosCount: PropTypes.number,
};

export default SectionUnsplash;
