import React, { MouseEvent } from "react";
import { DataContext } from "../context";
import randomId from "../randomId";
import FooterEdit from "./footer-edit";

type Props = {};

type State = {
  showAddFooter: boolean;
  footerInput?: any; //TODO: type
  id?: string;
};

class FootersEdit extends React.Component<Props, State> {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      showAddFooter: false,
      footerInput: undefined,
      id: "",
    };
  }

  onClickFooter = (event: MouseEvent, footerInput) => {
    event.preventDefault();

    this.setState({
      footerInput,
    });
  };

  onClickAddFooter = async (event: MouseEvent) => {
    event.preventDefault();

    const id = randomId();
    this.setState({
      showAddFooter: true,
      id,
    });
  };

  render() {
    const data = this.context.data;
    const { footer } = data;
    const { footerInput, id, showAddFooter } = this.state;

    return (
      <div className="govuk-body">
        {!footerInput ? (
          <div>
            {showAddFooter ? (
              <FooterEdit
                data={data}
                footer={footerInput}
                onEdit={() => this.setState({ showAddFooter: false })}
                onCancel={() => this.setState({ showAddFooter: false })}
              />
            ) : (
              <ul className="govuk-list">
                {(footer || []).map((footerInput) => (
                  <li key={footerInput.text}>
                    <a
                      href="#"
                      onClick={(e) => this.onClickFooter(e, footerInput)}
                    >
                      {footerInput.text || footerInput.href}
                    </a>
                  </li>
                ))}
                <li>
                  <hr />
                  <a href="#" onClick={this.onClickAddFooter}>
                    Add footer
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <FooterEdit
            footer={footerInput}
            data={data}
            onEdit={() => this.setState({ footerInput: null })}
            onCancel={() => this.setState({ footerInput: null })}
          />
        )}
      </div>
    );
  }
}

export default FootersEdit;
