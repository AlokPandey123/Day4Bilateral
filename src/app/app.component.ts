import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventCompComponent } from './event-comp/event-comp.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EventCompComponent,FormCompComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormandEvents';
}
