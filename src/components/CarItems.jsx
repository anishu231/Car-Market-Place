import React from 'react'
import { Separator } from './ui/separator'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { IoOpenOutline } from "react-icons/io5";
function CarItems({car}) {
  return (
    <div className='rounded-xl bg-white hover:sh cursor-pointer'>
    <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>
        <img src={car?.image} width={'100%'} height={250} className='rounded-t-xl'/>
        <div className='p-4'>
          <h2 className='font-bold text-lg text-black mb-2'>{car?.name}</h2>
          <Separator/>
          <div className='grid grid-cols-3 mt-5'>
            <div className='flex flex-col items-center'>
            <BsFillFuelPumpFill className='text-lg mb-2' />
            <h2>{car.miles} Miles</h2>
            </div>
            <div className='flex flex-col items-center'>
            <BsSpeedometer2 className='text-lg mb-2' />
            <h2>{car.fuelType}</h2>
            </div>
            <div className='flex flex-col items-center'>
            <GiGearStickPattern  className='text-lg mb-2'/>
            <h2>{car.gearType}</h2>
            </div>
          </div>
          <Separator className='my-2'/>
          <div className='flex items-center justify-between'>
            <h2 className='font-bold text-xl'> ${car.price}</h2>
            <h2 className='text-primary text-black flex gap-2 items-center'> <IoOpenOutline />View Details</h2>
          </div>
        </div>
    </div>
  )
}

export default CarItems