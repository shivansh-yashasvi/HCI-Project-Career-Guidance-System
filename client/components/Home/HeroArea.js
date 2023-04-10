import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, { Navigation, EffectFade } from "swiper";
SwiperCore.use([Navigation]);

const HeroArea = () => {
  const sliderData = [
    {
      id: 1,
      title: "Welome to Career Care",
      img: "assets/img/slider/slider.png",
    }
  ];
  return (
    <>
      <section className="slider__area">
        <div className="slider__active swiper-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            effect={"fade"}
            className="swiper-wrapper"
            modules={[EffectFade]}
            navigation={{
              nextEl: ".slider-button-next",
              prevEl: ".slider-button-prev",
            }}
          >
            {sliderData.map((slider) => {
              return (
                <SwiperSlide
                  key={slider.id}
                  className="slider__item swiper-slide p-relative slider__height d-flex align-items-center z-index-1"
                >
                  <div
                    className="slider__bg  include-bg"
                    style={{
                      background: `url(${slider.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xxl-7 col-xl-8 col-lg-8 col-md-10 col-sm-10">
                        <div className="slider__content p-relative z-index-1">
                          <span>Career Care</span>
                          <h2 className="slider__title">{slider.title}</h2>
                          <p>
                            Grow your skills to advance your career path
                          </p>
                          <div className="slider__btn">
                            <Link href="/courses">
                              <a className="tp-btn">Find Courses</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
