// import { schedule, validate } from 'node-cron';
// import { AppError } from '../exceptions/AppError';
// import config from '../config';
// import { RedisClient } from '../utils/redisClient';
// import { SyncService } from '../services/SyncService';
// import { JobType } from '../models/entities/JobType';
// import loggerFactory from '../utils/logging';
// import RequestHelper from '../utils/requestHelper';
// import { MedicationService } from '../services/MedicationService';
// import { PPEService } from '../services/PPEService';
// import { BedCategoriesService } from '../services/BedCategoriesService';
// import { VentilatorService } from '../services/VentilatorService';
// import { StaffingRatioService } from '../services/StaffingRatioService';
// import { StaffingDataService } from '../services/StaffingDataService';
// import { QuarantineService } from '../services/QuarantineService';
// import { NotificationService } from '../services/NotificationService';
// import { Role } from '../models/Role';
// import { IUserToken } from '../models/IUserToken';
// const logger = loggerFactory.getLogger('SyncerCron');
// export class SyncerCron {
//   constructor(protected _redisClient: RedisClient) {
//     // body
//   }
//   _start(pattern: string) {
//     if (!this._validate(pattern)) throw new AppError('Invalid Cron pattern', `Invalid Cron pattern [${pattern}]`);
//     const task = schedule(pattern, () => {
//       void (async () => {
//         await this.sync();
//       })();
//     });
//     try {
//       task.start();
//       logger.info('Cron task started!');
//     } catch (error) {
//       task.stop();
//     }
//   }

//   async sync() {
//     try {
//       logger.info('Sync Cron task started');
//       const requestHelper = new RequestHelper();
//       await new SyncService(
//         new MedicationService(requestHelper, this._redisClient),
//         new PPEService(requestHelper, this._redisClient),
//         new BedCategoriesService(requestHelper, this._redisClient),
//         new VentilatorService(requestHelper, this._redisClient),
//         new StaffingRatioService(requestHelper, this._redisClient),
//         new StaffingDataService(requestHelper, this._redisClient),
//         new QuarantineService(requestHelper, this._redisClient),
//         new NotificationService(requestHelper, this._redisClient),
//         this._redisClient,
//       ).sync(JobType.all, new Date().toString(), new Date().toString(), config.accessToken, <IUserToken>{
//         role: Role.manager,
//       });
//     } catch (error) {
//       logger.error(error);
//       throw error;
//     }
//   }

//   protected _validate(pattern: string) {
//     return validate(pattern);
//   }
// }
