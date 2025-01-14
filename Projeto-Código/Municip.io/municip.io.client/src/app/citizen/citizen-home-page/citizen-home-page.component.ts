import { Component } from '@angular/core';
import { Municipality } from '../../services/municipal-admin-auth.service';
import { Citizen } from '../../services/citizen-auth.service';
import { UserAuthService } from '../../services/user-auth.service';
import { EventsService, Event } from '../../services/events/events.service';
import { News, NewsService } from '../../services/news/news.service';

@Component({
  selector: 'app-citizen-home-page',
  templateUrl: './citizen-home-page.component.html',
  styleUrl: './citizen-home-page.component.css'
})
/**
 * @class CitizenHomePageComponent
 *
 * Este componente é responsável por exibir a página inicial do cidadão.
 *
 * @returns A página inicial do cidadão com eventos e notícias.
 *
 **/
export class CitizenHomePageComponent {

  /**
  * @constructor
  *
  * Este construtor é responsável por injetar os serviços de autenticação, serviço de eventos e de notícias. 
  *
  * @param userAuthService - O serviço de autenticação.
  * @param eventsService - O serviço de eventos.
  * @param newsService - O serviço de notícias.
  *
  **/
  constructor(private userAuthService: UserAuthService, private eventsService: EventsService, private newsService : NewsService) { }

  events: Event[] = [];

  anyUser: any;
  newsList: News[] = [];
  user: Citizen = {
    firstName: 'Sem Nome',
    surname: 'Sem Apelido',
    email: 'Sem email',
    password: '',
    nif: 'Sem nif',
    gender: '',
    municipality: 'Sem município',
    address: 'Sem endereço',
    postalCode1: '0000-000',
    postalCode2: '000',
    birthDate: new Date(),
    photo: "/assets/images/maria.jpg"
  };


  municipality: Municipality = {
    areaha: '0',
    codigo: '0',
    codigoine: '0',
    contact: 'Sem contato',
    codigopostal: 'Sem código postal',
    description: 'Sem descrição',
    descpstal: 'Sem descrição postal',
    distrito: 'Sem distrito',
    eleitores: '0',
    email: 'sem_email@example.com',
    fax: 'Sem fax',
    localidade: 'Sem localidade',
    name: 'Sem nome',
    nif: '000000000',
    populacao: '0',
    president: 'Sem presidente',
    rua: 'Sem rua',
    sitio: 'Sem sitio',
    telefone: 'Sem telefone',
    emblemPhoto: 'Sem emblema',
    landscapePhoto: 'Sem landscape',
  };


  /**
   * Este método é responsável por obter as informações do cidadão, do município e carregar os eventos e notícias.
   * 
   * @returns As informações do cidadão, do município e os eventos e notícias.
   *
   **/
  ngOnInit(): void {
    this.userAuthService.getUserData().subscribe(
      res => {
        this.anyUser = res;
        this.userAuthService.getInfoByEmail(this.anyUser.email).subscribe(
          res => {
            this.user = res as Citizen;
            console.log("user", this.user);

            this.userAuthService.getInfoMunicipality(this.user.municipality).subscribe(
              res => {
                this.municipality = res as Municipality;
                console.log("municipality", this.municipality);
                this.loadData();
              },
              error => {
                console.error(error);
              }
            )
          });
      },
      error => {
        console.error(error);
      }
    );
  }

  /**
   * Este método é responsável por carregar os eventos e notícias.
   * 
   * @returns Os eventos e notícias.
   *
   **/
  loadData() {

    this.eventsService.getEventByMunicipality(this.municipality.name).subscribe(
      (eventsRes: any) => {
        this.events = eventsRes as Event[];
        this.sortEventsByDate();
      },
      error => {
        console.error(error);
      }
    );

    this.newsService.getNews(this.user.municipality).subscribe(
      (listOfNews: any) => {
        this.newsList = listOfNews as News[];
        console.log(this.newsList);
      },
      error => {
        console.log(error);
      }
    );
  }

  /**
   * Este método é responsável por ordenar os eventos por data.
   * 
   * @returns Os eventos ordenados por data.
   *
   **/
  sortEventsByDate() {
    this.events.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }

}
