import { Routes } from '@angular/router'
import { BridgeComponent } from './features/bridge/bridge.component'
import { BuilderComponent } from './features/builder/builder.component'

export const routes: Routes = [
    { path: '', redirectTo: '/bridge', pathMatch: 'full' },
    { path: 'bridge', component: BridgeComponent },
    { path: 'builder', component: BuilderComponent },
]
