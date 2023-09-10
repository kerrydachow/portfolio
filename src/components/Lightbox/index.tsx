import Lightbox, { ImagesListType } from "react-spring-lightbox";
import ArrowButton from "./Arrow";
import Header from "./Header";
import styled from "styled-components";

type IStyledLightboxProps = {
  images: ImagesListType;
  isOpen: boolean;
  onClose?: () => void;
  currentImageIndex: number;
  setCurrentIndex: (currentImageIndex: number) => void;
};

const StyledLightbox = ({
  images,
  isOpen,
  onClose,
  currentImageIndex,
  setCurrentIndex,
}: IStyledLightboxProps) => {
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <MyLightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      onClose={onClose}
      images={images}
      currentIndex={currentImageIndex}
      className="backdrop-blur"
      singleClickToZoom
      renderPrevButton={() => (
        <ArrowButton
          position={"left"}
          onClick={gotoPrevious}
          disabled={currentImageIndex <= 0}
        />
      )}
      renderNextButton={() => (
        <ArrowButton
          position={"right"}
          onClick={gotoNext}
          disabled={currentImageIndex === images.length - 1}
        />
      )}
      renderHeader={() => (
        <Header
          images={images}
          currentIndex={currentImageIndex}
          onClose={onClose}
        />
      )}
      /* react-spring config for open/close animation */
      pageTransitionConfig={{
        from: { transform: "scale(0.75)", opacity: 0 },
        enter: { transform: "scale(1)", opacity: 1 },
        leave: { transform: "scale(0.75)", opacity: 0 },
        config: { mass: 1, tension: 400, friction: 50 },
      }}
    />
  );
};
export default StyledLightbox;

/* 
  Try to select the component
  rather than a nested selection.
*/
const MyLightbox = styled(Lightbox)`
  > div > div > div > div {
    @media (min-width: 1400px) {
      max-width: 1400px;
    }
    @media (max-width: 1400px) {
      width: 80%;
    }
  }
  > div > div > div > div > div > div > img {
    cursor: zoom-in;
    cursor: -webkit-zoom-in;
  }
`;
