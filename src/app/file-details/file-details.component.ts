import { Component, OnInit } from '@angular/core';
import { FileUtilityService } from '../file-utility.service';
import { FileInformation } from '../file-information';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss'],
})
export class FileDetailsComponent implements OnInit {
  filePath: string = ' ';
  fileInformation: FileInformation;
  showFileInfo: boolean;
  showRequired: boolean;
  doesnotexist: boolean;

  constructor(private fileUtilityService: FileUtilityService) {}

  ngOnInit(): void {}

  fetchFileDetail() {
    if (this.filePath == ' ') {
      this.showRequired = true;
    } else {
      this.filePath = this.filePath.replace(/\\/g, '/').trim();

      this.fileUtilityService
        .getFileInformation(this.filePath)
        .subscribe((response: FileInformation) => {
          if (!response.exist) {
            this.doesnotexist = true;
          } else {
            this.fileInformation = response;
            console.log(this.fileInformation);
            this.showFileInfo = true;
            this.showRequired = false;
            this.doesnotexist = false;
          }
        });
    }
  }

  resetFileDetail() {
    this.filePath = '';
    this.showFileInfo = false;
    this.fileInformation = null;
  }
}
