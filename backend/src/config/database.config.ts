import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'nc_graphql',
  password: process.env.DB_PASSWORD || 'S3cret',
  database: process.env.DB_DATABASE || 'Rentee.db.dev',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: process.env.NODE_ENV !== 'production',
  ssl: process.env.NODE_ENV === 'production',
}));
