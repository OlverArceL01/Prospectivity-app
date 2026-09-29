import { Component, inject } from '@angular/core';
import { Prospectivity } from '../../services/prospectivity';
import { rxResource } from '@angular/core/rxjs-interop';
import { Map } from '../../components/map/map';

@Component({
  imports: [Map],
  selector: 'app-prospectivity-map',
  templateUrl: './prospectivity-map.html',
})
export class ProspectivityMap {
  prospectivityService = inject(Prospectivity);

  prospectivityMapDataResource = rxResource({
    stream: () => this.prospectivityService.getProspectivityMapData()
  });
}
