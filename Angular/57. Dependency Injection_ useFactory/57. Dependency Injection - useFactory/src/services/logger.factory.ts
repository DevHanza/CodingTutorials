import { ConsoleLoggerService } from './console.logger.service';
import { FileLoggerService } from './file.logger.service';
import { TestService } from './test.service';

const loggerFunction = (testService: TestService) =>
  testService.status ? new ConsoleLoggerService() : new FileLoggerService();

export const LoggerFactory = {
  provide: ConsoleLoggerService,
  useFactory: (testService: TestService) =>
    testService.status ? new ConsoleLoggerService() : new FileLoggerService(),
  deps: [TestService],
};
