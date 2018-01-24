import { Component, OnInit, Input } from '@angular/core';
import { Connection, SqlConfig } from '../../model/connection/connection';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sql-form',
  templateUrl: './sql-form.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class SqlFormComponent implements OnInit {
  @Input() connection: Connection<SqlConfig>;

  constructor() { }

  ngOnInit() {
  }

}
