import {Component, OnInit} from '@angular/core';
import {AccountOptionsService} from '../../services/account-options.service';
import {PostAccountOptionsService} from '../../services/post-account-options.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AccountOptions} from '../../declarations/accountOptions';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-options-form',
  templateUrl: './account-options-form.component.html',
  styleUrls: ['./account-options-form.component.scss'],
  providers: [AccountOptionsService, PostAccountOptionsService]
})
export class AccountOptionsFormComponent implements OnInit {
  addForm: FormGroup;
  account: AccountOptions;
  optionNames: Array<string>;
  error: number;
  errorMessage: string;
  accountOptionsObj: Object;
  route: string;
  readonly: boolean;


  constructor(private accountOptionsService: AccountOptionsService,
              private formBuilder: FormBuilder,
              private postAccountOptionsService: PostAccountOptionsService,
              private router: Router,
              private location: Location) {

    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        this.readonly = this.route === '/readonly';
      } else {
        this.route = ''
      }
    });
  }


  ngOnInit() {
    console.log(this.readonly);

    this.addForm = this.formBuilder.group({
      verifyEmail: [{value: '', disabled: this.readonly}],
      verifyProviderEmail: [],
      allowUnverifiedLogin: [],
      preventLoginIDHarvesting: [],
      sendWelcomeEmail: [],
      sendAccountDeletedEmail: [],
      loginIdentifierConflict: ['ignore'],
      defaultLanguage: ['', Validators.required],
      loginIdentifiers: ['', Validators.required]
    });

    this.accountOptionsService.getOptions().subscribe(
      data => {
        this.account = data.accountOptions;
        this.error = data.errorCode;
        this.errorMessage = data.errorDetails;
        this.optionNames = Object.keys(this.account);
      },
      error => console.error(error)
    );

  }

  isBoolean(optionName) {
    return typeof(optionName) === 'boolean'
  }

  isTrue(optionName) {
    return this.account[optionName];
  }

  addAccountsOptions() {
    if (this.addForm.valid) {
      this.accountOptionsObj = {
        verifyEmail: this.addForm.controls['verifyEmail'].enabled,
        verifyProviderEmail: this.addForm.controls['verifyProviderEmail'].enabled,
        allowUnverifiedLogin: this.addForm.controls['allowUnverifiedLogin'].enabled,
        preventLoginIDHarvesting: this.addForm.controls['preventLoginIDHarvesting'].enabled,
        sendWelcomeEmail: this.addForm.controls['sendWelcomeEmail'].enabled,
        sendAccountDeletedEmail: this.addForm.controls['sendAccountDeletedEmail'].enabled,
        loginIdentifierConflict: this.addForm.controls['loginIdentifierConflict'].value,
        defaultLanguage: this.addForm.controls['defaultLanguage'].value,
        loginIdentifiers: this.addForm.controls['loginIdentifiers'].value
      };
      this.postAccountOptionsService
        .postAccountOptions('https://accounts.gigya.com/accounts.setPolicies?userkey=AJA3Cw9XcJZf&secret=1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq&apikey=3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK&format=jsonp&callback=myCallback', this.accountOptionsObj)
        .subscribe(
          result => console.log(result),
          error => this.errorMessage = <any>error
        );
    }
  }
}
