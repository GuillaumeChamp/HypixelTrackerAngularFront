import {Component, inject, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import {MuseumQueryService} from '../../../../services/museum-query.service';
import {IMinecraftUser} from '../../../museum-entities/IMinecraftUser';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-profile-creator-prompt',
  imports: [FormsModule, NgIf, NgOptimizedImage],
  templateUrl: './profile-creator-prompt.component.html',
  styleUrl: '../profile-selector.component.css'
})
export class ProfileCreatorPromptComponent {
  config = inject(DynamicDialogConfig)
  username : string = "";
  @Input() profileList! : string[];
  foundMinecraftAccount : IMinecraftUser | undefined;

  constructor(private readonly museumQueryService: MuseumQueryService) {
    this.profileList = this.config.data.profileList;
  }

  fetchUuid() {
    this.museumQueryService.getUserDataFromUsername(this.username).subscribe(data=>{
      this.foundMinecraftAccount = data
    })
  }
}
