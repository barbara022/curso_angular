import { HttpClient } from "@angular/common/http";

export class PhotoService {

    http: HttpClient;

    constructor(http: HttpClient) {

        this.http = http;

    }

    listFromUser(userName : string) {

        return this.http
        .get<Object[]>(API + '/flavio/photos');

    }
}