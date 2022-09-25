import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaboratoriesService } from '../laboratories.service';

@Component({
  selector: 'app-laboratories-details',
  templateUrl: './laboratories-details.component.html',
  styleUrls: ['./laboratories-details.component.css']
})
export class LaboratoriesDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private laboratoriesService: LaboratoriesService) { }

  id: string = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.laboratoriesService.fetchLaboratoryData(this.id).subscribe({
      //must do
    })
  }

}
