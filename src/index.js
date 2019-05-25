import fields from './fields';
import form from './form';
import messages from './messages';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  extensions: {
    locality: {
      messages,
      fields: fields(configContext),
      form: form(configContext),
    },
  },
});
