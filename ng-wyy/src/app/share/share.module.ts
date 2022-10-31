import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
// 存放公共组件、指令、模块
@NgModule({
  declarations: [],
  imports: [
    NzButtonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzCarouselModule
  ],
  exports: [
    NzButtonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzCarouselModule
  ]
})
export class ShareModule { }
