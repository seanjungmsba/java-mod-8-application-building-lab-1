import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { ConversationControlComponent } from './conversation-control/conversation-control.component';
import { ConversationHistoryComponent } from './conversation-history/conversation-history.component';
import { ConversationThreadComponent } from './conversation-thread/conversation-thread.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { SenderMessageComponent } from './sender-message/sender-message.component';
import { UserMessageComponent } from './user-message/user-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    ConversationControlComponent,
    ConversationHistoryComponent,
    ConversationThreadComponent,
    SendMessageComponent,
    SenderMessageComponent,
    UserMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
