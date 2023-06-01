import { Injectable } from '@angular/core';
import{HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicerService {
geturl="http://localhost:8000/getall"
  constructor(private http:HttpClient) { }
  getallusers(){
    return this.http.get(this.geturl)
  }
}
