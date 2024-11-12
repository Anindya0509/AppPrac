export class AlertNotification {
        id?: string;
        type?: AlertType;
        message?: string;
        autoClose?: boolean;
        keepAfterRouteChange?: boolean;
        fade?: boolean;
    
        constructor(init?:Partial<AlertNotification>) {
            Object.assign(this, init);
        }
    }
    
    export enum AlertType {
        Success,
        Error,
        Info,
        Warning
    }
    
    export class AlertOptions {
        id?: string;
        autoClose?: boolean;
        keepAfterRouteChange?: boolean;
    }
