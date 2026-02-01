import styled from '@emotion/styled'


const ProductSlideWrapper = styled.div`
  margin-bottom: 81px;
  background-color: #011936;
  padding-top: 80px;
  padding-bottom: 150px;
  overflow: hidden;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 1440px) {
    padding-top: 60px;
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 42px;
    padding-top: 40px;
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  margin-bottom: -65px;
  flex-direction: column;
  @media only screen and (max-width: 1600px) {
    ${'' /* padding: 81px; */}
  }
  @media only screen and (max-width: 1360px) {
    ${'' /* padding: 60px; */}
  }
  @media only screen and (max-width: 991px) {
    ${'' /* padding: 30px; */}
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const CarouselArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .swiper-container {
    padding-top: 20px;
    .swiper-slide {
      &.swiper-slide-active {
        .item_wrapper {
          margin-top: -17px;
        }
      }
    }
  }

  .swiper-wrapper {
    .item_wrapper {
      display: block;
      max-height: 630px;
      overflow: hidden;
      position: relative;
      @media only screen and (max-width: 991px) {
        max-height: 400px;
      }
      @media only screen and (max-width: 767px) {
        max-height: 380px;
      }

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        ${'' /* background: rgba(0,0,0,0.8); */}
        position: absolute;
        bottom: 0;
        left: 0;
        transition: height 0.3s ease;
        z-index: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }
    &.swiper-slide-next {
      .item_wrapper {
        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: height 0.3s ease;
          z-index: 1;
        }
      }
    }

    .swiper-slide {
      display: block;
      .item_wrapper {
        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          transition: height 0.3s ease;
          z-index: 1;
          background: rgba(0, 0, 0, 0.7);
        }
      }
      &.swiper-slide-next {
        .item_wrapper {
          &::after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: height 0.3s ease;
            z-index: 1;
            background: rgba(0, 0, 0, 0.5);
          }
        }
      }
      &.swiper-slide-prev {
        .item_wrapper {
          &::after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: height 0.3s ease;
            z-index: 1;
            background: rgba(0, 0, 0, 0.5);
          }
        }
      }
      &.swiper-slide-active {
        .item_wrapper {
          &::after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: height 0.3s ease;
            z-index: 1;
            background: rgba(0, 0, 0, 0);
          }
        }
      }
    }
  }

  .glide__controls {
    > div {
      > span {
        &.next_arrow {
          width: 45px;
          background-color:  #FDEF00;
          @media only screen and (max-width: 667px) {
            width: 30px;
          }

          &::before {
            background-color: #FDEF00;
            transform: rotate(42deg);
          }

          &::after {
            background-color: #FDEF00;
            transform: rotate(-42deg);
          }
        }
      }
    }
  }
`;
export const MockupWrapper = styled.div`
  position: absolute;
  height: calc(100% + 0px);
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  pointer-events: none;
  margin-top: -12px;
  @media only screen and (max-width: 1800px) {
    height: calc(100% + 0px);
  }
  @media only screen and (max-width: 1440px) {
    height: calc(100% + 0px);
  }
  @media only screen and (max-width: 1280px) {
    height: calc(100% + 0px);
  }
  img {
    display: block;
    height: 100%;
    width: auto;
  }
`;
export default ProductSlideWrapper;