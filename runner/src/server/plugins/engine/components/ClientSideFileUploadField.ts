import { FormComponent } from "./FormComponent";
import { FormData, FormSubmissionErrors } from "../types";
import { ClientSideFileUploadFieldComponent } from "@xgovformbuilder/model";
import { FormModel } from "server/plugins/engine/models";
import { ClientSideFileUploadFieldViewModel } from "server/plugins/engine/components/types";
import joi from "joi";
export class ClientSideFileUploadField extends FormComponent {
  options: ClientSideFileUploadFieldComponent["options"];
  schema: ClientSideFileUploadFieldComponent["schema"];

  constructor(def: ClientSideFileUploadFieldComponent, model: FormModel) {
    super(def, model);
    this.options = def.options;
    this.schema = def.schema;
  }

  getFormSchemaKeys() {
    return {
      [this.name]: joi.allow("").allow(null),
      [`${this.name}__filename`]: joi.string().optional(),
      [`${this.name}__delete[]`]: joi.string().optional(),
    };
  }

  getAdditionalValidationFunctions(): Function[] {
    return [
      async (request, viewModel) => {
        const { uploadService, cacheService } = request.services([]);
        const state = await cacheService.getState(request);
        const applicationId = state.metadata?.application_id ?? "";
        const { id, path } = request.params as any;
        const componentKey = viewModel.components.find(
          (c) => c.type === "ClientSideFileUploadField"
        ).model.id;
        const key = `${applicationId}/${id}/${path}/${componentKey}`;

        // we wait an arbitrary amount of 1 second here, because of race conditions.
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const files = await uploadService.listFilesInBucketFolder(key);

        const maxFiles = this.options.dropzoneConfig.maxFiles;
        if (files.length > maxFiles) {
          return [
            {
              path: componentKey,
              name: componentKey,
              href: `#${componentKey}`,
              text:
                maxFiles > 1
                  ? `You can only upload ${maxFiles} files`
                  : `You can only upload a single file`,
            },
          ];
        }

        const hasRequiredFiles =
          files.length >= this.options.minimumRequiredFiles;
        if (hasRequiredFiles) {
          return [];
        }

        const error = {
          path: componentKey,
          name: componentKey,
          href: `#${componentKey}`,
        };

        if (this.options.minimumRequiredFiles === 1) {
          return [
            { ...error, ...{ text: `${viewModel.pageTitle} is required` } },
          ];
        }

        return [
          {
            ...error,
            ...{
              text: `${viewModel.pageTitle} requires ${this.options.minimumRequiredFiles} files`,
            },
          },
        ];
      },
    ];
  }

  getViewModel(
    formData: FormData,
    errors: FormSubmissionErrors
  ): ClientSideFileUploadFieldViewModel {
    const viewModel = {
      ...super.getViewModel(formData, errors),
      dropzoneConfig: this.options.dropzoneConfig,
      existingFiles: [], // this is populated afterwards.
      showNoScriptWarning: this.options.showNoScriptWarning || false,
    } as ClientSideFileUploadFieldViewModel;
    return viewModel;
  }
}
