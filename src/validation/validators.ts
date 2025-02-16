export const requiredValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;
  return value ? null : errorText;
};

export const nameLastNameValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const pattern = /^[a-zA-Z ]{2,30}$/;
  return pattern.test(value) ? null : errorText;
};

export const passwordValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return pattern.test(value) ? null : errorText;
}

export const noSpecialSymbolsAloneValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const pattern = /[a-zа-яёіїє]/i;
  return pattern.test(value) ? null : errorText;
};

export const websiteValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm; // eslint-disable-line no-control-regex, no-useless-escape, max-len
  return pattern.test(value) ? null : errorText;
};

export const emailValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // eslint-disable-line no-control-regex, no-useless-escape, max-len
  return pattern.test(value) ? null : errorText;
};

export const phoneValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return pattern.test(value) ? null : errorText;
};

export const emailAndPhoneValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const emailPattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // eslint-disable-line no-control-regex, no-useless-escape, max-len

  if(phonePattern.test(value)) {
    return null
  } else if (emailPattern.test(value)) {
    return null
  } else {
    return errorText;
  }
}

export const birthValidator = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const pattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; // eslint-disable-line no-control-regex, no-useless-escape, max-len
  return pattern.test(value) ? null : errorText;
};

export const daysHours = (errorText: string) => (value: string) => {
  value = typeof value === "string" ? value.trim() : value;

  const pattern = /^(Sun|Mon|Tue|Wed|Thu|Fr|St)(-(Sun|Mon|Tue|Wed|Thu|Fr|St)) ([01]\d:[0-5][0-9]|2[0-3]:[0-5][0-9])(-([01]\d:[0-5][0-9]|2[0-3]:[0-5][0-9])$)/g;  
  return pattern.test(value) ? null : errorText;

};

