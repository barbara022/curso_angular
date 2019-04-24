import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Object[]>(API + '/' + userName + '/photos');
    }
}
