import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

/** Валидатор приложения. */
const ajv = new Ajv({
    allErrors: true,
    code: { optimize: false }
});

/** Поддержка кастомных ошибок. */
ajvErrors(ajv);

export default ajv;