import { Component, OnInit } from '@angular/core';
import { movie } from '../Model/movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  latestMovie : any;
  popularMovies !: movie; 
  nowPlayingMovies !: movie;
  topRatedMovies !: movie;
  upcomingMovies !: movie;
  trendingMovies !: movie;
  originals !: movie;

  constructor(
    private MovieService : MovieService
  ) {}

  ngOnInit(): void {
    this.getLatestMovie();
    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopReatedMovies();
    this.getUpcomingMovies();
    this.getTrendingMovies();
    this.getOriginalMovies()
  }

  getLatestMovie() {
    this.MovieService.getLatestMovie().subscribe(res => {
      this.latestMovie = this.changeData(res);
    }
    )
  }
  changeData(res: any): any {
    if(!res.backdrop_path) {
      res.backdrop_path = 'https://image.tmdb.org/t/p/original'+res.poster_path+'?api_key=0264b0cdba895000a1d2f5382fe17e4f';
    } else {
      res.backdrop_path = 'https://image.tmdb.org/t/p/original'+res.backdrop_path+'?api_key=0264b0cdba895000a1d2f5382fe17e4f';
    }
    return res;
  }

  getPopularMovies() {
    this.MovieService.getPopularMovies().subscribe(res => {
      this.popularMovies = this.modifyData(res);
    })
  }

  getNowPlayingMovies() {
    this.MovieService.getNowPlayingMovies().subscribe(res => {
      this.nowPlayingMovies = this.modifyData(res);
    })
  }

  getTopReatedMovies() {
    this.MovieService.getTopRatedMovies().subscribe(res => {
      this.topRatedMovies = this.modifyData(res);
    })
  }

  getUpcomingMovies() {
    this.MovieService.getUpcomingMovies().subscribe(res => {
      this.upcomingMovies = this.modifyData(res);
    })
  }

  getTrendingMovies() {
    this.MovieService.getTrendingMovies().subscribe(res => {
      this.trendingMovies = this.modifyData(res);
    })
  }

  getOriginalMovies() {
    this.MovieService.getTrendingMovies().subscribe(res => {
      this.originals = this.modifyData(res);
    })
  }


  modifyData(movies : movie) : movie {
    if(movies.results) {
      movies.results.forEach(element => {
        element.backdrop_path = 'https://image.tmdb.org/t/p/original'+element.backdrop_path+'?api_key=0264b0cdba895000a1d2f5382fe17e4f';
        if(element.title) {
          element.title = element?.name;
        }
      });
    }
    return movies;
  }
}
