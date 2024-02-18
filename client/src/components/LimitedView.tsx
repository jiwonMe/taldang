import styled from "styled-components";
import View from "./View";

// View 컴포넌트를 확장하여 최대 너비를 설정합니다.
const LimitedViewLayout = styled(View)`
  position: relative;

  margin: 0 auto; // 중앙 정렬

  overflow: hidden;

  align-items: center;

  background-color: #E9E9E9;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

interface LimitedViewProps {
  children: React.ReactNode;
}

const LimitedView: React.FC<LimitedViewProps> = ({ children }) => {
  return (
  <LimitedViewLayout>
    <TopGradient />
    <div className="foreground" />
    {children}
  </LimitedViewLayout>
  );
};

export default LimitedView;

const TopGradient = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  height: 400px;

  z-index: 1;

  background: linear-gradient(180deg, #A2A2A299 0%, #A2A2A200 75%);
`;