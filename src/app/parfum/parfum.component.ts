import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { ParfumsService } from '../parfums.service';

@Component({
  selector: 'app-parfum',
  templateUrl: './parfum.component.html',
  styleUrls: ['./parfum.component.css']
})
export class ParfumComponent implements OnInit {
  detail:string="Détail du parfum";
  parfum=[];
  identifiant:string; 

  constructor( private activatedRoute:ActivatedRoute , private Parfum:ParfumsService ) { }

  ngOnInit() { 
    this.parfum=this.Parfum.parfum;
    this.identifiant = this.activatedRoute.snapshot.params['id'] ;
  }
  onSupprime(indice:number){
    this.Parfum.Delete(indice);
  }
  }

