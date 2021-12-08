import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'todo-input',
  template: `
    <input class="todo-input"
          (keyup.enter)="changeTitle(inputElement.value)"
          #inputElement>
    <button (click)="changeTitle(inputElement.value)">
      Save
    </button>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title: string = 'my title';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
