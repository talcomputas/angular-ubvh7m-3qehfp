import { Component } from "@angular/core";

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

interface Option {
  id: number;
  text: string;
}

/**
 * @title Exclusive selection
 */
@Component({
  selector: "button-toggle-exclusive-example",
  templateUrl: "button-toggle-exclusive-example.html",
  styleUrls: ["button-toggle-exclusive-example.css"]
})
export class ButtonToggleExclusiveExample {
  myFlagForButtonToggle: String = "Single";
  options: Array<Option> = [
    { id: 1, text: "Single" },
    { id: 2, text: "Multiple" },
    { id: 3, text: "foo" },
    { id: 4, text: "Bar" },
    { id: 5, text: "CCCCC" }
  ];
  outerForm: FormGroup;

  max: number = 2;

  constructor(private fb: FormBuilder) {
    this.outerForm = this.fb.group({
      firstFormGroup: this.fb.group({
        pidNumber: new FormControl("")
      }),
      secondFormGroup: this.fb.group({
        endpoints: new FormControl("", [
          Validators.required,
          Validators.minLength(2)
        ])
      })
    });
  }

  onGroupChange(group: any) {
    //group.value is an array with the elements selected
    if (group.value.length > this.max) {
      let newValue = group.value;
      newValue.shift();
      group.value = newValue;
    }
    console.log(group.value);
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
