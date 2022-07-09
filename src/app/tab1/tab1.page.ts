import { Component } from '@angular/core';
import { Router, NavigationExtras, Navigation } from '@angular/router'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  moviedata = {
    "items": [
        {
            "volumeInfo": {
                "title": "Star Wars: A New Hope (Episode IV)",
                "authors": [
                    "George Lucas"
                ],
                "description": "After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars1.jpg"
                }
            }
        },
        {
            "volumeInfo": {
                "title": "Star Wars: The Empire Strikes Back (Episode V)",
                "authors": [
                    "George Lucas"
                ],
                "description": "Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars2.jpg"
                }
            }
        },
        {
            "volumeInfo": {
                "title": "Star Wars: Return of the Jedi (Episode VI)",
                "authors": [
                    "George Lucas"
                ],
                "description": "Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars3.jpg"
                }
            }
        },
        {
            "volumeInfo": {
                "title": "Star Wars: The Phantom Menace (Episode I)",
                "authors": [
                    "George Lucas"
                ],
                "description": "Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi set out to stop the Trade Federation from invading Naboo. While travelling, they come across a gifted boy, Anakin, and learn that the Sith have returned.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars4.jpg"
                }
            }
        },
        {
            "volumeInfo": {
                "title": "Star Wars: Attack of the Clones (Episode II)",
                "authors": [
                    "George Lucas"
                ],
                "description": "While pursuing an assassin, Obi Wan uncovers a sinister plot to destroy the Republic. With the fate of the galaxy hanging in the balance, the Jedi must defend the galaxy against the evil Sith.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars5.jpg"
                }
            }
        },
        {
            "volumeInfo": {
                "title": "Star Wars: Revenge of the Sith (Episode III)",
                "authors": [
                    "George Lucas"
                ],
                "description": "Anakin joins forces with Obi-Wan and sets Palpatine free from the evil clutches of Count Doku. However, he falls prey to Palpatine and the Jedis' mind games and gives into temptation.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars6.jpg"
                }
            }
        },
        {
            "volumeInfo": {
                "title": "Star Wars: The Force Awakens (Episode VII)",
                "authors": [
                    "J.J. Abrams"
                ],
                "description": "A new order threatens to destroy the New Republic. Finn, Rey and Poe, backed by the Resistance and the Republic, must find a way to stop them and find Luke, the last surviving Jedi.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars7.jpg"
                }
            }
        },
        {
            "volumeInfo": {
                "title": "Star Wars: The Last Jedi (Episode VIII)",
                "authors": [
                    "Rian Johnson"
                ],
                "description": "Rey seeks to learn the ways of the Jedi under Luke Skywalker, its remaining member, to reinvigorate the Resistance's war against the First Order.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars8.jpg"
                }
            }
        },
        {
            "volumeInfo": {
                "title": "Star Wars: The Rise of Skywalker (Episode IX)",
                "authors": [
                    "J.J. Abrams"
                ],
                "description": "The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.",
                "imageLinks": {
                    "thumbnail": "../../assets/images/starwars9.jpg"
                }
            }
        }
    ]
}



  constructor(private router: Router) {}

  onClickedMovieItem(movie) {
    //상세 페이지에 전달할 데이터 포장
    let navigationExtras: NavigationExtras = {
        state: {
            movie: movie
        }
    };

    this.router.navigate(['/detail/'], navigationExtras);

  }
}
