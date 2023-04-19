import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { RenderWithContextAndDataContext } from "../../__tests__/helpers/renderers";
import { Data } from "@xgovformbuilder/model";

import FooterEdit from "../footer-edit";

describe("FooterEdit", () => {
  let mockData: Data;
  let mockSave: any;

  beforeEach(() => {
    mockSave = jest.fn().mockResolvedValue(mockData);
    mockData = {
      pages: [
        {
          title: "First page",
          path: "/first-page",
          components: [
            {
              name: "9WH4EX",
              options: {},
              type: "TextField",
              title: "Text",
            },
          ],
          controller: "./pages/summary.js",
        },
      ],
      outputs: [],
      conditions: [],
    };
  });

  describe("Footer", () => {
    test("Footer object is created correctly", async () => {
      const props: any = {
        onEdit: jest.fn(),
        onCancel: jest.fn(),
        data: mockData,
      };

      const { getByText, getByLabelText } = render(
        <RenderWithContextAndDataContext
          mockData={mockData}
          mockSave={mockSave}
        >
          <FooterEdit {...props} />
        </RenderWithContextAndDataContext>
      );

      // change title
      fireEvent.change(getByLabelText("Text"), {
        target: { value: "NewText" },
      });

      // change name
      fireEvent.change(getByLabelText("Href"), {
        target: { value: "NewHref" },
      });

      // save
      fireEvent.click(getByText("Save"));

      await waitFor(() => expect(mockSave).toHaveBeenCalledTimes(1));

      expect(mockSave.mock.calls[0][0].footer).toEqual([
        {
          text: "NewText",
          href: "NewHref",
        },
      ]);
    });
  });
});
