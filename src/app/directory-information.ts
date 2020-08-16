import { FileInformation } from './file-information';

export class DirectoryInformation {
  absolutePath: string;
  fileSize: string;

  directoryPath: string;
  files: FileInformation[];
  directories: DirectoryInformation[];
  exist: boolean;
}
