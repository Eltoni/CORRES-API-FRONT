import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export abstract class BaseService {

   protected UrlServiceV1: string ="https://localhost:7089/";
   //protected UrlServiceV1: string ="https://devioapicorre.azurewebsites.net/";
    protected ObterHeaderJson() {
        return {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json'
             })
         };
    }

     protected extractData(response: any) {
         return response.data || {};
     }
    
    protected serviceError(response: Response | any) {
        
        let customError: string[] = [];

        if (response instanceof HttpErrorResponse) {

            if(response.statusText === 'Unknown Error'){
                customError.push('Ocorreu um erro desconhecido!')
                response.error.errors = customError;
            }
        }
       

        console.error(response);
        return throwError(response);
    }


}