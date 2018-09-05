import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() typing = new EventEmitter<string>();

  @Input() value = '';

  debounce = new Subject<string>();

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.typing.emit(filter));
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
}
