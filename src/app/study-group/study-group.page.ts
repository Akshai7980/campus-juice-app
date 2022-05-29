/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AjaxService } from '../services/ajax.service';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-study-group',
  templateUrl: './study-group.page.html',
  styleUrls: ['./study-group.page.scss'],
})
export class StudyGroupPage implements OnInit {

  studyGroups: any = [];
  colors: any = [];
  groupIcons: any = [];
  groupMembers: any = [];
  bgImage: any = [];
  userDetails: any;
  members: any = [];

  constructor(
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

    // this.studyGroups = [
    //   {
    //     group_name : "Law",
    //     group_members_count : "5",
    //     message_count : "1"
    //   },
    //   {
    //     group_name : "Accounting",
    //     group_members_count : "6",
    //     message_count : "2"
    //   },
    //   {
    //     group_name : "Theatre Act",
    //     group_members_count : "7",
    //     message_count : "3"
    //   },
    //   {
    //     group_name : "Physics",
    //     group_members_count : "5",
    //     message_count : "1"
    //   },
    //   {
    //     group_name : "Chemistry",
    //     group_members_count : "6",
    //     message_count : "2"
    //   },
    //   {
    //     group_name : "Geometry",
    //     group_members_count : "7",
    //     message_count : "3"
    //   },
    // ];
    // console.log('StudyGroups:',this.studyGroups);

    this.groupMembers = [
      ["../../assets/image/image/study-grp-mem.png"] ,
      ["../../assets/image/image/study-grp-mem1.png"] ,
      ["../../assets/image/image/study-grp-mem2.png"]
    ];
    console.log('GroupMembers:',this.groupMembers);

    this.bgImage = [
      ["../../assets/image/study-bx1.png"] ,
      ["../../assets/image/study-bx2.png"] ,
      ["../../assets/image/study-bx3.png"]
    ];
    console.log('bgImage:',this.bgImage);

    this.getStudyGroups();

  }

  gotoPage(page) {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.userDetails
      }
    };
    const p = page;
    this.control.router.navigate([p], navigationExtras);
  }

  getStudyGroups() {
    const params = {
      userid: this.userDetails.id,
    };
    this.ajax.postMethod('list_studygroup',params).then((res: any) => {
      console.log('Get Study Groups Res:',res);
      this.studyGroups = res.details;
      this.members = res.details[0].invited_users;
    }).catch ((err) => {
      console.log('Error:',err);
    });
  }

}
