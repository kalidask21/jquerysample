const winston = require('winston');

const logger = winston.createLogger({
      level: 'silly',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'LogFile.log' , prettyPrint: true }),
        
      ]
});

module.exports = {
   logger
}