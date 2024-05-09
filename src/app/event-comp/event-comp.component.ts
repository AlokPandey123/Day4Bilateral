import { Component } from '@angular/core';

@Component({
  selector: 'app-event-comp',
  standalone: true,
  imports: [],
  templateUrl: './event-comp.component.html',
  styleUrl: './event-comp.component.css'
})
export class EventCompComponent {
  clickEvent(){
    alert("hello frainds");
  };

  eventValue = ""
  keyEvent(event : KeyboardEvent){
    this.eventValue = event.key;
  }

  input=""
  InputEvent(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.input = inputElement.value;
  }

}
