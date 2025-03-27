import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-main',
  imports: [
    CommonModule,
    FileUploadModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  files: any[] = [];
  totalSize = 0;
  totalSizePercent = 0;

  constructor(private messageService: MessageService) {}

  formatSize(bytes: number): string {
    const k = 1024;
    const dm = 2;
    const sizes = ['B', 'KB', 'MB'];
    if (bytes === 0) return '0 B';
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  }

  onSelectedFiles(event: any) {
    this.files = event.currentFiles;
    this.totalSize = 0;

    this.files.forEach(file => {
      this.totalSize += file.size;
    });

    this.totalSizePercent = Math.min((this.totalSize / 1_000_000) * 100, 100); // maxFileSize = 1MB
  }

  uploadEvent(event: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'Sukces',
      detail: 'CV przesłane'
    });

    // wykonaj "zakończenie" uploadu
    event.clear();
  }

  choose(event: any, callback: Function) {
    callback(); // otwiera dialog
  }

  clearUpload(clear: Function) {
    clear();
    this.files = [];
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }
}
