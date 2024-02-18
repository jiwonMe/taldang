export default function getPartyColor(party: string) {
  switch (party) {
    case "더불어민주당":
      return "#102588";
    case "국민의힘":
      return "#F70019";
    case "녹색정의당":
      return "#007E2B";
    case "개혁신당":
      return "#FB6E00";
    default:
      return "#000000";
  }
}