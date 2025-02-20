import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { IoOptions } from 'react-icons/io5'
  
function DropdownField({item,handleInputChange}) {
  return (
    <div>
    <Select onValueChange={(value)=>handleInputChange(item.name,value)} required={item.required}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder={item.label} />
  </SelectTrigger>
  <SelectContent>
    <SelectItem className='bg-white' value="light">Light</SelectItem>
    {item?.options?.map((options,index)=>(
        <SelectItem className='bg-white' value={options}>{options}</SelectItem>
 
    ))}
  </SelectContent>
</Select>

    </div>
  )
}

export default DropdownField