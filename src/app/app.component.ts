import { Component } from '@angular/core';


import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';
import {environment} from '../environments/environment';

@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appName = environment.appName;
  constructor() {
    moment.locale('pt-br');
  }
}
