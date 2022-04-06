import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyTemplateOptions } from '@ngx-formly/core';
import {distinctUntilChanged, map, startWith } from 'rxjs/operators';

interface Model {
  readonly player: string;
  readonly sport: string;
  readonly team: string;
}

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.model);
  }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      selectOptionsData: {
        teams: [
          { id: '1', name: 'Bayern Munich', sportId: '1' },
          { id: '2', name: 'Real Madrid', sportId: '1' },
          { id: '3', name: 'Cleveland', sportId: '2' },
          { id: '4', name: 'Miami', sportId: '2' },
        ],
        players: [
          { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },
          { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },
          { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },
          { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },
          { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },
          { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },
          { id: '7', name: 'Miami (Player 1)', teamId: '4' },
          { id: '8', name: 'Miami (Player 2)', teamId: '4' },
        ],
      },
    },
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'sport',
      type: 'select',
      templateOptions: {
        label: 'Sport',
        options: [
          { id: '1', name: 'Soccer' },
          { id: '2', name: 'Basketball' },
        ],
        valueProp: 'id',
        labelProp: 'name',
      },
    },
    {
      key: 'team',
      type: 'select',
      templateOptions: {
        label: 'Team',
        options: [],
        valueProp: 'id',
        labelProp: 'name',
      },
      expressionProperties: {
        'templateOptions.options': 'formState.selectOptionsData.teams.filter(team => team.sportId === model.sport)',
        // reset model when updating select options
        'model.team': `field.templateOptions.options.find(o => o.id === model.team) ? model.team:null`,
      },
    },
    {
      key: 'player',
      type: 'select',
      templateOptions: {
        label: 'Player',
        options: [],
        valueProp: 'id',
        labelProp: 'name',
      },
      expressionProperties: {
        'templateOptions.options': 'formState.selectOptionsData.players.filter(player => player.teamId === model.team)',
        // reset model when updating select options
        'model.player': `field.templateOptions.options.find(o => o.id === model.player) ? model.player:null`,
      },
    },
  ];

  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'sport',
  //     type: 'select',
  //     templateOptions: {
  //       label: 'Sport',
  //       options: [
  //         { id: '1', name: 'Soccer' },
  //         { id: '2', name: 'Basketball' },
  //       ],
  //       valueProp: 'id',
  //       labelProp: 'name',
  //     },
  //   },
  //   {
  //     key: 'team',
  //     type: 'select',
  //     templateOptions: {
  //       label: 'Team',
  //       options: [],
  //       valueProp: 'id',
  //       labelProp: 'name',
  //     },
  //     hooks: {
  //       onInit: (field) => {
  //         const teams = [
  //           { id: '1', name: 'Bayern Munich', sportId: '1' },
  //           { id: '2', name: 'Real Madrid', sportId: '1' },
  //           { id: '3', name: 'Cleveland', sportId: '2' },
  //           { id: '4', name: 'Miami', sportId: '2' },
  //         ];
  //         const sportControl = ((field as FormlyFieldConfig).form as FormGroup).get('sport') as AbstractControl; //.form.get('sport')
  //         ((field as FormlyFieldConfig).templateOptions as FormlyTemplateOptions).options = sportControl.valueChanges.pipe(
  //           startWith(sportControl.value),
  //           distinctUntilChanged(),
  //           map(sportId => {
  //             const options = teams.filter(team => team.sportId === sportId);
  //             if (!options.find(option => sportId === option.id)) {
  //               ((field as FormlyFieldConfig).formControl as AbstractControl).setValue(null);
  //             }
  //
  //             return options;
  //           }),
  //         );
  //       },
  //     },
  //   },
  //   {
  //     key: 'player',
  //     type: 'select',
  //     templateOptions: {
  //       label: 'Player',
  //       options: [],
  //       valueProp: 'id',
  //       labelProp: 'name',
  //     },
  //     hooks: {
  //       onInit: field => {
  //         const players = [
  //           { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },
  //           { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },
  //           { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },
  //           { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },
  //           { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },
  //           { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },
  //           { id: '7', name: 'Miami (Player 1)', teamId: '4' },
  //           { id: '8', name: 'Miami (Player 2)', teamId: '4' },
  //         ];
  //
  //         const teamControl = ((field as FormlyFieldConfig).form as FormGroup).get('team') as AbstractControl;
  //         ((field as FormlyFieldConfig).templateOptions as FormlyTemplateOptions).options = teamControl.valueChanges.pipe(
  //           startWith(teamControl.value),
  //           distinctUntilChanged(),
  //           map(teamId => {
  //             const options = players.filter(team => team.teamId === teamId);
  //             if (!options.find(option => teamId === option.id)) {
  //               // field.formControl.setValue(null);
  //               ((field as FormlyFieldConfig).formControl as AbstractControl).setValue(null);
  //             }
  //
  //             return options;
  //           }),
  //         );
  //       },
  //     },
  //   },
  // ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
