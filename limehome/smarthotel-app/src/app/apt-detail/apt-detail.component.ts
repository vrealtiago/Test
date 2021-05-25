import {Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-apt-detail',
  templateUrl: './apt-detail.component.html',
  styleUrls: ['./apt-detail.component.sass']
})
export class AptDetailComponent implements OnChanges {
  itemSelected = null;
  aptId;
  @Input()
  get aptSelectById() {
    return this.aptId
  }
  @Output() aptSelectChange = new EventEmitter();
  // fake data for apts card
  apts = [
    {
      id:'apt_Augsburg',
      name:'Augsburg Pilgerhausstraße',
      distance:'150m from city centre',
      dayPrice:'€124',
      info:'Designs may vary',
      photo:'assets/images/apts/Augsburg_apt.png',
    },
    {
      id:'apt_Bamberg',
      name:'Bamberg Maximiliansplatz',
      distance:'In the Old Town',
      dayPrice:'€70',
      info:'Designs may vary',
      photo:'assets/images/apts/Bamberg_apt.png',
    },
    {
      id:'apt_Berlin',
      name:'Berlin Am Friedrichshain',
      distance:'200m from Alexanderplatz',
      dayPrice:'€94.4',
      info:'Designs may vary',
      photo:'assets/images/apts/Berlin_apt.png',
    }
  ]
  constructor() { }

  ngOnChanges() {
    this.selectItem(this.aptSelectById)
  }
  selectItem(itemId){
    if(itemId !== '') {
      const tst = document.getElementById(itemId);
      tst.scrollIntoView({behavior: 'smooth'});
    }
  }
  aptSelectedForm(apt) {
    this.itemSelected = apt;
  }
  resultForm(result){
    console.log(result)
    this.itemSelected = null;
  }
  set aptSelectById(val){
    this.aptId = val;
    this.aptSelectChange.emit(this.aptId);
  }

}
