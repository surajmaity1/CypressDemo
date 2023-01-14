import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  @Input() count = 0;
  @Output() change = new EventEmitter();

  ngOnInit(): void{}

  increment(){
    this.count++;
    this.change.emit(this.count);
  }
  decrement(){
    this.count--;
    this.change.emit(this.count);
  }
}
