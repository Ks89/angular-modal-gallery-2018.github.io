import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  titleEvent: EventEmitter<string> = new EventEmitter<string>();
}
