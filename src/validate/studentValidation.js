const { celebrate, Joi } = require('celebrate');

exports.studentValidation = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    subject: Joi.string().required(),
    marks: Joi.number().required(),
  }),
});
