// //  import 'dotenv/config';
// import { defineConfig } from 'drizzle-kit';
// export default defineConfig({
//   out: './drizzle',
//   schema: './configs/schema.js',
//   dialect: 'postgresql',
//   dbCredentials: {
//     url: 'postgresql://neondb_owner:npg_HnhaU6jvZ7uP@ep-quiet-mode-a5mou5j2-pooler.us-east-2.aws.neon.tech/CarListing?sslmode=require',
//   },
// });
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url: 'postgresql://neondb_owner:npg_HnhaU6jvZ7uP@ep-quiet-mode-a5mou5j2-pooler.us-east-2.aws.neon.tech/CarListing?sslmode=require'
  }
});