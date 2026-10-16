
export function idToName(id) {
  return id.replaceAll("-", " ").replace(/\b\w/g, st => st.toUpperCase())
}