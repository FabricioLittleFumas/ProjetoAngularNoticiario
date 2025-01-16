import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia',
  imports: [MenubarModule,AvatarGroupModule,AvatarModule,BadgeModule,OverlayBadgeModule,CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css',
  standalone:true,
  
})
export class NoticiaComponent {
  items: MenuItem[] | undefined;
  pmenubarend: string = "p-menubar-end";
  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
          },
          {
              label: 'Projects',
              icon: 'pi pi-search',
              badge: '3',
              items: [
                  {
                      label: 'Core',
                      icon: 'pi pi-bolt',
                      shortcut: '⌘+S',
                  },
                  {
                      label: 'Blocks',
                      icon: 'pi pi-server',
                      shortcut: '⌘+B',
                  },
                  {
                      separator: true,
                  },
                  {
                      label: 'UI Kit',
                      icon: 'pi pi-pencil',
                      shortcut: '⌘+U',
                  },
              ],
          },
      ];
  }
}