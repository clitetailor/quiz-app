import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class QuizService {
    private apiUrl = "http://592a966090c9d500119cdc18.mockapi.io/api/report";

    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json())
    }
    Search(keyword: string): Observable<any[]> {
        return this._http.get(this.apiUrl+"?search="+keyword).map((response: Response) => response.json())
    }
    GetSingle(id: number): Observable<any> {
        return this._http.get(this.apiUrl + "/" + id).map((response: Response) => response.json())
    }
    Update(id: number, data: any): Observable<any> {
        return this._http.put(this.apiUrl + "/" + id, data).map((response: Response) => response.json())
    }
    Add(data: any): Observable<any> {
        return this._http.post(this.apiUrl, data).map((response: Response) => response.json())
    }
    Delete(id:number): Observable<any> {
        return this._http.delete(this.apiUrl+"/"+ id).map((response: Response) => response.json())
    }
}
