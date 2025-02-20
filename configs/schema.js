import {json, pgTable,serial,varchar } from "drizzle-orm/pg-core";
 
export const CarListing=pgTable('carListing',{
    id:serial('id').primaryKey(),
    listingtitle:varchar('listingtitle').notNull(),
    OriginalPrice:varchar('OriginalPrice').notNull(),
    sellingprice:varchar('sellingprice').notNull(),
    category:varchar('category').notNull(),
    condition:varchar('condition').notNull(),
    type:varchar('type').notNull(),
    make:varchar('make').notNull(),
    year:varchar('year').notNull(),
    model:varchar('model').notNull(),
    drivetype:varchar('drivetype').notNull(),
    transmission:varchar('transmission').notNull(),
    fueltype:varchar('fueltype').notNull(),
    mileage:varchar('mileage').notNull(),
    enginesize:varchar('enginesize').notNull(),
    cylinder:varchar('cylinder').notNull(),
    color:varchar('color').notNull(),
    door:varchar('door').notNull(),
    offertype:varchar('offertype').notNull(),
    vin:varchar('vin').notNull(),
    listdescription:varchar('listdescription').notNull(),
    features:json('features')

})