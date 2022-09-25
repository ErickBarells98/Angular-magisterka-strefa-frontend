import { Component, Input, OnInit } from '@angular/core';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  faCircleDown = faArrowCircleDown;

  @Input() lectures: any = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  handleDownload(id: string,file: string,type: string){
    this.fileService.downloadFile(id,file,type);
  }

}
