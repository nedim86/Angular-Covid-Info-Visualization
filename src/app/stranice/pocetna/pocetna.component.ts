import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of, Subscription } from 'rxjs';
import { ApiService } from '../../servisi/api.service';
import { DrzavaModel } from '../../interfaces/drzava-model';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.scss']
})
export class PocetnaComponent implements OnInit, OnDestroy {

  listaDrzava: DrzavaModel[];
  terminPretrage: string;
  ucitavanjeUToku: boolean = false;

  constructor(private notifikacija: MatSnackBar, private servis: ApiService) { }

  ngOnInit() {

    this.servis.getDrzave().subscribe((rezultat) => {
      //console.log(rezultat)
      this.listaDrzava = rezultat;
      this.ucitavanjeUToku = false;
    },
      (greska) => {
        this.notifikacija.open('Dogodila se greška, molimo pokušajte ponovo!', 'Zatvori')
      }
    );
  }

  pretrazi() {
    this.listaDrzava = this.listaDrzava.filter((drzava) => {
      return drzava.name.common.toLowerCase().includes(this.terminPretrage.toLowerCase())
    });
  }


  ngOnDestroy() {

  }


}
