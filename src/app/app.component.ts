import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // serverElements = [
  //   { type: 'server', name: 'test server', content: 'just a test' },
  // ];
  //   onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //     this.serverElements.push({
  //       type: 'server',
  //       name: serverData.serverName,
  //       content: serverData.serverContent,
  //     });
  //   }
  //
  //   onBlueprintAdded(blueprintData: {
  //     serverName: string;
  //     serverContent: string;
  //   }) {
  //     this.serverElements.push({
  //       type: 'blueprint',
  //       name: blueprintData.serverName,
  //       content: blueprintData.serverContent,
  //     });
  //   }
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
}
