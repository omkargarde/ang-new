import { Component, OnInit } from '@angular/core';
import { LogService2 } from 'src/app/shared/logging-2/log.service-1';
import { LogService } from 'src/app/shared/logging/log.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  //  i:number=0;
  result:number = 0;
   min:number = Math.ceil(0);
     max:number = Math.floor(1);
  constructor(private logger:LogService,private logger2:LogService2) { }

  ngOnInit(): void {
    // this.i=Math.round(Math.random());
    
     this.result=Math.floor(Math.round(Math.random()));
    if( this.result == 0){
      this.logger.log("Hello World");
    }
    else{
      this.logger2.log("Bonjour Monde");
    }
  }

}
