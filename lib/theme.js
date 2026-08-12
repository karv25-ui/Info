export const COLORS = {
  bg: "#F6EFE4",
  bgAlt: "#EFE4D2",
  card: "#FFFCF6",
  ink: "#332A21",
  inkSoft: "#7A6E5D",
  line: "#E4D6BE",
  clay: "#C4623D",
  clayDark: "#A8502F",
  gold: "#C99A3E",
  sage: "#7C8B6A",
  slate: "#5E7A93",
};

export const ACCENTS = ["#C4623D", "#7C8B6A", "#5E7A93", "#C99A3E", "#9B6B9E"];

export const TYPE_META = {
  tutorial: { label: "Tutorial", color: COLORS.clay },
  bts: { label: "Behind the Scenes", color: COLORS.sage },
  howto: { label: "How-To", color: COLORS.slate },
};

export function initialsFor(name, email) {
  if (name && name.trim()) {
    const parts = name.trim().split(/\s+/);
    return parts.length > 1
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();
  }
  if (email) return email[0].toUpperCase();
  return "?";
}