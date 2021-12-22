import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  faCalendarTimes = faCalendarTimes;
  @Input() visible: boolean;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.visible = true;
  }

  closeModal() {
    this.close.emit(false);
  }


}
