import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

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
