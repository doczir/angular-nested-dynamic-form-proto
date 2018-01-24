import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Connection, ConnectionConf } from '../../model/connection/connection';



@Component({
  selector: 'app-top-form',
  templateUrl: './top-form.component.html'
})
export class TopFormComponent implements OnInit {
  @Input() connection: Connection<ConnectionConf>;

  constructor() { }

  ngOnInit() {
  }

}
