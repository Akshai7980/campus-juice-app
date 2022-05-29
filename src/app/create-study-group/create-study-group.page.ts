/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
import { AjaxService } from './../services/ajax.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-create-study-group',
  templateUrl: './create-study-group.page.html',
  styleUrls: ['./create-study-group.page.scss'],
})
export class CreateStudyGroupPage implements OnInit {
  createStudyGroupForm: FormGroup;
  userDetails: any;
  userList: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private control: ControllerService,
    private ajax: AjaxService,
  ) {
    this.control.route.queryParams.subscribe(params => {
      if (this.control.router.getCurrentNavigation().extras.state) {
        this.userDetails = this.control.router.getCurrentNavigation().extras.state.user;
        console.log('userDetails:',this.userDetails);
      }
    });
  }

  ngOnInit() {
    this.createStudyGroupForm = this.formBuilder.group({
      userid: [this.userDetails.id],
      group_name: [null, [Validators.required, Validators.minLength(3)]],
      additional_information: [null, [Validators.required, Validators.minLength(3)]],
      group_rules: [null, [Validators.required, Validators.minLength(3)]],
      invited_users: [null]
    });
    this.getAllUsers();
  }

  getAllUsers() {
    const params = {
      userid: this.userDetails.id
    };
    this.ajax.postMethod('userlist',params).then((res: any) => {
      console.log('User List Res:',res);
      if (res.status === true) {
        this.userList = res.details;
        // for(let i=0; i<=this.userList?.length; i++) {
        //   this.userList[i].checked = false;
        //   console.log('userList:',this.userList);
        // }
      }
    }).catch ((err) => {
      console.log('Error:',err);
    });
  }

  createGroup() {
    if (!this.createStudyGroupForm.valid) {
      console.log('createStudyGroupForm :',this.createStudyGroupForm.value);
      console.log('valid :',this.createStudyGroupForm.valid);
      return false;
    } else {
      console.log('createStudyGroupForm:',this.createStudyGroupForm.value);
      this.ajax.postMethod('create_studygroup',this.createStudyGroupForm.value).then((res: any) => {
        console.log('Create Study Group Res :',res);
        if(res.status === true) {
          const toastMsg = 'Your study group for '+ this.createStudyGroupForm.value.group_name + ' is successfully created';
          const toastTime = 3000;
          this.control.presentToast(toastMsg, toastTime);
          this.control.router.navigate(['/study-group']);
        }
      }).catch ((err) => {
        console.log('Error:',err);
      });
    }
  }

  selectUser(u) {
  console.log('u:',u);
  this.createStudyGroupForm.value.invited_users = u.userid;
  }

}
