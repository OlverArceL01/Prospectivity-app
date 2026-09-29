import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProspectivityMapData } from '../interfaces/prospectivity-map-data-response';
import { MeasurementData } from '../interfaces/measurement-data-response';
import { MeasurementPayload } from '../interfaces/measurement-payload';
import { PredictionResponse } from '../interfaces/prediction-response';

@Service()
export class Prospectivity {
    environment = environment;
    private http = inject(HttpClient);

    getProspectivityMapData(): Observable<ProspectivityMapData> {
        const cachedData = localStorage.getItem('prospectivity-map');
        if (cachedData) {
            return of(JSON.parse(cachedData));
        }
        return this.http
        .get<ProspectivityMapData>(`${environment.apiUrl}/prospectivity-map`)
        .pipe(
            tap(data =>{
                localStorage.setItem(
                    'prospectivity-map',
                    JSON.stringify(data)
                )
            })
        );
    }

    getProspectivityMapMeasurement(objectIdLeft: number): Observable<MeasurementData> {
        return this.http
        .get<MeasurementData>(`${environment.apiUrl}/prospectivity-map-measurement/${objectIdLeft}`);
    }

    predictSampleProspectivity(payload: MeasurementPayload): Observable<PredictionResponse>{
        return this.http
        .post<PredictionResponse>(`${environment.apiUrl}/predict-sample-prospectivity/`, payload);
    }
}