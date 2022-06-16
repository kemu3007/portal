import { Snippet } from '../model';
import { SnippetService } from '../snippet.service';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@app/shared/loading/loading.service';
import { MessageService } from '@app/shared/message/message.service';

@Component({
  selector: 'app-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.scss'],
})
export class SnippetListComponent implements OnInit {
  snippets: Snippet[] = [];

  constructor(
    private snippetService: SnippetService,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadingService.loading = true;
    this.snippetService.get().subscribe((snippets) => {
      this.snippets = snippets;
      this.loadingService.loading = false;
    });
  }

  copy(text: string) {
    window.navigator.clipboard.writeText(text);
    this.messageService.pushMessage({ type: 'info', body: 'クリップボードにコピーしました' });
  }

  get adsLength(): number {
    const hasMd = window.screen.width >= 768;
    return hasMd ? 4 : 1;
  }
}
