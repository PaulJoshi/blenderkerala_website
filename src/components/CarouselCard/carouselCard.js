import React from "react"
import Carousel from 'nuka-carousel';

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  
const images = importAll(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

const CarouselCard = () => (
    <Carousel
        autoplay={true}
        wrapAround={true}
        speed='1000'
        renderCenterLeftControls={false}
        renderCenterRightControls={false}
        defaultControlsConfig={{
            pagingDotsStyle: {
                fill: "white",
                padding: 5
            }
        }}
    >
        <img src={images['mushroom_house.jpg']} alt="Mushroom_house"/>
        <img src={images['kraken.jpg']} alt="Kraken"/>
        <img src={images['ancient_kerala.jpg']} alt="Ancient Kerala Homes"/>
        <img src={images['mclaren.jpg']} alt="Mclaren F1"/>
    </Carousel>
)

export default CarouselCard;