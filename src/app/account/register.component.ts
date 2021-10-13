import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AccountService, AlertService } from '@app/_services';
import { UserService } from '@app/_services/user.service';

@Component({ templateUrl: 'register.component.html', styleUrls: ['./register.component.scss']})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    regForm: FormGroup;
    firstName=  new FormControl('',Validators.required);
    lastname = new FormControl('',Validators.required);
    Idno = new FormControl('',Validators.required);
    mobile = new FormControl('',Validators.required);
    email = new FormControl('',Validators.required);
    password = new FormControl('',Validators.required);
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService, private userService: UserService,private toastr: ToastrService
    ) { 
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            idNumber: ['', Validators.required],
            mobile : ['', Validators.required],
            email : ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
        debugger;
        // reset alerts on submit
        this.alertService.clear();

        this.loading = true;
        
        // const success = this.userService.AddUser(this.f.email.value,this.f.password.value,this.f.firstName.value,this.f.lastName.value,this.f.idNumber.value,this.f.email.value,this.f.mobile.value);

        // if(success)
        // {
        //     this.toastr.success('Registration successful')
        // }
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });

        

    }
    
}