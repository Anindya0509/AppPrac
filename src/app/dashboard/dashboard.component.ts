import {Component, inject, ViewChild} from '@angular/core';
import { ColDef,
  ColGroupDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  ModuleRegistry,
  createGrid, } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { AddProductService } from '../Service/add-product.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { ActionsButtonComponent } from '../actions-button/actions-button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AgGridAngular, AddProductComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  public addProdVal: boolean;
  constructor(private addProdService: AddProductService){
    this.addProdVal = this.addProdService.getCompOpen();
    //console.log("Behav Sub val" + this.addProdService.addProductComponentOpen.subscribe(res => (this.addProdService.setCompOpen(res))));
    this.addProdService.addProductComponentOpen.subscribe((res) => {this.addProdVal = res;})
  }
  //@ViewChild('modal', {static: false}) modal: AddProductComponent
  //private gridApi!: GridApi;

  public defaultColDef: ColDef = {
    flex: 1,
  };
  public paginationPageSizeSelector = [5,10,20];
  public themeClass: string =
    "ag-theme-quartz";
  columnDefs: ColDef[] = [
    {headerName: 'ID', field: 'id', filter: true, floatingFilter: true},
    {headerName: 'Name', field: 'name', filter: true, floatingFilter: true},
    {headerName: 'Description', field: 'desc', filter: true, floatingFilter: true},
    {headerName: 'Price', field: 'price', filter: true, floatingFilter: true},
    {headerName: 'Rating', field: 'rating', filter: true, floatingFilter: true},
    {headerName: 'Actions', field: 'actions',cellRenderer: ActionsButtonComponent}
];
  rowData: Product[];

  onGridReady(params: GridReadyEvent){
    console.log("Event Occuered");
    if(!this.addProdVal){
      this.rowData = JSON.parse(localStorage.getItem("AllProducts"));
      }

    //this.gridApi = params.api;
    // this.http
    //   .get<any[]>("https://www.ag-grid.com/example-assets/olympic-winners.json")
    //   .subscribe((data) => (this.rowData = data));
    
  }
  onFilterTextBoxChanged(){
    // this.gridApi.setGridOption(
    //   "quickFilterText",
    //   (document.getElementById("filter-text-box") as HTMLInputElement).value,
    // );
  }

  ngOnInit(){     
    //to initialize locastorage object, to be commented after fisrt time
    //localStorage.setItem("AllProducts", JSON.stringify(products));
  }

  openAddProduct(){
    this.addProdService.setCompOpen(true);
    this.addProdVal = this.addProdService.getCompOpen();
    console.log(this.addProdVal);
    
  }

}

export interface Product{
  id:number,
  name:string,
  desc:string,
  price:number,
  rating:number
}
const products: Product[] = [
  {id:1, name: 'Laptop', desc: 'Old', price: 12456, rating: 5},
  {id:2, name: 'Mobile', desc: 'New', price: 65475, rating: 4},
  {id:3, name: 'Charger', desc: 'Large', price: 98741, rating: 4},
  {id:4, name: 'SoundBox', desc: 'Loud', price: 63244, rating: 4},
  {id:5, name: 'Fan', desc: 'Moderate', price: 21475, rating: 3}
]


