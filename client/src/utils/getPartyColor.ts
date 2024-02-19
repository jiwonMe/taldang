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
    case "새로운미래":
      return "#15254f";
    case "진보당":
      return "#D6001C";
    case "새진보연합":
      return "#00D2C3";
    default:
      return "#000000";
  }
}