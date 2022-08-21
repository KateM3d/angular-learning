import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent
  implements
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor called', this.postImg);
  }

  ngOnInit() {
    //runs once when init
    console.log('ngOnInit() called');
  }

  ngDoCheck() {
    //runs after the change detection sycle has accured
    console.log('ngDoCheck() called');
  }

  ngOnChanges() {
    //run multiple times. run when changes are nade to the component
    console.log('ngOnChanges() called');
  }

  ngAfterContentInit() {
    //after the content has been initialized. runs once
    console.log('ngAfterContentInit() called');
  }

  ngAfterContentChecked() {
    //runs after the content has been checked for changes
    console.log('ngAfterContentChecked() called');
  }

  ngAfterViewInit() {
    // components template has been initialized. runs once
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked() {
    //after the components template has been checked for changes
    console.log('ngAfterViewChecked() called');
  }

  ngOnDestroy() {
    //runs when the component will be destroyed
    console.log('ngOnDestroy()');
  }
}
