import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>Hello World!here you are</p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // styles:['']
})
export class AppComponent {
  name = 'Luis';
  imgURL =
    'https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0';

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(event: string) {
    console.log(event);
  }
}
