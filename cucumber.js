const common = `

--require-module ts-node/register
--require test.setup.ts
--require stepDefinition/*.ts
--format json:../reports/report_testFramework.json
--format summary
--format progress-bar
--format @cucumber/pretty-formatter
--format html:reports/report.html
--publish-quiet
--exit
`;

module.exports = {

default: `${common}`

};