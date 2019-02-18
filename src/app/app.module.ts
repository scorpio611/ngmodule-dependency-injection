import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentProjectionModule} from './content-projection/content-projection.module';
import {AuthService} from './auth.service';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentProjectionModule,
    ImageGalleryModule
  ],
  providers: [
    {provide: AuthService, useClass: AuthService},
    {provide: 'API_ENDPOINT', useValue: 'http://api.example.com'},
    {provide: 'API_URL', useExisting: 'API_ENDPOINT'},
    {
      provide: 'some-token',
      useFactory() {
        return Math.random();
      }
    },
    {provide: GalleryConfig, useValue: 2},
    // {provide: 'API_URL', useExisting: 'api.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
