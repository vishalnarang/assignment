import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlMessages } from "./components/control-messages/control-messages";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ControlMessages,
  ],
  exports: [
    ControlMessages,
  ]
})
export class JwCommonModule {}
