const SanitizePath = (path, relativePath = "./") => {
  let sanitizePath = path.trim();

  sanitizePath =
    sanitizePath.startsWith("/") || sanitizePath.startsWith("./")
      ? sanitizePath
      : `${relativePath}${sanitizePath}`;
  sanitizePath =
    sanitizePath[sanitizePath.length - 1] === "/"
      ? sanitizePath
      : `${sanitizePath}/`;

  return sanitizePath;
};

export default SanitizePath;
