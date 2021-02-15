export const reducer = (
  state: InvoiceFormValues,
  action: InvoiceFormAction
): InvoiceFormValues => {
  switch (action.type) {
    case 'change_base_info':
      return {
        ...state,
        [action.key]: action.value
      };

    case 'change_personal_info':
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.key]: action.value
        }
      };

    default:
      return state;
  }
};
