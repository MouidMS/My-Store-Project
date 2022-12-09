import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  @Output() name: EventEmitter<string> = new EventEmitter();

  userFullName: string = '';
  cardNumber!: number;
  address: string = '';
  email: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.name.emit(this.userFullName);
  }
}
