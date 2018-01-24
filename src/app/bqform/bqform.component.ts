import { Component, OnInit, Input } from '@angular/core';
import { BigQConf, Connection } from '../../model/connection/connection';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-bqform',
  templateUrl: './bqform.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class BqformComponent implements OnInit {
  @Input() connection: Connection<BigQConf>;

  constructor() { }

  ngOnInit() {
  }

}
