import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '@app/_services/user.service';
import { ToastrService } from 'ngx-toastr';
import { ProfileComponent } from '../profile.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-link-employer',
  templateUrl: './link-employer.component.html',
  styleUrls: ['./link-employer.component.scss']
})
export class LinkEmployerComponent implements OnInit {
  public link: FormGroup;
  constructor(private toaster : ToastrService,private fb: FormBuilder, public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private userService:UserService) { }

  ngOnInit(): void {
    this.link = this.fb.group({
      sdlNumber: ['',Validators.required]
  });
}

onSubmit()
{

  this.userService.GetEmployer("23423     ").subscribe((results)=> {
    console.log(results);
  })
  this.toaster.success('linking employee')
}

onNoClick(): void {
  this.dialogRef.close();
}

}
