$('.vertical_4 .select_menu a').click(function(e){
    e.preventDefault()
    $('.vertical_4 .select_menu a').removeClass('active')
    $(this).addClass('active'); 
})
$('.quick_menu').mouseenter(function(){
    $('.quick_menu').css("animation","quick_menu 0.5s forwards")
    $('.quick_btn_aria').css("animation","quickBtnOver 0.5s forwards")
})
$('.quick_menu').mouseleave(function(){
    $('.quick_menu').css("animation","quick_menu1 0.5s forwards")
    $('.quick_btn_aria').css("animation","quickBtnLeave 0.5s forwards")
})
$('.vertical_2 .left_menu a').click(function(e){
    e.preventDefault()
    $('.left_contents .select_001').css("display", "none")
    $('.left_contents .select_002').css("display", "none")
    $('.vertical_2 .left_menu a').removeClass('active')
    $(this).addClass('active'); 
})
$('.vertical_2 .left_menu a:nth-child(1)').click(function(e){
    $('.left_contents .select_001').css("display", "block")
    $('.left_contents .select_001').css("animation", "selectTransfer 0.5s forwards")
    $("#selectImg").attr("src", "./images/index/botox_bg_001.png");
/*     $('.right_contents').css("animation", "selectBgTransfer 0.5s forwards") */
})
$('.vertical_2 .left_menu a:nth-child(2)').click(function(e){
    $('.left_contents .select_002').css("display", "block")
    $('.left_contents .select_002').css("animation", "selectTransfer 0.5s forwards")
    $("#selectImg").attr("src", "./images/index/botox_bg_002.png");
/*     $('.right_contents').css("animation", "selectBgTransfer 0.5s forwards") */
})

$('.quick_menu').mouseenter(function(){
    $('.best_text_001').css("animation","quick_menu 0.5s forwards")
    $('.quick_btn_aria').css("animation","quickBtnOver 0.5s forwards")
})
$('.quick_menu').mouseleave(function(){
    $('.quick_menu').css("animation","quick_menu1 0.5s forwards")
    $('.quick_btn_aria').css("animation","quickBtnLeave 0.5s forwards")
})

/* 퀵가이드 */
const mainBtn = document.querySelectorAll('.guide_btn a')
console.log(mainBtn)
/* Main */
$('.guide_btn:nth-child(1) a').mouseenter(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(1) p').css("animation","on 0.5s forwards")    
})
$('.guide_btn:nth-child(1) a').mouseleave(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(1) p').css("animation","off 0.5s forwards")    
})
$('.guide_btn:nth-child(1) a').click(function(e){
    e.preventDefault();
    vertical.slideTo(0, 1000);
})
/* CATEGORY */
$('.guide_btn:nth-child(2) a').mouseenter(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(2) p').css("animation","on 0.5s forwards")    
})
$('.guide_btn:nth-child(2) a').mouseleave(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(2) p').css("animation","off 0.5s forwards")    
})
$('.guide_btn:nth-child(2) a').click(function(e){
    e.preventDefault();
    vertical.slideTo(1, 1000);
})
/* BEST */
$('.guide_btn:nth-child(3) a').mouseenter(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(3) p').css("animation","on 0.5s forwards")    
})
$('.guide_btn:nth-child(3) a').mouseleave(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(3) p').css("animation","off 0.5s forwards")    
})
$('.guide_btn:nth-child(3) a').click(function(e){
    e.preventDefault();
    vertical.slideTo(2, 1000);
})
/* EQUIPMENT */
$('.guide_btn:nth-child(4) a').mouseenter(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(4) p').css("animation","on 0.5s forwards")    
})
$('.guide_btn:nth-child(4) a').mouseleave(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(4) p').css("animation","off 0.5s forwards")    
})
$('.guide_btn:nth-child(4) a').click(function(e){
    e.preventDefault();
    vertical.slideTo(3, 1000);
})
/* REVIEW */
$('.guide_btn:nth-child(5) a').mouseenter(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(5) p').css("animation","on 0.5s forwards")    
})
$('.guide_btn:nth-child(5) a').mouseleave(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(5) p').css("animation","off 0.5s forwards")    
})
$('.guide_btn:nth-child(5) a').click(function(e){
    e.preventDefault();
    vertical.slideTo(4, 1000);
})
/* EVENT */
$('.guide_btn:nth-child(6) a').mouseenter(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(6) p').css("animation","on 0.5s forwards")    
})
$('.guide_btn:nth-child(6) a').mouseleave(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(6) p').css("animation","off 0.5s forwards")    
})
$('.guide_btn:nth-child(6) a').click(function(e){
    e.preventDefault();
    vertical.slideTo(5, 1000);
})
/* EVENT */
$('.guide_btn:nth-child(7) a').mouseenter(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(7) p').css("animation","on 0.5s forwards")    
})
$('.guide_btn:nth-child(7) a').mouseleave(function(){
    $('.guide_btn p').css("opacity","0")
    $('.guide_btn:nth-child(7) p').css("animation","off 0.5s forwards")    
})
$('.guide_btn:nth-child(7) a').click(function(e){
    e.preventDefault();
    vertical.slideTo(6, 1000);
})

