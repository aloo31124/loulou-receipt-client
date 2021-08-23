import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receipt } from '../model/receipt.model'

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  public barChartOptions = {
    responsive: true
  };
  public barChartType = 'bar';
  public  barChartLegend = true;

  public  barChartLabels_receipt_date = [];
  public barChartData_receipt_price = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.showChart();
  }

  showChart(){    
    let url = "https://loulou-receipt-server.herokuapp.com/api/receipt";
    
    this.http.get<Receipt[]>(url)
      .subscribe(res =>{
        let receipt_price =[];
        res.forEach((receipt_item) =>{
          this.barChartLabels_receipt_date.push(receipt_item.date);   
          receipt_price.push(receipt_item.price);  
        })
        this.barChartData_receipt_price = [
          {data: receipt_price, label: '每日載具花費'}
        ];
      });
  }

}
