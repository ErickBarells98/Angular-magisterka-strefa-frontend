import { Component, Input, OnInit } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent implements OnInit {

  faCircleDown = faArrowCircleDown;

  @Input() laboratories: any = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  handleDownload(id: string,file: string,type: string){
    this.fileService.downloadFile(id,file,type);
  }

}
