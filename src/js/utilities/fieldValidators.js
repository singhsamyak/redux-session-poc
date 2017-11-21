import { REGX_EMAIL, REGX_PASSWORD } from './constants';

export const formIsFilled = username => password => (
  _emailIsValid(username) && _passwordIsValid(password)
);

const _emailIsValid = email => REGX_EMAIL.test(email);
const _passwordIsValid = password => REGX_PASSWORD.test(password);
