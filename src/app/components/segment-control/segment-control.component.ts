import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-segment-control',
  templateUrl: './segment-control.component.html',
  styleUrls: ['./segment-control.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SegmentControlComponent), multi: true }
  ]
})
export class SegmentControlComponent implements OnChanges, ControlValueAccessor {

  @Input() multiple = false;
  @Input() segments: any[];
  @Input() displayField: string;
  @Input() hasError: boolean;

  isDisabled: boolean;

  @Output() selectionChange = new EventEmitter();

  propagateChange: any = (() => { });
  propagateTouch: any = (() => { });
  selectedSegments: any[] | any;
  isTouched = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.multiple && changes.multiple.currentValue) {
      this.selectedSegments = new Array(this.selectedSegments);
      this.propagateChange(this.selectedSegments);
    } else if (changes.multiple && !changes.multiple.currentValue && this.selectedSegments instanceof Array) {
      this.selectedSegments = this.selectedSegments[0];
      this.propagateChange(this.selectedSegments);
    }
  }

  writeValue(model: any) {
    if (model) {
      this.selectedSegments = model;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouch = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  isSelected(segment: any) {
    if (this.multiple && this.selectedSegments && this.selectedSegments.length) {
      return this.selectedSegments.includes(segment);
    }
    return this.selectedSegments === segment;
  }

  selectSegment(segment: any) {
    if (!this.isTouched) {
      this.propagateTouch();
      this.isTouched = true;
    }
    if (this.multiple && this.selectedSegments instanceof Array) {
      const ind = this.selectedSegments.indexOf(segment);
      if (ind === -1) {
        this.selectedSegments.push(segment);
        this.propagateChange(new Array(...this.selectedSegments));
        this.selectionChange.emit(this.selectedSegments);
      } else {
        this.selectedSegments.splice(ind, 1);
        this.propagateChange(this.selectedSegments.length ? new Array(...this.selectedSegments) : []);
        this.selectionChange.emit(this.selectedSegments);
      }
    } else {
      if (this.selectedSegments === segment) {
        this.selectedSegments = null;
        this.propagateChange(this.selectedSegments);
        this.selectionChange.emit(this.selectedSegments);
      } else {
        this.selectedSegments = segment;
        this.propagateChange(this.selectedSegments);
        this.selectionChange.emit(this.selectedSegments);
      }
    }
  }
}
