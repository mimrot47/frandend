import {Component} from '@angular/core'

@Component({
  selector:'.app-book',
  templateUrl:'./book.component.html'
})

export class bookComponent{
  userName:string="";
  showMessage:boolean=false;
  sideNav:string="expand";

  constructor(){
    this.sideNav="collaps"
  }

  checkenghth(){
    length = this.userName.length;
    this.showMessage=true;
    this.sideNav="expand";
  }
  getColor(){
    return this.sideNav=='collaps'?'red':'green'
  }
}
