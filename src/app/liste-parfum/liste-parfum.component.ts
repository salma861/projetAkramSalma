import { Component, OnInit } from '@angular/core';
import { ParfumsService } from '../parfums.service';

@Component({
  selector: 'app-liste-parfum',
  templateUrl: './liste-parfum.component.html',
  styleUrls: ['./liste-parfum.component.css']
})
export class ListeParfumComponent implements OnInit {
 parfum=[];
 recherche: string;

  constructor(private Parfum:ParfumsService) { }

  Search(){
    if (this.recherche != ""){
    this.parfum = this.parfum.filter(res => 
      {  return res.nom.toLocaleLowerCase().match(this.recherche.toLocaleLowerCase());
    });
  }else if (this.recherche == ""){
    this.ngOnInit();
  }
  }
  
 ngOnInit() {
    this.parfum=this.Parfum.parfum;
  }

}
