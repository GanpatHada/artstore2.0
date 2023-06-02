
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./SlideShow.css";

// import required modules
import { EffectFade, Pagination, Navigation, Autoplay} from "swiper";

export default function SlideShow() {
  return (
    <div id='slideshow'>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Time in milliseconds between slide transitions
        }
          
        }
        navigation={true}
        modules={[Pagination, Navigation, Autoplay,EffectFade]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide>
            <img  src="https://images.unsplash.com/photo-1579541671172-43429ce17aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhaW50aW5ncyUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img  src="https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFpbnRpbmdzJTIwYXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img  src="https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaW50aW5ncyUyMGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img  src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </SwiperSlide>
        </div>
        <div>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </SwiperSlide>
        </div>

        
      </Swiper>
    </div>
  );
}
