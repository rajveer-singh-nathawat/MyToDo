import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from '../service/http/http-intercepter-basic-auth.service';

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true
    }
];