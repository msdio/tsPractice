import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  moviedata = {};


  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  ionViewWillEnter() {
    this.requestChartData().subscribe(data => {
        this.moviedata = data;
    })
  }


  onClickedMovieItem(movie) {
    //상세 페이지에 전달할 데이터 포장
    let navigationExtras: NavigationExtras = {
        state: {
            movie: movie
        }
    };

    this.router.navigate(['/detail/'], navigationExtras);

  }


  //차트 데이터 외부에서 가져오기
  requestChartData(): Observable<any> {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=movie'
    return this.http.get(url);
  }
}
