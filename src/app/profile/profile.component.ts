import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from '@app/_services';
import { UserService } from '@app/_services/user.service';
import { LinkEmployerComponent } from './link-employer/link-employer.component';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profForm: FormGroup;
  firstName=  new FormControl('',Validators.required);
  lastname = new FormControl('',Validators.required);
  address = new FormControl('',Validators.required);
  gender = new FormControl('',Validators.required);
  email = new FormControl('',Validators.required);
  cell = new FormControl('',Validators.required);
  tell = new FormControl('',Validators.required);
  fax = new FormControl('',Validators.required);
  code = new FormControl('',Validators.required);
  empName = new FormControl('',Validators.required);
  tradingName = new FormControl('',Validators.required);
  regno = new FormControl('',Validators.required);
  sdlNo = new FormControl('',Validators.required);
  mainSdlNo = new FormControl('',Validators.required);
  setdaId=  new FormControl('',Validators.required);
  SICCode = new FormControl('',Validators.required);
  siteNo = new FormControl('',Validators.required);
  contactemail = new FormControl('',Validators.required);
  contactTel = new FormControl('',Validators.required);
  contactFax = new FormControl('',Validators.required);
  contactPAddress = new FormControl('',Validators.required);
  contactPostalAddress = new FormControl('',Validators.required);
  code2 = new FormControl('',Validators.required);
  code3 = new FormControl('',Validators.required);
  latitude = new FormControl('',Validators.required);
  provinceCode = new FormControl('',Validators.required);
  countryCode = new FormControl('',Validators.required);
  longitude = new FormControl('',Validators.required);
  empStatus = new FormControl('',Validators.required);
  startDate = new FormControl('',Validators.required);
  endDate = new FormControl('',Validators.required);
  Datestamp = new FormControl('',Validators.required);
  filter1 = new FormControl('',Validators.required);
  fitler2 = new FormControl('',Validators.required);
  sdl :any;
  user : any;
  constructor(private fb: FormBuilder,public dialog: MatDialog, private userService :UserService,private accountService:AccountService) {
    this.profForm= new FormGroup({
      firstName: new FormControl(),
      lastname: new FormControl(),
      address : new FormControl(),
      gender : new FormControl(),
      email : new FormControl(),
  cell : new FormControl(),
  tell : new FormControl(),
  fax : new FormControl(),
  code : new FormControl(),
  empName : new FormControl(),
  tradingName : new FormControl(),
  regno : new FormControl(),
  sdlNo : new FormControl(),
  mainSdlNo : new FormControl(),
  setdaId:  new FormControl(),
  SICCode : new FormControl(),
  siteNo : new FormControl(),
  contactemail : new FormControl(),
  contactTel : new FormControl(),
  contactFax : new FormControl(),
  contactPAddress : new FormControl(),
  contactPostalAddress : new FormControl(),
  code2 : new FormControl(),
  code3 : new FormControl(),
  latitude : new FormControl(),
  provinceCode : new FormControl(),
  countryCode : new FormControl(),
  longitude : new FormControl(),
  empStatus : new FormControl(),
  startDate : new FormControl(),
  endDate : new FormControl(),
  Datestamp : new FormControl(),
  filter1 : new FormControl(),
  fitler2 : new FormControl()
   });

   this.loadUserInfo();
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LinkEmployerComponent, {
      width: '250px',
      data: {name: this.sdl, animal: this.sdl}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  loadUserInfo()
  {
    
    var user = this.accountService.userValue;
    console.log(user);
    this.userService.GetUser("test@gmail.com").subscribe((response)=> 
    {
      console.log(response);
      const success = this.userService.AddUser(response.email.value,response.password.value,response.firstName.value,response.lastName.value,response.idNumber.value,response.email.value,response.mobile.value);

    });
  }
}
