import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigacija',
  templateUrl: './navigacija.component.html',
  styleUrls: ['./navigacija.component.scss']
})
export class NavigacijaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  Pocetna() {
    this.router.navigate(['']);
    console.log('Korisnik je kliknuo na dugme Početna');
  }

  Druga() {
    this.router.navigate(['druga']);
    console.log('Korisnik je kliknuo na dugme Druga');
  }

}
