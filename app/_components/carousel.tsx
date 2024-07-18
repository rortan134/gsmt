"use client";

import "swiper/css";
import "swiper/css/pagination";
import * as React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ children }: React.PropsWithChildren) => (
    <Swiper
        grabCursor
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
            320: {
                slidesPerView: 1.1,
            },
            768: {
                slidesPerView: 2.1,
            },
        }}
        pagination={{
            bulletActiveClass: "!text-foreground dark:!text-white/100 !bg-red-500",
            bulletClass:
                "select-none text-muted-foreground p-1 w-9 h-9 flex items-center justify-center rounded-xl bg-card cursor-pointer",
            clickable: true,
            el: ".swiper-pagination-container",
            renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
        }}
        className="h-fit w-full !overflow-visible">
        {React.Children.map(children, (child) => (
            <SwiperSlide className="relative !h-auto max-h-[565px] overflow-hidden rounded-3xl bg-card p-4 md:p-6">
                {child}
            </SwiperSlide>
        ))}
        <div className="swiper-pagination-container flex items-center space-x-1.5 pt-4" />
    </Swiper>
);

export { Carousel };