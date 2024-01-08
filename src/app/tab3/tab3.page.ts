import { Component } from '@angular/core';
import { Browser, OpenOptions } from '@capacitor/browser';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  onOpenBrowser() {
    const config: OpenOptions = {
      url: 'https://www.google.com',
      // presentationStyle: 'popover',
      // dismissButtonStyle: 'done',
      // preferredBarTintColor: '#453AA4',
      // preferredControlTintColor: 'white',
    };
    Browser.open(config).then(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
  }
}
