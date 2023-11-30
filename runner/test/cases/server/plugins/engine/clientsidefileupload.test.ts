import * as Code from "@hapi/code";
import * as Lab from "@hapi/lab";
import { ClientSideFileUploadField } from "src/server/plugins/engine/components";
import { validationOptions } from "../../../../../src/server/plugins/engine/pageControllers/validationOptions";

const lab = Lab.script();
exports.lab = lab;
const { expect } = Code;
const { suite, test } = lab;

suite("ClientSideFileUploadField", () => {
  test("Should return correct view model with default values", () => {
    const def = {
      name: "myFileUpload",
      title: "My File Upload",
      hint: "a hint",
      options: {
        dropzoneConfig: {
          maxFiles: 1,
          parallelUploads: 1,
          maxFilesize: 5,
          acceptedFiles:
            "image/jpeg,image/png,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.oasis.opendocument.spreadsheet",
        },
        showNoScriptWarning: false,
        minimumRequiredFiles: 1,
      },
      schema: {},
    };
    const fileUploadField = new ClientSideFileUploadField(def, {});
    expect(fileUploadField.getViewModel({})).to.contain({
      dropzoneConfig: {
        maxFiles: 1,
        parallelUploads: 1,
        maxFilesize: 5,
        acceptedFiles:
          "image/jpeg,image/png,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.oasis.opendocument.spreadsheet",
      },
      showNoScriptWarning: false,
      minimumRequiredFiles: 1,
    });
  });

  test("Should return correct view model with custom configuration", () => {
    const def = {
      name: "myFileUpload",
      title: "My File Upload",
      hint: "a hint",
      options: {
        dropzoneConfig: {
          maxFiles: 3,
          parallelUploads: 3,
          maxFilesize: 10,
          acceptedFiles: "image/jpeg,image/png,application/pdf",
        },
        showNoScriptWarning: true,
        minimumRequiredFiles: 2,
      },
      schema: {},
    };
    const fileUploadField = new ClientSideFileUploadField(def, {});
    expect(fileUploadField.getViewModel({})).to.contain({
      dropzoneConfig: {
        maxFiles: 3,
        parallelUploads: 3,
        maxFilesize: 10,
        acceptedFiles: "image/jpeg,image/png,application/pdf",
      },
      showNoScriptWarning: true,
      minimumRequiredFiles: 2,
    });
  });

  test("Should supply custom validation message if defined", () => {
    const def = {
      name: "myFileUpload",
      title: "My File Upload",
      hint: "a hint",
      options: {
        dropzoneConfig: {
          maxFiles: 1,
          parallelUploads: 1,
          maxFilesize: 5,
          acceptedFiles:
            "image/jpeg,image/png,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.oasis.opendocument.spreadsheet",
        },
        showNoScriptWarning: false,
        minimumRequiredFiles: 1,
        customValidationMessage: "This is a custom error",
      },
      schema: {},
    };
    const fileUploadField = new ClientSideFileUploadField(def, {});
    const { formSchema } = fileUploadField;

    expect(formSchema.validate("valid_file_path").error).to.be.undefined();

    expect(
      formSchema.validate("invalid_file_path").error.message
    ).to.equal("This is a custom error");
  });
});
