import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs/Rx';

import { User } from './../models/user';

export const USERS: User[] = [
  {
    id: 1,
    username: 'm.mecheri',
    password: 'test',
    email: 'mehdi.mecheri@viveris.fr',
    firstname: 'Mehdi',
    lastname: 'Mecheri',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 2,
    username: 'l.messi',
    password: 'test',
    email: 'lionel.messi@barca.es',
    firstname: 'Lionel',
    lastname: 'Messi',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 3,
    username: 'c.ronaldo',
    password: 'test',
    email: 'cristiano.ronaldo@real.es',
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 4,
    username: 'j.neymarr',
    password: 'test',
    email: 'neymar.jr@psg.fr',
    firstname: 'Neymar',
    lastname: 'JR',
    birthdate: new Date(2018, 5, 22)
  }
];

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    // return Observable.of(USERS);
    return this.http
      .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User`)
      .map((resp) => resp as User[])
      .catch((resp) => Observable.throw(resp.error.message));
  }

  getUser(id: number): Observable<User> {
    // return Observable.of(USERS.find(user => user.id === id));
    return this.http
      .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
      .map((resp) => resp as User)
      .catch((resp) => Observable.throw(resp.error.message));
  }

  createUser(user: User): Observable<any> {
    return this.http
      .post(`https://aspnetcoreapistarter.azurewebsites.net/api/User`, user)
      .catch((resp) => Observable.throw(resp.error.message));
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${user.id}`, user)
      .catch((resp) => Observable.throw(resp.error.message));
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
      .catch((resp) => Observable.throw(resp.error.message));
  }

  // // Récupération de données JSON
  // this.http.get('https://api.github.com/emojis')
  //   .subscribe(data => {
  //     console.log(data['hugs']);
  //   });

  // // Vérification du type de la réponse
  // interface EmojisResponse {
  //   hugs: string;
  // }
  // this.http.get<EmojisResponse>('https://api.github.com/emojis')
  //   .subscribe(data => {
  //     console.log(data.hugs);
  //   });

  // // Récupération de la totalité de la réponse pas le body uniquement
  // this.http.get('https://api.github.com/emojis', { observe: 'response' })
  //   .subscribe(resp => {
  //     console.log(resp);
  //   });

  // // Gestion des erreurs
  // this.http.get('https://api.github.com/emojisqsd')
  //   .subscribe(
  //     data => console.log(data),
  //     error => console.log('Erreur http -->', error)
  //   );

  // // Récupération de données non-JSON
  // this.http.get('file.txt', { responseType: 'text' })
  //   .subscribe(data => {
  //     console.log(data);
  //   });

  // // Envoyer des données a un serveur
  // // Requete POST
  // const body = { name: 'Mehdi' };
  // this.http
  //   .post('/api/users/add', body)
  //   .subscribe(
  //     data => console.log(data),
  //     error => console.log('Erreur http -->', error)
  //   );

  // // Headers
  // const body = { name: 'Mehdi' };
  // this.http
  //   .post('/api/users/add', body, {
  //     headers: new HttpHeaders().set('Authorization', 'auth-token'),
  //   })
  //   .subscribe();

  // // URL Parameters  
  // const body = { name: 'Mehdi' };
  // this.http
  //   .post('/api/users/add', body, {
  //     params: new HttpParams().set('id', '3'),
  //   })
  //   .subscribe();
}
