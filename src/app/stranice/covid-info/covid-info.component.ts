import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../servisi/api.service';
import { CovidModel } from '../../interfaces/covid-model';
import * as _ from 'lodash';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.scss']
})
export class CovidInfoComponent implements OnInit {

  covidInfo: CovidModel[];

  ukupanBrojZarazenih: number;
  ukupanBrojSmrtnihSlucajeva: number;
  ukupnoOporavljenih: number;
  nazivDrzave: string;
  danasnjiDatum: string;
  maxDnevniBrojZarazenih: CovidModel;
  maxDnevniBrojUmrlih: CovidModel;
  maxOporavljenih: CovidModel;
  brojStanovnika: number;
  procenatUmrlihNaBrojStanovnika: number;
  procenatUmrlihNaBrojZarazenih: number;
  prosjecanBrojZarazenih: number;

  grafikonPodaci: ChartDataSets[] = [];
  grafikonPodaciUmrli: ChartDataSets[] = [];
  grafikonLabels: Label[] = [];


  constructor(
    private route: ActivatedRoute, 
    private api: ApiService, 
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.nazivDrzave = params.id;
      this.api.getCovidInfo(this.nazivDrzave).subscribe((rezultat: CovidModel[]) => {
        this.covidInfo = rezultat;
        this.brojStanovnika = this.covidInfo[0].population;
        //console.log(this.covidInfo)
        this.ukupanBrojZarazenih = this.covidInfo[this.covidInfo.length - 1].confirmed;
        this.ukupanBrojSmrtnihSlucajeva = this.covidInfo[this.covidInfo.length - 1].deaths;
        this.ukupnoOporavljenih = this.covidInfo[this.covidInfo.length - 1].recovered;
        this.danasnjiDatum = this.covidInfo[this.covidInfo.length - 1].date;

        this.maxDnevniBrojZarazenih = _.maxBy(this.covidInfo, (dan) => dan.confirmed_daily);
        this.maxDnevniBrojUmrlih = _.maxBy(this.covidInfo, (dan) => dan.deaths_daily);
        this.maxOporavljenih = _.maxBy(this.covidInfo, (dan) => dan.recovered);    

        this.procenatUmrlihNaBrojStanovnika = (this.ukupanBrojSmrtnihSlucajeva / this.brojStanovnika) * 100
        this.procenatUmrlihNaBrojZarazenih = (this.ukupanBrojSmrtnihSlucajeva / this.ukupanBrojZarazenih) * 100

        // const test = Math.max(... this.covidInfo.map((dan) => dan.confirmed_daily))
        // console.log(test);

        this.prosjecanBrojZarazenih = _.mean(this.covidInfo.map((dan) => dan.confirmed_daily))

        this.grafikonPodaci = [{
          data: [... this.covidInfo.map((dan) => dan.confirmed_daily)],
          label: 'Broj zaraženih po danu',
          borderColor: 'rgb(63,81,181)',
          backgroundColor: 'rgb(63,81,181)',
          pointStyle: 'cross',
        }]

        this.grafikonPodaciUmrli = [{
          data: [... this.covidInfo.map((dan) => dan.deaths_daily)],
          label: 'Broj umrlih po danu'
        }]

        this.grafikonLabels = [... this.covidInfo.map((dan) => this.datePipe.transform(dan.date, 'dd.MM.yy.'))]
      })

    })
  }

}
