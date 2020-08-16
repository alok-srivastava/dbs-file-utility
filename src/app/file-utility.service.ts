import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileInformation } from './file-information';
import { DirectoryInformation } from './directory-information';

@Injectable({
  providedIn: 'root',
})
export class FileUtilityService {
  constructor(private httpClient: HttpClient) {}

  getFileInformation(path: string): Observable<FileInformation> {
    let url =
      'http://localhost:8080/api/fileutility/getFileDetails?filePath=' + path;
    return this.httpClient.get<FileInformation>(url);
  }

  getDirectoryInformation(path: string): Observable<DirectoryInformation> {
    let url =
      'http://localhost:8080/api/fileutility/getDirectoryDetails?directoryPath=' +
      path;
    return this.httpClient.get<DirectoryInformation>(url);
  }
}
