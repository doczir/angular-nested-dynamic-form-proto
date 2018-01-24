import { Component } from '@angular/core';
import { Connection, SqlConfig, BigQConf } from '../model/connection/connection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  sqlConnection: Connection<SqlConfig> = {
    name: 'mysql-conn',
    profile: 'mysql',
    config: {
      dbName: 'db1',
      dbPass: 'pass',
      host: 'host'
    }
  }

  bqConnection: Connection<BigQConf> = {
    name: 'mysql-conn',
    profile: 'bigquery',
    config: {
      dataset: 'ds01',
      email: 'real@email.srsly'
    }
  }
}
