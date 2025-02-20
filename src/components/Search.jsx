import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from './ui/separator'
import { CiSearch } from "react-icons/ci";
import Data from '../add-listing/Shared/Data';

  

function Search() {
  return (
    <div className='p-2 md:p-5  bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
        <Select>
  <SelectTrigger className='outline-none md:border-none w-full shadow-none text-lg'>
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
  <SelectItem className='bg-white' value="light">Light</SelectItem>
    <SelectItem className='bg-white' value="dark">Dark</SelectItem>
    <SelectItem className='bg-white' value="system">System</SelectItem>
  </SelectContent>
</Select>
<Separator orientation="vertical" className=' hidden md:block'/>
<Select>
  <SelectTrigger className='outline-none md:border-none w-full shadow-none text-lg'>
    <SelectValue placeholder="CarMakes" />
  </SelectTrigger>
  <SelectContent>
  
    {Data.CarMakes.map((maker,index)=>
  (
    <SelectItem className='bg-white' value={maker.name}>{maker.name}</SelectItem>

  ))}
  </SelectContent>
</Select>
<Separator orientation="vertical" className='hidden md:block'/>

<Select>
  <SelectTrigger className='outline-none md:border-none w-full shadow-none text-lg'>
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
  {Data.Pricing.map((price,index)=>
  (
    <SelectItem className='bg-white' value={price.amount}>{price.amount}</SelectItem>

  ))}
  </SelectContent>
</Select>
<div> 
<CiSearch className='text-[40px] bg-black text-white rounded-full hover:scale-105 cursor-pointer ' />
</div>
 </div>
  )
}

export default Search