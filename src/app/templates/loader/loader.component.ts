import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../servisi/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  ucitavanjeUToku$: Observable<boolean>;

  constructor(private loader: LoadingService) { }

  ngOnInit(): void {
   this.ucitavanjeUToku$ = this.loader.isLoading$;
  }

}
