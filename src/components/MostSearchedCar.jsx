import React from 'react'
import FakeData from '../add-listing/Shared/FakeData'
import CarItems from './CarItems';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function MostSearchedCar() {
    console.log(FakeData.carList);
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Serched Car</h2>
        <Carousel>
        <CarouselContent>
        {FakeData.carList.map((car,index)=>(
          <CarouselItem className='basis-1/5'>
            <CarItems car={car}/>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default MostSearchedCar