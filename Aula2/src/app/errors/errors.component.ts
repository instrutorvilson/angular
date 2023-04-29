import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent {
  msg:string = ""
  constructor(
    private route: ActivatedRoute){
      this.msg = route.snapshot.paramMap.get('msg') || ""
    }
}
