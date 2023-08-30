const jsf = require("json-schema-faker");
const { faker } = require("@faker-js/faker");
jsf.extend("faker", () => faker);

const schema = {
  type: "object",
  required: ["users"],
  properties: {
    users: {
      type: "array",
      minItems: 20,
      items: { $ref: "#/definitions/users" },
    },
  },
  definitions: {
    users: {
      type: "object",
      required: [
        "id",
        "first_name",
        "last_name",
        "age",
        "email",
        "username",
        "avatar",
      ],
      properties: {
        id: {
          $ref: "#/definitions/positiveInt",
        },
        first_name: {
          type: "string",
          faker: "person.firstName",
        },
        last_name: {
          type: "string",
          faker: "person.lastName",
        },
        age: {
          type: "integer",
          maximum: 70,
          minimum: 18,
        },
        email: {
          type: "string",
          faker: "internet.email",
        },
        username: {
          type: "string",
          faker: "internet.userName",
        },
        avatar: {
          type: "string",
          faker: "internet.avatar",
        },
      },
    },
    positiveInt: {
      type: "integer",
      minimum: 0,
      exclusiveMinimum: true,
    },
  },
};

jsf.resolve(schema).then((result) => {});
