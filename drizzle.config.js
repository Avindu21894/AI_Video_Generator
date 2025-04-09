/** @type {import('drizzle-kit').Config} */
module.exports = {
    schema: './src/configs/schema.js', 
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_VUJL2TvS6pol@ep-quiet-silence-a5je8tij-pooler.us-east-2.aws.neon.tech/ai-short-video-generator?sslmode=require',
    },
  };