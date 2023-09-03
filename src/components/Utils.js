function capitalize(string) {
  return string?.length > 0
    ? string.charAt(0).toUpperCase() + string.slice(1)
    : "";
}

export { capitalize };
