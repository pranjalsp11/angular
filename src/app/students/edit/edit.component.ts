import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
    addForm: any;
    constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
  
    this.addForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required]
    })
  }
  onSubmit(){
    console.log("form working");
  }
  }
  
