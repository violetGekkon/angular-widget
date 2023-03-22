import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {UploadService} from '../services/upload.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  form: UntypedFormGroup;
  error;
  userId;
  uploadResponse = { status: '', message: '', filePath: '' };


  constructor(private formBuilder: UntypedFormBuilder, private uploadService: UploadService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      document: ['']
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('document').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('xml_file', this.form.get('document').value);

    this.uploadService.upload(formData, 'Qwery').subscribe(
      (res) => this.uploadResponse = res,
      (err) => this.error = err
    );
  }


}
