import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { MealsService } from "./services/meals/meals.service";
import { ListItemComponent } from "./components/list-item/list-item.component";
import { WorkoutsService } from "./services/workouts/workouts.service";
import { JoinPipe } from "./pipes/join.pipe";
import { WorkoutPipe } from "./pipes/workout.pipe";
import { ScheduleService } from "./services/schedule/schedule.service";

@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  declarations: [ListItemComponent, JoinPipe, WorkoutPipe],
  exports: [ListItemComponent, JoinPipe, WorkoutPipe],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MealsService, WorkoutsService, ScheduleService],
    };
  }
}
