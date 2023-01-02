import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { movie } from '../Model/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url : string = 'https://api.themoviedb.org/3';

  constructor(
    private http: HttpClient
  ) { }

  getLatestMovie() : Observable<any> {
    return this.http.get<any>(this.url+'/movie/latest?api_key=0264b0cdba895000a1d2f5382fe17e4f');  //+environment.api_key
  }

  getPopularMovies() : Observable<movie> {
    return this.http.get<movie>(this.url+'/movie/popular?api_key=0264b0cdba895000a1d2f5382fe17e4f')
  }

  getNowPlayingMovies() : Observable<movie> {
    return this.http.get<movie>(this.url+'/movie/now_playing?api_key=0264b0cdba895000a1d2f5382fe17e4f')
  }

  getTopRatedMovies() : Observable<movie> {
    return this.http.get<movie>(this.url+'/movie/top_rated?api_key=0264b0cdba895000a1d2f5382fe17e4f')
  }

  getUpcomingMovies() : Observable<movie> {
    return this.http.get<movie>(this.url+'/movie/upcoming?api_key=0264b0cdba895000a1d2f5382fe17e4f')
  }

  getTrendingMovies() : Observable<movie> {
    return this.http.get<movie>(this.url+'/trending/all/week?api_key=0264b0cdba895000a1d2f5382fe17e4f')
  }

  getOriginalsMovies() : Observable<movie> {
    return this.http.get<movie>(this.url+'/discover/tv?api_key=0264b0cdba895000a1d2f5382fe17e4f')
  }

  // getMovies() {
  //   return this.http.get('')
  // }

  // getPopularMovie() {
  //   return this.http.get('')
  // }

}
