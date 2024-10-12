import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
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
    
  onSubmit() {
    this.valid = !this.valid;
  }

  onMouseEnter() {
    document.querySelector('.paolo-img')?.classList.remove('hidden');
  }

  onMouseLeave() {
    document.querySelector('.paolo-img')?.classList.add('hidden');
  }
}
