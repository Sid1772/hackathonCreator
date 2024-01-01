import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit,OnChanges {
  isDropdownOpen=false;
  @Input('data') data:Array<any>=[]
  selection:any
  @Output() newSelection=new EventEmitter<any>()
  @HostListener("window:click",['$event.target'])
  getClickListener(e:any){
    if(e?.closest(".dropdownContainer")){
      return
    } 
    else{
      this.isDropdownOpen=false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.selection=this.data[0]
  }
  
  toggleDropdown(){
    this.isDropdownOpen=!this.isDropdownOpen
    
  }
  select(item:any){
    this.selection=item
    this.isDropdownOpen=false;
    this.newSelection.emit(item)
  }
}
