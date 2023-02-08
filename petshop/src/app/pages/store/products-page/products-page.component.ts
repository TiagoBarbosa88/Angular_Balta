import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  constructor(data: DataService) { }

  ngOnInit(): void {
  }

}
