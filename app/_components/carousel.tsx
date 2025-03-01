"use client";

import * as React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ children }: React.PropsWithChildren) => (
    <Swiper
        grabCursor
        modules={[Pagination]}
        slidesPerView={1.0001}
        spaceBetween={16}
        breakpoints={{
            320: { slidesPerView: 1.09 },
            768: { slidesPerView: 2.1 },
        }}
        pagination={{
            bulletActiveClass: "text-white! bg-red-500! px-2!",
            bulletClass:
                "transition-[padding] select-none text-muted-foreground px-1 py-1 w-9 h-9 flex items-center justify-center rounded-xl bg-card cursor-pointer font-medium",
            clickable: true,
            el: ".swiper-pagination-container",
            renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
        }}
        className="overflow-visible! h-fit w-full">
        {React.Children.map(children, child => (
            <SwiperSlide className="h-auto! first:w-full! relative max-h-[565px] overflow-hidden rounded-3xl bg-card">
                {child}
            </SwiperSlide>
        ))}
        <div className="swiper-pagination-container flex items-center space-x-1.5 pt-4" />
    </Swiper>
);

export { Carousel };
