import { AfterViewInit, Component, ElementRef, inject, input, ViewChild } from '@angular/core';
import { ProspectivityMapData } from '../../interfaces/prospectivity-map-data-response';
import { environment } from '../../../environments/environment';

import * as mapboxgl from 'mapbox-gl'; 

import { Prospectivity } from '../../services/prospectivity';
import { MeasurementData } from '../../interfaces/measurement-data-response';

@Component({
  imports: [],
  selector: 'app-map',
  templateUrl: './map.html',
})
export class Map implements AfterViewInit{
  environments = environment;
  data = input.required<ProspectivityMapData>();
  prospectivityService = inject(Prospectivity);

  @ViewChild('map')
  mapElement!: ElementRef;

  ngAfterViewInit(): void {
    
    const map = new mapboxgl.Map({
      accessToken: environment.mapboxApiKey,
      container: this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-70.65, -25.45],
      zoom: 5
    });

    map.on('load', () => {
      map.addSource('prospectivity', {
        type: 'geojson',
        data: this.data()
      });

      map.addLayer({
        id: 'prospectivity-points',
        type: 'circle',
        source: 'prospectivity',
        paint: {
          'circle-radius': 5,

          'circle-color': [
            'interpolate',
            ['linear'],
            ['get', 'probability'],

            0, '#d73027',
            0.25, '#fc8d59',
            0.5, '#fee08b',
            0.75, '#91cf60',
            1, '#1a9850'
          ],
          'circle-opacity': 0.8,
          'circle-stroke-width': 0.5
        }
      });
    });
    map.on(
      'click',
      'prospectivity-points',
      (e: mapboxgl.MapMouseEvent) => {

        const feature = e.features?.[0];

        if (!feature) return;
        const geometry = (feature as any).geometry;
        if (geometry.type !== "Point") return;
        const coordinates = geometry.coordinates as [number, number];


        const objectIdLeft = (feature as any)?.properties?.["OBJECTID_left"];
        const probability = (feature as any)?.properties?.["probability"];
        if(!objectIdLeft || !probability) return;

        this.prospectivityService.getProspectivityMapMeasurement(objectIdLeft).subscribe((measurementData: MeasurementData) =>{
          const properties = measurementData.properties;
          const propertiesHtml = Object.entries(properties)
            .map(([key, value]) => `
            <tr>
            <td style="
              width: 100px;
              max-width: 100px;
              box-sizing: border-box;
              padding: 4px 6px;
              font-weight: 600;
              vertical-align: top;
              overflow-wrap: anywhere;
              word-break: break-word;
            ">
              ${key}
            </td>

            <td style="
              width: 100px;
              max-width: 100px;
              box-sizing: border-box;
              padding: 4px 6px;
              vertical-align: top;
              overflow-wrap: anywhere;
              word-break: break-word;
            ">
              ${value ?? "N/A"}
            </td>
          </tr>
            `)
            .join("");
          new mapboxgl.Popup({
            anchor: "bottom"
          })
          .setLngLat(coordinates)
          .setHTML(`
            <div style="
              color: #000;
              width: 210px;
              box-sizing: border-box;
            ">

              <div style="
                padding-bottom: 8px;
                border-bottom: 1px solid #ddd;
                margin-bottom: 6px;
              ">
                <strong>Prospectivity measurement</strong>
                <div>ID: ${objectIdLeft}</div>
                <div>Probability: ${(probability * 100).toFixed(2)}%</div>
              </div>

              <div style="
                height: 200px;
                overflow-y: auto;
                overflow-x: hidden;
              ">
                <table style="
                  width: 200px;
                  max-width: 200px;
                  box-sizing: border-box;
                  table-layout: fixed;
                  border-collapse: collapse;
                  font-size: 13px;
                ">
                  <tbody>
                    ${propertiesHtml}
                  </tbody>
                </table>
              </div>

            </div>
          `)
          .addTo(map);
          })

      }
    );
  }
}
