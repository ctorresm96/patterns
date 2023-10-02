import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BridgePatternComponent } from './feature/bridge-pattern/bridge-pattern.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'bridge' },
  { path: 'bridge', component: BridgePatternComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
