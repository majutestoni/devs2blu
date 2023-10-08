import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from 'src/app/@core/product.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.formGroup.patchValue(this.data.produto)



  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      code: '',
      name: '',
      costPrice: '',
      salePrice: '',
      preparationTime: '',
      productType: '',
      description: '',
    });
  }

}

export interface DialogData {
  produto: ProductModel;
}
