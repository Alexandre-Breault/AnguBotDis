import {ServicescriptPHPService} from '../servicescript-php.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor(private  serviceName:ServicescriptPHPService, private _http: HttpClientModule) { }

  ngOnInit() {
  }
  latestRates() {
    return 0
  }
  startPHP(): void {
    this.serviceName.performGetEx().subscribe();
    }
}
