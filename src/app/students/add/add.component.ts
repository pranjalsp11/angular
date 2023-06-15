import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: '/add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private formBuilder:FormBuilder,
    private apiService:ServicesService,
    private router:Router
    ){}
    addForm: FormGroup;
ngOnInit(){
  
  this.addForm=this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required],
    firstname:['',Validators.required],
    lastname:['',Validators.required]
  })
}
onSubmit(){
  console.log(this.addForm.value);
  this.apiService.createUser(this.addForm.value)
  .subscribe(data =>{
    this.router.navigate(['view']);
  });
}
}
