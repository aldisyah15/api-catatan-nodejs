import {logger} from './logger.js';
import {PrismaClient} from '@prisma/client';

export const prisma = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'event',
        level: 'error',
      },
    ],
  })

  prisma.$on('query', (e)=> {
    logger.info(e.query)
  })

  prisma.$on('error', (e)=> {
    logger.error(e.error)
  })

  
