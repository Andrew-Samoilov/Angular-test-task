import { Component, VERSION } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector: 'my-cva',
    templateUrl: './cva.component.html',
    styleUrls: ['./cva.component.scss']
})
export class CvaComponent {
    form;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            myFormControl: 'initial input three'
        });
    }
}
