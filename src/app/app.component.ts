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
      deviceName: 'davinci',
      developer: '@SVB_22',
      download: 'https://sourceforge.net/projects/xtended/files/davinci/'
    },
    {
      sno: 3,
      deviceName: 'guacamole',
      developer: '@ChandraChaganti',
      download: 'https://sourceforge.net/projects/xtended/files/guacamole/'
    },
    {
      sno: 4,
      deviceName: 'dipper',
      developer: '@DarkAngelGR',
      download: 'https://sourceforge.net/projects/xtended/files/dipper/'
    },
    {
      sno: 5,
      deviceName: 'hltetmo',
      developer: '@Jprimero15',
      download: 'https://sourceforge.net/projects/xtended/files/hltetmo/'
    },
    {
      sno: 6,
      deviceName:	'hltekor',
      developer: '@Jprimero15',
      download: 'https://sourceforge.net/projects/xtended/files/hltekor/'
    },
    {
      sno: 7,
      deviceName: 'hltechn',
      developer: '@Jprimero15',
      download: 'https://sourceforge.net/projects/xtended/files/hltechn/'
    },
    {
      sno: 8,
      deviceName: 'hlte',
      developer: '@Jprimero15',
      download: 'https://sourceforge.net/projects/xtended/files/hlte/'
    },
    {
      sno: 9,
      deviceName: 'whyred',
      developer: '@sreekfreak995',
      download: 'https://sourceforge.net/projects/xtended/files/whyred/'
    },
    {
      sno: 10,
      deviceName: 'mido',
      developer: '@Sagarrokade006',
      download: 'https://sourceforge.net/projects/xtended/files/mido/'
    },
    {
      sno: 11,
      deviceName: 'z2plus',
      developer: '@PptOo7',
      download: 'https://sourceforge.net/projects/xtended/files/z2plus/'
    },
    {
      sno: 12,
      deviceName: 'tissot',
      developer: '@amarbajpai',
      download: 'https://sourceforge.net/projects/xtended/files/tissot/'
    },
    {
      sno: 13,
      deviceName: 'X00T',
      developer: '@pk965',
      download: 'https://sourceforge.net/projects/xtended/files/X00T/'
    },
    {
      sno: 14,
      deviceName: 'cedric',
      developer: '@kiam001',
      download: 'https://sourceforge.net/projects/xtended/files/cedric/'
    },
    {
      sno: 15,
      deviceName: 'violet',
      developer: '@mavji007',
      download: 'https://sourceforge.net/projects/xtended/files/violet/'
    },
    {
      sno: 16,
      deviceName: 'beryllium',
      developer: '@Dev_Mashru',
      download: 'https://sourceforge.net/projects/xtended/files/beryllium/'
    },
    {
      sno: 17,
      deviceName: 'bacon',
      developer: '@xawlw',
      download: 'https://sourceforge.net/projects/xtended/files/bacon/'
    },
    {
      sno: 18,
      deviceName: 'ginkgo',
      developer: '@xawlw',
      download: 'https://sourceforge.net/projects/xtended/files/ginkgo/'
    },
    {
      sno: 19,
      deviceName: 'santoni',
      developer: '@beingstargazer',
      download: 'https://sourceforge.net/projects/xtended/files/santoni/'
    },
    {
      sno: 20,
      deviceName: 'enchilada',
      developer: '@UltraNoob5',
      download: 'https://sourceforge.net/projects/xtended/files/enchilada/'
    },
    {
      sno: 21,
      deviceName: 'fajita',
      developer: '@UltraNoob5',
      download: 'https://sourceforge.net/projects/xtended/files/fajita/'
    },
    {
      sno: 22,
      deviceName: 'sanders',
      developer: '@saisamy95',
      download: 'https://sourceforge.net/projects/xtended/files/sanders/'
    },
    {
      sno: 23,
      deviceName: 'vince',
      developer: '@MahmoudK1000',
      download: 'https://sourceforge.net/projects/xtended/files/vince/'
    },
    {
      sno: 24,
      deviceName: 'wayne',
      developer: '@AmyButDark',
      download: 'https://sourceforge.net/projects/xtended/files/wayne/'
    },
    {
      sno: 25,
      deviceName: 'rosy',
      developer: '@Speedhorn',
      download: 'https://sourceforge.net/projects/xtended/files/rosy/'
    },
    {
      sno: 26,
      deviceName: 'X01BD',
      developer: '@SonalSingh18',
      download: 'https://sourceforge.net/projects/xtended/files/X01BD/'
    },
    {
      sno: 27,
      deviceName: 'onclite',
      developer: '@mylove90',
      download: 'https://sourceforge.net/projects/xtended/files/onclite/'
    },
    {
      sno: 28,
      deviceName: 'lavender',
      developer: '@Hazama25',
      download: 'https://sourceforge.net/projects/xtended/files/lavender/'
    },
    {
      sno: 29,
      deviceName: 'lucye-us997',
      developer: '@wolfsvk',
      download: 'https://sourceforge.net/projects/xtended/files/lucye/US997/'
    },
    {
      sno: 30,
      deviceName: 'lucye-h872',
      developer: '@wolfsvk',
      download: 'https://sourceforge.net/projects/xtended/files/lucye/H872/'
    },
    {
      sno: 31,
      deviceName: 'lucye-h870',
      developer: '@wolfsvk',
      download: 'https://sourceforge.net/projects/xtended/files/lucye/H870/'
    },
    {
      sno: 32,
      deviceName: 'payton',
      developer: '@cool585',
      download: 'https://sourceforge.net/projects/xtended/files/payton/'
    },
    {
      sno: 33,
      deviceName: 'hotdogb',
      developer: '@mukesh22584',
      download: 'https://sourceforge.net/projects/xtended/files/hotdogb/'
    },
    {
      sno: 34,
      deviceName: 'oneplus3',
      developer: '@SuperDroidBond',
      download: 'https://sourceforge.net/projects/xtended/files/oneplus3/'
    },
  ];

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
