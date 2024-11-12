import { FormControl } from "@angular/forms";


export class checkCouponCodeValidator{
    static checkCouponCode(control: FormControl){{
        if(control.value!=null && control.value !== "15OFF")
            return {invalidCoupon: true}
        }
        return null;
        
    }
}