import { PageController } from "./PageController";
import { HapiRequest, HapiResponseToolkit } from "server/types";
import config from "server/config";
import { SaveViewModel } from "../models";

export class EligibilityPageController extends PageController {
  makePostRouteHandler() {
    return async (request: HapiRequest, h: HapiResponseToolkit) => {
      const response = await this.handlePostRequest(request, h);
      if (response?.source?.context?.errors) {
        return response;
      }
      const { cacheService, statusService } = request.services([]);
      const savedState = await cacheService.getState(request);
      //This is required to ensure we don't navigate to an incorrect page based on stale state values
      let relevantState = this.getConditionEvaluationContext(
        this.model,
        savedState
      );

      // Start page check so forms do not save when hitting the "Continue" button on the first page
      const startPage = this.model.def.startPage;
      const isStartPage = this.path === startPage;

      if (config.savePerPage && !isStartPage) {
        // Set flag for continous saves on each question?
        const saveViewModel = new SaveViewModel(
          this.title,
          this.model,
          relevantState,
          request
        );

        await cacheService.mergeState(request, {
          outputs: saveViewModel.outputs,
          userCompletedSummary: true,
        });
        await cacheService.mergeState(request, {
          webhookData: saveViewModel.validatedWebhookData,
        });

        const response = await statusService.savePerPageRequest(request);
        const isEligible = response.metadata.is_eligible;
        if (isEligible) {
          return this.proceed(request, h, relevantState);
        }

        let redirectUrl = response.metadata.not_eligible_redirect_url;

        if (request.query.form_session_identifier) {
          redirectUrl += `?form_session_identifier=${request.query.form_session_identifier}`;
        }

        return h.redirect(redirectUrl);
      }
      return this.proceed(request, h, relevantState);
    };
  }
}
