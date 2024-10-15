import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
/* ngIf */
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    valid : boolean = true;
    nom : String = "";
    prenom : String = "";
    adresse : String = "";
    codePostal : String = "";
    ville : String = "";
    tel : String = "";
    email : String = "";
    civilite : String = "";
    password : String = "";
    confirmPassword : String = "";
    login : String = "";
    showRecap : boolean = false;

    ngOnInit() {
        const inputs = document.querySelectorAll('input');
    
        inputs.forEach(input => {
            input.addEventListener('blur', (event) => {
                const target = event.target as HTMLInputElement;
                const errorMessage = document.getElementById(`error-${target.name}`);
                if (!target.checkValidity()) {
                    target.classList.add('invalid');
                    if (errorMessage) {
                        errorMessage.style.display = 'block';
                    }
                } else {
                    target.classList.remove('invalid');
                    if (errorMessage) {
                        errorMessage.style.display = 'none';
                    }
                }
            });
        });
    } 
    
    onSubmit(event: Event) {
        event.preventDefault();
        const inputs = document.querySelectorAll('input');
        let formValid = true;

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                formValid = false;
                input.classList.add('invalid');
                const errorMessage = document.getElementById(`error-${input.name}`);
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                }
            }
        });

        let password = document.getElementById('password') as HTMLInputElement;
        let confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;

        if (password.value !== confirmPassword.value) {
            formValid = false;
            password.classList.add('invalid');
            confirmPassword.classList.add('invalid');
            const errorMessage = document.getElementById(`error-${confirmPassword.name}`);
            if (errorMessage) {
                errorMessage.innerHTML = 'Les mots de passe ne correspondent pas';
                errorMessage.style.display = 'block';
            }
        }

        if (formValid) {
            this.showRecap = true;
        } else {
            this.showRecap = false;
        }
        console.log('formValid', formValid);
        console.log('this', this);
    }

    onMouseEnter() {
        document.querySelector('.paolo-img')?.classList.remove('hidden');
    }

    onMouseLeave() {
        document.querySelector('.paolo-img')?.classList.add('hidden');
    }
}
