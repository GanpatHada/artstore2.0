
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./SlideShow.css";

// import required modules
import { EffectFade,Autoplay} from "swiper";
import { useNavigate } from "react-router-dom";

export default function SlideShow() {
  const navigate=useNavigate();
  return (
    <div id='slideshow'>
      <div id="slide-wrapper">
          <h1>Welcome to the world of Art</h1>
          <button onClick={()=>navigate('/products')}>Explore</button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect={"fade"}
        
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Time in milliseconds between slide transitions
        }
          
        }
        
        modules={[ Autoplay,EffectFade]}
        className="mySwiper"
        >
        <div>
        <SwiperSlide>
            <img src="https://images8.alphacoders.com/676/thumbbig-676160.webp" alt="" />
        </SwiperSlide>
        </div>
        <div>
          <SwiperSlide>
            <img  src="https://images6.alphacoders.com/716/thumbbig-716705.webp" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img  src="https://images7.alphacoders.com/117/thumbbig-1173306.webp" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img  src="https://images2.alphacoders.com/705/thumbbig-705117.webp" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img  src="https://images2.alphacoders.com/117/thumbbig-1173803.webp" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img src="https://images5.alphacoders.com/556/thumbbig-556069.webp" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img src="https://c4.wallpaperflare.com/wallpaper/271/233/318/birth-of-venus-sandro-botticelli-painting-oil-painting-renaissance-hd-wallpaper-preview.jpg" alt="" />
          </SwiperSlide>
        </div>

        
      </Swiper>
    </div>
  );
}
