import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.sass']
})
export class BookformComponent implements OnInit {

  @Output() responseForm = new EventEmitter<string>();
  @Input() aptSelected;
  bookForm: FormGroup;
  errorMsg = '';
  confirmationBooking = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.aptSelected);
    this.createForm()
  }
  createForm(){
    this.bookForm = this.fb.group({
      name: [{ value: '', disabled: false }, Validators.required],
      postalCode: [{ value: '', disabled: false }, Validators.required],
      city: [{ value: '', disabled: false }, Validators.required],
      email: [{ value: '', disabled: false }, [Validators.required, Validators.email]]
    });
  }
  confirm(){
    this.errorMsg = '';
    if(!this.bookForm.invalid) {
      this.confirmationBooking = true;
    } else{
      this.errorMsg = 'error in the form take a look.'
    }
  }
  close(){
    // send booking to backend
    console.log(this.bookForm.value);
    this.responseForm.emit('Book of ' + this.aptSelected.name + 'is finished')
  }
  cancel(){
    this.responseForm.emit('Cancelled')
  }
}
