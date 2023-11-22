import React, { useContext, useState } from "react";
import { CssClasses } from "./components/CssClasses";
import { ComponentContext } from "./reducers/component/componentReducer";
import { i18n } from "./i18n";
import { Actions } from "./reducers/component/types";


export function ClientSideFileUploadFieldEdit({ context = ComponentContext }) {
    const { state, dispatch } = useContext(context);
    const { selectedComponent } = state;
    const { options = {} } = selectedComponent;

    return(
        <details className="govuk-details">
            <summary className="govuk-details__summary">
                <span className="govuk-details__summary-text">
                {i18n("common.detailsLink.title")}
                </span>
            </summary>
            <div className="govuk-form-group">
                <label
                    className="govuk-label govuk-label--s"
                    htmlFor="field-schema-maxFiles"
                >
                    {i18n("clientSideFileUploadFieldEditPage.maxFiles.title")}
                </label>
                <span className="govuk-hint">
                    {i18n("clientSideFileUploadFieldEditPage.maxFiles.helpText")}
                </span>
                <input
                    className="govuk-input govuk-input--width-3"
                    data-cast="number"
                    id="field-schema-maxFiles"
                    name="options.maxFiles"
                    value={options.maxFiles || ""}
                    type="number"
                    onChange={(e) =>
                    dispatch({
                        type: Actions.EDIT_OPTIONS_MAX_FILE_UPLOAD_AMOUNT,
                        payload: e.target.value,
                    })
                    }
                />
            </div>

            <div className="govuk-form-group">
                <label
                    className="govuk-label govuk-label--s"
                    htmlFor="field-schema-parallelUploads"
                >
                    {i18n("clientSideFileUploadFieldEditPage.parallelUploads.title")}
                </label>
                <span className="govuk-hint">
                    {i18n("clientSideFileUploadFieldEditPage.parallelUploads.helpText")}
                </span>
                <input
                    className="govuk-input govuk-input--width-3"
                    data-cast="number"
                    id="field-schema-parallelUploads"
                    name="options.parallelUploads"
                    value={options.parallelUploads || ""}
                    type="number"
                    onChange={(e) =>
                    dispatch({
                        type: Actions.EDIT_OPTIONS_PARALLEL_UPLOAD_AMOUNT,
                        payload: e.target.value,
                    })
                }
                />

            </div>

            <div className="govuk-form-group">
                <label
                    className="govuk-label govuk-label--s"
                    htmlFor="field-schema-maxFilesize"
                >
                    {i18n("clientSideFileUploadFieldEditPage.maxFilesize.title")}
                </label>
                <span className="govuk-hint">
                    {i18n("clientSideFileUploadFieldEditPage.maxFilesize.helpText")}
                </span>
                <input
                    className="govuk-input govuk-input--width-3"
                    data-cast="number"
                    id="field-schema-maxFilesize"
                    name="options.maxFilesize"
                    value={options.maxFilesize || ""}
                    type="number"
                    onChange={(e) =>
                    dispatch({
                        type: Actions.EDIT_OPTIONS_MAX_FILE_SIZE,
                        payload: e.target.value,
                    })

                    }
                />
            </div>

            <div className="govuk-form-group">
                <label
                    className="govuk-label govuk-label--s"
                    htmlFor="field-schema-minimumRequiredFiles"
                >
                    {i18n("clientSideFileUploadFieldEditPage.minimumRequiredFiles.title")}
                </label>
                <span className="govuk-hint">
                    {i18n("clientSideFileUploadFieldEditPage.minimumRequiredFiles.helpText")}
                </span>
                <input
                    className="govuk-input govuk-input--width-3"
                    data-cast="number"
                    id="field-schema-minimumRequiredFiles"
                    name="options.minimumRequiredFiles"
                    value={options.minimumRequiredFiles || ""}
                    type="number"
                    onChange={(e) =>
                    dispatch({
                        type: Actions.EDIT_OPTIONS_MIN_REQUIRED_FILES,
                        payload: e.target.value,
                    })
                    }
                />
            </div>

            <div className="govuk-form-group">
                {fileFormats.map((format, index) => (
                <div key={index} className="govuk-checkboxes__item">
                    <label
                        className="govuk-label govuk-checkboxes__label"
                        htmlFor={`field-schema-acceptedFiles-${format.replace("/", "")}`}
                    >
                        {i18n(`clientSideFileUploadFieldEditPage.acceptedFiles.fileFormats.${format}.title`)}
                    </label>
                    <input
                        className="govuk-checkboxes__input"
                        id={`field-schema-acceptedFiles-${format.replace("/", "")}`}
                        name={`options.acceptedFiles-${format.replace("/", "")}`}
                        checked={options.JSON.parse(acceptedFiles).includes(format)}
                        type="checkbox"
                        onChange={(e) => {
                            handleCheckboxChange(format.value);
                            dispatch({
                                type: Actions.EDIT_OPTIONS_ACCEPTED_FILES,
                                payload: JSON.stringify(selectedFormats),
                            }
                            )
                            console.log("state: ", state);
                        }}
                    />
                </div>
                ))}

            </div>

        </details>
    )
}
