const checkIfNameIsValid = (componentName: string) => {
  const regex = /^[A-Z][a-zA-Z0-9_]*[^_]$/;
  return regex.test(componentName);
};

export default checkIfNameIsValid;
