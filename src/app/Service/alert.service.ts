import { Injectable } from '@angular/core';
import { AlertNotification, AlertOptions, AlertType } from '../models/alert-notification.model';
import { filter, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  
  private subject = new Subject<AlertNotification>();
  private defaultId = 'default-alert';

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  // enable subscribing to alerts observable
  onAlert(id = this.defaultId): Observable<AlertNotification> {
      return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }

  // convenience methods
  success(message: string, options?: AlertOptions) {
      this.alert(new AlertNotification({ ...options, type: AlertType.Success, message }));
  }

  error(message: string, options?: AlertOptions) {
      this.alert(new AlertNotification({ ...options, type: AlertType.Error, message }));
  }

  info(message: string, options?: AlertOptions) {
      this.alert(new AlertNotification({ ...options, type: AlertType.Info, message }));
  }

  warn(message: string, options?: AlertOptions) {
      this.alert(new AlertNotification({ ...options, type: AlertType.Warning, message }));
  }

  // main alert method    
  alert(alert: AlertNotification) {
      alert.id = alert.id || this.defaultId;
      this.subject.next(alert);
  }

  // clear alerts
  clear(id = this.defaultId) {
      this.subject.next(new AlertNotification({ id }));
  }
}
