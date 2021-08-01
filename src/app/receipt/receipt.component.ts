import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public  barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 60], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getReceiptList();
  }

  getReceiptList(){
    let url = 'http://127.0.0.1:8000/api/receipt';
    this.http.get<any>(url).subscribe(res=>{
      console.log(res);
    });
  }

}
