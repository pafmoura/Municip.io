import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book, BookRequest, BookRequestStatus, LibraryService } from '../../../services/library/library.service';
import { Data, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter, DateAdapter } from '@angular/material/core';
import { Citizen } from '../../../services/citizen-auth.service';

@Component({
  selector: 'app-requested-book-card',
  templateUrl: './requested-book-card.component.html',
  styleUrl: './requested-book-card.component.css',
  providers: [provideNativeDateAdapter()],
})
export class RequestedBookCardComponent {
  @Input() bookRequest!: BookRequest;

  @Input() showActions: boolean = true;

  book!: Book;

  isDialogOpen = false;
  isDialogOpenOperation = false;
  isDialogOpenUserInfo = false;

  citizen!: Citizen;








  @Output() update = new EventEmitter();

  //set min date to tomorrow
  minDate = new Date();


  borrowForm: FormGroup = new FormGroup({
    returnDate: new FormControl(new Date(), Validators.required)
  });

  get returnDate() {
    return this.borrowForm.get('returnDate') as FormControl;
  }


  constructor(private router: Router, private bookService: LibraryService, private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('pt');
  }


  ngOnInit(): void {
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.borrowForm.get('returnDate')?.setValue(this.minDate);


    this.book = this.bookRequest.book;

    this.citizen = this.bookRequest.citizen;

    if (this.bookRequest.status === BookRequestStatus.Reserved) {
      //if it pass the 2h limit, the request is denied
      this.isReservationExpired();
    }
    else if (this.bookRequest.status === BookRequestStatus.Borrowed) {
      this.isRequestDelayed();
    }


  }

  isReservationExpired() {
    if (new Date().getTime() > new Date(this.bookRequest!.reservationLimitDate!).getTime()) {
      this.bookService.deleteRequest(this.bookRequest.id).subscribe(
        (data) => {
          console.log(data);
          this.update.emit();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  isRequestDelayed() {
    //check if the return date is expired
    if (new Date().getTime() > new Date(this.bookRequest.returnDate!).getTime()) {
      this.bookService.delayRequest(this.bookRequest.id).subscribe(
        (data) => {
          console.log(data);
          this.update.emit();
        },
        (error) => {
          console.error(error);
        }
      );
    }

  }




  /**
   * Estilos diferentes para cada estado do documento
   * @returns
   */
  getStatusClass(): string {

    if (this.bookRequest.status === BookRequestStatus.Delivered) {
      return 'bg-[#08BC25] text-[#1D8702]';
    } else if (this.bookRequest.status === BookRequestStatus.Reserved) {
      return 'bg-[#F4A42C] text-[#9B4F08]';
    } else if (this.bookRequest.status === BookRequestStatus.Borrowed) {
      return 'bg-[#1E90FF] text-[#0E4F71]';
    } else {
      return 'bg-[#FF0000] text-[#B02121]';
    }
  }


  getStatusString(status: BookRequestStatus): string {
    return this.bookService.bookRequestStatusToString(status)
  }

  BookRequestStatus() {
    return BookRequestStatus;
  }


  borrowBook() {

    let date = new Date(this.borrowForm.get('returnDate')?.value);
    date.setHours(23, 59, 59, 999);
    this.bookService.borrowBook(this.bookRequest.id, date).subscribe(
      (data) => {
        console.log(data);
        this.openDialogOperation();

      },
      (error) => {
        console.error(error);
      }
    )
  }


  deliverBook() {
    this.bookService.deliverBook(this.bookRequest.id).subscribe(
      (data) => {
        console.log(data);
        this.openDialogOperation();

      },
      (error) => {
        console.error(error);
      }
    )
  }

  denyRequest() {
    this.bookService.denyRequest(this.bookRequest.id).subscribe(

      (data) => {
        console.log(data);
        this.openDialogOperation();
      },
      (error) => {
        console.error(error);
      }

    )
  }

  cancelRequest() {
    this.bookService.deleteRequest(this.bookRequest.id).subscribe(
      (data) => {
        console.log(data);
        this.openDialogOperation();
      },
      (error) => {
        console.error(error);
      }
    );
  }




  sendDelayedEmail() {
    var authors = this.book.author.join(', ');
    // convert this.bookRequest.returnDate!that is a date to a string in format dd/MM/yyyy
    var returnDate = new Date(this.bookRequest.returnDate!).toLocaleDateString();
    this.bookService.sendDelayedEmail(this.bookRequest.citizen.email, this.bookRequest.citizen.firstName,
      this.book.coverImage, this.book.title, authors,
      returnDate).subscribe(
        (data) => {
          console.log(data);
          this.openDialogOperation();
        },
        (error) => {
          console.error(error);
        }
      )
  }



  closeDialog() {
    this.isDialogOpen = false;
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialogOperation() {
    this.isDialogOpenOperation = false;
    this.update.emit();
  }

  openDialogOperation() {
    this.isDialogOpenOperation = true;
  }


  openDialogUserInfo() {
    this.isDialogOpenUserInfo = true;
  }

  closeDialogUserInfo() {
    this.isDialogOpenUserInfo = false;
  }


  /**
   * Abrir a página de detalhes do livro
   */
  goToBookDetail() {

    this.router.navigate(['/library', this.book.id]);

  }




  getTimeLeft(date: Date): string {
    //it will receive the date limit, and will return the time left in hours and minutes
    let dateReceived = new Date(date);
    let now = new Date();
    let diff = dateReceived.getTime() - now.getTime();
    let hours = Math.floor(diff / 3600000);
    let minutes = Math.floor((diff % 3600000) / 60000);

    if (hours === 0) {
      return `${minutes}min`;
    } else {
      return `${hours}h ${minutes}min`;
    }
  }

}
