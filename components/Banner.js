import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false} 
      showIndicators={false}
      showThumbs={false}
      interval={5000}
      >
         <div className="h-20 ">
            <img loading='lazy' src="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="new" />
        </div>
       
        <div>
            <img loading="lazy" src="https://links.papareact.com/gi1" alt="new" />
        </div> 
        <div className="h-20 ">
            <img loading='lazy' src="https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="new" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
