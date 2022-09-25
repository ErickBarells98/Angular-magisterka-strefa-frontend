import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  downloadFile(fileId: string, fileName: string, typeId: string){
    this.http.get(`api/Course/downloadFile?typeId=${typeId}&fileId=${fileId}`,{responseType: 'blob'})
    .subscribe({
      next: response => {
        const blob = new Blob([response])
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download',fileName);
        document.body.appendChild(link);
        link.click();

        setTimeout(function() {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        }, 200)
      },
      error: error => console.log(error),
      complete: () => {

      }
    })
  }

}
