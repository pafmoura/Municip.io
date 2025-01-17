import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './landingpage/banner/banner.component';
import { AboutusComponent } from './aboutus/aboutus/aboutus.component';
import { CardComponent } from './landingpage/card/card.component';
import { LandingComponent } from './landingpage/landing/landing.component';
import { BtnMunicipBlueComponent } from './utils/buttons/btn-municip-blue/btn-municip-blue.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CardTeamComponent } from './aboutus/card-team/card-team.component';
import { LoginComponent } from './login/login.component';
import { ShowHidePasswordComponent } from './utils/show-hide-password/show-hide-password.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { SelectAccountTypeComponent } from './signUp/select-account-type/select-account-type.component';
import { SignUpCitizenAccountComponent } from './signUp/sign-up-citizen-account/sign-up-citizen-account.component';
import { InputTitleComponent } from './utils/input/input-title/input-title.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpMunicipalAdministratorAccountComponent } from './signUp/sign-up-municipal-administrator-account/sign-up-municipal-administrator-account.component';
import { SignUpMunicipalityComponent } from './signUp/sign-up-municipality/sign-up-municipality.component';
import { UserpageComponent } from './userpage/userpage.component';
import { TooltipComponent } from './utils/tooltip/tooltip.component';
import { SignUpSuccessComponent } from './signUp/sign-up-success/sign-up-success.component';
import { SpinnerComponent } from './utils/spinner/spinner.component';
import { LoadingInterceptor } from './utils/loading.interceptor';
import { MunicipalityGuard } from './utils/guard/municipality.guard';
import { AuthGuardService } from './utils/guard/auth.guard';
import { AdmindashboardComponent } from './administrator/admindashboard/admindashboard.component';
import { TransportsMainComponent } from './transports/transports-main/transports-main.component';
import { VerticalCardComponent } from './utils/vertical-card/vertical-card.component';
import { BigBannerComponent } from './utils/big-banner/big-banner.component';
import { SmallerBannerComponent } from './utils/smaller-banner/smaller-banner.component';
import { SchedulesComponent } from './transports/schedules/schedules.component';
import { MunAdmindashboardComponent } from './munadministrator/mun-admindashboard/mun-admindashboard.component';
import { MunicipalitymapComponent } from './maps/municipalitymap/municipalitymap.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { UserinfodialogComponent } from './utils/userinfodialog/userinfodialog.component';
import { ShowStopComponent } from './transports/show-stop/show-stop.component';
import { StopsMapComponent } from './transports/stops-map/stops-map.component';
import { StopsPageComponent } from './transports/stops-page/stops-page.component';
import { CitizenHomePageComponent } from './citizen/citizen-home-page/citizen-home-page.component';
import { FirstLetterUpperCasePipe } from './pipes/first-letter-upper-case.pipe';
import { FormatNumber3By3Pipe } from './pipes/format-number3-by3.pipe';
import { CardOutlineThemeComponent } from './utils/card-outline-theme/card-outline-theme.component';
import { EventsSmallComponent } from './utils/events-small/events-small.component';
import { MyDataCardComponent } from './utils/my-data-card/my-data-card.component';
import { MyMunicipalityCardComponent } from './utils/my-municipality-card/my-municipality-card.component';
import { NewsSmallComponent } from './utils/news-small/news-small.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ProfileBannerComponent } from './utils/profile-banner/profile-banner.component';
import { MunAdminHomePageComponent } from './munadministrator/mun-admin-home-page/mun-admin-home-page.component';
import { StatisticalHomePageCardComponent } from './utils/statistical-home-page-card/statistical-home-page-card.component';
import { MunicipalProfileComponent } from './munadministrator/municipal-profile/municipal-profile.component';
import { NextEventsComponent } from './utils/next-events/next-events.component';
import { GeneralInfoComponent } from './utils/general-info/general-info.component';
import { CardOutlineWhiteComponent } from './utils/card-outline-white/card-outline-white.component';
import { NextNewsComponent } from './utils/next-news/next-news.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './events/my-events/calendar/calendar.component';
import { CalendarHeaderComponent } from './events/my-events/calendar-header/calendar-header.component';
import { MunicipalEditComponent } from './munadministrator/municipal-edit/municipal-edit.component';
import { HeaderLoggedinComponent } from './layout/header-loggedin/header-loggedin.component';
import { MunicipalEventsComponent } from './events/municipal-events/municipal-events.component';
import { CalendarPageComponent } from './events/my-events/calendar-page/calendar-page.component';
import { CreateEventComponent } from './events/municip-actions/create-event/create-event.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BlackBtnIconTextComponent } from './utils/buttons/black-btn-icon-text/black-btn-icon-text.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { EventPageComponent } from './events/event-page/event-page.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DatetimepickerComponent } from './utils/events/datetimepicker/datetimepicker.component';
import { EditEventComponent } from './events/municip-actions/edit-event/edit-event.component';
import { EventCardComponent } from './utils/events/event-card/event-card.component';
import { EventsListComponent } from './events/my-events/events-list/events-list.component';

import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsCardComponent } from './news/news-card/news-card.component';

import { NewsCreateComponent } from './news/news-create/news-create.component';

import { DialogMessageComponent } from './utils/dialog/dialog-message/dialog-message.component';
import { NewsPageComponent } from './news/news-page/news-page.component';

import { SelectButtonModule } from 'primeng/selectbutton';
import { RippleModule } from 'primeng/ripple';
import { NewsEditComponent } from './news/news-edit/news-edit.component'
import { DatePickerComponent } from './utils/input/date-picker/date-picker.component';
import { DocsHomepageComponent } from './documents/docs-homepage/docs-homepage.component'
import { AdminDashboardMunicipalAdminsComponent } from './administrator/admin-dashboard-municipal-admins/admin-dashboard-municipal-admins.component'
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { CountryPickerComponent } from './utils/input/country-picker/country-picker.component';
import { AccessBlockedComponent } from './access-blocked/access-blocked.component';
import { RequestDocumentComponent } from './documents/request-document/request-document.component';
import { MyDocumentsComponent } from './documents/my-documents/my-documents.component';
import { DocumentCardComponent } from './utils/documents/document-card/document-card.component';
import { DocumentRequestCardComponent } from './utils/documents/document-request-card/document-request-card.component';
import { ApproveDocumentsComponent } from './documents/approve-documents/approve-documents.component';

import { DocumentApproveCardComponent } from './utils/documents/document-approve-card/document-approve-card.component';
import { EventsmapComponent } from './maps/eventsmap/eventsmap.component';
import { CreateTemplateComponent } from './documents/create-template/create-template.component';
import { GeneratepdfComponent } from './documents/generatepdf/generatepdf.component';
import { NgxEditorModule} from 'ngx-editor';
import { ManageAppFeaturesComponent } from './munadministrator/manage-app-features/manage-app-features.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FileDragDropDirective } from './directives/fileDragDrop/file-drag-drop.directive';
import { TemplateListComponent } from './documents/template-list/template-list.component';
import { EditTemplateComponent } from './documents/edit-template/edit-template.component';
import { RequestsComponent } from './library/requests/requests.component';

import { RequestedBookCardComponent } from './utils/library/requested-book-card/requested-book-card.component';
import { CreateBookComponent } from './library/create-book/create-book.component';
import { AdminStatisticsDashboardComponent } from './admin-statistics-dashboard/admin-statistics-dashboard.component';
import { RegisteredUsersGraphComponent } from './admin-statistics-dashboard/registered-users-graph/registered-users-graph.component';
import { GenderChartComponent } from './admin-statistics-dashboard/gender-chart/gender-chart.component';
import { AgeChartComponent } from './admin-statistics-dashboard/age-chart/age-chart.component';
import { DistrictsMapComponent } from './admin-statistics-dashboard/districts-map/districts-map.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CitizensMapComponent } from './admin-statistics-dashboard/citizens-map/citizens-map.component';
import { MunadminStatisticsDashboardComponent } from './munadmin-statistics-dashboard/munadmin-statistics-dashboard.component';
import { DialogContentComponent } from './utils/dialog/dialog-content/dialog-content.component';
import { RegisteredMunUsersGraphComponent } from './munadmin-statistics-dashboard/registered-mun-users-graph/registered-mun-users-graph.component';
import { BooksGenreChartComponent } from './admin-statistics-dashboard/books-genre-chart/books-genre-chart.component';
import { AddGenreDialogComponent } from './utils/library/add-genre-dialog/add-genre-dialog.component';
import { MyRequestsComponent } from './library/my-requests/my-requests.component';
import { LibraryListComponent } from './library/library-list/library-list.component';
import { LibraryCardComponent } from './utils/library/library-card/library-card.component';
import { BorrowedBooksChartComponent } from './admin-statistics-dashboard/borrowed-books-chart/borrowed-books-chart.component';
import { BookPageComponent } from './library/book-page/book-page.component';
import { EditBookComponent } from './library/edit-book/edit-book.component';
import { LibraryHomepageComponent } from './library/library-homepage/library-homepage.component';
import { LibraryMapComponent } from './library/library-map/library-map.component';
import { MunicipalCalendarComponent } from './events/municipal-calendar/municipal-calendar.component';
import { MatSliderModule } from '@angular/material/slider';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarouselModule } from 'primeng/carousel';


registerLocaleData(localePt, 'pt-PT');


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutusComponent,
    CardComponent,
    LandingComponent,
    BtnMunicipBlueComponent,
    HeaderComponent,
    FooterComponent,
    CardTeamComponent,
    LoginComponent,
    SelectAccountTypeComponent,
    ShowHidePasswordComponent,
    TermsconditionsComponent,
    SelectAccountTypeComponent,
    SignUpCitizenAccountComponent,
    InputTitleComponent,
    SignUpMunicipalAdministratorAccountComponent,
    SignUpMunicipalityComponent,
    UserpageComponent,
    TooltipComponent,
    SignUpSuccessComponent,
    SpinnerComponent,
    AdmindashboardComponent,
    TransportsMainComponent,
    VerticalCardComponent,
    BigBannerComponent,
    SmallerBannerComponent,
    SchedulesComponent,
    MunAdmindashboardComponent,
    MunicipalitymapComponent,
    UserinfodialogComponent,
    ShowStopComponent,
    StopsMapComponent,
    StopsPageComponent,
    CitizenHomePageComponent,
    FirstLetterUpperCasePipe,
    FormatNumber3By3Pipe,
    CardOutlineThemeComponent,
    EventsSmallComponent,
    MyDataCardComponent,
    MyMunicipalityCardComponent,
    NewsSmallComponent,
    AccessDeniedComponent,
    ProfileBannerComponent,
    MunAdminHomePageComponent,
    StatisticalHomePageCardComponent,
   
    NewsListComponent,
    NewsCardComponent,
    
    NewsCreateComponent,
    MunicipalProfileComponent,
    NextEventsComponent,
    GeneralInfoComponent,
    CardOutlineWhiteComponent,
    NextNewsComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    MunicipalEditComponent,
    HeaderLoggedinComponent,
    CalendarPageComponent,
    CreateEventComponent,
    MunicipalEventsComponent,
    CalendarPageComponent,
    BlackBtnIconTextComponent,
    EventPageComponent,
    DatetimepickerComponent,
    EditEventComponent,
    DialogMessageComponent,
    EventCardComponent,
    EventsListComponent,
    NewsPageComponent,
    NewsEditComponent,
    DatePickerComponent,
    DocsHomepageComponent,
    AdminDashboardMunicipalAdminsComponent,
    CountryPickerComponent,
    AccessBlockedComponent,
    RequestDocumentComponent,
    MyDocumentsComponent,
    DocumentCardComponent,
    DocumentRequestCardComponent,
    ApproveDocumentsComponent,
    DocumentApproveCardComponent,
    EventsmapComponent,
    CreateTemplateComponent,
    GeneratepdfComponent,
    ManageAppFeaturesComponent,
    FileDragDropDirective,
    TemplateListComponent,
    EditTemplateComponent,
    RequestsComponent,
    RequestedBookCardComponent,
    CreateBookComponent,
    AdminStatisticsDashboardComponent,
    RegisteredUsersGraphComponent,
    GenderChartComponent,
    AgeChartComponent,
    DistrictsMapComponent,
    CitizensMapComponent,
    MunadminStatisticsDashboardComponent,
    DialogContentComponent,
    RegisteredMunUsersGraphComponent,
    BooksGenreChartComponent,
    AddGenreDialogComponent,
    MyRequestsComponent,
    LibraryListComponent,
    LibraryCardComponent,
    BorrowedBooksChartComponent,
    BookPageComponent,
    EditBookComponent,
    LibraryHomepageComponent,
    LibraryMapComponent,
    MunicipalCalendarComponent,
    NotFoundComponent,

    
  ],
  imports: [
    NgxEditorModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule, BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule, GoogleMapsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatSelectCountryModule.forRoot('pt'),
    NgxMaterialTimepickerModule.setOpts('pt-PT'),
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    InfiniteScrollModule, SelectButtonModule, RippleModule,
    CheckboxModule, GoogleChartsModule,
    MatSliderModule, CarouselModule
  ],
  providers: [
    MunicipalityGuard,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true

    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
