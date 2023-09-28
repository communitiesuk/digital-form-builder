import * as Code from "@hapi/code";
import * as Lab from "@hapi/lab";

import { RepeatingSummaryPageController } from "server/plugins/engine/pageControllers";
import { FormModel } from "src/server/plugins/engine/models/FormModel";

const lab = Lab.script();
exports.lab = lab;
const { expect } = Code;
const { suite, test } = lab;

suite("RepeatingSummaryPageController", () => {
    test("buildTextFieldRows", () => {
        const def = {
            title: "This is a test",
            path: "/first-page",
            name: "",
            components: [
                {
                    name: "MultiInputField",
                    options: {
                        prefix: "£",
                        textFieldTitle: "Type of Revenue Cost",
                        numberFieldTitle: "Amount",
                    },
                    type: "MultiInputField",
                    title: "MultiInputField",
                    hint: "The MultiInputField needed",
                    schema: {},
                },
            ],
            next: [
                {
                    path: "/second-page",
                },
            ],
        };

        const controller = new RepeatingSummaryPageController(
            new FormModel(
                {
                    pages: [],
                    startPage: "/start",
                    sections: [],
                    lists: [],
                    conditions: [],
                },
                {}
            ),
            def,
            undefined
        );

        const answers = [
            {
                CaKTWN: "Fund",
                iLxCxn: 756,
                sUDJbo: "2023/24",
                CmOaAX: "Guess"
            },
            {
                CaKTWN: "Donation",
                iLxCxn: 5000,
                sUDJbo: "2024/25",
                CmOaAX: "Previous year"
            }];

        const orderedNames = [
            "CaKTWN",
            "iLxCxn",
            "sUDJbo",
            "CmOaAX"];

        const expected = [
            {
                action:
                {
                    href: "?removeAtIndex=0",
                    text: "Remove",
                    visuallyHiddenText: "MultiInputField"
                },
                values: [
                    {
                        text: "Fund",
                        class: "govuk-table__cell"
                    },
                    {
                        text: "£756",
                        class: "govuk-table__cell"
                    },
                    {
                        text: "2023/24",
                        class: "govuk-table__cell"
                    },
                    {
                        text: "Guess",
                        class: "govuk-table__cell"
                    }]
            },
            {
                action:
                {
                    href: "?removeAtIndex=1",
                    text: "Remove",
                    visuallyHiddenText: "MultiInputField"
                },
                values: [
                    {
                        text: "Donation",
                        class: "govuk-table__cell"
                    },
                    {
                        text: "£5000",
                        class: "govuk-table__cell"
                    },
                    {
                        text: "2024/25",
                        class: "govuk-table__cell"
                    },
                    {
                        text: "Previous year",
                        class: "govuk-table__cell"
                    }]
            }];

        const result = controller.buildTextFieldRows(answers, undefined, orderedNames);

        expect(result).to.equal(expected);
    });
});
