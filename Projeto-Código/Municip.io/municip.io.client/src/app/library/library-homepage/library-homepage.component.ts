import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { Municipality } from '../../services/municipal-admin-auth.service';

@Component({
  selector: 'app-library-homepage',
  templateUrl: './library-homepage.component.html',
  styleUrl: './library-homepage.component.css'
})
/**
 * Library Homepage Component
 *
 * Este componente representa a página inicial da biblioteca
 *
 * @param municipality - Nome da cidade do cidadão
 */ 
export class LibraryHomepageComponent {

  municipalityName: string = '';

  
  municipality: Municipality = {
    name: '',
    president: '',
    contact: '',
    description: '',
    areaha: '',
    codigo: '',
    codigopostal: '',
    codigoine: '',
    descpstal: '',
    distrito: '',
    eleitores: '',
    email: '',
    fax: '',
    localidade: '',
    nif: '',
    populacao: '',
    rua: '',
    sitio: '',
    telefone: '',
    emblemPhoto: '',
    landscapePhoto: '',
    libraryAddress: ''
  };

/**
   * @constructor
   * LibraryHomepageComponent
   *
   * @param service - Serviço de autenticação do usuário
   * @param userAuthService - Serviço de autenticação do usuário
   */ 

  constructor(private service: UserAuthService, private userAuthService : UserAuthService) {
    service.getMunicipality().toPromise().then((municipality) => {
      this.municipalityName = municipality || '';

      this.userAuthService.getInfoMunicipality(this.municipalityName).subscribe(
        (municipalityRes: any) => {
          this.municipality = municipalityRes as Municipality;

          console.log(this.municipality);

        },
        error => {
          console.error(error);
        }
      );
    });
  }

  

}


