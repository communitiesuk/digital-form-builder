import { SummaryPageController } from "./SummaryPageController";
import { HapiRequest, HapiResponseToolkit } from "server/types";
import { redirectTo } from "server/plugins/engine";

export class ConfirmPageController extends SummaryPageController {
  summary: ConfirmPageController;
  makePostRouteHandler() {
    return async (request: HapiRequest, h: HapiResponseToolkit) => {
      const { cacheService } = request.services([]);

      const state = await cacheService.getState(request);
      const fund_name = state["metadata"]["fund_name"];
      const round_name = state["metadata"]["round_name"];
      return redirectTo(
        request,
        h,
        "http://localhost:3008/eligibility_result/" +
          fund_name +
          "/" +
          round_name
      );
    };
  }
}
