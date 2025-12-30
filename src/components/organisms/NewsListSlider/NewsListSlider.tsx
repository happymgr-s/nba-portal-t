'use client';
import { NewsItem } from '@/types/news';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

type NewsListSliderProps = {
  newses?: NewsItem[];
};

const sampleNewsList = [
  {
    title: 'NBA 2024シーズン開幕！注目の選手は？',
  },
  {
    title: 'レブロン・ジェームズがキャリア通算40000得点を達成！',
  },
  {
    title: 'ウォリアーズ、スティーブ・カー監督が新戦術を発表',
  },
  {
    title: 'ドラフト1位選手がデビュー戦でトリプルダブルを記録',
  },
  {
    title: 'ネッツ、新アリーナ建設計画を発表',
  },
];

/**
 * ニュース一覧表示スライダー ※スライド数が少ないと、loopつけた時に正しく表示されない
 * @param props
 */
const NewsListSlider: React.FC<NewsListSliderProps> = (props) => {
  const {} = props;

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} //一度に表示するスライドの数
        centeredSlides={true}
        pagination={{
          clickable: true,
        }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
        navigation //スライドを前後させるためのボタン、スライドの左右にある
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {sampleNewsList.map((news) => (
          <SwiperSlide key={news.title}>
            <div className="relative w-full h-60 bg-gray-500">
              <p className=" w-5/6 absolute bottom-8 left-4 text-ellipsis overflow-hidden text-nowrap">
                {news.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewsListSlider;
