import { Component, OnInit } from '@angular/core';
import { BiblesService } from '../../services/bibles.service';

declare function listView(): any
declare function gridView(): any
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  Bibles: any = [];
  selectedbible: any;
  modifiedSelect: any;
  Books: any = [];
  Chapters: any = [];
  hide: boolean = true;
  hideB: boolean = true;
  Cont: boolean = false;
  Content: any = {};
  constructor(public rest: BiblesService) { }

  ngOnInit() {
    this.getFullBible();
    gridView();
    listView();
  }
  getFullBible() {
    this.Bibles = [];
    this.rest.get_full_bibles().subscribe((data: {}) => {
      console.log(data);
      this.Bibles = data;
      this.selectedbible = data[0].id;
    });

  }
  onBibleSelected(val: any) {
    this.getbibleId(val);
  }
  getbibleId(val: any) {
    this.Books = [];
    this.rest.get_books(val).subscribe((data: {}) => {
      console.log(data);
      this.Books = data;

    });

  }
  getBookId(bid: any, blid: any) {

    this.Chapters = [];
    this.rest.get_book(bid, blid).subscribe((data: {}) => {
      console.log(data);
      this.Chapters = data;
      this.hide = false;
    });
    console.log("clicked" + "----" + bid + "----" + blid);
  }

  getChapter(blid: any, chid: any) {

    this.Content = {};
    this.rest.get_chapter(blid, chid).subscribe((data: {}) => {
      console.log(data);
      this.Content = data;
      this.Cont = true;
      this.hideB = false;
    });
    console.log("clicked" + "----" + blid + "----" + chid);
  }
  back() {
    this.hideB = true;
    this.hide = true;
    this.Cont = false;
  }
}
