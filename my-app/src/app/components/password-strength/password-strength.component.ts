import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PasswordCheckerService } from '../../services/password-checker.service';

@Component({
    selector: 'password-strength',
    standalone: true,
    imports: [NgStyle],
    templateUrl: './password-strength.component.html',
    styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
    @Input() password: string = '';

    constructor(private passwordCheckerService: PasswordCheckerService) { }

    setColor(n: number): string {
        return this.passwordCheckerService.setColor(this.password, n);
    }
}
