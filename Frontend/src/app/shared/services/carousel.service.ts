import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { CarouselDetails, CarouselHome } from '../models/carousel.model';

const URL = 'http://localhost:3000/carousel';

@Injectable({
    providedIn: 'root',
})

export class CarouselService {

    constructor(private http: HttpClient) { }

    getCarouselHome(): Observable<CarouselHome[]> {
        return this.http.get<CarouselHome[]>(URL).pipe(
            catchError(this.handleError)
        );
    }

    getCarouselDetails(slug: string | null): Observable<CarouselDetails[]> {
        return this.http.get<CarouselDetails[]>(`${URL}/${slug}`).pipe(
            catchError(this.handleError)  // Manejo de errores
        );
    }

    // Manejo de errores de las solicitudes HTTP
    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            errorMessage = `Client-side error: ${error.error.message}`;
        } else {
            // Error del lado del servidor
            errorMessage = `Server-side error: ${error.status} - ${error.message}`;
        }
        console.error(errorMessage);  // Log para debugging
        return throwError(() => new Error(errorMessage));  // Retorna un Observable de error
    }
}
