import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserProfileSerService {
  full_url = "https://api.mlab.com/api/1/databases/angularjs/collections/shopping/?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1";
 //full_url = "https://api.mlab.com/api/1/databases/angularjs/collections/employee/?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1";
 
  constructor(private http:HttpClient) { }

    userprofile(){
      return this.http.get(this.full_url);
    }
    
}
