import { SummaryPageController } from "./SummaryPageController";
import { FormModel } from "../models";

export class ReadOnlyPageController extends SummaryPageController {
  constructor(model: FormModel, pageDef: any) {
    super(model, pageDef);
    this.viewPageName = "read-only";
  }
}
