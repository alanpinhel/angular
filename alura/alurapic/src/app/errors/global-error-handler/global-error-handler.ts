import { Router } from '@angular/router';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy, HashLocationStrategy } from '@angular/common';
import * as StackTrace from 'stacktrace-js';

import { UserService } from '../../core/user/user.service';
import { ServerLogService } from './server-log.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const userService = this.injector.get(UserService);
    const serverLogService = this.injector.get(ServerLogService);
    const router = this.injector.get(Router);

    // Varia de acordo com estratégia de roteamento:
    // PathLocationStrategy || HashLocationStrategy
    const url = location instanceof HashLocationStrategy ? location.path() : '';
    console.log('passei pelo handler');

    const message = error.message ? error.message : error.toString();

    if (environment.production) {
      router.navigate(['/error']);
    }

    StackTrace.fromError(error).then(stackFrames => {
      const stackAsString = stackFrames.map(sf => sf.toString()).join('\n');
      console.log(error);
      console.log(stackAsString);

      serverLogService.log({
        message,
        url,
        userName: userService.getUserName(),
        stack: stackAsString
      }).subscribe(() => console.log('Error logged on server'), err => {
        console.log(err);
        console.log('Fail to send error log to server');
      });
    });
  }
}
