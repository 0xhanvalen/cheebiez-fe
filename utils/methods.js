export const formatAddress = (address, ensName, chars = 4) => {
  if (ensName) {
    return ensName;
  }
  if (address) {
    return `${address.substring(0, chars)}...${address.substring(
      address.length - chars
    )}`;
  }
  else return "";
};
