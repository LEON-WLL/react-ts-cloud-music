import React from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';

// import 'swiper/components/navigation/navigation.less';
// import 'swiper/components/pagination/pagination.less';
// import 'swiper/components/scrollbar/scrollbar.less';

import './index.less';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

export interface bannerType {
    imageUrl: string;
    url?: string;
}

interface IProps {
    bannerList: bannerType[];
}

interface IState {
    sliderSwiper: Swiper;
}

class Slider extends React.Component<IProps, IState> {

    public static defaultProps = {
        bannerList: []
    };

    // public state = {
    //     sliderSwiper: Swiper
    // };

    componentWillMount(): void {


    }

    render(): JSX.Element {

        return (
            <div className={'slider-component-wrapper'}>
                <div className="before"></div>
                <div className="slider-container">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}

                        // autoplay // 自动轮播
                        // navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}

                        // onSlideChange={(swiper) => { console.log('slide change', swiper.activeIndex ); }}
                        // onSwiper={(swiper) => { console.log('onSwiper', swiper); }}
                    >
                        {
                            this.props.bannerList && this.props.bannerList.map((slider) => {
                                return (
                                    <SwiperSlide key={slider.url}>
                                        <img
                                            src={slider.imageUrl}
                                            width="100%"
                                            height="100%"
                                            alt="推荐"
                                            onClick={() => { console.log('img onClick',  slider); }}
                                        />
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>

        );
    }

}

export default Slider;
