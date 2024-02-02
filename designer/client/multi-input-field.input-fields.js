export const isFieldAllowed = (item) => {
  switch (item.componentType) {
    case "TextField":
    case "MultilineTextField":
    case "DatePartsField":
    case "NumberField":
    case "RadiosField":
    case "YesNoField":
    case "MonthYearField":
    case "WebsiteField":
    case "UkAddressField":
      return true;
    default:
      return false;
  }
};
