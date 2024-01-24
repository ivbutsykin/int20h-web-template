import { useClientStore } from "../../../store/clientStore";
import DashboardTemplate from "../../templates/DashboardTemplate/DashboardTemplate";

function DashboardPage() {
  const count = useClientStore((state) => state.count);
  const decreaseCount = useClientStore((state) => state.decrease);
  const increaseCount = useClientStore((state) => state.increase);

  return (
    <DashboardTemplate
      count={count}
      onDecreaseCount={decreaseCount}
      onIncreaseCount={increaseCount}
    />
  );
}

export default DashboardPage;
