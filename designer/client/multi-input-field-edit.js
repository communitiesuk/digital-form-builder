import React, { useContext, useEffect, useState } from "react";
import { ComponentContext } from "./reducers/component/componentReducer";
import { Actions } from "./reducers/component/types";
import { i18n } from "./i18n";
import { Flyout } from "./components/Flyout";
import { ComponentContextProvider } from "./reducers/component/componentReducer";
import ComponentEdit from "./ComponentEdit";
import { ComponentCreate } from "./components/ComponentCreate";

// Sample content to be displayed inside the Flyout
const SampleFlyoutContent = () => {
  return (
    <div>
      <h2>This is a sample content inside the Flyout</h2>
      <p>Replace this content with your actual Flyout content.</p>
    </div>
  );
};

export function MultiInputFieldEdit({ page, context = ComponentContext }) {
  const { state, dispatch } = useContext(context);
  const { selectedComponent } = state;
  const { options = {} } = selectedComponent;
  const [addComponentMenuHidden, setAddComponentMenuHidden] = useState(true);

  const toggleFlyout = () => {
    setAddComponentMenuHidden(!addComponentMenuHidden);
  };

  console.log("MIFpage,", page);
  console.log("Selected component page,", selectedComponent);
  return (
    <div className="govuk-form-group">
      <label
        className="govuk-label govuk-label--s"
        htmlFor="field-schema-maxwords"
      >
        {i18n("textFieldEditComponent.maxWordField.title")}
      </label>
      <span className="govuk-hint">
        {i18n("textFieldEditComponent.maxWordField.helpText")}
      </span>
      <input
        className="govuk-input govuk-input--width-3"
        data-cast="number"
        id="field-schema-maxwords"
        name="schema.maxwords"
        value={options.maxWords || ""}
        type="number"
        onChange={(e) =>
          dispatch({
            type: Actions.EDIT_OPTIONS_MAX_WORDS,
            payload: e.target.value,
          })
        }
      />
      <p className="govuk-body">
        <a onClick={toggleFlyout} className="govuk-link">
          Add Component
        </a>
      </p>
      {/* Render Flyout with SampleFlyoutContent */}
      {addComponentMenuHidden ? null : (
        <Flyout
          title="Add Component to Multi Input Field"
          show={true}
          onHide={toggleFlyout}
        >
          <ComponentContextProvider>
            <ComponentCreate
              renderInForm={true}
              toggleAddComponent={() => {
                setIsCreatingComponent(false);
              }}
              page={selectedComponent.name}
              fromMultiInputField={true}
            />
          </ComponentContextProvider>
        </Flyout>
      )}
    </div>
  );
  // GET CREATE COMPONENT LIST
  // ONLY select comps should show
  // CREATE COMPONENT, GENERATE JSON
  // RETURN TO INPUT FIELD ON PREVIOUS PAGE
}
