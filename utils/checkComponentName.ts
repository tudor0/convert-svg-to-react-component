const checkIfNameIsValid = (componentName: string) => {
  // Starts with capital letter
  // Contains only letters, numbers and underscores, but no numbers and underscores at the start
  const regex = /^[A-Z][a-zA-Z0-9_]*[^_]$/;
  return regex.test(componentName);
};

export default checkIfNameIsValid;
