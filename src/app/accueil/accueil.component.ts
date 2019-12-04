import { Component, OnInit } from '@angular/core';
import { ParfumsService } from '../parfums.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  l:any;
mdp:string;
us:string;
submitted:boolean=false;

  constructor(private parfumsService:ParfumsService) { }
  onSubmit(f:NgForm){
    this.submitted=true;
  const check=this.parfumsService.check(this.us,this.mdp);
  if(check==true){
  return true;}
  else {return false;}

}

  ngOnInit() {
  }

}
