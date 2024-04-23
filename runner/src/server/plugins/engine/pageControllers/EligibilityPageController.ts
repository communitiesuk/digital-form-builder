import { PageController } from "./PageController";
import { HapiRequest, HapiResponseToolkit } from "server/types";

export class EligibilityPageController extends PageController {
  getViewModel(formData, errors) {
    return {
      ...super.getViewModel(formData, errors),
      isStartPage: false,
      skipTimeoutWarning: true,
    };
  }

  makePostRouteHandler() {
    return async (request: HapiRequest, h: HapiResponseToolkit) => {
      const { payService, cacheService, uploadService } = request.services([]);
      const model = this.model;
      const state = await cacheService.getState(request);
      state.metadata.isEligible = true;
      await cacheService.mergeState(request, { ...state });
      // return super.makePostRouteHandler();
    };
  }
}
