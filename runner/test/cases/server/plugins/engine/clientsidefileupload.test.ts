import * as Code from "@hapi/code";
import * as Lab from "@hapi/lab";
import { ClientSideFileUploadField } from "src/server/plugins/engine/components";

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
});
