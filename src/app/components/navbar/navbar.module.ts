import { NgModule } from "@angular/core";
import { NabvarComponent } from "./navbar.component";
import { TypeaheadModule } from "../typeahead/typeahead.module";

@NgModule({
  declarations: [NabvarComponent],
  exports: [NabvarComponent],
  imports: [TypeaheadModule],
  providers: [],
})
export class NavbarModule {}
