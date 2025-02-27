import Header from '@/components/ui/Header'
import React, { useState } from 'react'
import InputField from './components/InputField'
// import CarDetails from './../Shared/CarDetails.json'
import CarDetails from './Shared/CarDetails.json'
import DropdownField from './components/DropdownField'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@radix-ui/react-select'
import features from './Shared/features.json'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'
import { db } from './../../configs'
import { CarListing } from './../../configs/schema'
import TextAreaField from './components/TextAreaField'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'

function AddListing() {
  const [formData,setFormData]=useState([]);
  const [featuresData,setFeaturesData]=useState([]);
  const handleInputChange=(name,value)=>{
      setFormData((preData)=>({
        ...preData,
        [name]:value
      }))
      console.log(formData);

  }
  const handleFeatureChange=(name,value)=>{
    setFeaturesData((prevData)=>({
      ...prevData,
      [name]:value
    }))
    console.log(featuresData);
  }
  const onSubmit=async (e)=>{
    e.preventDefault();
    console.log(formData);

    const result=await db.insert(CarListing).values({
      ...formData,
      features:featuresData
    });
    try{
    if(result)
    {
      console.log("Data Saved")
    }
    }catch(e){
      console.log("error",e)
    }

  }
  return (
    <div><Header/>
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className='p-10 border rounded-xl mt-10 '>
              {/* Car Details */}
              <div>
                <h2 className='font-medium text-xl mb-6'>Car Details</h2> 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {CarDetails.CarDetails.map((item,index)=>( 
                    <div key={index}>
                    <label className='text-sm flex gap-2 items-center mb-1'><IconField icon={item?.icon}/>{item?.label} {item.required&&<span className='text-red-500'>* </span>}</label>
                       {item.fieldType=='text'||item.fieldType=='number' ? <InputField item={item} handleInputChange={handleInputChange}/>
                       :item.fieldType=='dropdown'
                       ?<DropdownField item={item} handleInputChange={handleInputChange}/>
                       :item.fieldType=='textarea'?<TextAreaField item={item} handleInputChange={handleInputChange}/>
                       :null }
                    </div>
                   ))}
                  </div>
                  </div>
                  <Separator className='my-6'/>
                  {/* feature List  */}
                  <div>
                    <h2 className='font-medium text-xl my-6'> Feature List</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                      {features.features.map((item,index)=>(
                        <div key={index} className='flex gap-2 items-center'>
                          <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)} className='border-black rounded-2xl'/><h2>{item.label}</h2>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Car Images */}
                  <Separator className='my-6'/>
                  <UploadImages/>
                  <div className=' mt-10 flex justify-end'>
                  <Button type="submit" onClick={(e)=>onSubmit(e)} className='bg-black text-white'>Submit</Button>
                  </div>
            </form>
        </div> 
    </div>
  )
}

export default AddListing