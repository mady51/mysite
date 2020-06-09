import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  sno: any;
  deviceName: string;
  developer: string;
  download: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'msm';

  displayedColumns: string[] = ['sno', 'deviceName', 'developer', 'download'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    // Create 100 users
    const devices = [{
      sno: 1,
      deviceName: 'OP3 & OP3T',
      developer: 'SuperDroidBond',
      download:   "https://sourceforge.net/projects/xtended/files/oneplus3/" 
    },
    {
      sno: 2,
      deviceName: 'deviceName1',
      developer: 'developer2',
      download: 'http:ww.google.com'
    },
    {
      sno: 3,
      deviceName: 'deviceName3',
      developer: 'developer3',
      download: 'http:ww.google.com'
    }];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(devices);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
