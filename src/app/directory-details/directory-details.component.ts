import { Component, OnInit } from '@angular/core';
import { FileUtilityService } from '../file-utility.service';
import { FileInformation } from '../file-information';
import { DirectoryInformation } from '../directory-information';

@Component({
  selector: 'app-directory-details',
  templateUrl: './directory-details.component.html',
  styleUrls: ['./directory-details.component.scss'],
})
export class DirectoryDetailsComponent implements OnInit {
  directoryPath: string = ' ';
  directoryInformation: DirectoryInformation;
  showFileInfo: boolean;
  showRequired: boolean;
  doesnotexist: boolean;

  constructor(private fileUtilityService: FileUtilityService) {}

  ngOnInit(): void {}

  fetchDirDetail() {
    if (this.directoryPath == ' ') {
      this.showRequired = true;
    } else {
      this.directoryPath = this.directoryPath.replace(/\\/g, '/').trim();
      this.fileUtilityService
        .getDirectoryInformation(this.directoryPath)
        .subscribe((response: DirectoryInformation) => {
          console.log(response);
          if (!response.exist) {
            this.doesnotexist = true;
          } else {
            this.directoryInformation = response;
            console.log(this.directoryInformation);
            this.showFileInfo = true;
            this.showRequired = false;
            this.doesnotexist = false;
          }
        });
    }
  }

  resetDetail() {
    this.directoryPath = '';
    this.directoryInformation = null;
    this.showFileInfo = false;
    this.showRequired = false;
    this.doesnotexist = false;
  }
}
