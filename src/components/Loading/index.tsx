import { LoadingContainer } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingContainer>
  );
}
