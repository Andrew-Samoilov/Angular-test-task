import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CvaComponent } from './cva.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [CvaComponent, CustomInputComponent],
    bootstrap: [CvaComponent]
})
export class CvaModule { }
