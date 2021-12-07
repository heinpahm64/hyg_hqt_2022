import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(
    private httpClient: HttpClient
  ) { }
  postRegisterInfo(hoten, congty, email, dienthoai, diachinhanbanh, soluonghop, ngaycanbanh, ghichukhac): Observable<any> {
    var header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    return this.httpClient.post(environment.apiIp + '/input', {
        'hoten': hoten,
        'congty': congty,
        'email': email,
        'dienthoai': dienthoai,
        'diachinhanbanh': diachinhanbanh,
        'soluonghop': soluonghop,
        'ngaycanbanh': ngaycanbanh,
        'ghichukhac': ghichukhac
      }
    );
  }
}
