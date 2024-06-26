import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor(private platform: Platform) {
      this.platform.ready().then(() => {
        document.body.classList.remove("dark");
      });
  }
}
