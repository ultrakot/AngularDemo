import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {


  originalUserSettings : UserSettings = {
    name:'milton',
    emailOffers:true,
    theSelect:'hush-puppy',
    quibblerSubscription: 'Annual',
    notes:'here we add notes...'
  };

  userSetting : UserSettings = { ...this.originalUserSettings };

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
