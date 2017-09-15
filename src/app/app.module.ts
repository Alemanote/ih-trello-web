import { BoardComponent } from './components/board/board.component';
import { HeaderComponent } from './components/header/header.component';
import { ToastService } from './shared/services/toast.service';
import { ToastModule } from 'ng2-toastr';
import { Ng2BootstrapModule } from 'ng-bootstrap/ng2-bootstrap';
import { DragulaModule } from 'ng2-dragula/components/dragular.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CardService } from './shared/services/card.service';
import { ListService } from './shared/services/list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import './rxjs.operators';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { PlaceholderComponent } from './components/list/placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoardComponent,
    ListComponent,
    CardComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DragulaModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    ListService,
    CardService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
