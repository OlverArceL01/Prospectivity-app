import { Component, inject, signal } from '@angular/core';
import { exampleMeasurementFormData, MeasurementFormData } from '../../interfaces/measurement-form-data';
import { form, FormField, FormRoot, validate } from '@angular/forms/signals';
import { validateNumericValue, validateNumericValueInsufficientSampleLessThan, validateNumericValueInsufficientSampleLessThanGreaterThan, validateNumericValueIsNaLessThan } from '../../validators/validate-numeric-value';
import { MeasurementPayload } from '../../interfaces/measurement-payload';
import { Prospectivity } from '../../services/prospectivity';
import { PredictionResponse } from '../../interfaces/prediction-response';
import { DecimalPipe } from '@angular/common';

interface PredictionState{
  state: 'idle' | 'loading' | 'success';
  data: PredictionResponse | null;
}

@Component({
  imports: [FormField, FormRoot, DecimalPipe],
  selector: 'app-sample-prediction',
  templateUrl: './sample-prediction.html',
})

export class SamplePrediction {
  currentPrediction = signal<PredictionState>({state:'idle', data: null});
  prospectivityService = inject(Prospectivity);
  measurementFormModel = signal<MeasurementFormData>(exampleMeasurementFormData)
  measurementForm = form(this.measurementFormModel, (schemaPath)=>{
    validate(schemaPath.CTOTAL___, (ctx) => validateNumericValue(ctx, "CTOTAL___"));
    validate(schemaPath.STOTAL__, (ctx) => validateNumericValue(ctx, "STOTAL__"));
    validate(schemaPath.SiO2, (ctx) => validateNumericValue(ctx, "SiO2"));
    validate(schemaPath.Al2O3, (ctx) => validateNumericValue(ctx, "Al2O3"));
    validate(schemaPath.Fe2O3, (ctx) => validateNumericValue(ctx, "Fe2O3"));
    validate(schemaPath.MgO, (ctx) => validateNumericValue(ctx, "MgO"));
    validate(schemaPath.CaO, (ctx) => validateNumericValue(ctx, "CaO"));
    validate(schemaPath.Na2O, (ctx) => validateNumericValue(ctx, "Na2O"));
    validate(schemaPath.K2O, (ctx) => validateNumericValue(ctx, "K2O"));
    validate(schemaPath.TiO2, (ctx) => validateNumericValue(ctx, "TiO2"));
    validate(schemaPath.P2O5, (ctx) => validateNumericValue(ctx, "P2O5"));
    validate(schemaPath.MnO, (ctx) => validateNumericValue(ctx, "MnO"));
    validate(schemaPath.Cr2O3, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Cr2O3", "<0.002"));
    validate(schemaPath.LOI, (ctx) => validateNumericValue(ctx, "LOI"));
    validate(schemaPath.Suma, (ctx) => validateNumericValue(ctx, "Suma"));
    validate(schemaPath.Sc, (ctx) => validateNumericValue(ctx, "Sc"));
    validate(schemaPath.Ba, (ctx) => validateNumericValue(ctx, "Ba"));
    validate(schemaPath.Be, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Be", "<1.0"));
    validate(schemaPath.Co, (ctx) => validateNumericValue(ctx, "Co"));
    validate(schemaPath.Cs, (ctx) => validateNumericValue(ctx, "Cs"));
    validate(schemaPath.Ga, (ctx) => validateNumericValue(ctx, "Ga"));
    validate(schemaPath.Hf, (ctx) => validateNumericValue(ctx, "Hf"));
    validate(schemaPath.Nb, (ctx) => validateNumericValue(ctx, "Nb"));
    validate(schemaPath.Rb, (ctx) => validateNumericValue(ctx, "Rb"));
    validate(schemaPath.Sn, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Sn", "<1.0"));
    validate(schemaPath.Sr, (ctx) => validateNumericValue(ctx, "Sr"));
    validate(schemaPath.Ta, (ctx) => validateNumericValue(ctx, "Ta"));
    validate(schemaPath.Th, (ctx) => validateNumericValue(ctx, "Th"));
    validate(schemaPath.U, (ctx) => validateNumericValue(ctx, "U"));
    validate(schemaPath.V, (ctx) => validateNumericValue(ctx, "V"));
    validate(schemaPath.W, (ctx) => validateNumericValue(ctx, "W"));
    validate(schemaPath.Zr, (ctx) => validateNumericValue(ctx, "Zr"));
    validate(schemaPath.Y, (ctx) => validateNumericValue(ctx, "Y"));
    validate(schemaPath.La, (ctx) => validateNumericValue(ctx, "La"));
    validate(schemaPath.Ce, (ctx) => validateNumericValue(ctx, "Ce"));
    validate(schemaPath.Pr, (ctx) => validateNumericValue(ctx, "Pr"));
    validate(schemaPath.Nd, (ctx) => validateNumericValue(ctx, "Nd"));
    validate(schemaPath.Sm, (ctx) => validateNumericValue(ctx, "Sm"));
    validate(schemaPath.Eu, (ctx) => validateNumericValue(ctx, "Eu"));
    validate(schemaPath.Gd, (ctx) => validateNumericValue(ctx, "Gd"));
    validate(schemaPath.Tb, (ctx) => validateNumericValue(ctx, "Tb"));
    validate(schemaPath.Dy, (ctx) => validateNumericValue(ctx, "Dy"));
    validate(schemaPath.Ho, (ctx) => validateNumericValue(ctx, "Ho"));
    validate(schemaPath.Er, (ctx) => validateNumericValue(ctx, "Er"));
    validate(schemaPath.Tm, (ctx) => validateNumericValue(ctx, "Tm"));
    validate(schemaPath.Yb, (ctx) => validateNumericValue(ctx, "Yb"));
    validate(schemaPath.Lu, (ctx) => validateNumericValue(ctx, "Lu"));
    validate(schemaPath.Mo, (ctx) => validateNumericValue(ctx, "Mo"));
    validate(schemaPath.Cu, (ctx) => validateNumericValue(ctx, "Cu"));
    validate(schemaPath.Pb, (ctx) => validateNumericValue(ctx, "Pb"));
    validate(schemaPath.Zn, (ctx) => validateNumericValue(ctx, "Zn"));
    validate(schemaPath.Ni, (ctx) => validateNumericValue(ctx, "Ni"));
    validate(schemaPath.As_, (ctx) => validateNumericValue(ctx, "As_"));
    validate(schemaPath.Cd, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Cd", "<0.1"));
    validate(schemaPath.Sb, (ctx) => validateNumericValueInsufficientSampleLessThanGreaterThan(ctx, "Sb", "<0.1", ">2000.0"));
    validate(schemaPath.Bi, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Bi", "<0.1"));
    validate(schemaPath.Ag, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Ag", "<0.1"));
    validate(schemaPath.Au, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Au", "<0.5"));
    validate(schemaPath.Hg, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Hg", "<0.01"));
    validate(schemaPath.Tl, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Tl", "<0.1"));
    validate(schemaPath.Se, (ctx) => validateNumericValueInsufficientSampleLessThan(ctx, "Se", "<0.5"));
    validate(schemaPath.Te_ppm, (ctx) => validateNumericValueIsNaLessThan(ctx, "Te_ppm", "<0.2"));
    validate(schemaPath.B_ppm, (ctx) => validateNumericValueIsNaLessThan(ctx, "B_ppm", "<3.0"));
  } , {
     submission: {
      action: async (field) => {
        this.currentPrediction.set({
          state: 'loading',
          data: null
        });
        const measurements = field().value();
        const payload : MeasurementPayload = {
          CTOTAL___: measurements.CTOTAL___ ? Number(measurements.CTOTAL___)  : null,
          STOTAL__: measurements.STOTAL__ ? Number(measurements.STOTAL__) : null,
          SiO2: measurements.SiO2 ? Number(measurements.SiO2) : null,
          Al2O3: measurements.Al2O3 ? Number(measurements.Al2O3) : null,
          Fe2O3: measurements.Fe2O3 ? Number(measurements.Fe2O3) : null,
          MgO: measurements.MgO ? Number(measurements.MgO) : null,
          CaO: measurements.CaO ? Number(measurements.CaO) : null,
          Na2O: measurements.Na2O ? Number(measurements.Na2O) : null,
          K2O: measurements.K2O ? Number(measurements.K2O) : null,
          TiO2: measurements.TiO2 ? Number(measurements.TiO2) : null,
          P2O5: measurements.P2O5 ? Number(measurements.P2O5) : null,
          MnO: measurements.MnO ? Number(measurements.MnO) : null,
          Cr2O3: measurements.Cr2O3,
          LOI: measurements.LOI ? Number(measurements.LOI) : null,
          Suma: measurements.Suma ? Number(measurements.Suma) : null,
          Sc: measurements.Sc ? Number(measurements.Sc) : null,
          Ba: measurements.Ba ? Number(measurements.Ba) : null,
          Be: measurements.Be,
          Co: measurements.Co ? Number(measurements.Co) : null,
          Cs: measurements.Cs ? Number(measurements.Cs) : null,
          Ga: measurements.Ga ? Number(measurements.Ga) : null,
          Hf: measurements.Hf ? Number(measurements.Hf) : null,
          Nb: measurements.Nb ? Number(measurements.Nb) : null,
          Rb: measurements.Rb ? Number(measurements.Rb) : null,
          Sn: measurements.Sn,
          Sr: measurements.Sr ? Number(measurements.Sr) : null,
          Ta: measurements.Ta ? Number(measurements.Ta) : null,
          Th: measurements.Th ? Number(measurements.Th) : null,
          U: measurements.U ? Number(measurements.U) : null,
          V: measurements.V ? Number(measurements.V) : null,
          W: measurements.W ? Number(measurements.W) : null,
          Zr: measurements.Zr ? Number(measurements.Zr) : null,
          Y: measurements.Y ? Number(measurements.Y) : null,
          La: measurements.La ? Number(measurements.La) : null,
          Ce: measurements.Ce ? Number(measurements.Ce) : null,
          Pr: measurements.Pr ? Number(measurements.Pr) : null,
          Nd: measurements.Nd ? Number(measurements.Nd) : null,
          Sm: measurements.Sm ? Number(measurements.Sm) : null,
          Eu: measurements.Eu ? Number(measurements.Eu) : null,
          Gd: measurements.Gd ? Number(measurements.Gd) : null,
          Tb: measurements.Tb ? Number(measurements.Tb) : null,
          Dy: measurements.Dy ? Number(measurements.Dy) : null,
          Ho: measurements.Ho ? Number(measurements.Ho) : null,
          Er: measurements.Er ? Number(measurements.Er) : null,
          Tm: measurements.Tm ? Number(measurements.Tm) : null,
          Yb: measurements.Yb ? Number(measurements.Yb) : null,
          Lu: measurements.Lu ? Number(measurements.Lu) : null,
          Mo: measurements.Mo ? Number(measurements.Mo) : null,
          Cu: measurements.Cu ? Number(measurements.Cu) : null,
          Pb: measurements.Pb ? Number(measurements.Pb) : null,
          Zn: measurements.Zn ? Number(measurements.Zn) : null,
          Ni: measurements.Ni ? Number(measurements.Ni) : null,
          As_: measurements.As_ ? Number(measurements.As_) : null,
          Cd: measurements.Cd,
          Sb: measurements.Sb,
          Bi: measurements.Bi,
          Ag: measurements.Ag,
          Au: measurements.Au,
          Hg: measurements.Hg,
          Tl: measurements.Tl,
          Se: measurements.Se,
          Te_ppm: measurements.Te_ppm ? measurements.Te_ppm : null,
          B_ppm: measurements.B_ppm ? measurements.B_ppm : null,
          geochemistry_published: measurements.geochemistry_published
        }
        this.prospectivityService.predictSampleProspectivity(payload).subscribe(prediction =>{
          this.currentPrediction.set({
            state: 'success',
            data: prediction
          });
        });
      }
    }
  });
}

