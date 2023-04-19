import React, { Component, MouseEvent, FormEvent, ReactNode } from "react";
import { Input } from "@govuk-jsx/input";
import { ValidationErrors, Footer } from "./types";
import { validateNotEmpty, hasValidationErrors } from "../validations";
import ErrorSummary from "../error-summary";
import { DataContext } from "../context";
import logger from "../plugins/logger";

type State = {
  errors: ValidationErrors;
};

type Props = {
  onEdit: ({ data: any }) => void; // TODO: type
  onCancel: (event: MouseEvent<HTMLAnchorElement>) => void;
  data: any; // TODO: type
  footer: Footer;
};

class FooterEdit extends Component<Props, State> {
  static contextType = DataContext;

  constructor(props: Props) {
    super(props);
    this.state = {
      errors: {},
    };
  }

  onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { data, save } = this.context;
    let footer = this.props.footer || { text: "", href: "" };
    const form = event.currentTarget;
    const formData = new window.FormData(form);
    const copy = { ...data };

    const footerText = formData.get("footer-text") as string;
    const footerHref = formData.get("footer-href") as string;
    let validationErrors = this.validate(formData);

    if (hasValidationErrors(validationErrors)) return;

    let footerIndex: number = -1;

    if (footer.text) {
      footerIndex = data.footer.indexOf(footer);
    }

    footer = {
      text: footerText.trim(),
      href: footerHref.trim(),
    };

    if (footerIndex >= 0) {
      copy.footer[footerIndex] = footer;
    } else {
      copy.footer = copy.footer || [];
      copy.footer.push(footer);
    }

    save(copy)
      .then((data) => {
        this.props.onEdit({ data });
      })
      .catch((err: Error) => {
        logger.error("FooterEdit", err);
      });
  };

  validate = (formData: FormData) => {
    const footerText = formData.get("footer-text") as string;
    const footerHref = formData.get("footer-href") as string;
    const errors: ValidationErrors = {};

    validateNotEmpty("footer-text", "Footer text", "text", footerText, errors);

    validateNotEmpty("footer-href", "Footer-href", "href", footerHref, errors);

    this.setState({ errors: errors });

    return errors;
  };

  onClickDelete = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (!window.confirm("Confirm delete")) {
      return;
    }

    const { footer } = this.props;
    const { data, save } = this.context;
    const copy = { ...data };
    const footerIndex = data.outputs.indexOf(footer);
    copy.footer.splice(footerIndex, 1);

    save(copy)
      .then((data) => {
        this.props.onEdit({ data });
      })
      .catch((err: Error) => {
        logger.error("FooterEdit", err);
      });
  };

  handleOnClickBackLink = (e) => {
    e.preventDefault();
    this.props.onCancel(e);
  };

  render() {
    const { errors } = this.state;
    let footerEdit: ReactNode;
    const { data, footer } = this.props;

    return (
      <>
        {hasValidationErrors(errors) && (
          <ErrorSummary errorList={Object.values(errors)} />
        )}
        <form onSubmit={this.onSubmit} autoComplete="off">
          {this.props.onCancel && (
            <a
              className="govuk-back-link"
              href="#"
              onClick={this.handleOnClickBackLink}
            >
              Back
            </a>
          )}
          <Input
            id="footer-text"
            name="footer-text"
            label={{
              className: "govuk-label--s",
              children: ["Text"],
            }}
            defaultValue={footer?.text ?? ""}
            errorMessage={
              errors?.title ? { children: errors?.title.children } : undefined
            }
          />
          <Input
            id="footer-href"
            name="footer-href"
            label={{
              className: "govuk-label--s",
              children: ["Href"],
            }}
            pattern="^\S+"
            defaultValue={footer?.href ?? ""}
            errorMessage={
              errors?.name ? { children: errors?.name.children } : undefined
            }
          />

          {footerEdit}
          <div className="govuk-form-group">
            <button className="govuk-button" type="submit">
              Save
            </button>
          </div>
          {footer && (
            <div className="govuk-form-group">
              <a onClick={this.onClickDelete} href="#">
                Delete
              </a>
            </div>
          )}
        </form>
      </>
    );
  }
}

export default FooterEdit;
