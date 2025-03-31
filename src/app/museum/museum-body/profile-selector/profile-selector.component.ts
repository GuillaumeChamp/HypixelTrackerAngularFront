import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ProfileCreatorPromptComponent} from './profile-creator-prompt/profile-creator-prompt.component';

@Component({
  selector: 'app-profile-selector',
  imports: [
    NgForOf
  ],
  templateUrl: './profile-selector.component.html',
  styleUrl: './profile-selector.component.css',
  providers: [DialogService]
})
export class ProfileSelectorComponent {
  profileList = ["apple","kiwi","banana"]
  ref: DynamicDialogRef | undefined;

  constructor(private readonly dialogService: DialogService) {
  }

  promptNewProfile() {
      this.ref = this.dialogService.open(ProfileCreatorPromptComponent, {
        data: {
          profileList: this.profileList,
        },
        header: 'save new profile',
        width: '80%',
        contentStyle: {"overflow": "hidden"},
        baseZIndex: 5000,
        closable: true,
        closeOnEscape: true,
        dismissableMask: true,
        modal: true,
      })

      this.ref.onClose.subscribe()
    }

}
