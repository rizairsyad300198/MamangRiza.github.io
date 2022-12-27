/*--------------------- Copyright (c) 2019 -----------------------
[Master Javascript]
Project: Inland Design - Multipurpose Responsive HTML Template
Version: 1.0.0
Assigned to: Theme Forest
-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var Inland = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

		/*-------------- Inland Design Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/
		
			this.Open_cartbox();
			this.list_radio();
			this.Search_bar_input();
			this.Login_popup();
			this.BannerSlider();
			this.Isotop_gallery();
			this.Magnific_popup();
			this.Team_slider();
			this.Video_popup();
			this.Progress_bar();
			this.Dark_testimonial();
			this.BannerSlider_style2();
			this.why_diffrent_style2();
			this.Team_slider_two();
			this.int_testimonial_slide2();
			this.Counter();
			this.Product_slider();
			this.index3_client_slider();
			this.index3_testimonial();
			this.index4_banner_slider();
			this.index4_testimonial_slider();
			this.Blog_post_img_slider();
			this.PriceRange();
			this.ListGridView();
			this.Product_thumb_slider();
			this.Quantity();
			this.Sign_slider();
			this.date_picker();
			this.niceselect();
			
		},
		
		/*-------------- Inland Design Functions Calling ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		
		// start cartbox open toggle
			list_radio: function() {
				$('.int_credit_dark').on('click', function() {
				  $('.active2').removeClass('active2');
				  $(this).addClass('active2').find('input').prop('checked', true)    
				});
				$('.int_credit_white').on('click', function() {
				  $('.active').removeClass('active');
				  $(this).addClass('active').find('input').prop('checked', true)    
				});

			},
			
			Open_cartbox: function() {
				$(".box_add").on('click', function (e) {
					e.stopPropagation();
					$("body").toggleClass('open_cart');
				});
				$('body').on('click', function(){
					$('body').removeClass('open_cart');
				});
				$('.header_cartbox').on('click', function(event){
					event.stopPropagation();
				});
				$('.int_toggle').on('click', function(){
					$('.int_menu').toggleClass('int_menu_open');
				});
				$('.int_home_dropdown').on('click', function(){
					$(this).toggleClass('int_hr_menu')
				});
				$('.close_menu_int').on('click', function(){
					$('.int_menu.int_menu_open').removeClass('int_menu_open')
				});
				
			},
			
		// End cartbox open toggle
		
		// Search bar box js
			Search_bar_input: function() {
				$('.open_search_bar').on('click', function(){
					$('body').addClass('close_search_bar');
				});
				$('.fa-times').on('click', function(){
					$('body').removeClass('close_search_bar');
				});
				
				$('.setting_toggle').on('click', function(){
					$('.int_profile_open').toggleClass('int_profile_drop');
				});
				
			},
		// Search bar box js	
		
		// Sign up Model js	
			Login_popup: function() {
				$('.int_login_model').on('click', function(){
					$('.int_modal_login').addClass('open_login_model');
				});
				$('.close_login').on('click', function(){
					$('.int_modal_login').removeClass('open_login_model');
				});
				
				$('.int_signup_model').on('click', function(){
					$('.int_modal_signup').addClass('open_signup_model');
				});
				$('.close_login').on('click', function(){
					$('.int_modal_signup').removeClass('open_signup_model');
				});
			},
		
		
		// start swippper slider
			BannerSlider: function() {
				var swiper = new Swiper('.banner_box_wrapper .swiper-container', {
					speed:1000,
					loop:true,
					autoplay:false,
					slidesPerView:1,
					navigation: {
						nextEl: '.banner_box_wrapper .swiper-button-next',
						prevEl: '.banner_box_wrapper .swiper-button-prev',
					},
					
				});
			},
		// End Swipper Slider	
		

		
		
		// Star isotop gallery js 
		
			Isotop_gallery: function() {
				$(window).on('load', function(){
					
					$('.gallery_grid').isotope({
							itemSelector: '.grid-item',
							filter: '*'
					}); 
					$('.int_project_gallery > .gallery_nav > ul > li').on('click', 'a', function() {
						// filter button click
						var filterValue = $( this ).attr('data-filter');
						$('.gallery_grid').isotope({ filter: filterValue });

						//active class added
						$('a').removeClass('gallery_active');
						$(this).addClass('gallery_active');
					});
					
					
					
				});
				
				$('#loadMore').on('click', function(){
					$('.int_view_gallery').addClass('int_view_gallery_view');
					$('.gallery_grid').isotope({
						itemSelector: '.grid-item',
						filter: '*'
					}); 
					
				});
			},
		
		// Star isotop gallery js 
		
		// magnifiv popup for project gallery
			Magnific_popup: function() {
					if($('.view').length > 0){
					$('.view').magnificPopup({
					  type: 'image',
					  
					  gallery: {
						// options for gallery
						enabled: true
					  }
					  
					  // other options
					});
				}
			},
		// magnifiv popup for project gallery
		
		//team slider start
			Team_slider: function() {
				if($('.team_box_wrapper .swiper-container').length > 0){
					var swiper = new Swiper('.team_box_wrapper .swiper-container', {
						slidesPerView: 4,
						spaceBetween: 30,
						freeMode: true,
						speed:1000,
						loop:true,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
						breakpoints: {
							1024: {
							  slidesPerView: 2,
							  spaceBetween: 30,
							},
							768: {
							  slidesPerView: 2,
							  spaceBetween: 30,
							},
							640: {
							  slidesPerView: 1,
							  spaceBetween: 20,
							},
							320: {
							  slidesPerView: 1,
							  spaceBetween: 10,
							}
						}
					  
					});
				}
			},
		//team slider start
		
		//video Pop up start
			Video_popup: function() {
				if($('.int_progresbar_wrapper .video_popup').length > 0){
					$('.int_progresbar_wrapper .video_popup').magnificPopup({ 
					type: 'iframe',
						iframe: {
							markup: '<div class="mfp-iframe-scaler">'+
								'<div class="mfp-close"></div>'+
								'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
								'<div class="mfp-title">Some caption</div>'+
								'</div>',
							patterns: {
								youtube: {
									index: 'youtube.com/', 
									id: 'v=',
									src: 'https://www.youtube.com/embed/BGRif5ClL9o'
									}
								}
						}
						// other options
					});	
				}
			},
		//video Pop up End
		
		
		/*------------------------------------------------------------------*/ 	
		
		//Progress bar start
			Progress_bar: function() {
				if($('.int_progresbar_wrapper .progress_bar').length > 0){
					$(document).ready(function(){
						const time = 1500;
						
							function calculateTime(time, dataCount) {
							return time / dataCount;
							}
							
							$( ".progress_bar" ).each(function( index ) {
							  let count = 0;
								 let label = $(this).children('.label');
								 let line = $(this).children('.line');
								
								 let dataCount = parseInt(label.attr('data-count'));
								 let lineCount = line.children();
								 let runTime = calculateTime(time, dataCount); 
								 setInterval(function(){
									if (count < dataCount) {
									count++;
									label.text(count + '%');
									lineCount.css('width',count + '%');
									
									if (count < 30) {
									  lineCount.css('background','#c6a47e');								  
									} else if (count < 70) {
									  lineCount.css('background','#c6a47e');
									} else if (count === 100) {
									  lineCount.css('background','#c6a47e');
									} else {
									  lineCount.css('background','#c6a47e');
									}
								  }
								},
								runTime);
							});							
					});
				
					
				}
			},	
			
		//Progress bar End
		/*------------------------------------------------------------------*/ 
		
		/*------------------------------------------------------------------*/ 	
		
		//Dark Testimonial
			Dark_testimonial: function() {
				var galleryThumbs = new Swiper('.int_testimonial_wrapper .gallery-thumbs', {
					spaceBetween: 15,
					slidesPerView: 3,
					loop: true,
					speed: 800,
					centeredSlides:true,
					allowTouchMove:false,
					effect: 'coverflow',
					coverflowEffect: {
						rotate: 0,
						stretch:10,
						depth:0,
						modifier: 1,
						slideShadows: false
					},
					breakpoints: {
						1024: {
						  slidesPerView: 3,
						  spaceBetween: 30,
						},
						767: {
						  slidesPerView: 2,
						  spaceBetween: 20,
						},
						640: {
						  slidesPerView: 1,
						  spaceBetween: 20,
						},
						320: {
						  slidesPerView: 1,
						  spaceBetween: 10,
						}
					}
					
					
				});
				
				
				var galleryTop = new Swiper('.int_testimonial_wrapper .gallery-top', {
					spaceBetween: 10,
					loop:true,
					allowTouchMove:false,
					speed: 800,
					slidesPerView: 1,
					pagination: {
						el: '.int_testimonial_wrapper .swiper-pagination',
						clickable: true,
					},
					autoplay: {
						delay: 2500,
						disableOnInteraction: false,
					  },
					thumbs: {
					swiper: galleryThumbs,
					},
				});
			},
		//Dark Testimonial
		
		
			// index2 slider banner start
				BannerSlider_style2: function() {
					if($('.int_slider_banner_style2 .swiper-container').length > 0){
						var swiper = new Swiper('.int_slider_banner_style2 .swiper-container', {
							speed:1000,
							loop:true,
							slidesPerView:1,
							navigation: {
							nextEl: '.int_slider_banner_style2 .swiper-button-next',
							prevEl: '.int_slider_banner_style2 .swiper-button-prev',
							},
							
						});
						
					}
				},
				
			// End index2 slider banner
			
			//Testimonial2 slider start
				int_testimonial_slide2: function() {
					if($('.int_testimonial_slide2 .swiper-container').length > 0){
						 var swiper = new Swiper('.int_testimonial_slide2 .swiper-container', {
						  loop:true,
						  speed: 2000,
						  slidesPerView: 1,
						  navigation: {
							nextEl: '.int_testimonial_slide2 .swiper-button-next',
							prevEl: '.int_testimonial_slide2 .swiper-button-prev',
						  },
						});
					}
				},
			//Testimonial2 slider end
		
		//Index 4 Banner Slider
			index4_banner_slider: function() {	
				var swiper = new Swiper('.int_index4_slider_style4 .swiper-container', {
					loop:true,
					speed: 1000,
					slidesPerView:1,
					autoplay:true,
					effect: 'fade',
					fadeEffect: { crossFade: true },
					pagination: {
						el: '.int_index4_slider_style4 .swiper-pagination',
						clickable: true,
					},
				});
			},
		//Index 3 Banner Slider
		
		// Index4 Testimonial Slider
			index4_testimonial_slider: function() {
				if($('.int_testimonial_style4').length > 0){
					var swiper = new Swiper('.int_testimonial_style4 .swiper-container', {
						loop:true,
						speed: 1000,
						effect: 'fade',
						slidesPerView:1,
						autoplay: {
							delay: 2500,
							disableOnInteraction: false,
						},
						pagination: {
							el: '.int_testimonial_style4 .swiper-pagination',
							clickable: true,
						  },
						});				
					
				}
			},
		// Index4 Testimonial Slider
	
	};
	Inland.init();	

}(jQuery));	
