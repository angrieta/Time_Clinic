/* 스크롤트리거 */
gsap.registerPlugin(ScrollTrigger);

gsap.to('.vertical_2 .left_contents',{
    scrollTrigger:{
        trigger:'.vertical_2 .left_contents',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    x:0,
})
gsap.to('.vertical_3 .swiper-slide',{
    scrollTrigger:{
        trigger:'.vertical_3 .swiper-slide',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    y:0,
})
gsap.to('.vertical_3 .right_text',{
    scrollTrigger:{
        trigger:'.vertical_3 .right_text',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    x:0,
})
gsap.to('.vertical_4 .top_container',{
    scrollTrigger:{
        trigger:'.vertical_4 .top_container',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    y:0,
    delay:0.3,
})
gsap.to('.equip_item1',{
    scrollTrigger:{
        trigger:'.equip_item1',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    x:0,
    delay:0.3,
})
gsap.to('.equip_item2',{
    scrollTrigger:{
        trigger:'.equip_item2',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    delay: 0.6,
})
gsap.to('.equip_item3',{
    scrollTrigger:{
        trigger:'.equip_item2',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    delay: 0.9,
})
gsap.to('.vertical_5 .left_border',{
    scrollTrigger:{
        trigger:'.vertical_5 .left_border',
        toggleActions:'play reverse restart reverse',
    },
    opacity:1,
    delay:0.2,
})
gsap.to('.right_doctor_aria .doctor1',{
    scrollTrigger:{
        trigger:'.right_doctor_aria .doctor1',
        toggleActions:'play reverse restart reverse',
    },
    x:0,
    opacity:1,
    delay:0.1,
})
gsap.to('.right_doctor_aria .doctor2',{
    scrollTrigger:{
        trigger:'.right_doctor_aria .doctor2', 
        toggleActions:'play reverse restart reverse',
    },
    x:0,
    opacity:1,
    delay:0.4,
})
gsap.to('.event_inner h3',{
    scrollTrigger:{
        trigger:'.event_inner h3', 
        toggleActions:'play reverse restart reverse',
    },
    scale:1,
    opacity:1,
    delay:0.2,
})
gsap.to('.map_footer .map_aria .map_img',{
    scrollTrigger:{
        trigger:'.map_footer .map_aria .map_img', 
        toggleActions:'play reverse restart reverse',
    },
    y:0,
    opacity:1,
    delay:0.2,
})
gsap.to('.map_footer .map_aria .location_container',{
    scrollTrigger:{
        trigger:'.map_footer .map_aria .location_container', 
        toggleActions:'play reverse restart reverse',
    },
    x:0,
    opacity:1,
    delay:0.2,
})
gsap.to('footer',{
    scrollTrigger:{
        trigger:'footer', 
        toggleActions:'play reverse restart reverse',
    },
    y:0,
    opacity:1,
    delay:0.2,
})