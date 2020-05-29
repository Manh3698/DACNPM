import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service'
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  datas;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe((data: any) => {
      this.datas = data.data.data;
      // console.log(this.datas)
    });
  }

}
