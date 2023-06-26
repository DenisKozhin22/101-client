'use client'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import './Slider.scss'
import { Box, Image, useMediaQuery } from '@chakra-ui/react'
// import Image from 'next/image'

const sliderImages = [
	{
		desktop: 'e4anh3e27dwrfwafcc2te3mlga0bvzqm.png',
		mobile: 'e4anh3e27dwrfwafcc2te3mlga0bvzqm-mobile.png',
	},
	{
		desktop: 'e295f1m5prtwd2l5grrjr2qlt2u3o08b.jpg',
		mobile: 'e295f1m5prtwd2l5grrjr2qlt2u3o08b-mobile.png',
	},
	{
		desktop: 'pin0nl06xn0j7xsz9ij0stqtm0ip2eol.jpeg',
		mobile: 'pin0nl06xn0j7xsz9ij0stqtm0ip2eol-mobile.jpeg',
	},
	{
		desktop: 'rg4nsjthelwvkytw6l3jf3ig8we2y4ld.jpeg',
		mobile: 'rg4nsjthelwvkytw6l3jf3ig8we2y4ld-mobile.jpeg',
	},
]

const Slider: FC = () => {
	const [isLargerThan650] = useMediaQuery('(max-width: 650px)')
	return (
		<Box maxH='350px' w='full' mb='4'>
			<Swiper
				modules={[Autoplay, Pagination]}
				autoplay={{ delay: 3500 }}
				pagination={true}
				className='mySwiper'>
				{sliderImages.map(item => (
					<SwiperSlide key={item.desktop}>
						<Image
							objectFit={isLargerThan650 ? 'contain' : 'cover'}
							objectPosition='center'
							// src={`/slider/${item.desktop}`}
							srcSet={`/slider/${item.mobile} 400w , /slider/${item.desktop}`}
							alt={item.desktop}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}

export default Slider
