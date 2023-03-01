import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  postResponse = {};
  inputValue = "";
  constructor(public client: HttpClient) {};

  onSubmit() {
    this.client.post('https://e25dutjqhbz2ypxjkeukhexljm0bkoxs.lambda-url.eu-west-1.on.aws/vehicleData', { reg: this.inputValue }).subscribe(data => {
      this.postResponse = JSON.stringify(data)
    })
  }
  onKey(event: any){
    this.inputValue = event.target.value;
  }

}
