// src/GlowingImage.js
import styled from 'styled-components';
const GlowingImageRoot = styled.div`
  position: relative;
  border-radius: 100%;
  // height: 27em;
  // width: 27em;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    border-radius: inherit;
    /* You can change these values until it looks fine to you */
    filter: blur(0.6rem) saturate(2);
  }
  > img {
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
    transform: scale(0.98);
  }
`;
function GlowingImage({ src, alt }) {
    return (
      <GlowingImageRoot src={src} className="glowingImageRoot">
        <img src={src} alt={alt} />
      </GlowingImageRoot>
    );
}
export default GlowingImage;